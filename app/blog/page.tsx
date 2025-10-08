'use client'
import {useState, useEffect} from "react";
import {Post, PostHeader, PostType, PostMetadataType} from "@/app/blog/post";
import './post.css';



const emptyPost: PostType = {
    body_html: '',
    title: '',
    cover_image: '',
    tags: [],
    url: ''
};

export default function Blog() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList, setPostList] = useState<PostMetadataType[]>([]);
    const [selectedPost, setSelectedPost] = useState<PostType>(emptyPost);
    const [openPost, setOpenPost] = useState(false);

    const title = "The Silicon Corner";

    const fetchAllPosts = () => {
        const url = 'https://dev.to/api/articles?username=polmonroig';
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setPostList(result);
                }
            )
    }

    const fetchPost = (id: number) => {
        setIsLoaded(false);
        const url = 'https://dev.to/api/articles/' + id;
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setSelectedPost(result);
                    setOpenPost(true);
                }
            )
    };

    const resetPage = () => {
        setOpenPost(false);
    };

    useEffect(() => {
        fetchAllPosts();
    }, []);

    if (openPost) {
        return (
            <>
                <Post content={selectedPost.body_html} title={selectedPost.title}
                      coverImage={selectedPost.cover_image}
                      tags={selectedPost.tags}
                      url={selectedPost.url}
                      mainMenu={resetPage}></Post>
            </>
        );
    } else if (isLoaded) {
        return (
            <div className={"mx-auto w-1/2 py-12"}>
                <div id="post_list">
                    {postList.map(item => (
                        <PostHeader onClick={() => fetchPost(item.id)}
                                    key={item.title} title={item.title} content={item.description}
                                    comments={item.comments_count}
                                    reactions={item.public_reactions_count}
                                    date={item.readable_publish_date}
                        ></PostHeader>
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <>
                Loading
            </>
        );
    }


}