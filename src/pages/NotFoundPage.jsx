import React, { Component } from "react";
import "./NotFound.scss";
import { Link } from "react-router-dom";

export class NotFoundPage extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="not-found-page">
            <div className="main_wrapper">
              <div className="main">
                <div className="antenna">
                  <div className="antenna_shadow" />
                  <div className="a1" />
                  <div className="a1d" />
                  <div className="a2" />
                  <div className="a2d" />
                  <div className="a_base" />
                </div>
                <div className="tv">
                  <div className="cruve">
                    <svg
                      className="curve_svg"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 189.929 189.929"
                      xmlSpace="preserve"
                    >
                      <path
                        d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
        C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
                      />
                    </svg>
                  </div>
                  <div className="display_div">
                    <div className="screen_out">
                      <div className="screen_out1">
                        <div className="screen">
                          <span className="notfound_text"> NOT FOUND</span>
                        </div>
                        <div className="screenM">
                          <span className="notfound_text"> NOT FOUND</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lines">
                    <div className="line1" />
                    <div className="line2" />
                    <div className="line3" />
                  </div>
                  <div className="buttons_div">
                    <div className="b1">
                      <div />
                    </div>
                    <div className="b2" />
                    <div className="speakers">
                      <div className="g1">
                        <div className="g11" />
                        <div className="g12" />
                        <div className="g13" />
                      </div>
                      <div className="g" />
                      <div className="g" />
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <div className="base1" />
                  <div className="base2" />
                  <div className="base3" />
                </div>
              </div>
              <div className="text_404">
                <div className="text_4041">4</div>
                <div className="text_4042">0</div>
                <div className="text_4043">4</div>
              </div>
            </div>
            <Link to={"/"}>
              <button class="animated-button">
                <svg
                  viewBox="0 0 24 24"
                  class="arr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span class="text">Back to Home</span>
                <span class="circle"></span>
                <svg
                  viewBox="0 0 24 24"
                  class="arr-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </button>
            </Link>
            <div class="card">
              <div class="wrap">
                <div class="terminal">
                  <hgroup class="head">
                    <p class="title">
                      <svg
                        width="16px"
                        height="16px"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                      >
                        <path d="M7 15L10 12L7 9M13 15H17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"></path>
                      </svg>
                      DARKEN AE
                    </p>

                    <button class="copy_toggle" tabindex="-1" type="button">
                      <svg
                        width="16px"
                        height="16px"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                      >
                        <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
                        <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                      </svg>
                    </button>
                  </hgroup>

                  <div class="body">
                    <pre class="pre">
                      <code>-&nbsp;</code>
                      <code>AE&nbsp;</code>
                      <code
                        class="cmd"
                        data-cmd="You are the best EDITOR."
                      ></code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NotFoundPage;
