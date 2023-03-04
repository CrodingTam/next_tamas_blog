import { link } from "fs";
import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import classes from "./PostItem.module.css"

export interface PostItemProps {
    image: string,
    title: string,
    time: Date,
    excerpt: string,
    slug: string
}

const PostItem: React.FC<PostItemProps> = (props) => {

    const formattedDate = new Date(props.time).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })

    const imagePath = `/images/posts/${props.slug}/${props.image}`;
    const linkPath = `/posts/${props.slug}`

    return (
        <li className={classes.post}>
            <Link href={linkPath}>
                <div className={classes.image}><Image src={imagePath} alt={props.title} width={300} height={200} layout="responsive"/></div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <time>{formattedDate}</time>
                    <p>{props.excerpt}</p>
                </div>
            </Link>
        </li>
    )
}

export default PostItem