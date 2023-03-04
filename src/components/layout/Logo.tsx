import React from "react";
import classes from "./Logo.module.css"

interface LogoProps {

}

const Logo: React.FC<LogoProps> = (props) => {

    return(
        <div className={classes.logo}>
            Tamás&apos;s Blog
        </div>
    )
}

export default Logo;