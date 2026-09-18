"use client";

import { FormEvent, useState } from "react";
import Section from "@/components/Section";
import { navigation } from "@/data/resume";

const section = navigation.find((item) => item.id === "contact")!;

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(
          data.error ?? "Something went wrong. Please try again later.",
        );
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again later.");
    }
  }

  return (
    <Section id={section.id} title={section.label}>
      <form onSubmit={handleSubmit} className="max-w-xl space-y-6" noValidate>
        {/* Honeypot — hidden from users, bots often fill it */}
        <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm text-neutral-400">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            className="w-full border-b border-neutral-800 bg-transparent px-0 py-2 text-neutral-100 outline-none transition-colors duration-200 focus:border-neutral-400"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm text-neutral-400">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            className="w-full border-b border-neutral-800 bg-transparent px-0 py-2 text-neutral-100 outline-none transition-colors duration-200 focus:border-neutral-400"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm text-neutral-400">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            maxLength={5000}
            className="w-full resize-y border-b border-neutral-800 bg-transparent px-0 py-2 text-neutral-100 outline-none transition-colors duration-200 focus:border-neutral-400"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="link-underline text-sm text-neutral-100 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:no-underline"
        >
          {status === "loading" ? "Sending…" : "Send message"}
        </button>

        {status === "success" && (
          <p
            className="animate-enter text-sm text-neutral-400"
            role="status"
          >
            Message sent. I will get back to you soon.
          </p>
        )}

        {status === "error" && (
          <p className="animate-enter text-sm text-neutral-400" role="alert">
            {errorMessage}
          </p>
        )}
      </form>
    </Section>
  );
}
