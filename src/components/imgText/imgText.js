import "./imgText.css";
import card from "./components/card";
import Card from "./components/card";

function ImgText() {
  return (
    <div className="ImgText">
      <div className="ImgText-wrap">
        <div className="Textbox">
          <div className="Textbox2">
            <div className="Textbox-big">유용한 사이트 살펴보기</div>
            <div className="Textbox-s1">
              <p>웹디자이너, 웹퍼블리셔, 프로트앤드</p>
              <p>개발자를 위한유용한사이트입니다.</p>
              <div className="Textbox-s2">
                <p>•튜토리얼 사이트</p>
                <p>•레퍼런스 사이트</p>
                <p>•웹폰트 사이트</p>
                <p>•css 사이트</p>
                <p>•webgl 사이트</p>
                <p>•Youtube 사이트</p>
              </div>
            </div>
          </div>
        </div>
        <Card
          imgURL="https://i.imgur.com/xIsyWJ5.png"
          btnName="레퍼런트 사이트"
          btnColor="#7C2B29"
        />
        <Card
          imgURL="https://i.imgur.com/uzGz8hO.png"
          btnName="튜토리얼 사이트"
          btnColor="#2B387C"
        />
      </div>
    </div>
  );
}

export default ImgText;
