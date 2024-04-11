import "./App.css";
import Header from "./components/header/header";
import Slides from "./components/slides/slides";
import Imagegallery from "./components/imagegallery/imagegallery";
import ImgText from "./components/imgText/imgText";
import CardLayout from "./components/cardlayout/cardlayout";

function App() {
  return (
    <div>
      <Header />
      <Slides />
      <Imagegallery />
      <ImgText />
      <CardLayout />
    </div>
  );
}

export default App;
