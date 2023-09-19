import { useLoaderData, useNavigate } from "react-router-dom";

const UsersDetails = () => {
  const user = useLoaderData();
  const { name ,website} = user;

  const navigate=useNavigate()

  const handleClickOfBackHomeUsers=()=>{
    navigate(-1)
  }
  return (
    <div>
      <h2>Details about User: {name}</h2>
      <p>Website: {website}</p>
      <button onClick={handleClickOfBackHomeUsers}>Go Back Home</button>
    </div>
  );
};

export default UsersDetails;
