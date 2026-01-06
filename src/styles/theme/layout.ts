import { Layout } from "@/types/theme";
import { size as breakpointSize } from "./breakpoints";
import { spacing } from "./spacing";

export const layout: Layout = {
  containerWidth: breakpointSize.container,
  contentWidth: breakpointSize.mediumWidth,
  pagePadding: spacing.gutter,
  sectionSpacing: spacing.section,
  borderRadius: {
    sm: "4px",
    md: "12px",
    lg: "24px",
  },
};
