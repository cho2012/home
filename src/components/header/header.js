import { Link } from "react-router-dom";
import "./header.css";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <span className="big">web</span>
        <span>site</span>
      </div>
      <nav className="nav">
        <Link to={"/header"} style={{ textDecoration: "none", color: "black" }}>
          header
        </Link>
        <Link to={"/slider"} style={{ textDecoration: "none", color: "black" }}>
          slides
        </Link>
        <Link to={"/banner"} style={{ textDecoration: "none", color: "black" }}>
          banner
        </Link>
        <Link
          to={"/content"}
          style={{ textDecoration: "none", color: "black" }}
        >
          contents
        </Link>
        <Link to={"/footer"} style={{ textDecoration: "none", color: "black" }}>
          footer
        </Link>
      </nav>
      <Link
        to={"/login"}
        style={{ textDecoration: "none", color: "black" }}
        className="login"
      >
        로그인
      </Link>
      <RxHamburgerMenu className="headermemu" size={22} />
    </div>
  );
}

export default Header;
