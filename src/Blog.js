import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const BlogPage = () =>{
    const [blogs, setblogs] = useState (null/*[
        {title:"Why linux", body:"Linux is everywhere, used by ....",author:"Thairu Robin", id:1},
        {title:"What is ChatGpt", body:"What is ChatGpt and why ....",author:"RT Ndung'u", id:2},
        {title:"Computer Processor", body:"What are these ....",author:"Nj ndungu", id:3},
    ]*/);

    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    /*const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setblogs(newBlogs);
    }*/

    

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then( res => {
            if(!res.ok){
                throw Error('Could not fetch data');

            }
            return res.json();
        })
        .then(data => {
            setblogs(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            setIsPending(false);
            setError(err.message);
            
        })
    }, []);

    return(
            <div className="bg-gray-200">
            { error && <div>Could not fetch blogss..</div>}
            {isPending && <div>Loading Blogs....</div>}
               {blogs && <BlogList blogs={blogs} title="Blogs!"/>}
               {/* <BlogList blogs={blogs.filter(() =>blogs.author === "RT Ndung'u")} title ="Thairu's blog"/>*/}
            </div>
        );
}

export default BlogPage;