const Card = ({ title, content, icon, iconcoler }) => {
  return (
    <div className="tle">
      <div className="textsectionbougabbangtle" style={{ padding: "15px" }}>
        <div className="text_section_icon">
          <div
            style={{
              backgroundColor: `${iconcoler}`,
              borderRadius: "100%",
              display: "inline-block",
            }}
          >
            <div>{icon}</div>
          </div>
        </div>
        <div style={{ fontSize: "20px", paddingTop: "5px" }}>{title}</div>
        <div className="text_section_contents">{content}</div>
        <div className="text_section_button">더보기</div>
      </div>
    </div>
  );
};

export default Card;
