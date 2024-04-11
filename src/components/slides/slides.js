import "./slides.css";

function Slides() {
  return (
    <div>
      <div className="slides">
        <div className="arrow"></div>
        <div className="contain">
          <div className="wrap">
            <section>
              <div className="subTitle">kids coding</div>
              <div className="Title">web design</div>
              <div className="content">
                <p>just do it</p>
                <p>그냥 디자인하는거야!</p>
                <p>우린 잘 할수 있으니까!</p>
              </div>
            </section>
            <div>
              <div className="buttonGrp">
                <div className="button">자세히 보기</div>
                <div className="button dark">사이트 보기</div>
              </div>
            </div>
          </div>
          <div className="pageSelecterGrp">
            <div className="pageSelecter selected"></div>
            <div className="pageSelecter"></div>
            <div className="pageSelecter"></div>
            <div className="play"></div>
            <div className="pause"></div>
          </div>
        </div>
        <div className="arrow"></div>
      </div>
    </div>
  );
}

export default Slides;
