"use client";

import { EventPosterSlide } from "./event-poster-slide";

export function HaldiEvent() {
  return (
    <EventPosterSlide
      badge="Traditional Celebration"
      title="Haldi"
      date="Friday, June 27, 2026 • 9:00 AM onwards"
      description="A sunlit morning of blessings, laughter, and turmeric-tinted joy with the people we love most."
      details={[
        "7:30 AM - 9:00 AM • Makeup and dressing",
        "9:00 AM - 11:00 AM • Haldi ceremony",
        "11:00 AM - 1:30 PM • Freshen up and lunch",
        "1:30 PM - 5:00 PM • Rest and family time",
      ]}
      imageSrc="/Haldi.jpeg"
      imageAlt="Haldi celebration portrait"
    />
  );
}
