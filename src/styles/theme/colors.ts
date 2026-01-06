import type { DefaultTheme } from "styled-components";
import { Colors, FlatColors, ColorRgb } from "@/styles/types/styles";

export const colorVars = {
  white: "#ffffff",
  black: "#000000",
  darkGray: "#17212a",
  lightYellow: "#f5f6f0",
  lightBlue: "#8ed2dc",
  brand: "#17212a",
  brandAlt: "#2c3c4a",
  brandSecondary: "#1c262e",
  primary: "#8ed2dc",
  primaryDark: "#3a8a96",
  secondary: "#f5f6f0",
  tertiary: "#fcf113",
  alt: "#8edc97",
  error: "#dd4a43",
  screen: "#fcf113",
  hr: "#cccccc",
  textScreen: "#0091ff",
  text: "#17212a",
  background: "#f5f6f0",
  cbBackground: "#ffffff",
  cbBackgroundSecondary: "#ffffff",
  cbBorder: "#8ed2dc",
  cbBorderHover: "#cccccc",
  cbBorderFocus: "#cccccc",
  cbBorderInput: "#cccccc",
  link: "#1983d4",
  linkHover: "#1360a5",
  linkVisited: "#5ca3e5",
  cfInput: "#f5f6ef",
  cfInputHover: "#666666",
  cfInputFocus: "#ffffff",
  cfText: "#ccc",
  cfTextFocus: "#111111",
  cfPlaceholder: "#666666",
  cfBorder: "#17212a",
  cfBorderHover: "#333333",
  cfBorderFocus: "#111111",
} as const;

export type ColorVars = typeof colorVars;

export const colors: Colors = {
  white: colorVars.white,
  black: colorVars.black,
  // Basic Colors
  primary: {
    white: colorVars.white,
    black: colorVars.black,
    gray: {
      50: colorVars.darkGray,
    },
    blue: {
      50: colorVars.lightBlue,
    },
  },

  // Project / Brand Colors
  secondary: {
    blue: {
      50: colorVars.primary,
    },
    purple: {
      50: colorVars.secondary,
    },
    navyBlue: {
      50: colorVars.brandSecondary,
    },
  },

  // Support Colors
  support: {
    promoRed: {
      50: colorVars.screen,
      200: colorVars.tertiary,
      400: colorVars.tertiary,
      700: colorVars.tertiary,
      900: colorVars.screen,
    },
    error: {
      50: colorVars.error,
      200: colorVars.error,
      400: colorVars.error,
      700: colorVars.error,
      900: colorVars.error,
    },
    warningYellow: {
      50: colorVars.screen,
      200: colorVars.tertiary,
      400: colorVars.tertiary,
      700: colorVars.tertiary,
      900: colorVars.screen,
      1000: colorVars.tertiary,
    },
    successGreen: {
      50: colorVars.alt,
      200: colorVars.alt,
      400: colorVars.alt,
      700: colorVars.alt,
      900: colorVars.alt,
    },
  },

  // Additional / Utility Colors (optional)
  text: colorVars.text,
  background: colorVars.background,

  buttons: {
    background: colorVars.cbBackground,
    backgroundSecondary: colorVars.cbBackgroundSecondary,
    border: colorVars.cbBorder,
    borderHover: colorVars.cbBorderHover,
    borderFocus: colorVars.cbBorderFocus,
    borderInput: colorVars.cbBorderInput,
  },

  links: {
    link: colorVars.link,
    linkHover: colorVars.linkHover,
    linkVisited: colorVars.linkVisited,
  },

  input: {
    input: colorVars.cfInput,
    inputHover: colorVars.cfInputHover,
    inputFocus: colorVars.cfInputFocus,
    text: colorVars.cfText,
    textFocus: colorVars.cfTextFocus,
    placeholder: colorVars.cfPlaceholder,
    border: colorVars.cfBorder,
    borderHover: colorVars.cfBorderHover,
    borderFocus: colorVars.cfBorderFocus,
  },
};

// Flat color palette with direct values (no CSS vars)
// Use this for `theme.color.white` style access in components.
export const color: FlatColors = {
  // Basic Colors
  white: "#ffffff",
  black: "#000000",
  darkGray: "#17212a",
  lightYellow: "#f5f6f0",
  lightBlue: "#8ed2dc",

  // Project Colors
  brand: "#17212a",
  brandAlt: "#2c3c4a",
  brandSecondary: "#1c262e",
  brandTertiary: "#17262e",
  primary: "#8ed2dc",
  primaryDark: "#3a8a96",
  secondary: "#f5f6f0",
  tertiary: "#fcf113",
  alt: "#8edc97",
  grayLight: "#f5f6ef",
  screen: "#fcf113",
  textScreen: "#0091ff",
  hr: "#cccccc",
  background: "#f5f6f0",
  error: "#dd4a43",
  link: "#1983d4",
  linkHover: "#1360a5",
  linkVisited: "#5ca3e5",
};

// RGB palette for rgba()/rgb() usage without CSS vars
export const colorRgb: ColorRgb = {
  white: "255, 255, 255",
  black: "0, 0, 0",
  brandPrimary: "23, 33, 42",
  brandSecondary: "28, 38, 46",
  brandTertiary: "23, 38, 46",
  brandAlt: "44, 60, 74",
  primary: "142, 210, 220",
  secondary: "245, 246, 240",
  tertiary: "252, 241, 19",
  alt: "142, 220, 151",
  grayLight: "245, 246, 239",
  screen: "252, 241, 19",
  textScreen: "0, 145, 255",
  hr: "204, 204, 204",
  background: "245, 246, 240",
};

// Helpers for styled-components templates
export const rgb = (key: keyof ColorRgb) =>
  ({ theme }: { theme: DefaultTheme }) => `rgb(${theme.colorRgb[key]})`;

export const rgba = (key: keyof ColorRgb, alpha = 1) =>
  ({ theme }: { theme: DefaultTheme }) => `rgba(${theme.colorRgb[key]}, ${alpha})`;

export type { FlatColors };
