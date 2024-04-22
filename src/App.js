import "./App.css";
import Header from "./components/header/header";
import Slides from "./components/slides/slides";
import Imagegallery from "./components/imagegallery/imagegallery";
import ImgText from "./components/imgText/imgText";
import CardLayout from "./components/CardLayout/cardlayout";
import Banner from "./components/banner/banner";

function App() {
  return (
    <div>
      <Header />
      <Slides />
      <Imagegallery />
      <ImgText />
      <CardLayout />
      <Banner />
    </div>
  );
}

export default App;
