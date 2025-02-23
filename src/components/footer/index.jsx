import React, { Component } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const BOT_TOKEN = "7761472526:AAG4llldleTeQ-glw-2TmuUlLYw1zhnINrM";
const CHAT_ID = "-4665797146";

class SubscribeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  handleChange = (e) => {
    this.setState({ email: e.target.value });
  };

  sendToTelegram = async (e) => {
    e.preventDefault();
    const { email } = this.state;

    if (!email) {
      alert("Iltimos, emailingizni kiriting!");
      return;
    }

    const message = `📩 Yangi obunachi: ${email}`;

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
      });

      alert("Email muvaffaqiyatli yuborildi!");
      this.setState({ email: "" });
    } catch (error) {
      console.error("Xatolik:", error);
      alert("Xatolik yuz berdi, qayta urinib ko'ring!");
    }
  };

  render() {
    return (
      <form onSubmit={this.sendToTelegram}>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={this.state.email}
          onChange={this.handleChange}
          required
        />
        <button type="submit">Subscribe Free</button>
      </form>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <h2>CONTACT US</h2>
          <div className="footer_contents">
            <div className="footer-content">
              <div className="sasdad">
                <SubscribeForm />
                <div className="my_links">
                  <div className="my-connects">
                    <h5>Phone :</h5>
                    <p>+998(95-255-70-**)</p>
                  </div>
                  <div className="my-connects">
                    <h5>Address :</h5>
                    <p>UZB</p>
                  </div>
                  <div className="my-connects">
                    <h5>Email :</h5>
                    <p>darken2005@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="social_media">
                <div className="social">
                  <ul>
                    CONTACT US
                    <li>
                      <Link to={"/"}>Contact us</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Delivery and return</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Terms and conditions</Link>
                    </li>
                    <li>
                      <Link to={"/"}>FAQs</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Accessibility</Link>
                    </li>
                  </ul>
                </div>
                <div className="social">
                  <ul>
                    CONTACT US
                    <li>
                      <Link to={"/"}>Contact us</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Delivery and return</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Terms and conditions</Link>
                    </li>
                    <li>
                      <Link to={"/"}>FAQs</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Accessibility</Link>
                    </li>
                  </ul>
                </div>
                <div className="social">
                  <ul>
                    CONTACT US
                    <li>
                      <Link to={"/"}>Contact us</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Delivery and return</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Terms and conditions</Link>
                    </li>
                    <li>
                      <Link to={"/"}>FAQs</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Accessibility</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div className="full_done">
              <p>Privacy Policy</p>
              <p>Copyright © 2024 COMPANY All rights reserved.</p>
              <p>Terms of Service</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
