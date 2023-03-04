import React from "react";
import { PostItemProps } from "../posts/PostItem";
import PostsGrid from "../posts/PostsGrid";
import classes from "./FeaturedPosts.module.css"

interface FeaturedPostsProps {
    posts: PostItemProps[];
}

const FeaturedPosts: React.FC<FeaturedPostsProps> = (props) => {
    return (
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostsGrid posts={props.posts}/>
        </section>
    )
}

export default FeaturedPosts;