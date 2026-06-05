import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import AdditionalSkills from "./AdditionalSkills.jsx";
import avatar1 from "../assets/images/avatar-1.png";
import avatar2 from "../assets/images/avatar-2.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Zohaib Jameel",
      image: avatar1,
      text: "Haroon joined us as an intern and quickly proved his capabilities as a MERN stack developer. He has a strong grasp of React and Node.js, and his ability to build full-stack features from scratch is impressive for a fresher. He is dedicated, a quick learner, and a great asset to any development team.",
    },

    {
      name: "Zainab Khan, Project Manager",
      image: avatar2,
      text: "During his studies, Haroon consistently delivered exceptional web development projects. His work on integrating AI APIs with the MERN stack showed great problem-solving skills and technical curiosity. He writes clean code and has a bright future ahead in software engineering.",
    },

    {
      name: "Ali Hamza",
      image: avatar1,
      text: "Amazing work quality and premium UI implementation with modern technologies.",
    },
  ];

  return (
    <section className="testimonial-section">
      {/* Testimonials */}
      <h3 className="testimonial-title">Testimonials</h3>

      <Swiper
        slidesPerView={1}
        spaceBetween={25}
        scrollbar={{
          draggable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        modules={[Scrollbar]}
        className="testimonial-slider"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <div className="testimonial-avatar-box">
                <img src={item.image} alt={item.name} />
              </div>

              <h4>{item.name}</h4>

              <p>{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Additional Skills */}

      <AdditionalSkills />
    </section>
  );
};

export default Testimonials;
