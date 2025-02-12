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
              <div className="container-box">
                <div className="main-section"></div>
                <div className="info-section">
                  <div className="info-card">
                    <h3>LOREM IPSUM</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt.
                    </p>
                  </div>
                  <div className="info-card">
                    <h3>LOREM IPSUM</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt.
                    </p>
                  </div>
                  <div className="info-card">
                    <h3>LOREM IPSUM</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt.
                    </p>
                  </div>
                  <div className="info-card">
                    <h3>LOREM IPSUM</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt.
                    </p>
                  </div>
                </div>
              </div>
              {/*  */}
              <div class="obj">
                <div class="objchild">
                  <span class="inn6"></span>
                </div>
              </div>
              <div className="mySocialMedia">
                <div class="card">
                  <ul>
                    <li class="iso-pro">
                      <span></span>
                      <span></span>
                      <span></span>
                      <a href={"https://t.me/DARKEN_AE"}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="100"
                          height="100"
                          viewBox="0 0 24 24"
                          className="svg"
                        >
                          <path
                            d="M2.926,13.098l3.085,1.209c0.326,0.128,0.578,0.395,0.688,0.727l1.287,3.918	c0.274,0.835,1.301,1.134,1.98,0.576l2.228-1.829c0.282-0.232,0.692-0.22,0.961,0.028l2.851,2.63	c1.035,0.955,2.716,0.408,2.991-0.973l2.979-14.961c0.186-0.935-0.747-1.698-1.627-1.33l-17.454,7.3	C1.687,10.9,1.706,12.62,2.926,13.098z"
                            opacity=".35"
                          ></path>
                          <path d="M11.458,16.271l6.99-9.163c0.328-0.43-0.211-0.982-0.648-0.665L6.467,14.645c0.098,0.115,0.184,0.242,0.232,0.389	l1.287,3.918c0.126,0.383,0.413,0.647,0.75,0.773C9.639,19.981,11.458,16.271,11.458,16.271z"></path>
                        </svg>
                      </a>
                      <div class="text">Telegram</div>
                    </li>
                    <li class="iso-pro">
                      <span></span>
                      <span></span>
                      <span></span>
                      <a href={"http://tiktok.com/@darken_ae"}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="100"
                          height="100"
                          viewBox="0 0 30 30"
                          className="svg"
                        >
                          <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.104,4,24,4z M22.689,13.474 c-0.13,0.012-0.261,0.02-0.393,0.02c-1.495,0-2.809-0.768-3.574-1.931c0,3.049,0,6.519,0,6.577c0,2.685-2.177,4.861-4.861,4.861 C11.177,23,9,20.823,9,18.139c0-2.685,2.177-4.861,4.861-4.861c0.102,0,0.201,0.009,0.3,0.015v2.396c-0.1-0.012-0.197-0.03-0.3-0.03 c-1.37,0-2.481,1.111-2.481,2.481s1.11,2.481,2.481,2.481c1.371,0,2.581-1.08,2.581-2.45c0-0.055,0.024-11.17,0.024-11.17h2.289 c0.215,2.047,1.868,3.663,3.934,3.811V13.474z"></path>
                        </svg>
                      </a>
                      <div class="text">Tiktok</div>
                    </li>
                    <li class="iso-pro">
                      <span></span>
                      <span></span>
                      <span></span>
                      <a
                        href={
                          "https://www.instagram.com/darken_ae?igsh=MXh3cGdiM3RqNjdkeQ=="
                        }
                      >
                        <svg
                          class="svg"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                        </svg>
                      </a>
                      <div class="text">Instagram</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
