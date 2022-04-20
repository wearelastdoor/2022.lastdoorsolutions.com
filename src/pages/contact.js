import * as React from "react"
import Seo from "../components/seo"

// Import Components
import ContactForm from "../components/contact/ContactForm.js"
import Footer from "../components/footer";

const ContactPage = () => (
    < >
        <Seo/>
        <main className="main">
            <ContactForm/>
        </main>
        <Footer/>
    </>
)

export default ContactPage
