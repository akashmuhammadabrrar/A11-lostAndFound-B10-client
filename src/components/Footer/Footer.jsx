import React from "react";
import icon from "../../assets/icon_them_bg.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 mt-40">
      <aside>
        <Link to="/">
          <img src={icon} alt="" />
        </Link>
        <p>
          Query Stuff Industries Ltd.
          <br />
          Providing reliable services since 2024.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to="/about" className="link link-hover font-bold">
          About us
        </Link>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
      </nav>
      <nav>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
