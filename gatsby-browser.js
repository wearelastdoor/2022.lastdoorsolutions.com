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
                     duration: 1000,
                     easing: "swing",
                     step: function (now) {
                         $(this).text(Math.ceil(now))
                     },
 
                     complete: function () {
                         setTimeout(function () {
                             $("#c-loader").addClass("completed")
                         }, 500)
                         setTimeout(function () {
                             $("body").addClass("content-loaded")
                         }, 500)
                     },
                 }
             )
     })
 
 }