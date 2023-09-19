import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;
  const userPostStyle = {
    border: "2px solid yellow",
    padding: "10px",
    borderRadius: "20px",
    marginBottom: "15px",
  };

  const navigate=useNavigate()

  const handleClickOfPost = () => {
    navigate(`/post/${id}`)

  };
  return (
    <div style={userPostStyle}>
      <p>Post Of Id: {id}</p>
      <h4>Single Post: {title}</h4>
      <Link to={`/post/${id}`}>Post Detail</Link>
      <Link to={`/post/${id}`}>
        <button>Show Details</button>
      </Link>
      <button onClick={handleClickOfPost}>Click Me Of Details</button>
    </div>
  );
};

export default Post;
