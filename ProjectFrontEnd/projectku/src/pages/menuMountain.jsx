import React, { Component } from "react";

class MenuMountain extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          src="https://images.unsplash.com/photo-1536244881128-90b1d3d2549f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1993&q=80"
          style={{ width: "100%", height: "25pc" }}
        />

        {/* Harusnya card */}
        <div style={{ display: "flex" }}>
          <div class="card">
            <img
              src="https://www.polygonbikes.com/wp-content/uploads/2018/03/COLLOSUS_DH-LITE_P.png"
              style={{ width: "100%" }}
            />
            <div class="container">
              <h4 style={{ textAlign: "center", fontFamily: "Lato" }}>
                <b>XQUARONE DH9</b>
              </h4>
              <center>
                <p>nnononoono</p>
              </center>
              <center>
                <h4>Rp. 75.000.000</h4>
              </center>
            </div>
          </div>

          <div class="card">
            <img
              src="https://www.polygonbikes.com/wp-content/uploads/2018/03/COLLOSUS_DH9_TOSCA_P.png"
              style={{ width: "100%" }}
            />
            <div class="container">
              <h4 style={{ textAlign: "center" }}>
                <b>Helios LT9X</b>
              </h4>
              <center>
                <p>nnononoono</p>
              </center>
              <center>
                <h4>Rp. 75.000.000</h4>
              </center>
            </div>
          </div>

          <div class="card">
            <img
              src="https://www.polygonbikes.com/wp-content/uploads/2018/08/XQUARONE_EX_DH_P.png"
              style={{ width: "100%" }}
            />
            <div class="container">
              <h4 style={{ textAlign: "center" }}>
                <b>Helios LT9X</b>
              </h4>
              <center>
                <p>nnononoono</p>
              </center>
              <center>
                <h4>Rp. 75.000.000</h4>
              </center>
            </div>
          </div>
        </div>

        {/* Harusnya card */}
        <div style={{ display: "flex" }}>
          <div class="card">
            <img
              src="https://www.polygonbikes.com/wp-content/uploads/2018/03/2018_XQUARONE_EX8_RED_1.png"
              style={{ width: "100%" }}
            />
            <div class="container">
              <h4 style={{ textAlign: "center", fontFamily: "Lato" }}>
                <b>XQUARONE DH9</b>
              </h4>
              <center>
                <p>nnononoono</p>
              </center>
              <center>
                <h4>Rp. 75.000.000</h4>
              </center>
            </div>
          </div>

          <div class="card">
            <img
              src="https://www.polygonbikes.com/wp-content/uploads/2019/11/MY19-XQUARONE-EX7-SLX.png"
              style={{ width: "100%" }}
            />
            <div class="container">
              <h4 style={{ textAlign: "center" }}>
                <b>Helios LT9X</b>
              </h4>
              <center>
                <p>nnononoono</p>
              </center>
              <center>
                <h4>Rp. 75.000.000</h4>
              </center>
            </div>
          </div>

          <div class="card">
            <img
              src="https://www.polygonbikes.com/wp-content/uploads/2018/07/SISKIU_N9_P2.png"
              style={{ width: "100%" }}
            />
            <div class="container">
              <h4 style={{ textAlign: "center" }}>
                <b>Helios LT9X</b>
              </h4>
              <center>
                <p>nnononoono</p>
              </center>
              <center>
                <h4>Rp. 75.000.000</h4>
              </center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuMountain;
