import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const postDetails = useLoaderData();
  const { id, title, body } = postDetails;

  const {postId}=useParams()
  console.log(postId);

  const navigate = useNavigate();
  const handleClickOfBackHome = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>Post Details About: {id}</h2>
      <p>Title: {title}</p>
      <p>{body}</p>
      <button onClick={handleClickOfBackHome}>Go Back Home</button>
    </div>
  );
};

export default PostDetails;
