import Image from "next/image";
import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src={"/images/site/tamas.jpg"} alt={"myselfImage"} width={300} height={300}/>
            </div>
            <div>
                <h1>Hi, I&apos;m Tamás</h1>
                <p>Blog about development ...</p>
            </div>
        </section>
    )
}

export default Hero;