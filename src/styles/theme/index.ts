import "styled-components";
import type {
  LegacyFontSizes,
  LegacyFontWeights,
  LegacyFonts,
  Theme,
} from "@/types/theme";

import { breakpoints } from "./breakpoints";
import { colors, colorVars, color, colorRgb, rgb, rgba } from "./colors";
import { font, lineHeight, letterSpacing, fontFamilies } from "./fonts";
import { layout } from "./layout";
import { spacing } from "./spacing";
import { shadows, blur } from "./shadows";

const fontSizes: LegacyFontSizes = {
  xs: "14px",
  sm: "16px",
  md: "20px",
  lg: "24px",
  xl: "38px",
  xxl: "2rem",
};

const fontWeights: LegacyFontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
  black: 900,
};

const fonts: LegacyFonts = {
  heading: fontFamilies.primaryBlack,
  body: fontFamilies.primary,
  default: fontFamilies.primary,
  bold: fontFamilies.primaryBold,
  book: fontFamilies.primary,
  bookItalic: fontFamilies.primaryItalic,
  black: fontFamilies.primaryBlack,
};

export const theme: Theme = {
  colors,
  colorVars,
  color,
  colorRgb,
  font,
  lineHeight,
  letterSpacing,
  shadows,
  blur,
  layout,
  spacing,
  breakpoints,
  fontSizes,
  fontWeights,
  fonts,
};

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    colors: typeof colors;
    color: typeof color;
    colorRgb: typeof colorRgb;
    font: typeof font;
    lineHeight: typeof lineHeight;
    letterSpacing: typeof letterSpacing;
    shadows: typeof shadows;
    blur: typeof blur;
    layout: typeof layout;
    spacing: typeof spacing;
    breakpoints: typeof breakpoints;
    colorVars: import("@/styles/types").ThemeColorVars;
    fontSizes: typeof fontSizes;
    fontWeights: typeof fontWeights;
    fonts: typeof fonts;
  }
}

export { breakpoints };
export { colors, colorVars };
export { color, colorRgb, rgb, rgba };
export type { ColorVars } from "./colors";
export { font, lineHeight, letterSpacing, fontFamilies };
export { layout };
export { spacing };
export { shadows, blur };
export { fontSizes, fontWeights, fonts };
