import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    // get the id variable from the current url
    const {id} = useParams();
    const {data, isPending, error} = useFetch("http://localhost:8080/blogs?id=" + id);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8080/delete/blog?id=' + id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }
    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <article>
                    <h2>{data.title}</h2>
                    <p>Written by {data.author}</p>
                    <div>{data.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}      
        </div>
    );
}
 
export default BlogDetails;