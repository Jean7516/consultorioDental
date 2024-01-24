import { Facebook, Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export const navLinks = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Acerca de...",
    url: "#about",
  },
  {
    label: "Servicios",
    url: "#service",
  },
 
  {
    label: "Ubicacion",
    url: "#search",
  },
];


export const services=[
  {
    id: 1,
    name: "Limpieza dental profesional",
    link: "/",
    image: 
      "/images/servicio1.jpeg",
    
    description:"Eliminación de placa, manchas y sarro, dejando los dientes siempre limpios y brillantes. "
  },
  {
    id: 2,
    name: "Limpieza dental profesional",
    link: "/",
    image: 
      "/images/servicio2.jpeg",
    
    description:"Procedimiento seguro y efectivo para aclarar el color de los dientes, eliminando manchas y decoloraciones."
  },
  {
    id: 3,
    name: "Limpieza dental profesional",
    link: "/",
    image: 
      "/images/servicio3.jpeg",
    
    description:"Extracción segura de dientes dañados, retenidos o con caries para mantener una salud bucal óptima. "
  },
  {
    id: 4,
    name: "Limpieza dental profesional",
    link: "/",
    image: 
      "/images/servicio4.jpeg",
    
    description:"Reparación de caries mediante empastes estéticos que restauran la funcionalidad y apariencia dental. "
  },
  {
    id: 5,
    name: "Coronas dentales",
    link: "/",
    image: 
      "/images/servicio5.jpg",
    
    description:"Restauración de dientes dañados o debilitados mediante coronas que brindan protección y estética. "
  },
  {
    id: 6,
    name: "Ortodoncia",
    link: "/",
    image: 
      "/images/servicio6.jpeg",
    
    description:"Corrección de problemas de maloclusión y alineamiento dental para una sonrisa más saludable y atractiva."
  },
  
]


export const portfolios = [
  {
    id: 1,
    title: "Blog",
    link: "https://blogg-7px2.onrender.com",
    images: [
      "/images/portfolio-7.png",
      "/images/portfolio-8.png",
      "/images/portfolio-9.png",
    ],
    useF:[
      "ReactJS",
      "ViteJS",
      "Tailwind",
      "MongoBD"
    ],
    text:"Un Blog hecho en React con ViteJS, implementado un dashboar conectado a una base de datos MongoDB "
  },
  {
    id: 2,
    title: "Resumir Articulos web",
    link: "https://luxury-squirrel-4201c3.netlify.app",
    images: [
      "/images/portfolio-4.png",
      "/images/portfolio-5.png",
      "/images/portfolio-6.png",
    ],
    useF:[
      "ReactJS",
      "Tailwindcss",
      "ViteJS",
    ],
    text:"Una aplicación web React que resume aritculos proporcionados mediante una URl. La interfaz de usuario se diseñó utilizando TailwindCSS "
  },
  {
    id: 3,
    title: "Rutinas de ejercicio",
    link: "https://earnest-custard-10f00e.netlify.app",
    images: [
      "/images/portfolio-1.png",
      "/images/portfolio-2.png",
      "/images/portfolio-3.png",
    ],
    useF:[
      "ReactJS",
      "JavaScript",
      "MuiMaterials"
    ],
    text:"Una aplicación web React que recopila datos de una api de Ejercicios para mostrarlas en una interfas. La interfaz de usuario se diseñó utilizando IconMaterial. "
  },

];


export const socialLinks = [
  {
    id: 1,
    label: "Facebook",
    icon: Facebook,
    url: "",
  },
  {
    id: 2,
    label: "Whatsapp",
    icon: Phone,
    url: "https://wa.me/XXXXX",
  },

];
export const contactDetails = [
  {
    id: 1,
    icon: Phone,
    text: " xxxxxxx",
  },
  {
    id: 2,
    icon: Mail,
    text: "contacto@gmail.com",
  },
  {
    id: 3,
    icon: MapPin,
    text: "Lima, Peru",
  },
];
