import React from "react";
import logo from "../assets/logo.svg";
import "./MainPage.css";
import { CgMenuMotion } from "react-icons/cg";
import apple from "../assets/apple.png";
import google from "../assets/google.png";
import { FaInstagram } from "react-icons/fa6";
import { RxTwitterLogo } from "react-icons/rx";
import { TiSocialFacebook } from "react-icons/ti";
import topimg from "../assets/topimg.png";
import hdr from "../assets/hdrbackground.svg";
import background from "../assets/background.svg";
import imagetwo from "../assets/imagetwo.png";
import textimg from "../assets/textimg.svg";
const MainPage = () => {
  return (
    <>
      <div style={{marginTop:"140px"}} className="desktop-main">
        <h2 className="display-desktop">
          Kindly use the MOBILE VIEW to access the website Thank you,
          <br /> Have a great day.
          {/* <span>😊</span> */}
        </h2>
      </div>
      <div className="main-page">
        <img src={hdr} alt="reunirts" className="hdr-img" />
        <div className="main-hdr">
          <img src={logo} alt="reunirts" className="page-logo" />
          <CgMenuMotion className="main-menu" />
        </div>
        <img src={topimg} alt="reunirts" className="image-one" />
        {/* <div className="background-main"> */}
        <img src={background} alt="reunirts" className="background" />
        {/* </div> */}
        <div className="section-two">
          <p className="main-text1">
            The wait is almost over!
            <br />
            <span className="main-text2">Our app is coming soon.</span>
          </p>
          <span className="main-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan.
          </span>
          <img src={textimg} alt="text" className="textbox" />

          {/* <div className="gradientBorderBox">
          <p className="gradientBorder">The wait is almost over!<b/>
          Our app is coming soon.</p>
        </div> */}
          <div className="downloads">
            <p className="download-ttl">Available Soon On</p>
            <div className="download-main">
              <img src={apple} alt="apple" className="applestore" />
              <img src={google} alt="google" className="googleplay" />
            </div>
          </div>

          <div className="section-three">
            <p className="title-text1">
              Putting the {""}
              <span className="title-text2">Radiance</span>
              <span className="title-text3">Back in Your Smile.</span>
            </p>
            <span className="app-desc">
              The app is seamlessly integrated with the appointment scheduling
              system, allowing users to easily schedule and manage appointments
              with their dentist.
            </span>
          </div>
        </div>
        <img src={imagetwo} alt="reunirts" className="imgtwo" />

        <span className="footer-main">
          <span className="footer-logo">
            <FaInstagram className="insta" />
            <RxTwitterLogo className="twitter" />
            <TiSocialFacebook className="facebk" />
          </span>
          <span className="footer">
            <span className="terms">Privacy Poilcy</span>
            <span className="terms">Terms & Conditions</span>
            <span className="terms">Help</span>
          </span>
        </span>
      </div>
    </>
  );
};

export default MainPage;
