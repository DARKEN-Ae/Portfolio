import React, { Component } from "react";

import starIcon from "../components/assets/icon/starIcon.png";
import myAvatar from "../components/assets/icon/logo_Brend.jpg";
import homeAvatarBorder from "../components/assets/img/homeRightImg.svg";
import signIcon from "../components/assets/icon/sign.svg";
import bigSign from "../components/assets/icon/bigSign.svg";

import "./Home.scss";

export class Home extends Component {
  render() {
    return (
      <div className="darken">
        <main className="section-one">
          <div className="container">
            <div className="home_section">
              <div className="section_left">
                <h1>
                  We Convert Concepts <span>Into Technology</span>
                </h1>
                <img className="starImg" src={starIcon} alt="starIcon" />
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam
                </p>
                <div className="two_btn">
                  <button className="btn_two">
                    <span>ABOUT ME</span>
                  </button>
                </div>
              </div>
              <div className="right_section">
                <img className="myAvatar" src={myAvatar} alt="myAvatar" />
                <img
                  className="homeAvatarBorder"
                  src={homeAvatarBorder}
                  alt="homeAvatarBorder"
                />
                {/* 2 */}
                <div class="button-container">
                  <button class="brutalist-button openai button-1">
                    <div class="openai-logo">
                      <img
                        className="ae_Icon"
                        src="https://i.ibb.co/pvmc6ByT/After-Effects-icon-for-editing.jpg"
                        alt=""
                      />
                    </div>
                    <div class="button-text">
                      <span>Powered By</span>
                      <span>DARKEN AE</span>
                    </div>
                  </button>
                </div>
                {/* done */}
              </div>
            </div>
          </div>
        </main>
        <div className="section-two">
          <div className="container">
            <div className="about-top">
              <img src={signIcon} alt="signIcon" />
              <img src={bigSign} alt="bigSign" />
              <img src={signIcon} alt="signIcon" />
            </div>
            <div className="about-two">
              <h1>Ensuring your Success Through Reliable IT Solution</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscip
              </p>
            </div>
            <div className="about-three">
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
