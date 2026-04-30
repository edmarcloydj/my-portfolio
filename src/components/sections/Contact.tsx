"use client";

import { useState, useRef } from "react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (!formRef.current) {
      setSubmitError("Form is not available.");
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitError("EmailJS is not properly configured. Please check environment variables.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error("EmailJS sendForm error:", err);
      setSubmitError(
        `Failed to send message: ${err instanceof Error ? err.message : String(err)}`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#E0E0E0] dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimation>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[#171717] dark:text-white text-4xl font-mono">//</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171717] dark:text-white">
              Get in Touch
            </h2>
            <div className="flex-1 h-px bg-[#171717]/10 dark:bg-white/10" />
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ScrollAnimation delay={100}>
            <div>
              <h3 className="text-2xl font-semibold text-[#171717] dark:text-white mb-4">
                Let's work together
              </h3>
              <p className="text-[#171717]/60 dark:text-white/60 leading-relaxed mb-8">
                Have a project in mind? I'd love to hear about it. Send me a message.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-[#171717] dark:text-white font-medium mb-2">
                    Email
                  </h4>
                  <a
                    href="mailto:edmarcloydj@gmail.com"
                    className="text-[#171717]/60 dark:text-white/60 hover:text-[#171717] dark:hover:text-white transition-colors"
                  >
                    edmarcloydj@gmail.com
                  </a>
                </div>
                <div>
                  <h4 className="text-[#171717] dark:text-white font-medium mb-2">
                    Phone
                  </h4>
                  <a
                    href="tel:+639668279910"
                    className="text-[#171717]/60 dark:text-white/60 hover:text-[#171717] dark:hover:text-white transition-colors"
                  >
                    09668279910
                  </a>
                </div>
                <div>
                  <h4 className="text-[#171717] dark:text-white font-medium mb-2">
                    Location
                  </h4>
                  <p className="text-[#171717]/60 dark:text-white/60">
                    Iloilo City, Philippines
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {isSubmitted && (
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 text-sm">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitError && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-700 dark:text-red-400 text-sm">
                  {submitError}
                </div>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#171717]/80 dark:text-white/80 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-900 border ${
                    errors.name
                      ? "border-red-500"
                      : "border-[#171717]/10 dark:border-white/10"
                  } text-[#171717] dark:text-white placeholder-[#171717]/30 dark:placeholder-white/30 focus:outline-none focus:border-[#171717] dark:focus:border-white transition-colors`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#171717]/80 dark:text-white/80 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-900 border ${
                    errors.email
                      ? "border-red-500"
                      : "border-[#171717]/10 dark:border-white/10"
                  } text-[#171717] dark:text-white placeholder-[#171717]/30 dark:placeholder-white/30 focus:outline-none focus:border-[#171717] dark:focus:border-white transition-colors`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#171717]/80 dark:text-white/80 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-900 border ${
                    errors.message
                      ? "border-red-500"
                      : "border-[#171717]/10 dark:border-white/10"
                  } text-[#171717] dark:text-white placeholder-[#171717]/30 dark:placeholder-white/30 focus:outline-none focus:border-[#171717] dark:focus:border-white transition-colors resize-none`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 text-sm font-medium text-white bg-[#171717] dark:bg-white dark:text-neutral-900 rounded-full hover:bg-[#171717]/80 dark:hover:bg-white/80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}