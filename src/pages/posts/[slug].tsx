import PostContent from "@/components/posts/post-detail/PostContent";
import { getPostData, getPostsFiles } from "lib/posts-util";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { AppContext } from "next/app";
import Head from "next/head";
import React, { Fragment } from "react";

interface PostDetailPageProps  {
    post: any
}

const PostDetailPage: React.FC<PostDetailPageProps> = (props) => {

    return (
        <Fragment>
            <Head>
                <title>{props.post.title}</title>
                <meta name="description" content={props.post.excerpt}/>
            </Head>
            <PostContent post={props.post} />
        </Fragment>
       
    )
}

export const getStaticProps: GetStaticProps<PostDetailPageProps> = async (context: GetStaticPropsContext) => {
    const {params} = context;
    const {slug} = params!;

    const postData = getPostData(`${slug as string}${".md"}`);

    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const postFileNames = getPostsFiles();

    const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

    return {
        paths: slugs.map((slug) => ({params: {slug: slug}})),
        fallback: "blocking"
    }
}

export default PostDetailPage;