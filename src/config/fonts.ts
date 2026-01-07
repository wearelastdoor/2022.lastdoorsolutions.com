import localFont from "next/font/local";

export const circularStdBlack = localFont({
  src: "../../public/fonts/CircularStd-Black.woff2",
  variable: "--font-circular-black",
  weight: "900",
  display: "swap",
  preload: true,
});

export const circularStdBold = localFont({
  src: "../../public/fonts/CircularStd-Bold.woff2",
  variable: "--font-circular-bold",
  weight: "700",
  display: "swap",
  preload: false,
});

export const circularStdBook = localFont({
  src: "../../public/fonts/CircularStd-Book.woff2",
  variable: "--font-circular-book",
  weight: "400",
  display: "swap",
  preload: true,
});

export const circularStdBookItalic = localFont({
  src: "../../public/fonts/CircularStd-BookItalic.woff2",
  variable: "--font-circular-book-italic",
  weight: "400",
  style: "italic",
  display: "swap",
  preload: false,
});

// Combined font class names for easy use
export const fontVariables = `${circularStdBlack.variable} ${circularStdBold.variable} ${circularStdBook.variable} ${circularStdBookItalic.variable}`;

