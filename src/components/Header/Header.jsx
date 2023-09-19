import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav>
        <span>My Website</span> <br />
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/users"}>Users</NavLink>
        <NavLink to={"/posts"}>Post</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </nav>
    </div>
  );
};

export default Header;
