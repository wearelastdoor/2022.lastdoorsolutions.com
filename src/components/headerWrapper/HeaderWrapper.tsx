"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header/Header";

const HeaderWrapper = () => {
  const pathname = usePathname();
  const hiddenPaths = ["/anchorwave", "/highstep", "/e11group"];
  const headerVisible = hiddenPaths.includes(pathname) ? "hidden" : "show";

  return <Header logoImage="/images/logo.svg" headerVisible={headerVisible} />;
};

export default HeaderWrapper;
