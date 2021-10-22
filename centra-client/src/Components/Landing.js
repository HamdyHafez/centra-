import React, { Component } from "react";
import M from "materialize-css";
import Carousel from "./Carousel";
import Contact from "./Email";
import parallax1 from "../media/8.png";
import parallax2 from "../media/16.jpg";
import parallax3 from "../media/4.png";
import Row1 from "./Row1";
import catalouge from "../media/cata2021.pdf";
import PopUp from "./Popup"

class Parallax extends Component {
  state = { width: -1, height: -1, slideIndex: 1, slides: [], dots: [] };

  getWindowDimension = () => {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    return { width, height };
  };

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".parallax");
      var instances = M.Parallax.init(elems, true);
    });
    var result = this.getWindowDimension();

    this.setState({ width: result.width, height: result.height });

    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".collapsible");
      var instances = M.Collapsible.init(elems, true);
      var instance_ = M.Carousel.init({
        fullWidth: true,
        indicators: true,
      });
    });

    console.log(this.state.slideIndex);
  }

  render() {
    //Desktop Version
    return (
      <div className="">
        <div class="parallax-container">
          <div class="parallax">
            <img src={parallax1} alt="parallax1" />
          </div>
        </div>
        <div class="section white">
          <div class="row container">
            <Row1 />
          </div>
        </div>
        <div class="parallax-container">
          <div class="parallax">
            <img src={parallax3} alt="parallax2" />
          </div>
        </div>
        <div class="section white">
          <div class="row container">
            <div className="row">
              <h2>Our Products</h2>
            </div>
            <Carousel />
            <h6 className="flow-text">
              To view all our products, check Centra{" "}
              <a  href={catalouge}> Catalogue</a>{" "}
            </h6>
          </div>
        </div>

        <div class="parallax-container">
          <div class="parallax">
            <img src={parallax2} alt="parallax3" />
          </div>
        </div>
        <div class="section white">
          <div class="row container">
            <Contact />
          </div>
        </div>
        <PopUp/>
      </div>
    );
  }
}

export default Parallax;
