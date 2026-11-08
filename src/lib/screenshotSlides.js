const pairs = [
  ["sketchlet-color-menu.jpg", "sketchlet-mobile-studio.jpg", "Drawing workspace", "Tools sit beside the canvas on desktop and beneath it in the phone workspace."],
  ["saske-companion.jpg", "saske-mobile-companion.jpg", "Companion panel", "The same companion information uses a wider desktop layout and a compact phone layout."],
  ["saske-medicine.jpg", "saske-mobile-medicine.jpg", "Medicine tools", "Compare the space available for skills, treatment targets, and controls."],
  ["bakerlinks.jpg", "bakerlinks-mobile-profile.jpg", "Public profile", "The profile and links adapt to a wide screen or a portrait phone screen."],
  ["baker-parks-destination.jpg", "baker-parks-mobile-destination.jpg", "Park destination", "Desktop navigation becomes a compact menu while the destination details remain available."],
  ["jacklet.jpg", "jacklet-mobile-game.jpg", "Daily blackjack", "Compare the daily game’s card table and controls across screen sizes; the captured hands differ."],
];

export function buildScreenshotSlides(screenshots = []) {
  const byName = new Map(screenshots.map((shot) => [shot.src.split("/").pop(), shot]));
  const used = new Set();
  const slides = [];
  for (const shot of screenshots) {
    if (used.has(shot.src)) continue;
    const pair = pairs.find(([desktop, mobile]) =>
      byName.get(desktop)?.src === shot.src && byName.has(mobile));
    if (pair) {
      const [desktop, mobile, title, comparison] = pair;
      const shots = [byName.get(desktop), byName.get(mobile)];
      shots.forEach((item) => used.add(item.src));
      slides.push({ id: shot.src, title, comparison, shots });
    } else {
      // A mobile image listed before its desktop partner is emitted with that partner.
      if (pairs.some(([desktop, mobile]) => byName.get(mobile)?.src === shot.src && byName.has(desktop))) continue;
      used.add(shot.src);
      slides.push({ id: shot.src, title: shot.caption || shot.alt, shots: [shot] });
    }
  }
  return slides;
}
