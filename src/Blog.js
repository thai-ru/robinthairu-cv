import { useState } from "react";
import BlogList from "./BlogList";

const BlogPage = () =>{
    const [blogs, setblogs] = useState ([
        {title:"Why linux", body:"Linux is everywhere, used by ....",author:"Thairu Robin", id:1},
        {title:"What is ChatGpt", body:"What is ChatGpt and why ....",author:"RT Ndung'u", id:2},
        {title:"Computer Processor", body:"What are these ....",author:"Nj ndungu", id:3},
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setblogs(newBlogs);
    }

    return(
            <div className="bg-gray-200">
                <BlogList blogs={blogs} title="Blogs!" handleDelete = {handleDelete}/>
            </div>
        );
}

export default BlogPage;