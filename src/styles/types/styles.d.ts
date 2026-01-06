import "styled-components";

type Shade<T extends string> = Record<T, string>;

export interface BreakpointSize {
  container: string;
  mediumWidth: string;
  smallWidth: string;
  tabletWidth: string;
  phoneWidth: string;
  phonePortraitWidth: string;
  headerWidth: string;
  ipadWidth: string;
}

export interface BreakpointDevice {
  desktop: string;
  mediumScreen: string;
  smallScreen: string;
  ipad: string;
  tablet: string;
  phone: string;
  phonePortrait: string;
  header: string;
}

export interface Breakpoints {
  size: BreakpointSize;
  device: BreakpointDevice;
}

export interface DisplayFontScale
  extends Shade<"xl" | "lg" | "md" | "sm" | "xs"> {}
export interface BodyFontScale extends Shade<"xl" | "lg" | "md" | "sm"> {}

export interface FontSizeScale {
  display: DisplayFontScale;
  body: BodyFontScale;
}

export interface FontWeightScale
  extends Shade<"thin" | "regular" | "medium" | "semibold" | "bold"> {}

export type LineHeightScale = Partial<
  Shade<"display" | "body" | "tight" | "loose">
>;
export type LetterSpacingScale = Partial<Shade<"tight" | "normal" | "wide">>;

export interface Font {
  size: FontSizeScale;
  weight: FontWeightScale;
  lineHeight?: LineHeightScale;
  letterSpacing?: LetterSpacingScale;
}

export interface ButtonColors {
  background: string;
  backgroundSecondary: string;
  border: string;
  borderHover: string;
  borderFocus: string;
  borderInput: string;
}

export interface LinkColors {
  link: string;
  linkHover: string;
  linkVisited: string;
}

export interface InputColors {
  input: string;
  inputHover: string;
  inputFocus: string;
  text: string;
  textFocus: string;
  placeholder: string;
  border: string;
  borderHover: string;
  borderFocus: string;
}

export type SupportColorScale = Partial<
  Shade<"50" | "200" | "400" | "700" | "900" | "1000">
>;

export interface Colors {
  white: string;
  black: string;
  primary: {
    white: string;
    black: string;
    gray: Shade<"50">;
    blue: Shade<"50">;
  };
  secondary: {
    blue: Shade<"50">;
    purple: Shade<"50">;
    navyBlue: Shade<"50">;
  };
  support: {
    promoRed: SupportColorScale;
    error: SupportColorScale;
    warningYellow: SupportColorScale;
    successGreen: SupportColorScale;
  };
  text: string;
  background: string;
  buttons: ButtonColors;
  links: LinkColors;
  input: InputColors;
}

// Flat color map for direct usage, e.g., theme.color.white
export interface FlatColors {
  white: string;
  black: string;
  darkGray: string;
  lightYellow: string;
  lightBlue: string;
  brand: string;
  brandAlt: string;
  brandSecondary: string;
  brandTertiary: string;
  primary: string;
  primaryDark: string;
  secondary: string;
  tertiary: string;
  alt: string;
  grayLight: string;
  screen: string;
  textScreen: string;
  hr: string;
  background: string;
  error: string;
  link: string;
  linkHover: string;
  linkVisited: string;
}

export interface ColorRgb {
  white: string;
  black: string;
  brandPrimary: string;
  brandSecondary: string;
  brandTertiary: string;
  brandAlt: string;
  primary: string;
  secondary: string;
  tertiary: string;
  alt: string;
  grayLight: string;
  screen: string;
  textScreen: string;
  hr: string;
  background: string;
}

export type LegacyFontSizes = Shade<"xs" | "sm" | "md" | "lg" | "xl" | "xxl">;

export interface LegacyFontWeights {
  light: number;
  regular: number;
  medium: number;
  bold: number;
  black: number;
}

export interface LegacyFonts {
  heading: string;
  body: string;
  default: string;
  bold: string;
  book: string;
  bookItalic: string;
  black: string;
}

export interface Layout {
  containerWidth: string;
  contentWidth: string;
  pagePadding: string;
  sectionSpacing: string;
  borderRadius: Record<"sm" | "md" | "lg", string>;
}

export interface Spacing extends Record<string, string | Record<string, string>> {
  xxs: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  xxxl: string;
  xxxxl: string;
  xxxxxl: string;
  "2xs": string;
  "2xl": string;
  "3xl": string;
  "4xl": string;
  "5xl": string;
  gutter: string;
  section: string;
  hero: string;
  container: string;
  custom: Record<string, string>;
}

export interface Shadows extends Shade<"xs" | "sm" | "md" | "lg"> {}
export interface Blur extends Shade<"sm" | "md" | "lg"> {}

export interface ThemeColorVars {
  white: string;
  black: string;
  darkGray: string;
  lightYellow: string;
  lightBlue: string;
  brand: string;
  brandAlt: string;
  brandSecondary: string;
  primary: string;
  primaryDark: string;
  secondary: string;
  tertiary: string;
  alt: string;
  error: string;
  screen: string;
  hr: string;
  textScreen: string;
  text: string;
  background: string;
  cbBackground: string;
  cbBackgroundSecondary: string;
  cbBorder: string;
  cbBorderHover: string;
  cbBorderFocus: string;
  cbBorderInput: string;
  link: string;
  linkHover: string;
  linkVisited: string;
  cfInput: string;
  cfInputHover: string;
  cfInputFocus: string;
  cfText: string;
  cfTextFocus: string;
  cfPlaceholder: string;
  cfBorder: string;
  cfBorderHover: string;
  cfBorderFocus: string;
}

export interface Theme {
  colors: Colors;
  color: FlatColors;
  colorRgb: ColorRgb;
  font: Font;
  breakpoints: Breakpoints;
  fontSizes: LegacyFontSizes;
  fontWeights: LegacyFontWeights;
  fonts: LegacyFonts;
  lineHeight: LineHeightScale;
  letterSpacing: LetterSpacingScale;
  layout: Layout;
  spacing: Spacing;
  shadows: Shadows;
  blur: Blur;
  colorVars: ThemeColorVars;
}
