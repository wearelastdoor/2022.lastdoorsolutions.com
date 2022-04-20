import {gsap} from "gsap";
import {useEffect} from "react"
import {ScrollTrigger} from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll"
import $ from "jquery"

import {scroll} from "./scroll"

const Scroll = callbacks => {

    useEffect(() => {
        let locomotiveScroll
        locomotiveScroll = new LocomotiveScroll({
            el: document.querySelector(scroll.container),
            ...scroll.options,
        })
        gsap.registerPlugin(ScrollTrigger)
        locomotiveScroll.update()

        var updatedOnFirstLoad = (function () {
            return function () {
                if (!$('.c-loader').hasClass('completed')) {
                    setTimeout(function () {
                        locomotiveScroll.update()
                    }, 200)
                }
            };
        })();

        updatedOnFirstLoad();

        // Exposing to the global scope for ease of use.
        window.scroll = locomotiveScroll

        locomotiveScroll.on("scroll", func => {
            // Update `data-direction` with scroll direction.
            document.documentElement.setAttribute("data-direction", func.direction)
        })

        ScrollTrigger.scrollerProxy(scroll.container, {
            scrollTop(value) {
                return arguments.length ? locomotiveScroll.scrollTo(value, 0, 0) : locomotiveScroll.scroll.instance.scroll.y;
            }
        });
        ScrollTrigger.addEventListener("refresh", () => locomotiveScroll.update());
        ScrollTrigger.refresh();

        // const tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: '.c-hero__title',
        //         scroller: scroll.container,
        //         scrub: true,
        //         end: "+=200%"
        //     }
        // });

        return () => {
            if (locomotiveScroll) locomotiveScroll.destroy()
        }
    }, [callbacks])

    return null
}

export default Scroll
