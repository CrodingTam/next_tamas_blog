import ContactForm from "@/components/contact/ContactForm";
import Head from "next/head";
import React, { Fragment } from "react";

const ContactPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Contact me</title>
                <meta name="description" content="Send me your message!" />
            </Head>
            <ContactForm />    
        </Fragment>
        
    )
}

export default ContactPage;