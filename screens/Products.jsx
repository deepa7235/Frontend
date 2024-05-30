import React from "react";
import Navbar from "../src/components/Navbar";
import Items from "../src/components/Items";
import Footer from "../src/components/Footer";


export default function Products() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Items />
      </div>
      <Footer />
    </>
  );
}
