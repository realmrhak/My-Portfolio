import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar.jsx";
import About from "./components/About.jsx";
import Resume from "./components/Resume.jsx";
import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import ProjectDetail from "./components/ProjectDetail.jsx";

function App() {
  return (
    <main className="main-layout">
      {/* =========================
          CUSTOM CURSOR
      ========================= */}

      <CustomCursor />

      <div className="container">
        <div className="row">
          {/* =========================
              SIDEBAR
          ========================= */}

          <div className="col-xl-3 col-lg-4 mb-4">
            <Sidebar />
          </div>

          {/* =========================
              MAIN CONTENT
          ========================= */}

          <div className="col-xl-9 col-lg-8">
            <div className="page-content">
              <Routes>
                <Route path="/" element={<About />} />

                <Route path="/resume" element={<Resume />} />

                <Route path="/services" element={<Services />} />

                <Route path="/portfolio" element={<Portfolio />} />

                {/* =========================
                    PROJECT DETAIL PAGE
                ========================= */}
                <Route path="/project/:slug" element={<ProjectDetail />} />

                {/* <Route
                  path="/blog"
                  element={<Blog />}
                /> */}

                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
