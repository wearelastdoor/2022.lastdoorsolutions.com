import { Breakpoints } from "@/styles/types";

const size: Breakpoints["size"] = {
  container: "1200px",
  mediumWidth: "1439px",
  smallWidth: "1199px",
  tabletWidth: "960px",
  phoneWidth: "640px",
  phonePortraitWidth: "567px",
  headerWidth: "920px",
  ipadWidth: "1024px",
};

const device: Breakpoints["device"] = {
  desktop: `screen and (max-width: ${size.container})`,
  mediumScreen: `screen and (max-width: ${size.mediumWidth})`,
  smallScreen: `screen and (max-width: ${size.smallWidth})`,
  ipad: `screen and (max-width: ${size.ipadWidth})`,
  tablet: `screen and (max-width: ${size.tabletWidth})`,
  phone: `screen and (max-width: ${size.phoneWidth})`,
  phonePortrait: `screen and (max-width: ${size.phonePortraitWidth})`,
  header: `screen and (max-width: ${size.headerWidth})`,
};

export const breakpoints: Breakpoints = {
  size,
  device,
};

export { size, device };
