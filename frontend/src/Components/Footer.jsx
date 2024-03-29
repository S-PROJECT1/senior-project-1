import React from 'react';
import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        {/* <img src ={img}/> */}
        <p className="footer-links">
          <a href="#" className="link-1">Home</a>
          <a href="#">About</a>
          <a href="#">handmade</a>
          <a href="#">handwork</a>

        </p>
        <p className="footer-company-name">Handi Home © 2023</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p><span>Handi Home</span></p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p>+216 98.462.247</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p><a href="mailto:support@company.com">support@Handi_Home.com</a></p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About Us</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>
       
      </div>
    </footer>
  );
};

export default Footer;