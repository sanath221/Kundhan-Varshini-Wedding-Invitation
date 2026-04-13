"use client";

import { EventPosterSlide } from "./event-poster-slide";

export function WeddingCeremonyEvent() {
  return (
    <EventPosterSlide
      badge="Sacred Union"
      title="Wedding"
      date="Saturday, June 28, 2026 • 8:30 AM onwards"
      description="The sacred Telugu wedding rituals begin in the morning, surrounded by prayer, family blessings, and joyful tradition."
      details={[
        "8:30 AM - 12:00 PM • Pelli kuturu and Pelli koduku ceremonies",
        "12:00 PM - 3:00 PM • Lunch and rest",
        "3:00 PM - 5:30 PM • Makeup and getting dressed",
      ]}
      imageSrc="/Wedding.jpeg"
      imageAlt="Wedding ceremony portrait"
    />
  );
}
