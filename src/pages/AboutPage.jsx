import React from "react";
import img from "../assets/userr.png"
import CardAbout from "../components/cardAbout"

function AboutPage() {
  return (
    <div>
        <section id="about" className="pt-16 pb-28 bg-white flex flex-col justify-center items-center">
            <h1 className="font-libre text-4xl text-gray-900 text-center my-4">About Us</h1>
            <div className="container px-8 pt-10 lg:px-20 font-quicksand flex flex-col justify-center items-center">
                <div className="grid jus gap-24 md:grid-cols-3">
                <CardAbout image={img} title="Ari Viki Firmansyah" position="Front-End-21" />
                <CardAbout image={img} title="Chitra Agustina" position="Front-End-21" />
                <CardAbout image={img} title="San Prastiwa" position="Front-End-21" />
                </div>
            </div>
        </section>
    </div>
  );
}

export default AboutPage;
