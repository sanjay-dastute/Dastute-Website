import { useState } from "react";

export function useFormSubmit() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const formData = new FormData(e.currentTarget);
      formData.append("_captcha", "false");
      
      const data = Object.fromEntries(formData.entries());

      const response = await fetch("https://formsubmit.co/ajax/info@dastute.co.uk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        const errorData = await response.json().catch(() => null);
        console.error("FormSubmit Error:", errorData);
        setStatus('error');
      }
    } catch (error) {
      console.error("FormSubmit Fetch Error:", error);
      setStatus('error');
    }
  };

  return { status, handleSubmit, setStatus };
}
