import React from "react";
import PostItem, { PostItemProps } from "./PostItem";
import classes from "./PostsGrid.module.css"

interface PostsGridProps {
    posts: PostItemProps[];
}

const PostsGrid: React.FC<PostsGridProps> = (props) => {

    return (
        <ul className={classes.grid}>
            {props.posts.map((post) => {
                return (
                    <PostItem key={post.slug} excerpt={post.excerpt} image={post.image} title={post.title} time={post.time} slug={post.slug}/>
                );
            })}
        </ul>
    )
}

export default PostsGrid