import { useEffect, useRef } from "react";

// Dastute offices: London, Coimbatore, Singapore
const HUBS: [number, number][] = [
  [51.5, -0.12],
  [11.0, 76.96],
  [1.35, 103.82],
];

// Client and partner regions that data travels to and from
const NODES: [number, number][] = [
  [40.7, -74.0], // New York
  [25.2, 55.27], // Dubai
  [50.1, 8.68], // Frankfurt
  [-33.87, 151.2], // Sydney
  [35.68, 139.69], // Tokyo
  [19.07, 72.88], // Mumbai
  [-23.55, -46.63], // Sao Paulo
  [37.77, -122.42], // San Francisco
  [-26.2, 28.05], // Johannesburg
];

// Origins of simulated attack traffic that is blocked at the hubs
const THREATS: [number, number][] = [
  [55.75, 37.62],
  [39.9, 116.4],
  [6.52, 3.38],
  [-12.05, -77.04],
  [61.2, -149.9],
  [14.6, 121.0],
];

type LandMask = { isLand: (lat: number, lon: number) => boolean; map: HTMLCanvasElement | null };

function loadLandMask(src: string): Promise<LandMask> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0);
      const { data, width, height } = ctx.getImageData(0, 0, img.width, img.height);
      // Mask is white for water, black for land; repaint it as a coloured map texture
      const map = document.createElement("canvas");
      map.width = width;
      map.height = height;
      const mctx = map.getContext("2d")!;
      const out = mctx.createImageData(width, height);
      for (let i = 0; i < data.length; i += 4) {
        const land = data[i] < 128;
        out.data[i] = land ? 29 : 5;
        out.data[i + 1] = land ? 78 : 12;
        out.data[i + 2] = land ? 216 : 32;
        out.data[i + 3] = 255;
      }
      mctx.putImageData(out, 0, 0);
      resolve({
        map,
        isLand: (lat, lon) => {
          const x = Math.min(width - 1, Math.floor(((lon + 180) / 360) * width));
          const y = Math.min(height - 1, Math.floor(((90 - lat) / 180) * height));
          return data[(y * width + x) * 4] < 128;
        },
      });
    };
    img.onerror = () => resolve({ isLand: () => true, map: null });
    img.src = src;
  });
}

/**
 * WebGL world globe for the homepage hero. Three.js is imported lazily after
 * the page is idle so it never blocks first paint or SSR; the CSS glow behind
 * the canvas is the fallback when WebGL is unavailable.
 */
