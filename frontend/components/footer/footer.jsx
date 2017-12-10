import React from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component{
  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="footer-menu">
            <ul>
              <h3>About</h3>
              <li><a href="">About Grubs</a></li>
              <li><a href="">Careers</a></li>
              <li><a href="">Press</a></li>
              <li><a href="">Investor Relations</a></li>
              <li><a href="">Content Guidelines</a></li>
              <li><a href="">Terms of Service</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Ad Choices</a></li>
            </ul>
          </div>
          <div className="footer-menu">
            <ul>
              <h3>Discover</h3>
              <li><a href="">The Local Grubs</a></li>
              <li><a href="">Grubs Blog</a></li>
              <li><a href="">Support</a></li>
              <li><a href="">Grubs Mobile</a></li>
              <li><a href="">Developer</a></li>
              <li><a href="">RSS</a></li>
            </ul>
          </div>
          <div className="footer-menu">
            <ul>
              <h3>Grubs for Business Owners</h3>
              <li><a href="">Claim your Business Page</a></li>
              <li><a href="">Advertise on Grubs</a></li>
              <li><a href="">Grubs Reservations</a></li>
              <li><a href="">Business Success Stories</a></li>
              <li><a href="">Business Support</a></li>
              <li><a href="">Grubs Blog For Business Owners</a></li>
            </ul>
          </div>
          <div className="linkedin-github">
            <div className="footer-menu">
              <ul>
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/wilson-chun/" target="_blank"><div className="linkedin"></div></a>
              </ul>
            </div>
            <div className="footer-menu">
              <ul>
                <h3>Github</h3>
                <li><a href="https://github.com/w-chun" target="_blank">
                  <div className="github"></div>
                    </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
