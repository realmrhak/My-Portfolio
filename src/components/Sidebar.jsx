import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaChevronDown,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import avatar from "../assets/images/my-avatar.png";

const Sidebar = () => {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <aside className={`sidebar ${showContacts ? "active" : ""}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={avatar} alt="Haroon Ameer" className="avatar-img" />
        </figure>

        <div className="info-content">
          <h1 className="name">Haroon Ameer Khan</h1>
          <p className="title">Full Stack MERN Developer</p>
        </div>

        <button
          className="info_more-btn"
          onClick={() => setShowContacts(!showContacts)}
        >
          <FaChevronDown />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list list-unstyled mb-0">
          {/* Email — <a> (external) */}
          <li className="contact-item">
            <div className="icon-box">
              <FaEnvelope />
            </div>
            <div className="contact-info">
              <p className="contact-title">EMAIL</p>
              <div className="custom-tooltip-wrapper">
                <a href="mailto:realmrhak07@gmail.com" className="contact-link">
                  realmrhak07@gmail.com
                </a>
                <div className="custom-tooltip">realmrhak07@gmail.com</div>
              </div>
            </div>
          </li>

          {/* Phone — <a> (external) */}
          <li className="contact-item">
            <div className="icon-box">
              <FaPhoneAlt />
            </div>
            <div className="contact-info">
              <p className="contact-title">PHONE</p>
              <a href="tel:+923244806293" className="contact-link">
                +92 3244806293
              </a>
            </div>
          </li>

          {/* Birthday */}
          <li className="contact-item">
            <div className="icon-box">
              <FaCalendarAlt />
            </div>
            <div className="contact-info">
              <p className="contact-title">BIRTHDAY</p>
              <p className="contact-link mb-0">August 29, 2003</p>
            </div>
          </li>

          {/* Location */}
          <li className="contact-item">
            <div className="icon-box">
              <FaMapMarkerAlt />
            </div>
            <div className="contact-info">
              <p className="contact-title">LOCATION</p>
              <p className="contact-link mb-0">Lahore, Punjab, Pakistan</p>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        {/* Social Icons — <a> for external links */}
        <ul className="social-list list-inline mb-0">
          <li className="list-inline-item mr-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>

          <li className="list-inline-item mr-3">
            <a
              href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGc7wuNHnYr6gAAAZ6X8dGgb6CHNDZRUbxiR28463iA1PdlTTCrOiGyScLwMnekS_4fUkCr8hvIoQTUqiKbBQho_pa5fzK7pLFf-fayUowzx-QOybbCRhDtye5IDMIDQehCtdw=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fharoon-ameer-khan-057a282b1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>

          <li className="list-inline-item">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
