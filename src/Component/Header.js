import React from "react";
import { Link } from "react-router-dom";
import logo from "./Images/logo.png";
import Modal from "./Modal";
import Modal2 from "./Modal2";


const Header = () => {
 
  return (
    <>
      <div className="wrap1">
        <div
          className="container
        "
        >
          <div className="row">
            <div className="col-md-6 col-lg-2 col-6 btn1">
              <nav className="navbar navbar-expand-lg bg-light">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon icon"></span>
                </button>
              </nav>
            </div>
            <div className="col-md-6 col-lg-6 col-6 logo">
              <Link to={"/"}>
                <img src={logo} alt="" className="lo" />
              </Link>
            </div>
            <div className=" col-lg-6 button ">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#Backdrop"
              >
                Unlock wallet
              </button>
              {/* <!-- Modal --> */}
              <Modal />
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  bag1 ">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Nftshop"}>
                  Nftshop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Nftecosystem"}>
                  NftEcosystem
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  Games
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  IWO
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  Knight
                </Link>
              </li>
              <li className="nav-item abs">
                <Link className="nav-link" to={"/"}>
                  Spell Inventory
                </Link>
                <div class="dropdown-contentS">
                  <a href="/">MANA POOLS</a>
                  <a href="/">GOLD FARMS</a>
                  <a href="/">WIZ PAPER</a>
                  <a href="/">PITCH</a>
                  <a href="/">FAQ</a>
                  <a href="/">PARTNERS</a>
                  <a href="/">OUR TEAM</a>
                  <a href="/">AUDIT</a>
                </div>
              </li>
            </ul>
            <button
              className="btn-collapse"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#Backdrop2"
            >
              Unlock wallet
            </button>
            <Modal2 />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
