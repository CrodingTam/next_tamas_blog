import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import classes from "./PostContent.module.css"
import PostHeader from "./PostHeader";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface PostContentProps {
    post: any
}

const DUMMY_POST =  {
    excerpt: "NextJS is a framework for React - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
    slug:"getting-started-nextjs1",
    image:"nextJS.png",
    time:new Date(),
    title:"Getting-started-nextjs",
    content: "# This is the first post"
}

const PostContent: React.FC<PostContentProps> = (props) => {
    const imagePath = `/images/posts/${props.post.slug}/${props.post.image}`

    const customRenderers = {
        paragraph (paragraph: any) {
            const {node} = paragraph;
            if (node.children[0].type === "image") {
                const image = node.children[0];
                return(
                    <div className={classes.image}>
                        <Image 
                            src={image.url} 
                            alt={image.alt}
                            width={600}
                            height={300}
                            >
                        </Image>
                    </div>
                )
            }
            return <p>{paragraph.children}</p>
        },

        // code(code: any) {
        //     const { language, value } = code;
        //     return <SyntaxHighlighter style={atomDark} language={language} children={value}/>
        // }
    }

    return (
        <article className={classes.content}>
            <PostHeader title={props.post.title} image={imagePath} />
            <ReactMarkdown renderers={customRenderers}>{props.post.content}</ReactMarkdown>
        </article>
    )
}

export default PostContent;