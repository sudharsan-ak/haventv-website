export const project = {
  repository: "https://github.com/sudharsan-ak/haventv-launcher",
  releases: "https://github.com/sudharsan-ak/haventv-launcher/releases/tag/v1.0",
  download: "https://github.com/sudharsan-ak/haventv-launcher/releases/download/v1.0/haven-1.0.apk",
  install: "https://github.com/sudharsan-ak/haventv-launcher#build-and-install",
  version: "v1.0",
} as const;

export const screenshots = {
  "kingdom-night": { src: "/images/kingdom-night.webp", label: "Kingdom • Sunset wallpaper", alt: "Haven Kingdom home screen featuring sunset wallpaper, Watch Now, Live TV, streaming collections and app tiles" },
  "kingdom-day": { src: "/images/kingdom-day.webp", label: "Kingdom • Mountain wallpaper", alt: "Haven Kingdom home screen featuring a mountain lake wallpaper and streaming apps" },
  "tide-day": { src: "/images/tide-day.webp", label: "Tide • Waves", alt: "Haven Tide theme with a large clock, blue waves, and a floating app shelf" },
  "tide-bing": { src: "/images/tide-bing.webp", label: "Tide • Bing photography", alt: "Haven Tide theme with sunset bridge photograph" },
  "tide-earth": { src: "/images/tide-earth.webp", label: "Tide • Earth View", alt: "Haven Tide theme with a satellite-view wallpaper" },
  quick: { src: "/images/quick.webp", label: "Quick Settings", alt: "Haven Quick Settings with theme, wallpaper, DNS, clock and TV controls" },
  settings: { src: "/images/settings.webp", label: "Personalize • Appearance", alt: "Haven Appearance settings with Kingdom and Tide theme cards" },
  collections: { src: "/images/collections.webp", label: "Personalize • Collections", alt: "Haven Home and Layout settings with reordered app collections" },
  watchnow: { src: "/images/watchnow.webp", label: "Watch Now", alt: "Haven Watch Now panel with Warriors favorite team and NBA games" },
  "nba-game": { src: "/images/nba-game.webp", label: "NBA • Games", alt: "Haven NBA game list and Warriors versus Timberwolves game details" },
  "nba-schedule": { src: "/images/nba-schedule.webp", label: "NBA • Team schedule", alt: "Haven NBA Golden State Warriors season schedule" },
} as const;

export type ScreenshotKey = keyof typeof screenshots;
