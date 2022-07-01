import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="footer p-10 bg-neutral text-neutral-content">
        <div>
          <span class="footer-title">Copyrights</span>
          <h2 className="text-xl font-bold">Copyrights By &copy; Aziz Prithibee</h2>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <li>Resume</li>
          <li>Services</li>
          <li>Portfolio</li>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
