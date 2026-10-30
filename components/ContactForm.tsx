"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

const MAX_LENGTH = 500;

const inputStyles =
  "peer w-full rounded-xl border border-white/10 bg-white/[0.04] pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-300 hover:border-white/20 focus:border-violet-400/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(139,92,246,0.12)]";

const labelStyles =
  "mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400";

const iconWrapStyles =
  "pointer-events-none absolute left-0 flex items-center pl-4 text-slate-500 transition-colors duration-300 peer-focus:text-violet-400";

export default function ContactForm() {
  const [f, setF] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Portfolio message from ${f.name}`);
    const body = encodeURIComponent(
      `${f.message}\n\nFrom: ${f.name} (${f.email})`
    );

    // Mail client khular age ektu instant feedback dekhanor jonno
    setTimeout(() => {
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
      setIsSent(true);
      setF({ name: "", email: "", message: "" });

      setTimeout(() => setIsSent(false), 5000);
    }, 400);
  };

  return (
    <form onSubmit={send} className="relative space-y-5">
      {/* Success Notification */}
      {isSent && (
        <div className="flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 backdrop-blur-md">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-emerald-300">
              Almost there!
            </p>
            <p className="text-xs text-emerald-400/80">
              Tomar mail client khulche. Send e click korle message chole jabe.
            </p>
          </div>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className={labelStyles}>
            Name
          </label>
          <div className="relative flex items-center">
            <input
              id="contact-name"
              className={inputStyles}
              required
              type="text"
              placeholder="John Doe"
              value={f.name}
              onChange={(e) => setF({ ...f, name: e.target.value })}
            />
            <div className={iconWrapStyles}>
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className={labelStyles}>
            Email
          </label>
          <div className="relative flex items-center">
            <input
              id="contact-email"
              className={inputStyles}
              required
              type="email"
              placeholder="john@example.com"
              value={f.email}
              onChange={(e) => setF({ ...f, email: e.target.value })}
            />
            <div className={iconWrapStyles}>
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label
            htmlFor="contact-message"
            className="text-xs font-medium uppercase tracking-wider text-slate-400"
          >
            Message
          </label>
          <span
            className={`text-xs transition-colors ${f.message.length >= MAX_LENGTH
              ? "text-rose-400"
              : "text-slate-500"
              }`}
          >
            {f.message.length}/{MAX_LENGTH}
          </span>
        </div>
        <div className="relative">
          <textarea
            id="contact-message"
            className={`${inputStyles} h-40 resize-none`}
            required
            maxLength={MAX_LENGTH}
            placeholder="Tell me about your project..."
            value={f.message}
            onChange={(e) => setF({ ...f, message: e.target.value })}
          />
          <div className={`${iconWrapStyles} top-4`}>
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="relative">
        <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-400 opacity-40 blur-md transition-opacity duration-300 hover:opacity-70" />
        <button
          type="submit"
          disabled={isSubmitting}
          className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:opacity-95 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <svg
                className="h-4 w-4 animate-spin text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>Preparing Mail...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </>
          )}
        </button>
      </div>


    </form>
  );
}