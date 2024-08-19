import { FaTwitter, FaGithub } from 'react-icons/fa';

import CoverImage from '../images/cover-image.jpg';
import ProfileImage from '../images/profile-image.png';

export const Header = () => {
  return (
    <header
      className="main-cover"
      style={{ backgroundImage: `url(${CoverImage})` }}
    >
      <div className="overlay" />
      <div className="container">
        <div className="display-table">
          <div className="display-table-contents">
            <div
              className="profile-thumb"
              style={{ backgroundImage: `url(${ProfileImage})` }}
            />
            <h1 className="title-text">Yoshiki Kuromori</h1>
            <h3 className="title-text">Engineer</h3>
            <ul className="social-icons">
              <li className="icon-link">
                <a href="https://twitter.com/techpit_jp">
                  <FaTwitter color="white" size="2rem" />
                </a>
              </li>
              <li className="icon-link">
                <a href="https://github.com/kuromon11">
                  <FaGithub color="white" size="2rem" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
