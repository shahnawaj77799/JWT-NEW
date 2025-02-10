

import React from 'react';

const Footer = () => {
  return (
    <>
      <style>
        {`
          .footer {
            background-color: #222;
            color: #fff;
            padding: 20px;
            text-align: center;
            font-size: 16px;
            position: relative;
            bottom: 0;
            width: 100%;
          }

          .footer hr {
            border: 0;
            border-top: 1px solid #444;
            margin: 20px 0;
          }

          .footer .footer-text {
            font-size: 14px;
            color: #aaa;
            margin: 0;
          }

          .footer .footer-links {
            margin: 20px 0;
            display: flex;
            justify-content: center;
            gap: 20px;
          }

          .footer .footer-links a {
            text-decoration: none;
            color: #fff;
            font-size: 14px;
            transition: color 0.3s;
          }

          .footer .footer-links a:hover {
            color: #1e90ff;
          }

          .footer .social-media {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin: 10px 0;
          }

          .footer .social-media a {
            font-size: 20px;
            color: #fff;
            transition: color 0.3s;
          }

          .footer .social-media a:hover {
            color: #1e90ff;
          }

          .footer .address {
            margin-top: 20px;
            font-size: 14px;
            color: #aaa;
          }

          /* Responsive design */
          @media (max-width: 768px) {
            .footer {
              padding: 10px;
              font-size: 14px;
            }

            .footer .footer-links a {
              font-size: 12px;
            }

            .footer .social-media a {
              font-size: 18px;
            }
          }

          @media (max-width: 480px) {
            .footer {
              padding: 8px;
              font-size: 12px;
            }

            .footer .footer-links a {
              font-size: 10px;
            }

            .footer .social-media a {
              font-size: 16px;
            }
          }
        `}
      </style>
      <footer className="footer">
        <hr />
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact Us</a>
        </div>

        {/* <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">F</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">T</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">L</a>
        </div> */}

        <p className="footer-text">www.mycompany.com All rights reserved. 2025</p>

        <div className="address">
          <p>123 Business Street, City, Country</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
