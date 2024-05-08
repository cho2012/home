import { Link } from "react-router-dom";

function Card({ imgURL, btnName, btnColor, url }) {
  return (
    <div
      className="Imgbox card-Img"
      style={{ backgroundImage: `url(${imgURL})` }}
    >
      <Link
        to={url}
        className="round-btn"
        style={{ backgroundColor: btnColor }}
      >
        {btnName}
      </Link>
    </div>
  );
}

export default Card;
