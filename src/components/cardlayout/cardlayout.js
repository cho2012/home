import "./cardlayout.css";

function CardLayout() {
  return (
    <div className="cardlayout">
      <div className="wrap-cardlayout">
        <div className="layout-text">재용이의 코딩</div>
        <div className="Content">
          학생 개발자들을 위한 강의들 입니다
          <p>NEXON LV1 Gothic OTF 22px 150% #666</p>.
        </div>
        <div className="cardLayer-grp">
          {cards.map((card) => (
            <div className="cardLayer-grp-card">
              <div
                className="cardLayer-grp-card-image"
                style={{ backgroundImage: `url(${card.url})` }}
              ></div>
              <div className="cardLayer-grp-card-title">{card.title}</div>
              <div className="cardLayer-grp-card-content">{card.content}</div>

              <div className="cardLayer-grp-card-link">더 자세히 보기</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardLayout;

const cards = [
  {
    url: "https://i.imgur.com/JUO7khG.png",
    title: "웹표준 사이트 만들기",
    content:
      "사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을 익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를 통해 사이트를 만드는 사이",
  },
  {
    url: "https://i.imgur.com/0I0e92I.png",
    title: "웹표준 사이트 만들기",
    content:
      "사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을 익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를 통해 사이트를 만드는 사이",
  },
  {
    url: "https://i.imgur.com/2f098WG.png",
    title: "웹표준 사이트 만들기",
    content:
      "사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을 익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를 통해 사이트를 만드는 사이",
  },
];
