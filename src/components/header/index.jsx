import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import "./Header.scss";

import HeaderLogo from "../assets/icon/logo_Brend.jpg";
import logoBrend2 from "../assets/icon/logoBrend2.jpg";
import HomeIcon from "../assets/icon/homeIcon.png";
import ShopIcon from "../assets/icon/shopIcon.png";
import PersonIcon from "../assets/icon/personIcon.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <header>
        <div className="container">
          <div className="header_logo2">
            <Link to={"/"}>
              <img className="headerLogo" src={logoBrend2} alt="logoBrend2" />
              <span>DARKEN AE</span>
            </Link>
          </div>
          {/* Menu toggle button */}
          <button className="menu-toggle" onClick={this.toggleMenu}>
            {this.state.isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav className={this.state.isOpen ? "open" : ""}>
            <div className="header_logo">
              <Link to={"/"}>
                <img className="headerLogo" src={HeaderLogo} alt="HeaderLogo" />
                <span>DARKEN AE</span>
              </Link>
            </div>
            <ul>
              <li>
                <Link to={"/"}>HOME</Link>
              </li>
              <li>
                <Link to={"/"}>ABOUT ME</Link>
              </li>
              <li>
                <Link to={"/"}>AE PRESSETS</Link>
              </li>
              <li>
                <Link to={"/"}>CONTACT</Link>
              </li>
            </ul>
            <div className="userLinks">
              <Link to={"/login"}>
                <img src={HomeIcon} alt="HomeIcon" />
              </Link>
              <Link to={"/login"}>
                <img src={ShopIcon} alt="ShopIcon" />
              </Link>
              <Link to={"/login"}>
                <img src={PersonIcon} alt="PersonIcon" />
              </Link>
            </div>
          </nav>
          <hr />
        </div>
      </header>
    );
  }
}

export default Header;
