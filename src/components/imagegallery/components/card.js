import "./card.css";
import { Link } from "react-router-dom";
function Card({ bgImg, title, text, url }) {
  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}
    >
      <div className="card-content-wrap">
        <div className="card-title">{title}</div>
        <div className="card-text">{text}</div>
        <Link to={url} className="card-button">
          자세히 보기
        </Link>
      </div>
    </div>
  );
}

export default Card;
