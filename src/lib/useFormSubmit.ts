import { useState } from "react";

const FALLBACK_ERROR =
  "Something went wrong sending your message. Please try again or email us directly at info@dastute.co.uk.";

export function useFormSubmit() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('submitting');
    setErrorMessage(null);

    try {
      const formData = new FormData(form);
      formData.append("_captcha", "false");

      const response = await fetch("https://formsubmit.co/ajax/info@dastute.co.uk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      // FormSubmit returns HTTP 200 with { success: "false" } for some failures
      const result = await response.json().catch(() => null);
      if (!response.ok || String(result?.success) === "false") {
        throw new Error(result?.message || `FormSubmit HTTP ${response.status}`);
      }

      setStatus('success');
      form.reset();
      window.dataLayer?.push({ event: "form_submit_success", form_id: form.id || form.name || window.location.pathname });
    } catch (error) {
      console.error("Form submission failed:", error);
      setErrorMessage(FALLBACK_ERROR);
      setStatus('error');
    }
  };

  return { status, handleSubmit, setStatus, errorMessage };
}
