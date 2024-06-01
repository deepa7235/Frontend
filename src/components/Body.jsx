import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

export default function Body() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    const getItem = async () => {
      try {
        const res = await axios.get("http://localhost:4001/item");
        const data = res.data.filter((data) => data.category === "Newspaper");
        console.log(data);
        setItem(data);
      } catch (error) {
        console.log(error);
      }
    };
    getItem();
  }, []);

  // const filterData = list.filter((data) => data.category === "Newspaper");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div>
          <h1 className="font-semibold text-xl pb-2">Stationery Items</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            quod, explicabo molestiae expedita unde aspernatur dignissimos
            facere omnis numquam eaque neque consequatur qui magni autem
            eligendi facilis quam repudiandae aperiam!
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {item.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
