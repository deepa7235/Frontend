import React from "react";

export default function Cards({ item }) {
  console.log(item);
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl  hover:bg-slate-200 hover:scale-105 duration-200">
          <figure >
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between flex">
              <div className="badge badge-outline">Rs {item.price}</div>
              <div className="hover:bg-green-500 px-2 py-1 rounded-full border-[2px] hover:text-white duration-200 transition-all cursor-pointer">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
