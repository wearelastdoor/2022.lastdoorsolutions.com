import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import SvgSprite from "@/components/SvgSprite";
import { StyledComponentsProvider } from "@/providers/StyledComponentsProvider";
import HeaderWrapper from "@/components/headerWrapper/HeaderWrapper";
import { AnimateRouteContextProvider} from "@/context/AnimateRouteContext";
import Overlay from "@/components/common/animationOverlay/Overlay";
import LoaderCounter from "@/components/common/loaderCounterAnimation/LoaderCounter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const circularStdBlack = localFont({
  src: "../../public/fonts/CircularStd-Black.woff2",
  variable: "--font-circular-black",
  weight: "900",
  display: "swap",
  preload: true,
});

const circularStdBold = localFont({
  src: "../../public/fonts/CircularStd-Bold.woff2",
  variable: "--font-circular-bold",
  weight: "700",
  display: "swap",
  preload: true,
});

const circularStdBook = localFont({
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

export const metadata: Metadata = {
  metadataBase: process.env.BASE_URL
    ? new URL(process.env.BASE_URL)
    : new URL("https://www.lastdoorsolutions.com"),

  title: {
    default: "Web Design & Digital Marketing Agency | Last Door",
    template: "%s | Last Door Solutions",
  },

  description:
    "Lastdoor Website Solutions is a #1 leader in Web design & Digital Marketing services, helping businesses create a robust and successful web presence.",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.lastdoorsolutions.com/",
    title: "Web Design & Digital Marketing Agency | Last Door",
    description:
      "Lastdoor Website Solutions is a #1 leader in Web design & Digital Marketing services, helping businesses create a robust and successful web presence.",
    images: [
      {
        url: "/images/home-screenshot.png",
        width: 1200,
        height: 630,
        alt: "Last Door Solutions Screenshot",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@wearelastdoor",
    creator: "@wearelastdoor",
    title: "Web Design & Digital Marketing Agency | Last Door",
    description:
      "Lastdoor Website Solutions is a #1 leader in Web design & Digital Marketing services, helping businesses create a robust and successful web presence.",
    images: ["/images/home-screenshot.png"],
  },

  icons: {
    icon: "/favicon-32x32.png",
  },

  alternates: {
    canonical: "https://www.lastdoorsolutions.com/",
  },

  other: {
    "script:ld+json:website": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: "https://www.lastdoorsolutions.com/",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://lastdoorsolutions.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    }),
    "script:ld+json:organization": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      url: "https://www.lastdoorsolutions.com/",
      sameAs: [
        "https://www.facebook.com/wearelastdoor/",
        "https://www.instagram.com/wearelastdoor/",
        "https://www.linkedin.com/company/wearelastdoor",
        "https://twitter.com/wearelastdoor",
      ],
      name: "Last Door Solutions Pvt. Ltd.",
      logo: "https://www.lastdoorsolutions.com/images/logo.png",
      image: "https://www.lastdoorsolutions.com/images/home-screenshot.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ganesh Chowk, New Colony, Hattigauda",
        addressLocality: "Kathmandu",
        postalCode: "",
        addressRegion: "Bagmati",
        addressCountry: "NP",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "",
        longitude: "",
      },
      openingHours: [
        "Mo 09:00-18:00",
        "Tu 09:00-18:00",
        "We 09:00-18:00",
        "Th 09:00-18:00",
        "Fr 09:00-18:00",
        "Sa 09:00-18:00",
        "Su 09:00-18:00",
      ],
      email: "pravo@lastdoorsolutions.com",
      telePhone: "+9779851167777",
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${circularStdBlack.variable} ${circularStdBold.variable} ${circularStdBook.variable}`}>
        <StyledComponentsProvider>
          <AnimateRouteContextProvider>
          <LoaderCounter target={100} />
          <SvgSprite />
            <Overlay />
            <HeaderWrapper />
            <main>
              {children}
            </main>
          </AnimateRouteContextProvider>
        </StyledComponentsProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: String(metadata.other!["script:ld+json:website"]),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: String(metadata.other!["script:ld+json:organization"]),
          }}
        />
      </body>
    </html>
  );
}
