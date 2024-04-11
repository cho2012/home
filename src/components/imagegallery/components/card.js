import "./card.css";
function Card({ bgImg, title, text }) {
  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}
    >
      <div className="card-content-wrap">
        <div className="card-title">{title}</div>
        <div className="card-text">{text}</div>
        <div className="card-button">자세히 보기</div>
      </div>
    </div>
  );
}

export default Card;
