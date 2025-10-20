"use client";

import { useState } from "react";
import { Button } from "./ui/Button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          company: "",
          email: "",
          projectType: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 bg-hx-surface border border-hx-accent/50 rounded-xl text-center">
        <div className="mb-4">
          <div className="w-16 h-16 bg-hx-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-hx-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-heading font-bold text-hx-text mb-2">
            Message Sent!
          </h3>
          <p className="text-hx-muted">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
        </div>
        <Button onClick={() => setStatus("idle")} variant="accent">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-hx-text mb-2">
          Name <span className="text-hx-accent">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-hx-surface border ${
            errors.name ? "border-red-500" : "border-hx-border"
          } rounded-lg text-hx-text placeholder-hx-muted focus:outline-none focus:ring-2 focus:ring-hx-accent focus:border-transparent transition-colors`}
          placeholder="John Doe"
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-hx-text mb-2">
          Company <span className="text-hx-accent">*</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-hx-surface border ${
            errors.company ? "border-red-500" : "border-hx-border"
          } rounded-lg text-hx-text placeholder-hx-muted focus:outline-none focus:ring-2 focus:ring-hx-accent focus:border-transparent transition-colors`}
          placeholder="Acme Inc."
        />
        {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-hx-text mb-2">
          Email <span className="text-hx-accent">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-hx-surface border ${
            errors.email ? "border-red-500" : "border-hx-border"
          } rounded-lg text-hx-text placeholder-hx-muted focus:outline-none focus:ring-2 focus:ring-hx-accent focus:border-transparent transition-colors`}
          placeholder="john@acme.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="projectType" className="block text-sm font-medium text-hx-text mb-2">
          Type of Project
        </label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-hx-surface border border-hx-border rounded-lg text-hx-text focus:outline-none focus:ring-2 focus:ring-hx-accent focus:border-transparent transition-colors"
        >
          <option value="">Select a project type</option>
          <option value="DSP">DSP Development</option>
          <option value="SSP">SSP Development</option>
          <option value="DMP">DMP Development</option>
          <option value="MetaDSP">MetaDSP System</option>
          <option value="White-Label">White-Label Platform</option>
          <option value="Consulting">Consulting & Augmentation</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-hx-text mb-2">
          Message <span className="text-hx-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className={`w-full px-4 py-3 bg-hx-surface border ${
            errors.message ? "border-red-500" : "border-hx-border"
          } rounded-lg text-hx-text placeholder-hx-muted focus:outline-none focus:ring-2 focus:ring-hx-accent focus:border-transparent transition-colors resize-none`}
          placeholder="Tell us about your project..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>

      {status === "error" && (
        <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg">
          <p className="text-sm text-red-500">
            Something went wrong. Please try again or email us directly at hello@helix.co
          </p>
        </div>
      )}

      <Button
        type="submit"
        variant="accent"
        size="lg"
        disabled={status === "submitting"}
        className="w-full"
      >
        {status === "submitting" ? "Sending..." : "Start Building"}
      </Button>
    </form>
  );
}
