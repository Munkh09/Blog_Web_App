import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    // navigate object
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        // prevents the component to lose all data when add blog is clicked 
        e.preventDefault();
        const blog = {title, body, author};   
        
        //re-renders the bottom template after this before continuing with fetch
        setIsPending(true);

        fetch('http://localhost:8080/blogs/post', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)        
        }).then(() => {
            console.log("new blog added");
            setIsPending(false);
            //send to the home page
            navigate('/');
            //navigate(-1) would send to the previous url
        })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <input 
                    type="text" 
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                { !isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
    );
}
 
export default Create;