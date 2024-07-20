import React, { useEffect, useState } from "react";
import "./testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight, Circle } from "@mui/icons-material";

const data = [
  {
    name: "Ruhi Datta",
    description:
      "With Vishal’s help, we were able to increase the functionality of our website dramatically while cutting our costs. Our website is much more easy to use, has tons of more features than before and is incredibly easy to maintain. We could not be more happy with our new website!",
    img: "https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg",
  },
  {
    name: "Aniket",
    description:
      "We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Vishal has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on monthly reports so we know how our site is doing",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Rohan",
    description:
      "We re-did our website twice in a 12 month period. There was no comparison between the first company and Vishal. Professional, Creative, Attentive to Detail, Excellent Communication…If I had contracted with Vishal the first time I would not have had to do it twice.",
    img: "https://static.vecteezy.com/system/resources/thumbnails/028/287/529/small/indian-man-with-crossed-arms-wearing-a-formal-shirt-ai-generated-photo.jpg",
  },
  {
    name: "Lakshaman",
    description:
      "We at Kee Service were very impressed with the all aspects of our new website. We would highly reccomend Vishal to anyone looking to build a new website.",
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
  },
];

const Testimonial = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 720 && screenWidth >= 480) {
        setItemsToShow(2);
      } else if (screenWidth < 480) {
        setItemsToShow(1);
      } else {
        setItemsToShow(3);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const newDataArray = [...data];
    const newList = newDataArray.splice(currentIndex, itemsToShow);
    setCarouselData(newList);
  }, [currentIndex, itemsToShow]);

  const handleClickForward = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex + itemsToShow >= data.length) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const handleClickBackward = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return data.length - itemsToShow;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const handleClickForNavigation = (itemIdx) => {
    setCurrentIndex(itemIdx);
  };

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonial</h2>
      <div className="container testimonials_container">
        <button style={{ borderRadius: "50%" }}>
          <ArrowLeft onClick={handleClickBackward} />
        </button>
        <div className="testimonials_container">
          {carouselData.map((item, index) => (
            <div key={index} className="single_testimonial_container">
              <article className="testimonial">
                <div className="client_avatar">
                  <img src={item.img} alt={`Avatar ${item.name}`} />
                </div>
                <h5 className="client_name">{item.name}</h5>
                <small className="client_review">{item.description}</small>
              </article>
            </div>
          ))}
        </div>
        <button style={{ borderRadius: "50%" }}>
          <ArrowRight onClick={handleClickForward} />
        </button>
      </div>
      <div className="testimonials_navigation">
        {data.slice(0, data.length -(itemsToShow-1)).map((item, index) => (
          <span key={index} onClick={() => handleClickForNavigation(index)}>
            <Circle
              fontSize="1rem"
              sx={{ cursor: "pointer" }}
              className={index === currentIndex ? "Active" : ""}
            />
          </span>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
