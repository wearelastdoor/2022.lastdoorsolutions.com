"use client";

import { ReactNode, useState } from "react";
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from "styled-components";
import { GlobalStyles } from "@/styles/GlobleStyles";
import { theme } from "@/styles/theme";
import { useServerInsertedHTML } from "next/navigation";

interface StyledComponentsProviderProps {
  children: ReactNode;
}

export const StyledComponentsProvider = ({
  children,
}: StyledComponentsProviderProps) => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });
  if (typeof window !== "undefined")
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    );
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance }>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyleSheetManager>
  );
};
