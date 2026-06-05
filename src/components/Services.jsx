import { useState, useEffect, useRef } from "react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaPlug,
  FaTerminal,
  FaHistory,
  FaTrash,
} from "react-icons/fa";
import PageNavbar from "./PageNavbar";

const Services = () => {
  const [history, setHistory] = useState([]);
  const [currentOutput, setCurrentOutput] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const outputEndRef = useRef(null);
  const terminalBodyRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = [
    {
      id: "frontend",
      command: "run_frontend_dev",
      icon: <FaCode />,
      title: "Frontend Development",
      shortDesc: "Responsive, interactive UIs with React.js & modern CSS",
      output: [
        "> Initializing Frontend Development...",
        "> Loading React ecosystem...",
        "  ✓ React.js v19 loaded",
        "  ✓ Tailwind CSS configured",
        "  ✓ Bootstrap grid system ready",
        "",
        "> CAPABILITIES:",
        "  • Responsive React Components",
        "  • State Management (Context API / useReducer)",
        "  • Reusable Component Architecture",
        "  • Modern CSS (Tailwind, Flexbox, Grid)",
        "  • Interactive UI Animations",
        "  • Cross-browser Compatibility",
        "",
        "> TECH STACK:",
        "  React.js • HTML5 • CSS3 • Tailwind CSS • Bootstrap",
        "",
        "> STATUS: Production ready ⚡",
      ],
      color: "#4ecdc4",
    },
    {
      id: "backend",
      command: "deploy_backend_api",
      icon: <FaServer />,
      title: "Backend Development",
      shortDesc: "Secure REST APIs with Node.js, Express & JWT auth",
      output: [
        "> Deploying Backend Infrastructure...",
        "> Establishing server connections...",
        "  ✓ Node.js runtime active",
        "  ✓ Express.js framework loaded",
        "  ✓ JWT authentication module ready",
        "",
        "> CAPABILITIES:",
        "  • RESTful API Design & Development",
        "  • JWT Authentication & Authorization",
        "  • Secure Route Protection",
        "  • Server-side Logic & Validation",
        "  • API Integration (Third-party / AI)",
        "  • Error Handling & Logging",
        "",
        "> TECH STACK:",
        "  Node.js • Express.js • JWT • REST APIs",
        "",
        "> STATUS: Server running on port 3000 🌐",
      ],
      color: "#ffdb70",
    },
    {
      id: "database",
      command: "init_database_mgmt",
      icon: <FaDatabase />,
      title: "Database Management",
      shortDesc: "Efficient MongoDB schemas, queries & data optimization",
      output: [
        "> Initializing Database Management...",
        "> Connecting to MongoDB cluster...",
        "  ✓ MongoDB connection established",
        "  ✓ Mongoose ODM loaded",
        "  ✓ Schema validation active",
        "",
        "> CAPABILITIES:",
        "  • Database Schema Design",
        "  • CRUD Operations & Optimization",
        "  • Data Modeling with Mongoose",
        "  • Query Performance Tuning",
        "  • Aggregation Pipelines",
        "  • Data Integrity & Validation",
        "",
        "> TECH STACK:",
        "  MongoDB • Mongoose • NoSQL Design",
        "",
        "> STATUS: Database operational 📦",
      ],
      color: "#a78bfa",
    },
    {
      id: "api",
      command: "build_api_integration",
      icon: <FaPlug />,
      title: "API Integration",
      shortDesc: "Connecting frontend to backend & third-party services",
      output: [
        "> Building API Integration Module...",
        "> Loading connection protocols...",
        "  ✓ HTTP/HTTPS client ready",
        "  ✓ CORS configuration applied",
        "  ✓ API middleware loaded",
        "",
        "> CAPABILITIES:",
        "  • Frontend-Backend API Connection",
        "  • Third-party API Integration",
        "  • AI API Implementation",
        "  • PDF Processing & Document Handling",
        "  • Real-time Data Sync",
        "  • Error Handling & Retry Logic",
        "",
        "> TECH STACK:",
        "  REST APIs • Axios • Fetch • Postman",
        "",
        "> STATUS: All systems connected 🔌",
      ],
      color: "#ff6b9d",
    },
  ];

  const typeOutput = (lines, onComplete) => {
    setIsTyping(true);
    setTypedText("");
    let currentLine = 0;
    let currentChar = 0;
    let fullText = "";

    const typeNext = () => {
      if (currentLine >= lines.length) {
        setIsTyping(false);
        onComplete?.();
        return;
      }

      const line = lines[currentLine];

      if (currentChar < line.length) {
        fullText += line[currentChar];
        setTypedText(fullText);
        currentChar++;
        setTimeout(typeNext, 8 + Math.random() * 12);
      } else {
        fullText += "\n";
        setTypedText(fullText);
        currentLine++;
        currentChar = 0;
        setTimeout(typeNext, 100);
      }
    };

    typeNext();
  };

  const runCommand = (service) => {
    if (isTyping) return;

    const timestamp = new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    setHistory((prev) => [
      ...prev,
      { command: service.command, timestamp, color: service.color },
    ]);

    setCurrentOutput({
      command: service.command,
      lines: service.output,
      color: service.color,
    });

    typeOutput(service.output);
  };

  const clearTerminal = () => {
    setHistory([]);
    setCurrentOutput(null);
    setTypedText("");
    setIsTyping(false);
  };

  // ═══ SCREEN SHAKE FIX: Internal scroll instead of page scroll ═══
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [typedText, history]);

  // Matrix rain effect
  useEffect(() => {
    const canvas = document.getElementById("matrix-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノ";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    let animationId;
    const draw = () => {
      ctx.fillStyle = "rgba(18, 18, 18, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 219, 112, 0.15)";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="content-card" style={{ overflow: "hidden" }}>
      <PageNavbar />

      {/* Header */}
      <div style={{ marginBottom: "30px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "10px",
          }}
        >
          <h2 className="article-title">Services</h2>
        </div>
        <p style={{ color: "#888", fontSize: "14px", margin: 0 }}>
          Execute commands to explore my specializations. Click any command
          below.
        </p>
      </div>

      {/* ═══ COMMAND PALETTE: Responsive grid ═══ */}
      <div
        className="command-palette"
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
          gap: "16px",
        }}
      >
        {services.map((service, index) => {
          const isLastOdd =
            index === services.length - 1 && services.length % 2 !== 0;

          return (
            <div
              key={service.id}
              style={{
                gridColumn: isLastOdd && !isMobile ? "1 / -1" : "auto",
                maxWidth: isLastOdd && !isMobile ? "calc(50% - 8px)" : "100%",
                margin: isLastOdd && !isMobile ? "0 auto" : "0",
                width: "100%",
              }}
            >
              <button
                className="terminal-command-btn"
                onClick={() => runCommand(service)}
                disabled={isTyping}
                style={{
                  borderColor: isTyping ? "#333" : "#383838",
                  width: "100%",
                  textAlign: "left",
                }}
                onMouseEnter={(e) => {
                  if (!isTyping) {
                    e.currentTarget.style.borderColor = service.color;
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = isTyping
                    ? "#333"
                    : "#383838";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "8px",
                  }}
                >
                  <div
                    className="cmd-icon"
                    style={{
                      background: `${service.color}18`,
                      border: `1px solid ${service.color}40`,
                      color: service.color,
                    }}
                  >
                    {service.icon}
                  </div>
                  <div>
                    <div className="cmd-name">{service.title}</div>
                    <div className="cmd-code">{service.command}</div>
                  </div>
                </div>
                <div className="cmd-desc">{service.shortDesc}</div>
                <div
                  className="status-dot"
                  style={{ background: service.color, opacity: 0.5 }}
                />
              </button>
            </div>
          );
        })}
      </div>

      {/* Terminal Window */}
      <div className="terminal-window">
        {/* Terminal Header */}
        <div className="terminal-header">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="window-controls">
              <span className="close" />
              <span className="minimize" />
              <span className="maximize" />
            </div>
            <span className="terminal-title">haroon@portfolio:~services</span>
          </div>
          <div className="terminal-actions">
            <button onClick={clearTerminal} title="Clear terminal">
              <FaTrash size={12} />
            </button>
          </div>
        </div>

        {/* ═══ TERMINAL BODY: Fixed height + internal scroll ═══ */}
        <div
          className="terminal-body"
          ref={terminalBodyRef}
          style={{
            maxHeight: "380px",
            overflowY: "auto",
            overflowX: "hidden",
            scrollbarWidth: "thin",
            scrollbarColor: "#333 transparent",
          }}
        >
          <canvas id="matrix-canvas" />

          {/* Welcome Message */}
          {history.length === 0 && !currentOutput && (
            <div className="terminal-welcome">
              <FaTerminal size={40} className="terminal-welcome-icon" />
              <h3>Welcome to Service Terminal v2.0</h3>
              <p>Click any command above to execute</p>
            </div>
          )}

          {/* Command History */}
          {history.map((entry, idx) => (
            <div key={idx} className="terminal-output-block">
              <div className="terminal-prompt">
                <span className="prompt-arrow">➜</span>
                <span className="prompt-path">~services</span>
                <span className="prompt-command" style={{ color: entry.color }}>
                  {entry.command}
                </span>
                <span className="prompt-time">{entry.timestamp}</span>
              </div>
            </div>
          ))}

          {/* Current Output */}
          {currentOutput && (
            <div style={{ marginTop: "8px" }}>
              <div
                className="terminal-output-content"
                style={{ borderLeftColor: currentOutput.color }}
              >
                <pre>
                  {typedText}
                  {isTyping && (
                    <span
                      className="typing-cursor"
                      style={{ background: currentOutput.color }}
                    />
                  )}
                </pre>
              </div>
            </div>
          )}

          {/* Active Prompt */}
          {!isTyping && history.length > 0 && (
            <div className="terminal-active-prompt">
              <span style={{ color: "#27c93f" }}>➜</span>
              <span style={{ color: "#ffdb70" }}>~services</span>
              <span
                className="typing-cursor"
                style={{ background: "#ffdb70" }}
              />
            </div>
          )}

          <div ref={outputEndRef} />
        </div>
      </div>

      {/* Status Bar */}
      <div className="terminal-status-bar">
        <div className="status-left">
          <div className="status-indicator">
            <div
              className={`status-dot ${isTyping ? "processing" : "ready"}`}
            />
            <span className="status-text">
              {isTyping ? "Processing..." : "Ready"}
            </span>
          </div>
          <div className="command-count">
            <FaHistory size={11} />
            <span>{history.length} commands executed</span>
          </div>
        </div>
        <div className="terminal-info">bash — 80x24</div>
      </div>
    </section>
  );
};

export default Services;
