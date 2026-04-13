"use client";

import { PlannerPoster } from "./planner-poster";

type InvitationCoverProps = {
  onOpen: () => void;
  isOpening: boolean;
};

export function InvitationCover({
  onOpen,
  isOpening,
}: InvitationCoverProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      disabled={isOpening}
      className={`w-full text-left transition duration-300 focus:outline-none focus:ring-4 focus:ring-[#d7be8d]/70 ${
        isOpening
          ? "animate-cover-open pointer-events-none"
          : "animate-invitation-card hover:scale-[1.01]"
      }`}
    >
      <PlannerPoster
        imageSrc="/WhatsApp1.jpeg"
        imageAlt="Classic portrait of the couple"
        preloadImage
        footer={
          <div className="rounded-full border border-[#ccb48a] bg-[#f8eedc]/95 px-6 py-3 text-center text-xs uppercase tracking-[0.35em] text-[#8b6d3f] shadow-[0_12px_35px_rgba(116,87,48,0.12)]">
            {isOpening ? "Opening Invitation" : "Open Invitation"}
          </div>
        }
      >
        <div className="mx-auto flex h-full max-w-md flex-col items-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#d8bf92] bg-white/76 shadow-[0_10px_25px_rgba(136,104,58,0.12)]">
            <span className="font-serif text-5xl italic text-[#91662f]">
              KV
            </span>
          </div>

          <p className="mt-8 text-[0.65rem] uppercase tracking-[0.5em] text-[#87643a] sm:text-xs">
            Wedding Invitation
          </p>
          <h1 className="mt-5 font-serif text-[2.4rem] leading-[0.95] text-[#7a5330] sm:text-6xl">
            Kundhan
            <span className="mx-3 text-[#b2874d]">&amp;</span>
            Varshini
          </h1>
          <p className="mt-5 rounded-full border border-[#d8c3a0]/80 bg-white/45 px-5 py-2 text-sm uppercase tracking-[0.32em] text-[#6f5334] sm:text-base">
            Sunday, June 28, 2026
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.28em] text-[#75593a] sm:text-sm">
            Aubrey, Texas
          </p>

          <div className="mx-auto mt-7 h-px w-16 bg-[#c9af7f]/80" />

          <p className="mt-6 max-w-xs rounded-[24px] border border-white/45 bg-white/36 px-5 py-4 text-sm leading-6 text-[#654c2f] shadow-[0_18px_40px_rgba(120,91,50,0.08)] sm:text-base">
            A classic celebration of love, blessings, and togetherness with the
            Vallamkonda and Bodu families.
          </p>

          <div className="mt-auto rounded-[24px] border border-white/55 bg-white/50 px-5 py-4 text-sm leading-6 text-[#5f472b] shadow-[0_18px_40px_rgba(120,91,50,0.08)]">
            {isOpening
              ? "Turning the page..."
              : "Open the first page to begin the invitation."}
          </div>
        </div>
      </PlannerPoster>
    </button>
  );
}
