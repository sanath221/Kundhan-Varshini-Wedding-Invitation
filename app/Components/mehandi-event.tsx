"use client";

import { EventPosterSlide } from "./event-poster-slide";

export function MehandiEvent() {
  return (
    <EventPosterSlide
      badge="Artistic Celebration"
      title="Mehendi"
      date="Friday, June 27, 2026 • 6:30 PM onwards"
      description="An evening of intricate henna, music, and easy celebration where tradition feels playful and beautifully personal."
      details={[
        "5:00 PM - 6:30 PM • Makeup and dressing",
        "6:30 PM onwards • Mehendi ceremony",
        "Dress note • Festive florals, soft pastels, and comfortable celebration wear",
      ]}
      imageSrc="/Mehandi.jpeg"
      imageAlt="Mehendi celebration portrait"
    />
  );
}
