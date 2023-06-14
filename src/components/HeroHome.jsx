import React from "react";
import { NavLink } from "react-router-dom";
import {
  RiCheckboxBlankCircleFill,
  RiPlayFill,
  RiStarFill,
} from "react-icons/ri";
import { other_images } from "../utils/images";

const HeroHome = () => {
  return (
    <section
      id="home"
      className="min-h-[100vh] grid grid-cols-1 xl:grid-cols-8"
    >
      {/* Information */}
      <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl xl:text-5xl font-bold xl:leading-[4.5rem]">
            "Kreativitas Tak Terbatas, Kelas Seni Adalah Pintu Awalmu"
          </h1>
          <p className="text-gray-500 text-2xl leading-[2.5rem]">
            Kembangkan Bakatmu, Rasakan Kecintaan pada Seni di Kelas Kami
            Ekspresikan Diri Lewat Seni, Temukan Minatmu di Kelas Terpercaya
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <NavLink
              to="/signin"
              className="focus:bg-white py-3   text-sm font-semibold leading-6 bg-indigo-600  text-white hover:bg-indigo-700 rounded-md  px-5 hover:text-white"
            >
              Get Started!
            </NavLink>
            <button className="w-full xl:w-auto flex items-center justify-start text-left gap-4 py-2 px-8 rounded-xl text-xl"></button>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="md:col-span-3 flex items-center justify-center relative">
        {/* Content image */}
        <div>
          <img
            src={other_images.hero}
            className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] object-cover xl:-mt-28"
          />
          <div className="relative bg-white shadow-xl rounded-lg p-4 flex flex-col justify-center gap-2 max-w-[250px] mx-auto -mt-12">
            <div className="flex items-center">
              <img
                src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300"
              />
              <img
                src="https://img.freepik.com/foto-gratis/hombre-barbudo-feliz-sorprendido-camisa-apuntando-lejos_171337-5021.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
              />
              <img
                src="https://img.freepik.com/foto-gratis/retrato-hombre-afroamericano-inteligente-profesional-pie-manos-cruzadas-sobre-pecho-pose-confianza_176420-33861.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
              />
              <img
                src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
              />
              <img
                src="https://img.freepik.com/foto-gratis/negocios-finanzas-empleo-concepto-mujeres-emprendedoras-exitosas-joven-empresaria-segura-anteojos-mostrando-gesto-pulgar-arriba-sostenga-computadora-portatil-garantice-mejor-calidad-servicio_1258-59118.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
              />
            </div>
            <h2 className="text-xl font-bold tracking-[1px] text-gray-800">
              120 + Student
            </h2>
            <div className="flex items-center gap-2 text-lg text-gray-500">
              <RiStarFill className="text-primary" /> 5.0 (3.1k Reviews)
            </div>
            <div className="absolute -right-12 -bottom-12 -z-10">
              <div className="relative">
                <div className="absolute left-0 top-0 bg-white w-14 h-14"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Circle */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-white border-[10px] border-indigo-600 rounded-full -z-10"></div>

        {/* Logos */}
        <img
          src="https://images.unsplash.com/photo-1563663250558-5b68de90d93b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnJ1c2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-700 absolute top-[12%] right-[20%] xl:right-[10%]"
        />
        <img
          src="https://images.unsplash.com/photo-1663057826218-18e78f582513?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVuc2lsJTIwd2FybmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[10%] xl:top-[2%] left-[20%] xl:left-[10%]"
        />
        <img
          src="https://media.istockphoto.com/id/1355922949/id/foto/gadis-asia-di-festival-telur-paskah.webp?b=1&s=170667a&w=0&k=20&c=96ug_xCY9xvrOVAnw5adPTBYvQH19pkkTCSWVT5XB7Y="
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full absolute bottom-[5%] left-[15%] xl:left-[3%] -rotate-12"
        />
      </div>
    </section>
  );
};

export default HeroHome;
