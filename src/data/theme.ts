import type { ThemeConfig } from "@/types/theme";

export const theme = {
  mode: "mixed",
  tokens: {
    pageBg: "#F4EFE6",
    surface1: "#FAF6EE",
    surface2: "#E8E4D7",
    surface3: "#D8D0BD",
    surfaceInverse: "#0E2533",
    textPrimary: "#1A2730",
    textMuted: "#5C6770",
    textInverse: "#F4EFE6",
    textOnAccentPrimary: "#FFFFFF",
    textLink: "#2D5F87",
    focusRing: "#D9622E",
    line: "#C9C0A8",
    lineStrong: "#7A848C",
    accentPrimary: "#2D5F87",
    accentSecondary: "#4A6B45",
    accentBright: "#D9622E",
    statusConfirmed: "#4A6B45",
    statusCaution: "#C57F2C",
    statusUnknown: "#7A848C",
  },
  typography: {
    headingFamily:
      "Cormorant Garamond, Lora, Georgia, 'Times New Roman', serif",
    bodyFamily:
      "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    headingWeight: 800,
  },
  shape: {
    radius: "6px",
    borderWidth: "1px",
    shadow:
      "0 1px 2px rgba(14, 37, 51, 0.08), 0 2px 6px rgba(14, 37, 51, 0.05)",
    hoverLift: "2px",
  },
  density: "comfortable",
  background: { mode: "gradient", overlay: 0, position: "top center" },
  variants: {
    home: "split-panel",
    hub: "card-grid",
    content: "reading-right-rail",
    workspace: "panelled",
  },
  decoration: { motif: "lines", intensity: "low" },
} satisfies ThemeConfig;