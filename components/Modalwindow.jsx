"use client"
import React from "react";
import { services } from "@/constans";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Card, CardBody, Image, CardFooter} from "@nextui-org/react";
import Link from "next/link";

const Modalwindows=() =>{
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [backdrop, setBackdrop] = React.useState('opaque')
  const [servicenombre ,setServicenombre]=React.useState('');
  const [servicedescription ,setServicedescription]=React.useState('');
  const [servicedescription2,setServicedescription2]=React.useState('');
  const [serviceimage ,setServiceimage]=React.useState('');


  const serviceModal=(nombre,image,descipcion1,descipcion2)=>{
    setServicenombre(nombre)
    setServiceimage(image)
    setServicedescription(descipcion1)
    setServicedescription2(descipcion2)
    onOpen();
  }

  return (
    <>
        {services.map((item, index) => (
              <Card
                key={index}
                isPressable
                onPress={()=>serviceModal(item.name,item.image,item.descripcion1,item.descripcion2)}
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
                  <p className="text-lg">{item.resumen}</p>
                </CardFooter>
              </Card>
            ))}

      <Modal  isOpen={isOpen} onClose={onClose} size={'5xl'} >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-primary">{servicenombre}</ModalHeader>
              <ModalBody className="lg:flex-row flex-wrap justify-center items-center font-Roboto">

                <div className="lg:w-max lg:pl-6 lg:pr-6">
                    {servicedescription}
                    
                </div>
               
                  <div className="lg:w-3/5">
                    {servicedescription2}
                  </div>
                  <div className="lg:w-2/6 sm:w-3/5 " >
                <Image
                    radius="lg"
                    width="100%"
                    alt={servicenombre}
                    className="w-full object-cover h-[200px]"
                    src={serviceimage}
                  />
                </div >
              </ModalBody>
              <ModalFooter>
                <Button color="danger" size="lg" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Link href={'https://wa.me/xxxxxxx'}   target="_blank">
          <button className=" btn btn-whatsapp" >
            <div className="text-white">
              <Image
                src={"/icons/wathsapp.svg"}
                alt="ss"
                height={0}
                width={0}
                style={{ width: "30px", height: "auto" }}
              />
            </div>{" "}
            Reservar
          </button></Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export default Modalwindows