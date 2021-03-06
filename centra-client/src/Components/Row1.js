import React, { Component } from "react";
import "materialize-css";
//import newImage from "../media/21.jpg";

class Homepage extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m12 l12 xl12">
            <div>
              <h2
                style={{
                  margin: "1rem 0 1.4rem 0",
                  textAlign: "center",
                  color: "#1a237e",
                }}
              >
                <b> ABOUT US</b>
              </h2>
              <p class="flow-text" style={{ textAlign: "center" }}>
                Established in 2003, Centra is an independent, privately owned
                company, specialized in manufacturing and supplying disposable
                medical wearing apparel. Our production facility is equipped
                with technology for production of medical and hygienic products
                from non-woven textiles and updated on regular basis to meet the
                ever-changing requirements of the healthcare industry. The
                ability to customize our range of disposable kits as per
                customer's requirements has given us an edge over our
                competitors in the respective main.
              </p>
            </div>
          </div>
          {/* `<div className="col s12 m12 l6 xl6">
            <p className="Img_Home gradient-border">
              <img
                style={{ display: "inline-flex" }}
                src={newImage}
                max width="100%"
                height="auto"
                alt="centra"
                style={{borderRadius:"2%"}}
              ></img>
            </p>
          </div>`*/}
        </div>
      </div>
    );
  }
}

export default Homepage;
