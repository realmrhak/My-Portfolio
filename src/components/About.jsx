// 1. CHANGE THE IMPORT: Replace FiPlug with FiLink
import { FiDatabase, FiLink } from "react-icons/fi";
import { FaPuzzlePiece, FaCode } from "react-icons/fa";

import PageNavbar from './PageNavbar';
import Testimonials from './Testimonials';

const About = () => {

  const services = [
    {
      icon: <FaPuzzlePiece />,
      title: 'Frontend Development',
      description:
        'Building highly responsive, interactive, and state-managed user interfaces using React.js, including reusable components for scalability.'
    },

    {
      icon: <FaCode />,
      title: 'Backend Development',
      description:
        'Developing secure, fast, and scalable RESTful APIs and server-side logic using Node.js and Express.js, including JWT authentication.'
    },

    {
      icon: <FiDatabase />,
      title: 'Database Management',
      description:
        'Designing efficient database schemas, managing data flow, and optimizing queries using MongoDB and Mongoose.'
    },

    {
      // 2. CHANGE THE ICON USAGE: Replace FiPlug with FiLink
      icon: <FiLink />,
      title: 'API Integration',
      description:
        'Connecting frontend applications with backend APIs, handling PDF processing, and integrating third-party/AI APIs for enhanced functionality.'
    }
  ];

  return (
    <section className="content-card">

      {/* Top Navbar */}
      <PageNavbar />

      {/* Title */}
      <h2 className="article-title">
        About Me
      </h2>

      {/* About Text */}
      <div className="about-text">
        <p>
          I am a passionate and recently graduated MERN Stack Developer based in Lahore, Pakistan. With hands-on experience from my internship at MJ Programmers, I specialize in building robust, scalable, and dynamic web applications using MongoDB, Express.js, React.js, and Node.js. I thrive on turning complex problems into efficient code, whether it's building responsive frontend interfaces, architecting secure backend APIs, or integrating modern technologies like AI. I am eager to bring my technical skills and enthusiasm to a dynamic development team.
        </p>

        <p>
          I enjoy turning complex problems into simple, beautiful, and intuitive designs.
        </p>
      </div>

      {/* Services */}
      <div className="service-section">

        <h3 className="service-title">
          What I'm Doing
        </h3>

        <div className="row">

          {services.map((service, index) => (

            <div className="col-md-6 mb-4" key={index}>
              <div className="service-item">
                <div className="service-icon-box">
                  {service.icon}
                </div>

                <div className="service-content-box">
                  <h4 className="service-item-title">
                    {service.title}
                  </h4>
                  <p className="service-item-text">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>

          ))}

        </div>
        
        <Testimonials />

      </div>

    </section>
  );
};

export default About;