export function HeroGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    let disposed = false;
    let cleanup = () => {};

    const start = async () => {
      const [THREE, { isLand, map }] = await Promise.all([
        import("three"),
        loadLandMask("/images/world-mask.png"),
      ]);
      if (disposed) return;
      type Mat = import("three").MeshBasicMaterial;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const width = mount.clientWidth;
      const height = mount.clientHeight;

      let renderer: import("three").WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      } catch {
        return;
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      renderer.domElement.setAttribute("aria-hidden", "true");
      mount.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.z = 3.3;

      const globe = new THREE.Group();
      globe.rotation.x = 0.3;
      globe.rotation.y = -1.6;
      scene.add(globe);

      const R = 1;
      const toVec = (lat: number, lon: number, r = R) => {
        const phi = ((90 - lat) * Math.PI) / 180;
        const theta = ((lon + 180) * Math.PI) / 180;
        return new THREE.Vector3(
          -r * Math.sin(phi) * Math.cos(theta),
          r * Math.cos(phi),
          r * Math.sin(phi) * Math.sin(theta),
        );
      };

      // Dense Fibonacci sphere, keeping only points that fall on land
      const samples = 26000;
      const land: number[] = [];
      for (let i = 0; i < samples; i++) {
        const y = 1 - (i / (samples - 1)) * 2;
        const lat = (Math.asin(y) * 180) / Math.PI;
        const lon = ((((i * 137.50776405) % 360) + 360) % 360) - 180;
        if (!isLand(lat, lon)) continue;
        const v = toVec(lat, lon, R * 1.002);
        land.push(v.x, v.y, v.z);
      }
      const dotGeo = new THREE.BufferGeometry();
      dotGeo.setAttribute("position", new THREE.Float32BufferAttribute(land, 3));
      globe.add(
        new THREE.Points(
          dotGeo,
          new THREE.PointsMaterial({ color: 0x93c5fd, size: 0.012, transparent: true, opacity: 0.85 }),
        ),
      );

      globe.add(
        new THREE.Mesh(
          new THREE.SphereGeometry(R, 64, 64),
          map
            ? new THREE.MeshBasicMaterial({
                map: Object.assign(new THREE.CanvasTexture(map), { colorSpace: THREE.SRGBColorSpace }),
              })
            : new THREE.MeshBasicMaterial({ color: 0x0a1630, transparent: true, opacity: 0.92 }),
        ),
      );
      scene.add(
        new THREE.Mesh(
          new THREE.SphereGeometry(R * 1.16, 48, 48),
          new THREE.MeshBasicMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.07, side: THREE.BackSide }),
        ),
      );

      const dotGeom = new THREE.SphereGeometry(1, 12, 12);
      const marker = (lat: number, lon: number, color: number, size: number) => {
        const m = new THREE.Mesh(dotGeom, new THREE.MeshBasicMaterial({ color }));
        m.scale.setScalar(size);
        m.position.copy(toVec(lat, lon, R * 1.01));
        globe.add(m);
      };

      // Office hubs with pulsing rings
      const pulses: import("three").Mesh[] = [];
      for (const [lat, lon] of HUBS) {
        marker(lat, lon, 0x34d399, 0.028);
        const ring = new THREE.Mesh(
          new THREE.RingGeometry(0.035, 0.05, 32),
          new THREE.MeshBasicMaterial({ color: 0x34d399, transparent: true, side: THREE.DoubleSide }),
        );
        ring.position.copy(toVec(lat, lon, R * 1.012));
        ring.lookAt(ring.position.clone().multiplyScalar(2));
        globe.add(ring);
        pulses.push(ring);
      }
      for (const [lat, lon] of NODES) marker(lat, lon, 0x93c5fd, 0.014);
      for (const [lat, lon] of THREATS) marker(lat, lon, 0xf87171, 0.014);

      const arc = (a: [number, number], b: [number, number], color: number, opacity: number) => {
        const s = toVec(a[0], a[1], R * 1.01);
        const e = toVec(b[0], b[1], R * 1.01);
        const lift = 1.15 + s.distanceTo(e) * 0.25;
        const mid = s.clone().add(e).multiplyScalar(0.5).normalize().multiplyScalar(R * lift);
        const curve = new THREE.QuadraticBezierCurve3(s, mid, e);
        globe.add(
          new THREE.Line(
            new THREE.BufferGeometry().setFromPoints(curve.getPoints(64)),
            new THREE.LineBasicMaterial({ color, transparent: true, opacity }),
          ),
        );
        return curve;
      };

      // Moving packets: green = office and client traffic, red = blocked threats
      type Packet = {
        curve: import("three").QuadraticBezierCurve3;
        mesh: import("three").Mesh;
        speed: number;
        t: number;
        hub: number;
      };
      const packets: Packet[] = [];
      const addPackets = (curve: Packet["curve"], color: number, count: number, hub = -1) => {
        for (let i = 0; i < count; i++) {
          const mesh = new THREE.Mesh(dotGeom, new THREE.MeshBasicMaterial({ color, transparent: true }));
          mesh.scale.setScalar(hub >= 0 ? 0.017 : 0.014);
          globe.add(mesh);
          packets.push({ curve, mesh, speed: 0.12 + Math.random() * 0.12, t: Math.random(), hub });
        }
      };

      const hubPairs: [number, number][] = [[0, 1], [1, 2], [0, 2]];
      for (const [a, b] of hubPairs) addPackets(arc(HUBS[a], HUBS[b], 0x34d399, 0.35), 0x34d399, 3);
      NODES.forEach((node, i) => addPackets(arc(HUBS[i % HUBS.length], node, 0x8b5cf6, 0.22), 0x34d399, 2));
      THREATS.forEach((src, i) =>
        addPackets(arc(src, HUBS[i % HUBS.length], 0xf87171, 0.18), 0xef4444, 2, i % HUBS.length),
      );

      // Red flash where a threat packet is stopped at a hub
      const flashes = HUBS.map(([lat, lon]) => {
        const mesh = new THREE.Mesh(
          new THREE.RingGeometry(0.02, 0.03, 32),
          new THREE.MeshBasicMaterial({ color: 0xef4444, transparent: true, opacity: 0, side: THREE.DoubleSide }),
        );
        mesh.position.copy(toVec(lat, lon, R * 1.013));
        mesh.lookAt(mesh.position.clone().multiplyScalar(2));
        globe.add(mesh);
        return { mesh, life: 0 };
      });

      const target = { x: 0, y: 0 };
      const onPointer = (e: PointerEvent) => {
        target.x = (e.clientX / window.innerWidth - 0.5) * 0.5;
        target.y = (e.clientY / window.innerHeight - 0.5) * 0.3;
      };
      window.addEventListener("pointermove", onPointer, { passive: true });

      const onResize = () => {
        const w = mount.clientWidth;
        const h = mount.clientHeight;
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      window.addEventListener("resize", onResize);

      let visible = true;
      const io = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
      });
      io.observe(mount);

      let raf = 0;
      const clock = new THREE.Clock();
      const tick = () => {
        raf = requestAnimationFrame(tick);
        if (!visible) return;
        const dt = Math.min(clock.getDelta(), 0.05);
        const t = clock.elapsedTime;
        if (!reduced) {
          globe.rotation.y += 0.0016;
          globe.rotation.x += (0.3 + target.y - globe.rotation.x) * 0.04;
          scene.rotation.y += (target.x - scene.rotation.y) * 0.04;

          for (const p of packets) {
            p.t += p.speed * dt;
            const end = p.hub >= 0 ? 0.94 : 1;
            if (p.t >= end) {
              if (p.hub >= 0) flashes[p.hub].life = 1;
              p.t = 0;
            }
            p.mesh.position.copy(p.curve.getPoint(p.t));
            (p.mesh.material as Mat).opacity = Math.min(1, p.t * 8, (end - p.t) * 8);
          }
          for (const f of flashes) {
            f.life = Math.max(0, f.life - dt * 1.6);
            f.mesh.scale.setScalar(1 + (1 - f.life) * 3);
            (f.mesh.material as Mat).opacity = f.life;
          }
          pulses.forEach((ring, i) => {
            const s = 1 + ((t * 0.8 + i * 0.33) % 1) * 1.6;
            ring.scale.setScalar(s);
            (ring.material as Mat).opacity = 1 - (s - 1) / 1.6;
          });
        }
        renderer.render(scene, camera);
        if (reduced) cancelAnimationFrame(raf);
      };
      tick();
      mount.dataset.ready = "true";

      cleanup = () => {
        cancelAnimationFrame(raf);
        io.disconnect();
        window.removeEventListener("pointermove", onPointer);
        window.removeEventListener("resize", onResize);
        scene.traverse((obj) => {
          const mesh = obj as import("three").Mesh;
          mesh.geometry?.dispose();
          (mesh.material as import("three").Material | undefined)?.dispose();
        });
        renderer.dispose();
        renderer.domElement.remove();
      };
    };

    const hasIdle = typeof window.requestIdleCallback === "function";
    const idle = hasIdle
      ? window.requestIdleCallback(() => void start(), { timeout: 1500 })
      : setTimeout(() => void start(), 300);

    return () => {
      disposed = true;
      if (hasIdle) window.cancelIdleCallback(idle as number);
      else clearTimeout(idle);
      cleanup();
    };
  }, []);

  return (
    <div className="hero-globe relative aspect-square w-full" aria-hidden="true">
      <div className="hero-globe-fallback absolute inset-[12%] rounded-full" />
      <div ref={mountRef} className="absolute inset-0 [&>canvas]:h-full [&>canvas]:w-full" />
    </div>
  );
}
