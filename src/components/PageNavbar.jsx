import { NavLink } from "react-router-dom";

const PageNavbar = () => {
  return (
    <div className="content-topbar">
      <ul className="topbar-list">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "topbar-link active" : "topbar-link"
            }
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive ? "topbar-link active" : "topbar-link"
            }
          >
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "topbar-link active" : "topbar-link"
            }
          >
            Services
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? "topbar-link active" : "topbar-link"
            }
          >
            Portfolio
          </NavLink>
        </li>

        {/* <li>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "topbar-link active" : "topbar-link"
            }
          >
            Blog
          </NavLink>
        </li> */}

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "topbar-link active" : "topbar-link"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default PageNavbar;
