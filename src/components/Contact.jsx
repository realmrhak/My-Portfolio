import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { IoIosSend } from "react-icons/io";
import PageNavbar from "./PageNavbar";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ═══ EmailJS Credentials from .env ═══
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    // Check if env variables are set
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setSuccess("Email config missing. Check .env file.");
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setSuccess("Message sent successfully! 🚀");
        form.current.reset();
        setLoading(false);
      })
      .catch((error) => {
        setSuccess("Failed to send. Please try again.");
        console.error("EmailJS Error:", error);
        setLoading(false);
      });
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = "#ffdb70";
    e.target.style.background = "rgba(255,255,255,0.05)";
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = "rgba(255,255,255,0.08)";
    e.target.style.background = "rgba(255,255,255,0.03)";
  };

  return (
    <section className="content-card">
      <PageNavbar />

      <div style={{ marginBottom: "30px" }}>
        <h2 className="article-title">Contact</h2>
        <p style={{ color: "#888", fontSize: "14px", margin: "8px 0 0" }}>
          Have a project in mind? Let&apos;s work together.
        </p>
      </div>

      {/* Map */}
      <div
        style={{
          width: "100%",
          height: "250px",
          borderRadius: "14px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.06)",
          marginBottom: "24px",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274177577!2d74.00473324127648!3d31.483103656383905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1717584000000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%) invert(92%)" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lahore Location"
        />
      </div>

      {/* Form */}
      <form ref={form} onSubmit={handleSubmit}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: "16px",
            marginBottom: "16px",
          }}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            required
            style={{
              width: "100%",
              padding: "14px 18px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
              color: "#e8e8e8",
              fontSize: "14px",
              outline: "none",
              transition: "all 0.25s ease",
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            required
            style={{
              width: "100%",
              padding: "14px 18px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
              color: "#e8e8e8",
              fontSize: "14px",
              outline: "none",
              transition: "all 0.25s ease",
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            style={{
              width: "100%",
              padding: "14px 18px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
              color: "#e8e8e8",
              fontSize: "14px",
              outline: "none",
              resize: "vertical",
              minHeight: "120px",
              transition: "all 0.25s ease",
              fontFamily: "inherit",
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>

        {success && (
          <div
            style={{
              padding: "12px 16px",
              background: success.includes("success")
                ? "rgba(74, 222, 128, 0.1)"
                : "rgba(239, 68, 68, 0.1)",
              border: `1px solid ${
                success.includes("success")
                  ? "rgba(74, 222, 128, 0.2)"
                  : "rgba(239, 68, 68, 0.2)"
              }`,
              borderRadius: "10px",
              color: success.includes("success") ? "#4ade80" : "#ef4444",
              fontSize: "14px",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>{success.includes("success") ? "✓" : "✗"}</span>
            {success}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "14px 28px",
            background: loading ? "#333" : "#ffdb70",
            color: loading ? "#666" : "#0a0a0a",
            border: "none",
            borderRadius: "12px",
            fontSize: "15px",
            fontWeight: 600,
            cursor: loading ? "not-allowed" : "pointer",
            transition: "all 0.25s ease",
          }}
          onMouseEnter={(e) => {
            if (!loading) {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 8px 25px rgba(250, 204, 21, 0.2)";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {loading ? "Sending..." : "Send Message"}
          <IoIosSend size={18} style={{ transform: "rotate(45deg)" }} />
        </button>
      </form>
    </section>
  );
};

export default Contact;
