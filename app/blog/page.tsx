'use client'
import {useState, useEffect} from "react";
import {Post, PostHeader} from "@/app/blog/post";
import './post.css';

export default function Blog() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [openPost, setOpenPost] = useState(false);

    const title = "The Silicon Corner";

    const fetchAllPosts = () => {
        const url = 'https://dev.to/api/articles?username=polmonroig';
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setData(result);
                }
            )
    }

    const fetchPost = (id: string) => {
        setIsLoaded(false);
        const url = 'https://dev.to/api/articles/' + id;
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setData(result);
                    setOpenPost(true);
                }
            )
    };

    const resetPage = () => {
        setOpenPost(false);
        setIsLoaded(false);
        fetchAllPosts();
    };

    useEffect(() => {
        fetchAllPosts();
    }, []);

    if (openPost) {
        return (
            <>
                <Post content={data.body_html} title={data.title}
                      coverImage={data.cover_image}
                      tags={data.tags}
                      url={data.url}
                      mainMenu={resetPage}></Post>
            </>
        );
    } else if (isLoaded) {
        return (
            <div className={"mx-auto w-1/2 py-12"}>
                <div id="post_list">
                    {data.map(item => (
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