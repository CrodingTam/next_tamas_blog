import React, { useEffect, useRef, useState } from "react";
import Notification from "../ui/Notification";
import classes from "./ContactForm.module.css"

const sendContactData = async(contactDetails: {}) => {
    
    const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(contactDetails),
        headers: {
            "Content-Type": "application/json"
        }
    })

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "something went wrong");
    }

}

const ContactForm = () => {
    const [requestStatus, setRequestStatus] = useState(""); //pending, succes, error, ended
    const emailInputRef = useRef<any>();
    const nameInputRef = useRef<any>();
    const messageInputRef = useRef<any>();
    const [requestError, setRequestError] = useState<any>();

    const sendMessageHandler = async (event: any) => {
        setRequestStatus("pending");
        event.preventDefault();
        try {
            await sendContactData({
                email: emailInputRef.current.value,
                name: nameInputRef.current.value,
                message: messageInputRef.current.value
            });
            setRequestStatus("succes");
            emailInputRef.current.value = "";
            nameInputRef.current.value = "";
            messageInputRef.current.value = "";
        } catch (error) {
            setRequestStatus("error");
            setRequestError(error);
        }
    }

    useEffect(() => {
        if (requestStatus === "succes" || requestStatus === "error") {
            const timer = setTimeout(() => {
                setRequestStatus("ended");
                setRequestError("Ended status");
            }, 3000);
            return () => clearTimeout(timer)
        }

        
    },[requestStatus])

    let notification;
    if (requestStatus === "pending") {
        notification = {
            status: "pending",
            title: "Sending message...",
            message: "Your message is on its way!"
        }
    }

    if (requestStatus === "succes") {
        notification = {
            status: "succes",
            title: "Succes!",
            message: "Message sent succesfully!"
        }
    }

    if (requestStatus === "error") {
        notification = {
            status: "error",
            title: "Error",
            message: requestError.toString()
        }
    }

    if(requestStatus === "ended") {
        notification = null;
    }

    return (
        <section className={classes.contact}>
            <h1>How can I help you?</h1>
            <form className={classes.form} onSubmit={sendMessageHandler}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="email">Your email</label>
                        <input type="email" id="email" required ref={emailInputRef}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" required ref={nameInputRef}/>
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" rows={5} ref={messageInputRef} required/>
                </div>
                <div className={classes.actions}>
                    <button>Send message</button>
                </div>
            </form>
            {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
        </section>
    )
}

export default ContactForm;