import { useMemo, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaChevronDown, FaBookOpen } from "react-icons/fa";
import PageNavbar from "./PageNavbar.jsx";

import project1 from "../assets/images/project-2-1.png";
import project2 from "../assets/images/project-1-1.png";

// ============================
// LAZY IMAGE WITH SKELETON
// ============================
const LazyImage = ({ src, alt, className, style }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* Skeleton loader */}
      {!loaded && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, #1a1a2e 25%, #252540 50%, #1a1a2e 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite",
            zIndex: 1,
          }}
        />
      )}

      {/* Image */}
      <img
        src={src}
        alt={alt}
        className={className}
        style={{
          ...style,
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.4s ease",
          position: "relative",
          zIndex: 2,
        }}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const projects = useMemo(
    () => [
      {
        title: "Nexra – E-commerce",
        category: "Full Stack",
        image: project1,
        slug: "nexra",
        link: "https://nexra-demo.vercel.app",
      },
      {
        title: "Nexora AI",
        category: "AI Projects",
        image: project2,
        slug: "nexora-ai",
        link: "https://nexora-ai-application.vercel.app",
      },
    ],
    [],
  );

  const filters = useMemo(
    () => ["All", "Full Stack", "Frontend", "AI Projects"],
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

      {/* Mobile Dropdown */}
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

      {/* Desktop Filters */}
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

      {/* Projects Grid */}
      <div className="row">
        {filteredProjects.map((project, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="project-card">
              <div
                className="project-img"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  aspectRatio: "16/10",
                }}
              >
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

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
