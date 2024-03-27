import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <span className="big">web</span>
        <span>site</span>
      </div>
      <nav className="nav">
        <div>header</div>
        <div>slides</div>
        <div>banner</div>
        <div>contents</div>
        <div>footer</div>
      </nav>
      <div className="login">로그인</div>
    </div>
  );
}

export default Header;
