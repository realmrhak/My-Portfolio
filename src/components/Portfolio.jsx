import { useMemo, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaChevronDown, FaBookOpen } from "react-icons/fa";
import PageNavbar from "./PageNavbar.jsx";

import { getAllProjects } from "../data/projectsData";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const projects = useMemo(() => {
    // Keep Portfolio card structure consistent with the rest of the UI
    return getAllProjects().map((p) => ({
      title: p.title,
      category: p.category,
      image: p.thumbnail,
      slug: p.slug,
      link: p.liveDemo,
    }));
  }, []);

  const filters = useMemo(
    () => ["All", "Full Stack", "AI Projects", "Frontend"],
    [],
  );

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter, projects]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [dropdownOpen]);

  return (
    <section className="content-card">
      <PageNavbar />
      <h2 className="article-title">Portfolio</h2>

      <div className="mobile-filter-wrapper d-md-none" ref={dropdownRef}>
        <button
          className="mobile-filter-select"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          type="button"
        >
          <span>
            {activeFilter === "All" ? "Select category" : activeFilter}
          </span>
          <FaChevronDown
            style={{
              transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
              color: "#ffdb70",
              fontSize: "12px",
            }}
          />
        </button>
        {dropdownOpen && (
          <div className="mobile-filter-dropdown">
            {filters.map((filter, index) => (
              <div
                key={index}
                className={`mobile-filter-option ${activeFilter === filter ? "active" : ""}`}
                onClick={() => {
                  setActiveFilter(filter);
                  setDropdownOpen(false);
                }}
              >
                {filter}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="filter-container d-none d-md-flex">
        {filters.map((filter, index) => (
          <button
            key={index}
            className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="row">
        {filteredProjects.map((project, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="project-card">
              <div className="project-img">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-icon"
                  >
                    <FaEye />
                  </a>
                  <Link
                    to={`/project/${project.slug}`}
                    className="project-icon"
                  >
                    <FaBookOpen />
                  </Link>
                </div>
              </div>
              <div className="project-content">
                <h4>{project.title}</h4>
                <p>{project.category}</p>
                <Link
                  to={`/project/${project.slug}`}
                  className="project-read-more"
                >
                  READ MORE →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
