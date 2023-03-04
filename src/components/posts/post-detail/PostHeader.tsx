import Image from "next/legacy/image";
import React from "react";
import classes from "./PostHeader.module.css"

interface PostHeaderProps {
    title: string;
    image: string;
}

const PostHeader: React.FC<PostHeaderProps> = (props) => {


    return (
        <header className={classes.header}>
            <h1>{props.title}</h1>
            <Image src={props.image} alt={props.title} width={200} height={150} />
        </header>
    )
}

export default PostHeader