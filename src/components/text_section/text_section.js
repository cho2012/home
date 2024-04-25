import Card from "./components/card";
import "./text_section.css";
import { LuBookMarked } from "react-icons/lu";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { BsMouse3 } from "react-icons/bs";
import { PiSlideshowBold } from "react-icons/pi";
import { PiMessengerLogo } from "react-icons/pi";
import { BiMapPin } from "react-icons/bi";

// import Padding from "../padding";

function Text_section() {
  return (
    <div className="text_section_wrap">
      <div className="text_section_title_small">텍스트 섹션</div>
      <div className="text_section_title">자바스크립트를 익히는 방법</div>
      <div className="textblock">
        {textsectioncontents.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            content={card.contents}
            icon={card.icon}
            iconcoler={card.iconcolor}
          />
        ))}
      </div>
    </div>
  );
}

export default Text_section;

const textsectioncontents = [
  {
    title: "검색",
    contents:
      "이것은 자바스크립트의 기본 함수를 사용하여 검색기능을 구현하는 방법을 안내하는 튜토리얼입니다.이러한 함수들을 활용함으로써 간단하게 검색 기능을제작할 수 있습니다.",
    icon: <LuBookMarked size={34} style={{ padding: "0.5rem" }} />,
    iconcolor: "#fcfacb",
  },
  {
    title: "퀴즈",
    contents:
      "이것은 자바스크립트의 기본 함수를 사용하여 검색기능을 구현하는 방법을 안내하는 튜토리얼입니다.이러한 함수들을 활용함으로써 간단하게 검색 기능을제작할 수 있습니다.",
    icon: (
      <HiOutlinePresentationChartLine size={34} style={{ padding: "0.5rem" }} />
    ),
    iconcolor: "#babafd",
  },
  {
    title: "마우스",
    contents:
      "이것은 자바스크립트의 기본 함수를 사용하여 검색기능을 구현하는 방법을 안내하는 튜토리얼입니다.이러한 함수들을 활용함으로써 간단하게 검색 기능을제작할 수 있습니다.",
    icon: <BsMouse3 size={34} style={{ padding: "0.5rem" }} />,
    iconcolor: "#f7c8c9",
  },
  {
    title: "슬라이드",
    contents:
      "이것은 자바스크립트의 기본 함수를 사용하여 검색기능을 구현하는 방법을 안내하는 튜토리얼입니다.이러한 함수들을 활용함으로써 간단하게 검색 기능을제작할 수 있습니다.",
    icon: <PiSlideshowBold size={34} style={{ padding: "0.5rem" }} />,
    iconcolor: "#8eaaff",
  },
  {
    title: "패럴럭스",
    contents:
      "이것은 자바스크립트의 기본 함수를 사용하여 검색기능을 구현하는 방법을 안내하는 튜토리얼입니다.이러한 함수들을 활용함으로써 간단하게 검색 기능을제작할 수 있습니다.",
    icon: <PiMessengerLogo size={34} style={{ padding: "0.5rem" }} />,
    iconcolor: "#d8fada",
  },
  {
    title: "지도",
    contents:
      "이것은 자바스크립트의 기본 함수를 사용하여 검색기능을 구현하는 방법을 안내하는 튜토리얼입니다.이러한 함수들을 활용함으로써 간단하게 검색 기능을제작할 수 있습니다.",
    icon: <BiMapPin size={34} style={{ padding: "0.5rem" }} />,
    iconcolor: "#c8ffa8",
  },
];

// {title: "",contents: "",icon:"",iconcolor: ""}
