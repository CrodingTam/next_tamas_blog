import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import classes from "./MainNavigation.module.css";

interface MainNavigationProps {

}

const MainNavigation: React.FC<MainNavigationProps> = (props) => {

    return (
        <header className={classes.header}>
            <Link href={"/"}><Logo /></Link>
            <nav>
                <ul>
                    <li> <Link href={"/posts"}>Posts</Link> </li>
                    <li> <Link href={"/contact"}>Contact</Link> </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;