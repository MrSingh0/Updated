import React from "react";
import Slider from "react-slick";
import Pfirst from "../../../assets/Pfirst.png";
import Psecond from "../../../assets/Psecond.png";
import Pthird from "../../../assets/Pthird.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import "./style.css";

const data = [
  {
    name: "Earth Battery Kit",
    about:
      "It is designed for high capacity range of batteries and has 2 modules: Water and Land",
    image: Pthird,
    id: 1,
  },
  {
    name: "Mercury Battery Kit",
    about:
      "This kit is specially designed for application, testing and charging purpose in the two wheeler battery sector.",
    image: Pfirst,
    id: 2,
  },
  {
    name: "Venus Battery Kit",
    about:
      "This kit is specially made and designed for application, testing and charging purpose in the four wheeler battery sector.",
    image: Psecond,
    id: 3,
  },
];

const FourthWindow = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 0,
    responsive: [
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="fourth">
      <hr />
      <div className="w-full m-auto">
        <h1 className="text-4xl text-center pt-10 font-medium">
          <u className="decoration-red-600 decoration-3 text-5xl">
            OUR PRODUCTS
          </u>
        </h1>
        <div className="p-20">
          <Slider {...settings}>
            {data.map((d) => (
              <div
                key={d.name}
                className="bon container border-4 h-[450px] text-white rounded-xl"
              >
                <div className="h-60 rounded-t-xl bg-index-500 flex justify-center items-center">
                  <img
                    src={d.image}
                    alt=""
                    className="h-60 w-60 rounded-xl mt-7"
                  />
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p className="h-20">{d.about}</p>
                </div>
                <div className="w-full flex justify-center">
                  <Link to={`/product/${d.id}`} className="lenk mr-2 pr-5 pl-5">
                    <button>VIEW</button>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default FourthWindow;
