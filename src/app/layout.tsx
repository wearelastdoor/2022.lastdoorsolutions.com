import { fontVariables } from "@/config/fonts";
export { metadata } from "@/config/metadata";
import { metadata } from "@/config/metadata";
import SvgSprite from "@/components/SvgSprite";
import { StyledComponentsProvider } from "@/providers/StyledComponentsProvider";
import HeaderWrapper from "@/components/headerWrapper/HeaderWrapper";
import { AnimateRouteContextProvider} from "@/context/AnimateRouteContext";
import Overlay from "@/components/common/animationOverlay/Overlay";
import LoaderCounter from "@/components/common/loaderCounterAnimation/LoaderCounter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontVariables}>
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
