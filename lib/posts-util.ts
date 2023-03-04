import fs from "fs"
import path from "path"
import matter from "gray-matter";


const postsDirectory = path.join(process.cwd(), "posts");

export const getPostsFiles = () => {
    return fs.readdirSync(postsDirectory);
}

export const getPostData = (fileName: string) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    const postSlug = fileName.replace(/\.md$/,"") // remove the file extension
    const postData = {
        slug: postSlug,
        ...data,
        content,
    };
    return postData;
}

export const getAllPosts = () => {
    const postFiles = getPostsFiles();

    const allPosts = postFiles.map((postFile) => {
        return getPostData(postFile);
    })

    const sortedPosts = allPosts.sort((postA: any, postB: any) => postA.date > postB.date ? -1 : 1);
    return sortedPosts;
}

export const getFeaturedPosts = () => {
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter((post: any) => post.isFeatured);


    return featuredPosts;
}