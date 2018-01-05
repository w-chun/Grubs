import React from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component{
  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="footer-menu">
            <ul>
              <h3>About Me</h3>
              <li><a href="https://w-chun.github.io/portfolio/" target="_blank"><div className="website"></div></a></li>
            </ul>
          </div>
          <div className="footer-menu">
            <ul>
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/wilson-chun/" target="_blank"><div className="linkedin"></div></a>
            </ul>
          </div>
          <div className="footer-menu">
            <ul>
              <h3>Github</h3>
              <a href="https://github.com/w-chun" target="_blank"><div className="github"></div></a>
            </ul>
          </div>
        </div>
        <div className="footer-img-container">
          <div className="footer-image"></div>
        </div>
      </div>
    );
  }
}

// <div className="linkedin-github">
//   <div className="footer-menu">
//     <ul>
//       <h3>LinkedIn</h3>
//       <a href="https://www.linkedin.com/in/wilson-chun/" target="_blank"><div className="linkedin"></div></a>
//     </ul>
//   </div>
//   <div className="footer-menu">
//     <ul>
//       <h3>Github</h3>
//       <li><a href="https://github.com/w-chun" target="_blank">
//         <div className="github"></div>
//           </a></li>
//     </ul>
//   </div>
// </div>
