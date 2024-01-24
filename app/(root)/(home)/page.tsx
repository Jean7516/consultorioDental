import React from "react";
//import Image from "next/image";
import { services } from "@/constans";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Maps from "@/components/Maps";
import Link from "next/link";

const page = () => {
  return (
    <>
      {/*Seccion de banner */}
      <section id="/" className="h-screen">
        <div className="flex flex-col w-full items-center justify-center h-screen gap-10">
          <span className="font-bold text-white text-2xl tablet:text-3xl w-2/3 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-center">
            Logre su mejor sonrisa ¡Experimente atención dental de clase mundial
            y transforme su sonrisa con nuestro equipo de expertos!
          </span>
          <Link href={'https://wa.me/xxxxxxx'}   target="_blank">
          <button className=" btn btn-whatsapp" >
            <div className="text-white">
              <Image
                src={"/icons/wathsapp.svg"}
                alt="ss"
                height={0}
                width={0}
                style={{ width: "35px", height: "auto" }}
              />
            </div>{" "}
            Reservar ahora
          </button></Link>
        </div>
      </section>

      {/*Seccion de sobre nosotros */}
      <section id="about" className="" data-aos="fade-down-right ">
        <div className="flex flex-col tablet:flex-row content-center justify-center gap-2 ">
          <div className="p-10 tablet:w-2/4 tablet:mt-12 text-center">
            <h1 className="font-text mb-3">Sobre nosotros</h1>
            <h5>
              Somos un equipo de profesionales comprometidos con la salud bucal
              de nuestros pacientes. Nuestro enfoque se centra en brindar un
              servicio de calidad y atención personalizada para garantizar la
              satisfacción y bienestar de quienes confían en nosotros. <br />
              Con una ubicación privilegiada en Chimbote, ANC, nos esforzamos
              por ofrecer tratamientos dentales innovadores y eficaces,
              respaldados por la última tecnología y técnicas especializadas. En
              Yanngo, su sonrisa es nuestra prioridad.
            </h5>
          </div>
          <div className="p-10 tablet:w-2/4 flex justify-center items-center tablet:mt-12">
            <div className="text-white w-200">
              <Image
                radius="lg"
                width="100%"
                alt="sss"
                className="w-full object-cover h-[300px]"
                src={"/images/nosotros.jpeg"}
              />
            </div>
          </div>
        </div>
      </section>

      {/*Seccion de servicios */}
      <section id="service" className="relative z-0">
        <div className="flex flex-col justify-center content-center items-center  ">
          <h1 className="font-text  text-center tablet:mt-20  w-max">
            Servicios
          </h1>
          <div className="p-16 gap-3 grid grid-cols-1 lg:grid-cols-3 tablet:gap-6">
            {services.map((item, index) => (
              <Card
                key={index}
                isPressable
                className="relative "
                data-aos="fade-down-right "
              >
                <CardBody className="overflow-visible p-0  ">
                  <Image
                    radius="lg"
                    width="100%"
                    alt={item.name}
                    className="w-full object-cover h-[240px]"
                    src={item.image}
                  />
                </CardBody>
                <CardFooter className="grid grid-cols-1 text-pretty">
                  <h4 className="mb-2 font-primary">{item.name}</h4>
                  <p className="text-lg">{item.description}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/*Seccion de direccion */}
      <section
        id="search"
        className="flex md:flex-col tablet:flex-row justify-center items-center tablet:pt-20 tablet:pb-20 bg-slate-500/20"
        data-aos="fade-down-right "
      >
        <div className="w-2/4 text-center text-base font-primary  flex flex-row gap-6">
          <div className=" w-1/2 ">
                  <h4 className="mb-4">
                  Horarios:
                  </h4>
                  <p className="mb-3">
                  Lun – Sáb:
                   <br />
                   9am- 7pm
                    <br />
                  Domingo : 
                 
                  Cerrado</p>
                 
          </div>
          <div >
                <h4 className="mb-4">
                Contáctenos:
                </h4>
                <p>
                Urb... Lima, PE <br />
                contacto@gmail.com <br />
                Llámenos: +51 xxx xxxx xx <br />
                </p>
                <a href="https://wa.me/XXXXXX"   target="_blank" className="text-lime-600 hover:text-red-500"> Chatea con Whastapp</a>
          </div>
        </div>
        <Maps />
      </section>
    </>
  );
};

export default page;
