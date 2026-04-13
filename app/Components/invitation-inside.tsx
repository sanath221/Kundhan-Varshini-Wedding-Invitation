"use client";

import { FaLocationDot } from "react-icons/fa6";

import { PlannerPoster } from "./planner-poster";
import { WeddingCountdown } from "./wedding-countdown";

type InvitationInsideProps = {
  targetDate: string;
  onRSVP: () => void;
};

export function InvitationInside({
  targetDate,
  onRSVP,
}: InvitationInsideProps) {
  const handleBackToTop = () => {
    document.getElementById("ceremony-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <PlannerPoster
      imageSrc="/WhatsApp1.jpeg"
      imageAlt="Classic portrait of the couple"
      footer={
        <div className="flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={onRSVP}
            className="inline-flex min-w-[220px] justify-center rounded-full bg-[#b7724f] px-6 py-3 text-sm font-medium uppercase tracking-[0.22em] text-white transition hover:bg-[#a66343] focus:outline-none focus:ring-2 focus:ring-[#b7724f] focus:ring-offset-2"
          >
            Submit RSVP
          </button>
          <button
            type="button"
            onClick={handleBackToTop}
            className="inline-flex min-w-[220px] justify-center rounded-full border border-[#c8ad80] bg-white/70 px-6 py-3 text-sm font-medium uppercase tracking-[0.22em] text-[#7a5732] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#c8ad80] focus:ring-offset-2"
          >
            Back To Top
          </button>
        </div>
      }
    >
      <a
        href="https://maps.app.goo.gl/siRpyQazTf5NyDJq9?g_st=iw"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#d0bb94] bg-white/55 px-4 py-2 text-[0.65rem] uppercase tracking-[0.35em] text-[#876744] transition hover:bg-white/75"
      >
        <FaLocationDot className="h-4 w-4 flex-shrink-0" />
        Directions
      </a>

      <p className="mt-6 text-[0.65rem] uppercase tracking-[0.45em] text-[#7d5b34] sm:text-xs">
        You Are Invited
      </p>
      <h1 className="mt-5 font-serif text-[2.3rem] leading-none text-[#6f4b2b] sm:text-6xl">
        Ceremony
      </h1>
      <p className="mt-4 text-xs uppercase tracking-[0.32em] text-[#75593a] sm:text-sm">
        Saturday, June 28, 2026
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.32em] text-[#75593a] sm:text-sm">
        8:30 PM CST | Aubrey, Texas
      </p>
      <div className="mx-auto mt-6 h-px w-16 bg-[#c8af7d]/80" />
      <p className="mx-auto mt-6 max-w-sm rounded-[24px] border border-white/45 bg-white/36 px-5 py-4 text-sm leading-6 text-[#62492d] shadow-[0_18px_45px_rgba(120,91,50,0.08)] sm:text-base">
        Celebrate with us in a beautiful evening of vows, laughter, and
        togetherness surrounded by family and friends.
      </p>

      <div className="mt-8 rounded-[26px] border border-white/55 bg-white/40 p-4 shadow-[0_18px_45px_rgba(120,91,50,0.08)] backdrop-blur-[1px] sm:p-5">
        <div className="mb-4 text-center text-[0.65rem] uppercase tracking-[0.35em] text-[#8a6a43] sm:text-xs">
          Countdown To Ceremony
        </div>
        <WeddingCountdown targetDate={targetDate} />
      </div>
    </PlannerPoster>
  );
}
