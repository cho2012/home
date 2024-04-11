function Card({ imgURL, btnName, btnColor }) {
  return (
    <div
      className="Imgbox card-Img"
      style={{ backgroundImage: `url(${imgURL})` }}
    >
      <div className="round-btn" style={{ backgroundColor: btnColor }}>
        {btnName}
      </div>
    </div>
  );
}

export default Card;
