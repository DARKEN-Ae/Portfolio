import React, { Component } from "react";
import "./Loading.scss";

export class Loading extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <div className="loader">
            <div class="pyramid-loader">
              <div class="wrapper">
                <span class="side side1"></span>
                <span class="side side2"></span>
                <span class="side side3"></span>
                <span class="side side4"></span>
                <span class="shadow"></span>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Loading;
