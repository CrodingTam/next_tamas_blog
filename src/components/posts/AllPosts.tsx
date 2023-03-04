import React from "react";
import classes from "./AllPosts.module.css"
import { PostItemProps } from "./PostItem";
import PostsGrid from "./PostsGrid";

interface AllPostsProps {
    posts: PostItemProps[];
}

const AllPosts: React.FC<AllPostsProps> = (props) => {
    return (
        <section className={classes.posts}>
            <h1>All Posts</h1>
            <PostsGrid posts={props.posts}/>
        </section>  
    )
}

export default AllPosts;