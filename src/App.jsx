import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomePage from "./components/HomePage";
import MyProfile from "./components/MyProfile";
import { Component } from "react";

class App extends Component {
  state = {
    currentPage: "home",
  };

  togglePage = () => {
    this.setState({
      currentPage: this.state.currentPage === "home" ? "profile" : "home",
    });
  };

  render() {
    return (
      <>
        {this.state.currentPage === "profile" ? (
          <MyProfile togglePage={this.togglePage} />
        ) : (
          <HomePage togglePage={this.togglePage} />
        )}
      </>
    );
  }
}

export default App;
