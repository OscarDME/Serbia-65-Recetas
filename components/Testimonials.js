"use client";

import { copy } from "@/lib/copy";
import { ChevronDown, Check, User } from "lucide-react";

export default function Testimonials() {
  const { testimonials } = copy;

  const handleScroll = (e) => {
    e.preventDefault();
    document.getElementById("final-cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 px-4 md:px-6 bg-[#f0ebe5]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--color-ink)]">
          {testimonials.headline}
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {testimonials.messages.map((msg, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-[0_8px_30px_-8px_rgba(0,0,0,0.2)] ring-1 ring-black/8"
            >
              {/* Chat body */}
              <div
                className="px-3 pt-3 pb-4"
                style={{
                  backgroundImage: `url(${testimonials.wallpaper})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Bubble */}
                <div
                  className="relative bg-white shadow-sm"
                  style={{ borderRadius: "0 12px 12px 12px", maxWidth: "90%" }}
                >
                  {/* Tail */}
                  <span
                    className="absolute top-0 -left-[7px] w-0 h-0 block"
                    style={{
                      borderTop: "8px solid white",
                      borderLeft: "8px solid transparent",
                    }}
                  />
                  <p className="px-3 pt-3 pb-1 text-[13.5px] md:text-[14px] text-[#111B21] leading-relaxed">
                    {msg.text}
                  </p>
                  <div className="flex justify-end items-center gap-1 px-2.5 pb-2">
                    <span className="text-[11px] text-[#667781] select-none">{msg.time}</span>
                    <Check className="w-3 h-3 text-[#667781]" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Reactions */}
                {msg.reactions && (
                  <div className="mt-1 ml-1 inline-flex items-center gap-0.5 bg-white/90 backdrop-blur-sm rounded-full px-2 py-0.5 shadow-sm text-sm select-none">
                    {msg.reactions.join(" ")}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#final-cta-section"
            onClick={handleScroll}
            className="inline-flex items-center justify-center gap-2 bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white font-extrabold text-base md:text-lg px-8 py-4 rounded-2xl shadow-[0_10px_30px_-10px_rgba(22,163,74,0.6)] border-b-4 border-[var(--color-brand-dark)] transition-all hover:translate-y-0.5"
          >
            {testimonials.cta}
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
