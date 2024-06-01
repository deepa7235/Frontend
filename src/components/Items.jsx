import React, { useEffect, useState } from "react";
import Cards from "./Cards.jsx";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Items() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    const getItem = async () => {
      try {
        const res = await axios.get("http://localhost:4001/item");
        console.log(res.data);
        setItem(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getItem();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-blue-800">here!</span>
          </h1>
          <p className="mt-12 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            voluptate officia amet aliquid, nobis ducimus voluptatibus optio
            labore repudiandae enim voluptatum quo, repellat aliquam tempora non
            quod rerum libero corrupti!
          </p>
          <Link to="/">
            <button className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {item.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
