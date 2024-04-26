import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./components/MyNavbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyFooter from "./components/MyFooter";
import MyMenuGenre from "./components/MyMenuGenre";
import Courusel from "./components/Courusel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <>
      <MyNavBar />
      <MyMenuGenre />
      <Courusel url="Batman" />
      <Courusel url="Avengers" />
      <Courusel url="Harry Potter" />
      <MyFooter />
    </>
  );
}

export default App;
