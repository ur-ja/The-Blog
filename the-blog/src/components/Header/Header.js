import "./Header.css";
import { MagnifyingGlass, Pencil, SignIn } from "phosphor-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h1 className="heading">THE BLOG</h1>
      <div className="icons">
        <MagnifyingGlass size={20} className="search" />
        <Link to="/newBlog">
          <Pencil size={20} className="create_blog" />
        </Link>
        <SignIn size={20} className="sign_in" />
      </div>
    </div>
  );
}

export default Header;
