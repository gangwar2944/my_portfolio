import React from "react";
import "./testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.css";
const Testimonial = () => {
  const data = [
    {
      name: "Vishal",
      description: "This is the description for project",
      img: "https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg",
    },
    {
      name: "Sonu",
      description: "This is description",
      img: "https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg",
    },
    {
      name: "Vivek",
      description: "Lorem pixcel is not actual it is just dummy",
      img: "https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonial</h2>
      <div className="container testimonials_container">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index}>
              <article className="testimonial">
                <div className="client_avatar">
                  <img src={`${item.img}`} alt={`Avatar ${item.name}`} />
                </div>
                <h5 className="client_name">{item.name}</h5>
                <small className="client_review">{item.description}</small>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
