import type { Metadata } from "next";

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
        url: "/images/home-screenshot.webp",
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
    images: ["/images/home-screenshot.webp"],
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
      logo: "https://www.lastdoorsolutions.com/images/logo.webp",
      image: "https://www.lastdoorsolutions.com/images/home-screenshot.webp",
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

