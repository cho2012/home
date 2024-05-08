import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import PetWorld from "./pages/imageGalleryDetail/petWorld";
import Carisma_cat from "./pages/imageGalleryDetail/carisma_cat";
import Refrenc from "./pages/imgTextDetail/refrenc";
import Tutorial from "./pages/imgTextDetail/tutorial";
import Header from "./pages/headerDetail/header";
import Silde from "./pages/headerDetail/sildes";
import Banner from "./pages/headerDetail/banner";
import Content from "./pages/headerDetail/contents";
import Footer from "./pages/headerDetail/footer";
import Login from "./pages/headerDetail/login";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Main />} />
          <Route path="pet" element={<PetWorld />} />
          <Route path="carisma_cat" element={<Carisma_cat />} />
          <Route path="refrenc" element={<Refrenc />} />
          <Route path="tutorial" element={<Tutorial />} />
          <Route path="header" element={<Header />} />
          <Route path="slider" element={<Silde />} />
          <Route path="banner" element={<Banner />} />
          <Route path="content" element={<Content />} />
          <Route path="footer" element={<Footer />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
