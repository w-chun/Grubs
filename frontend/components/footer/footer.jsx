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
              <li><a href="https://w-chun.github.io/portfolio/" target="_blank">About Grubs</a></li>
              <li><a>Careers</a></li>
              <li><a>Press</a></li>
              <li><a>Investor Relations</a></li>
              <li><a>Content Guidelines</a></li>
              <li><a>Terms of Service</a></li>
              <li><a>Privacy Policy</a></li>
              <li><a>Ad Choices</a></li>
            </ul>
          </div>
          <div className="footer-menu">
            <ul>
              <h3>Discover</h3>
              <li><a href="https://w-chun.github.io/portfolio/" target="_blank">The Local Grubs</a></li>
              <li><a>Grubs Blog</a></li>
              <li><a>Support</a></li>
              <li><a>Grubs Mobile</a></li>
              <li><a>Developer</a></li>
              <li><a>RSS</a></li>
            </ul>
          </div>
          <div className="footer-menu">
            <ul>
              <h3>Grubs for Business Owners</h3>
              <li><a href="https://w-chun.github.io/portfolio/" target="_blank">Claim your Business Page</a></li>
              <li><a>Advertise on Grubs</a></li>
              <li><a>Grubs Reservations</a></li>
              <li><a>Business Success Stories</a></li>
              <li><a>Business Support</a></li>
              <li><a>Grubs Blog For Business Owners</a></li>
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
