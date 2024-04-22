import Padding from "../../padding";
function Card({ card }) {
  return (
    <div className="cardLayer-grp-card">
      <div
        className="cardLayer-grp-card-image"
        style={{ backgroundImage: `url(${card.url})` }}
      ></div>

      <div style={{ padding: "12px" }}>
        <div className="cardLayer-grp-card-title">{card.title}</div>
        <Padding />
        <div className="cardLayer-grp-card-content">{card.content}</div>
        <Padding />
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="cardLayer-grp-card-link">더 자세히 보기</div>
          <Padding width="0.7rem" />
          <div className="long-arrow"></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
