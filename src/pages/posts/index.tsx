import AllPosts from "@/components/posts/AllPosts";
import { PostItemProps } from "@/components/posts/PostItem";
import { getAllPosts, getFeaturedPosts } from "lib/posts-util";
import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";

interface AllPostPageProps {
    posts: any
}

const DUMMY_POSTS: PostItemProps[] = [
    {
        excerpt: "NextJS is a framework for React - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
        slug:"getting-started-nextjs1",
        image:"nextJS.png",
        time:new Date(),
        title:"Getting-started-nextjs"
    },
    {
        excerpt: "NextJS is a framework for React - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
        slug:"getting-started-nextjs2",
        image:"nextJS.png",
        time:new Date(),
        title:"Getting-started-nextjs"
    },
    {
        excerpt: "NextJS is a framework for React - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
        slug:"getting-started-nextjs3",
        image:"nextJS.png",
        time:new Date(),
        title:"Getting-started-nextjs"
    },
    {
        excerpt: "NextJS is a framework for React - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
        slug:"getting-started-nextjs4",
        image:"nextJS.png",
        time:new Date(),
        title:"Getting-started-nextjs"
    },
];

const AllPostsPage: React.FC<AllPostPageProps> = (props) => {
    return (
        <div>
            <Head>
                <title>All my Posts</title>
                <meta name="description" content="List of all programming tutorial" />
            </Head>
            <AllPosts posts={props.posts}/>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts
        },
        revalidate: 600
    }
}

export default AllPostsPage;