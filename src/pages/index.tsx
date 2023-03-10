import FeaturedPosts from "@/components/home-page/FeaturedPosts";
import Hero from "@/components/home-page/Hero";
import { PostItemProps } from "@/components/posts/PostItem";
import { getFeaturedPosts } from "lib/posts-util";
import { GetStaticProps } from "next";
import Head from "next/head";
import React, { Fragment } from "react";
interface HomePageProps {
    posts: any;
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

const HomePage: React.FC<HomePageProps> = (props) => {
    
    return (
        <Fragment>
            <Head>
                <title>Tamás&apos;s Blog</title>
                <meta 
                    name="description" 
                    content="I post about programming" 
                />
            </Head>
            <Hero />
            <FeaturedPosts posts={props.posts}/>
        </Fragment>
    )
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        },
        revalidate: 600
    }
}


export default HomePage;