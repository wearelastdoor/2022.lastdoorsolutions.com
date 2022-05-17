/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
 import $ from "jquery"
 import "./src/styles/style.scss"
 
 
 export const onInitialClientRender = () => {
     $(".c-loader__counter").each(function () {
         $(this).addClass("visible")
         $(this)
             .find("span")
             .prop("Counter", 0)
             .animate(
                 {
                     Counter: $(this).text(),
                 },
                 {
                     duration: 3000,
                     easing: "swing",
                     step: function (now) {
                         $(this).text(Math.ceil(now))
                     },
 
                     complete: function () {
                         setTimeout(function () {
                             $("#c-loader").addClass("completed")
                         }, 1000)
                         setTimeout(function () {
                             $("body").addClass("content-loaded")
                         }, 1000)
                     },
                 }
             )
     })
 
     $('.c-accordion__header').on('click', function () {
         var _this = $(this),
             parent = _this.closest('.c-accordion__item'),
             target = _this.siblings('.c-accordion__body'),
             isOpen = parent.hasClass('is-open');
         if (isOpen) {
             target.slideUp('fast')
             parent.removeClass('is-open')
         } else {
             target.slideDown('fast')
             parent.addClass('is-open')
         }
     })
 }