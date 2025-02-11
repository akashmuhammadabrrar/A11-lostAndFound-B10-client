import React from "react";
import icon from "../../assets/icon_them_bg.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 mt-40 w-[100%] mx-auto">
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
        <Link to="/marketing" className="link link-hover font-bold">
          Marketing
        </Link>
        <Link to="/advertisement" className="link link-hover font-bold">
          Advertisement
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to="/about" className="link link-hover font-bold">
          About us
        </Link>
        <Link className="link link-hover font-bold">Contact</Link>
        <Link to="/jobs" className="link link-hover font-bold">
          Blogs
        </Link>
      </nav>
      <nav>
        <Link className="link link-hover font-bold">Privacy policy</Link>
        <Link className="link link-hover font-bold">Cookie policy</Link>
      </nav>
    </footer>
  );
};

export default Footer;
