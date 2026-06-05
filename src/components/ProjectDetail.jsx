import { useMemo, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaGithub,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";
import PageNavbar from "./PageNavbar.jsx";
import { getProjectBySlug, getRelatedProjects } from "../data/projectsData";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  /* =========================
     DERIVE DATA WITH useMemo
     (synchronous — no API call needed)
  ========================= */
  const project = useMemo(() => getProjectBySlug(slug), [slug]);
  const related = useMemo(
    () => (project ? getRelatedProjects(slug) : []),
    [slug, project],
  );

  /* =========================
     REDIRECT IF NOT FOUND
  ========================= */
  if (!project) {
    navigate("/portfolio");
    return null;
  }

  /* =========================
     CAROUSEL HANDLERS
  ========================= */
  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1,
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1,
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="content-card">
      {/* Page Navbar */}
      <PageNavbar />

      {/* Breadcrumb */}
      <nav
        aria-label="breadcrumb"
        style={{ marginBottom: "20px", fontSize: "13px" }}
      >
        <ol
          className="breadcrumb"
          style={{ background: "transparent", padding: 0, margin: 0 }}
        >
          <li className="breadcrumb-item">
            <Link
              to="/portfolio"
              style={{ color: "#ffdb70", textDecoration: "none" }}
            >
              Portfolio
            </Link>
          </li>
          <li
            className="breadcrumb-item active"
            aria-current="page"
            style={{ color: "#888" }}
          >
            {project.title}
          </li>
        </ol>
      </nav>

      {/* Project Header */}
      <div style={{ textAlign: "center", padding: "20px 0 25px" }}>
        <span
          style={{
            display: "inline-block",
            background: "rgba(255, 219, 112, 0.15)",
            color: "#ffdb70",
            padding: "6px 18px",
            borderRadius: "50px",
            fontSize: "0.85rem",
            fontWeight: 600,
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            marginBottom: "18px",
            border: "1px solid rgba(255, 219, 112, 0.3)",
          }}
        >
          {project.category}
        </span>
        <h2
          className="article-title"
          style={{ textAlign: "center", marginBottom: "15px" }}
        >
          {project.title}
        </h2>
        <p
          style={{
            color: "#d6d6d6",
            fontSize: "1.05rem",
            maxWidth: "700px",
            margin: "0 auto 15px",
            lineHeight: 1.7,
          }}
        >
          {project.overview}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            flexWrap: "wrap",
            color: "#888",
            fontSize: "0.9rem",
          }}
        >
          <span>
            <span style={{ color: "#ffdb70" }}>●</span> {project.year}
          </span>
          <span>
            <span style={{ color: "#ffdb70" }}>●</span> {project.duration}
          </span>
          <span>
            <span style={{ color: "#ffdb70" }}>●</span> {project.role}
          </span>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="project-carousel" style={{ marginBottom: "30px" }}>
        <div className="carousel-main">
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
            className="carousel-image"
          />

          {project.images.length > 1 && (
            <>
              <button
                className="carousel-nav carousel-prev"
                onClick={goToPreviousImage}
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </button>
              <button
                className="carousel-nav carousel-next"
                onClick={goToNextImage}
                aria-label="Next image"
              >
                <FaChevronRight />
              </button>
            </>
          )}

          <div className="carousel-counter">
            {currentImageIndex + 1} / {project.images.length}
          </div>
        </div>

        {project.images.length > 1 && (
          <div className="carousel-thumbnails">
            {project.images.map((img, index) => (
              <button
                key={index}
                className={`thumbnail-btn ${index === currentImageIndex ? "active" : ""}`}
                onClick={() => goToImage(index)}
                aria-label={`Go to image ${index + 1}`}
              >
                <img src={img} alt={`Thumbnail ${index + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="row">
        {/* Left Column - Details */}
        <div className="col-lg-8">
          {/* Description */}
          <div style={{ marginBottom: "35px" }}>
            <h3 className="project-section-title">
              <span className="title-accent-bar"></span>
              Project Details
            </h3>
            <div
              style={{ color: "#d6d6d6", lineHeight: 1.8, fontSize: "0.95rem" }}
            >
              {project.description.map((para, idx) => (
                <p key={idx} style={{ marginBottom: "15px" }}>
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Features */}
          <div style={{ marginBottom: "35px" }}>
            <h3 className="project-section-title">
              <span className="title-accent-bar"></span>
              Key Features
            </h3>
            <ul className="features-list">
              {project.features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <span className="feature-check">
                    <FaCheckCircle />
                  </span>
                  <span className="feature-text">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div style={{ marginBottom: "35px" }}>
              <h3 className="project-section-title">
                <span className="title-accent-bar"></span>
                Challenges & Solutions
              </h3>
              <div className="challenges-list">
                {project.challenges.map((item, index) => (
                  <div key={index} className="challenge-card">
                    <p className="challenge-text">
                      <strong>Challenge:</strong> {item.challenge}
                    </p>
                    <p className="solution-text">
                      <strong>Solution:</strong> {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Sidebar */}
        <div className="col-lg-4">
          <div className="project-sidebar">
            {/* Tech Stack */}
            <div className="sidebar-info-box">
              <h4 className="sidebar-box-title">Technologies</h4>
              <div className="tech-stack">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="sidebar-info-box">
              <h4 className="sidebar-box-title">Quick Info</h4>
              <div className="quick-info">
                <div className="info-row">
                  <span className="info-label">Category</span>
                  <span className="info-value">{project.category}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Year</span>
                  <span className="info-value">{project.year}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Duration</span>
                  <span className="info-value">{project.duration}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Role</span>
                  <span className="info-value">{project.role}</span>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="sidebar-info-box">
              <h4 className="sidebar-box-title">Links</h4>
              <div className="project-links-list">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-item"
                  >
                    <FaExternalLinkAlt /> Live Website
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-item"
                  >
                    <FaGithub /> Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      {related.length > 0 && (
        <div
          style={{
            marginTop: "50px",
            paddingTop: "35px",
            borderTop: "1px solid #383838",
          }}
        >
          <h3
            className="project-section-title"
            style={{ textAlign: "center", justifyContent: "center" }}
          >
            <span className="title-accent-bar"></span>
            Related Projects
          </h3>
          <div className="row">
            {related.map((relProject) => (
              <div className="col-md-6" key={relProject.slug}>
                <Link
                  to={`/project/${relProject.slug}`}
                  className="related-project-card"
                >
                  <div className="related-project-img-wrap">
                    <img src={relProject.thumbnail} alt={relProject.title} />
                    <div className="related-project-overlay">
                      <span>
                        View Project{" "}
                        <FaArrowLeft
                          style={{
                            transform: "rotate(180deg)",
                            marginLeft: "8px",
                          }}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="related-project-content">
                    <span className="related-category">
                      {relProject.category}
                    </span>
                    <h4>{relProject.title}</h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Back Button */}
      <div
        style={{ textAlign: "center", marginTop: "40px", marginBottom: "20px" }}
      >
        <Link to="/portfolio" className="send-btn">
          <FaArrowLeft /> Back to Portfolio
        </Link>
      </div>
    </section>
  );
};

export default ProjectDetail;
