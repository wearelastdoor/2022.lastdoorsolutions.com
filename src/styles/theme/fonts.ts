import { Font, LineHeightScale, LetterSpacingScale } from "@/styles/types";

const font: Font = {
  size: {
    display: {
      xl: "46px",
      lg: "38px",
      md: "26px",
      sm: "24px",
      xs: "22px",
    },
    body: {
      xl: "20px",
      lg: "18px",
      md: "16px",
      sm: "14px",
    },
  },
  weight: {
    thin: "300",
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
};

const lineHeight: LineHeightScale = {
  display: "1.15",
  body: "1.6",
};

const letterSpacing: LetterSpacingScale = {
  tight: "-0.02em",
  normal: "0",
  wide: "0.08em",
};

// Font families
const fontFamilies = {
  primary: 'var(--font-circular-book), Arial, sans-serif',
  primaryItalic: 'var(--font-circular-book), Arial, sans-serif',
  primaryBold: 'var(--font-circular-bold), Arial, sans-serif',
  primaryBlack: 'var(--font-circular-black), Arial, sans-serif',
  default: 'var(--font-circular-book), Arial, sans-serif',
  code: 'Monaco, Consolas, "Andale Mono", "DejaVu Sans Mono", monospace',
  pre: '"Courier 10 Pitch", Courier, monospace',
};

export { font, lineHeight, letterSpacing, fontFamilies };
