import React, { useEffect, useState } from "react";
import "./testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight, Circle } from "@mui/icons-material";

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
  {
    name: "Ankit",
    description: "Lorem pixcel is not actual it is just dummy",
    img: "https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg",
  },
  {
    name: "Ankit2",
    description: "Lorem pixcel is not actual it is just dummy",
    img: "https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg",
  },
  {
    name: "Ankit3",
    description: "Lorem pixcel is not actual it is just dummy",
    img: "https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg",
  },
  {
    name: "Ankit4",
    description: "Lorem pixcel is not actual it is just dummy",
    img: "https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg",
  },
];

const Testimonial = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [currentIndex, setCurrectIndex] = useState(0);
  const itemToShow = 3;
  useEffect(() => {
    console.log("currentIndex", currentIndex);
    const newDataASrray = [...data];
    console.log("before", newDataASrray);
    const newList = newDataASrray.splice(currentIndex, itemToShow); // Copy the first 4 elements
    console.log("newList after splice", newList);
    setCarouselData(newList);
  }, [currentIndex]);

  const HandleClickForward = () => {
    setCurrectIndex((prevIndex) => {
      if (prevIndex + itemToShow >= data.length) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };
  const HandleClickBackword = () => {
    setCurrectIndex((prevIndex) => {
      if (prevIndex === 0) {
        return data.length - itemToShow;
      } else {
        return prevIndex - 1;
      }
    });
  };
  const handleClickForNavigation =(itemIdx)=>{
     setCurrectIndex(itemIdx);
  }
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonial</h2>
      <div className="container testimonials_container">
        <button style={{ borderRadius: "50%" }}>
          <ArrowLeft onClick={HandleClickBackword} />
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
          <ArrowRight onClick={HandleClickForward} />
        </button>
      </div>
      <div className="testimonials_navigation">
        {data.slice(0, data.length - 2).map((item,index) => (
          <span key={item.id} onClick={()=>handleClickForNavigation(index)}>
            <Circle fontSize="1rem" sx={{ cursor: "pointer"}} className={index===currentIndex?"Active":""}/>
          </span>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
