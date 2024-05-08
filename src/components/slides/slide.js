import { useState } from "react";

function Slide({ next, prev, play, pause, isPlay, activeSlide }) {
  // console.log("isPlay", isPlay);
  const [isActive] = useState(false);

  return (
    <div>
      <div className="slides">
        <div onClick={prev} className="arrow"></div>
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
            <div
              className="pageSelecter"
              style={
                0 === activeSlide
                  ? { border: "solid 9px white", height: "0px", width: "0px" }
                  : {}
              }
            ></div>
            <div
              className="pageSelecter"
              style={
                1 === activeSlide
                  ? { border: "solid 9px white", height: "0px", width: "0px" }
                  : {}
              }
            ></div>
            <div
              className="pageSelecter"
              style={
                2 === activeSlide
                  ? { border: "solid 9px white", height: "0px", width: "0px" }
                  : {}
              }
            ></div>
            {isPlay ? (
              <div onClick={pause} className="pause"></div>
            ) : (
              <div onClick={play} className="play"></div>
            )}
          </div>
        </div>
        <div onClick={next} className="arrow rotete-half"></div>
      </div>
    </div>
  );
}

export default Slide;
