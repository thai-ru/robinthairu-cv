const BlogList = (props) =>{
    const blogs = props.blogs;
    const title = props.title;
    //const handleDelete = props.handleDelete;

    return(
        <div className="bg-gray-200">
        <h2 className="text-3xl font-bold text-center">{ title }</h2>
            {blogs.map((blog) => (
                
                <div className='m-1 ml-4' key={blog.id} >
                    <h2 className='text-2xl font-semibold text-pink-900 p-2' >{ blog.title }</h2>
                    <p className='text-md font-thin text-pink-800 ml-2' >Written by { blog.author }</p>

                    {/*<button onClick={() => handleDelete(blog.id)}>Delete blog</button>*/}

                </div>
            ))}

        </div>
    );
}

export default BlogList;