import React from 'react';
import { NavLink } from 'react-router-dom';
import './styling/Footer.css';

const Footer = () => {
  return(
    <div className="footer_container">
      <div className="footer">
        <div className="developer_info">
          Developed by
        </div>
        <a href="https://github.com/ebtayara" target="_blank">
            <div className = "github_icon_container">
              <div className = "github_icon">
                <i class="fab fa-github"></i>
              </div>
            </div>
        </a>
        <a href="https://www.linkedin.com/in/ebrahim-tayara-b9b50871/" target="_blank">
            <div className = "linkedin_icon_container">
              <div className = "linkedin_icon">
                <i class="fab fa-linkedin"></i>
              </div>
            </div>
        </a>
      </div>
    </div>
  )
}

export default Footer
