import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);
Scrollbar.use(OverscrollPlugin);

const isBrowser = typeof window !== "undefined";

const SmoothScroll = () => {
  useEffect(() => {
    if (isBrowser) {
      let bodyScrollBar = Scrollbar.init(
        document.querySelector("#page-wrapper"),
        {
          damping: 0.07,
          delegateTo: document,
          plugins: {
            overscroll: true,

          },
        }
      );
      bodyScrollBar.setPosition(0, 0);
      bodyScrollBar.track.xAxis.element.remove();

      ScrollTrigger.scrollerProxy("#page-wrapper", {
        scrollTop(value) {
          if (arguments.length) {
            bodyScrollBar.scrollTop = value;
          }
          return bodyScrollBar.scrollTop;
        },
      });

      bodyScrollBar.addListener(ScrollTrigger.update);

      let proxy = { skew: 0 },
        skewSetter = gsap.quickSetter("#page-wrapper", "skewY", "deg"),
        clamp = gsap.utils.clamp(-20, 20);

      ScrollTrigger.create({
        scroller: "#page-wrapper",
        onUpdate: (self) => {
          let skew = clamp(self.getVelocity() / -1600);
          if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            gsap.to(proxy, {
              skew: 0,
              duration: 0.1,
              ease: "power1.easeInOut",
              overwrite: true,
              onUpdate: () => skewSetter(proxy.skew),
            });
          }
        },
      });

      gsap.set("#page-wrapper", {
        transformOrigin: "center center",
        force3D: true,
      });
    }
  }, []);
  return null;
};

export default SmoothScroll;
