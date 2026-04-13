"use client";

import type { ReactNode } from "react";

import { PlannerPoster } from "./planner-poster";

type EventPosterSlideProps = {
  badge: string;
  title: string;
  date: string;
  description: string;
  details: string[];
  imageSrc: string;
  imageAlt: string;
  children?: ReactNode;
};

export function EventPosterSlide({
  badge,
  title,
  date,
  description,
  details,
  imageSrc,
  imageAlt,
  children,
}: EventPosterSlideProps) {
  return (
    <PlannerPoster imageSrc={imageSrc} imageAlt={imageAlt}>
      <p className="text-[0.65rem] uppercase tracking-[0.45em] text-[#9b7a45] sm:text-xs">
        {badge}
      </p>
      <h2 className="mt-5 font-serif text-[2.2rem] leading-none text-[#9d7240] sm:text-6xl">
        {title}
      </h2>
      <p className="mt-4 text-xs uppercase tracking-[0.32em] text-[#876744] sm:text-sm">
        {date}
      </p>
      <div className="mx-auto mt-6 h-px w-16 bg-[#c8af7d]/80" />
      <p className="mx-auto mt-6 max-w-sm text-sm leading-6 text-[#7e6440] sm:text-base">
        {description}
      </p>

      <div className="mt-8 rounded-[26px] border border-white/55 bg-white/38 p-4 text-left shadow-[0_18px_45px_rgba(120,91,50,0.08)] backdrop-blur-[1px] sm:p-5">
        {details.map((detail) => (
          <p
            key={detail}
            className="border-b border-[#dcc9a7]/55 py-3 text-sm leading-6 text-[#6d5434] last:border-b-0 last:pb-0 first:pt-0"
          >
            {detail}
          </p>
        ))}
      </div>

      {children ? <div className="mt-6">{children}</div> : null}
    </PlannerPoster>
  );
}
