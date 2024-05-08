import Header from "../components/header/header";
import Slides from "../components/slides/slides";
import Imagegallery from "../components/imagegallery/imagegallery";
import ImgText from "../components/imgText/imgText";
import CardLayout from "../components/CardLayout/cardlayout";
import Banner from "../components/banner/banner";
import Text_section from "../components/text_section/text_section";
import React from "react";
import Slider from "react-slick";

function Main() {
  return (
    <div>
      <Header />
      <Slides />
      <Imagegallery />
      <ImgText />
      <CardLayout />
      <Banner />
      <Text_section />
    </div>
  );
}

export default Main;
