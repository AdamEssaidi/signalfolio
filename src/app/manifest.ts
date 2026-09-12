import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Adam Essaidi — Software Engineer",
    short_name: "Adam Essaidi",
    description:
      "Portfolio and engineering notes from Adam Essaidi, a full-stack software engineer in Rabat, Morocco.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#171717",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
