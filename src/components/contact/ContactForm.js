import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios"
import $ from "jquery"
import {useEffect} from "react";

const schema = yup.object().shape({
    name: yup.string().required("please enter you name"),
    email: yup.string().required("please enter you fancy email").email(),
})

const ContactForm = ({prop}) => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            $(document).ready(() => {
                $(".c-form__select").on("change", function (e) {
                    $(this).addClass("selected")
                    $(".success-message,.faild-message").remove()
                })

                $(".c-form__input,.c-form__textarea").on("keyup", function () {
                    $(".success-message,.faild-message").remove()
                })
            })
        }
    })
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = data => {
        axios
            .post("https://lastdoorsolutions.com/api/contact/index.php", data, {
                params: {action: "update-user"},
                headers: {"Content-Type": "multipart/form-data"},
                baseURL: "https://lastdoorsolutions.com",
            })
            .then(
                response => {
                    if ($(".success-message").length < 1) {
                        $(
                            '<p class="success-message"> Message sent successfully!</p>'
                        ).insertAfter(".c-form")
                    }
                },
                error => {
                    // console.log(error)
                    if ($(".failed-message").length < 1) {
                        $('<p class="failed-message"> Message sent failed!</p>').insertAfter(
                            ".c-form"
                        )
                    }
                }
            )
    }
    return (
        <section className="c-contact">
            <div className="l-container">
                <div className="c-contact__card">
                    <header className="c-contact__header">
                        <h2 className="c-contact__title" title="Easy talk">
                            Easy talk
                        </h2>
                        <p>
                            Fill in the form, or, if you prefer,
                            <mark>
                                <a href="mailto:hello@lastdoorsolutions.com">send us an email</a>
                            </mark>
                        </p>
                    </header>

                    <form onSubmit={handleSubmit(onSubmit)} className="c-form">
                        <div
                            className={`c-form__group ${
                                errors.name?.message ? "has-error" : null
                            }`}
                        >
                            <label htmlFor="name" className="c-form__label">
                                What’s your name?
                            </label>
                            <input
                                type="text"
                                placeholder="john Doe"
                                id="name"
                                className="c-form__input"
                                {...register("name")}
                            />
                            {errors.name?.message ? (
                                <p className="error-message">{errors.name?.message}</p>
                            ) : null}
                        </div>
                        <div className="c-form__group">
                            <label htmlFor="what-do-you-want" className="c-form__label">
                                Our ideal connection would be?
                            </label>
                            <select
                                id="what-do-you-want"
                                className="c-form__select"
                                {...register("purpose")}
                            >
                                <option value="Long Term Partnership">
                                    Long Term Partnership
                                </option>
                                <option value="I have a project">I have a project</option>
                                <option value=" I have a few projects"> I have a few projects</option>
                                <option value=" I need a collaborative team">
                                    I need a collaborative team
                                </option>
                            </select>
                        </div>
                        <div className="c-form__group">
                            <label htmlFor="do-you-have-a-budget" className="c-form__label">
                                Do you have a budget in mind? (Optional)
                            </label>
                            <select
                                id="do-you-have-a-budget"
                                className={`c-form__select`}
                                {...register("budget")}
                            >
                                <option value="~USD 10,000">~USD 10,000</option>
                                <option value="~USD 50,000"> ~USD 50,000</option>
                                <option value="USD 50,000+">USD 50,000+</option>
                                <option value="I don't know">
                                    I don't know
                                </option>
                            </select>
                        </div>
                        <div
                            className={`c-form__group ${
                                errors.email?.message ? "has-error" : null
                            }`}
                        >
                            <label htmlFor="email" className="c-form__label">
                                Your company email address
                            </label>
                            <input
                                type="email"
                                placeholder="johndoe@company.com"
                                id="email"
                                {...register("email")}
                                className="c-form__input"
                            />
                            {errors.email?.message ? (
                                <p className="error-message">{errors.email?.message}</p>
                            ) : null}
                        </div>
                        <div className="c-form__group">
                            <label htmlFor="textarea" className="c-form__label">
                                Tell us your Story
                            </label>
                            <textarea
                                placeholder="I am looking for a long term partner who could collaborate"
                                id="textarea"
                                className="c-form__textarea"
                                {...register("message")}
                            ></textarea>
                        </div>
                        <div className="c-form__button">
                            <button type="submit" className="c-btn c-btn--dark">
                                Send The Message
                                <span></span>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="c-contact__image">
                    <StaticImage
                        src="../../images/graphic-05.png"
                        alt="Holding Evelope"
                        height={369}
                    />
                </div>
            </div>
        </section>
    )
}

export default ContactForm
