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
  preload: true,
});

export const circularStdBook = localFont({
  src: [
    {
      path: "../../public/fonts/CircularStd-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/CircularStd-BookItalic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-circular-book",
  display: "swap",
  preload: true,
});

// Combined font class names for easy use
export const fontVariables = `${circularStdBlack.variable} ${circularStdBold.variable} ${circularStdBook.variable}`;

