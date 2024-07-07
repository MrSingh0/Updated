import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Pfirst from "../../assets/Pfirst.png";
import Psecond from "../../assets/Psecond.png";
import Pthird from "../../assets/Pthird.png";
import Product11 from "../../assets/Product1.1.png";
import Product12 from "../../assets/Product1.2.png";
import Product13 from "../../assets/Product1.3.png";
import Product14 from "../../assets/Product1.4.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";
import "./style.css";

const data = [
  {
    id: 1,
    name: "Mercury Battery Kit",
    about:
      "The Mercury Battery Kit by ForFront is a specialized tool designed for testing, charging, and assessing the health of two-wheeler batteries. It offers precise diagnostics and reliable performance, ensuring that batteries are maintained in optimal condition. The kit's user-friendly interface and durable construction make it suitable for both professional mechanics and DIY enthusiasts. As a product from ForFront, a company dedicated to sustainability, the Mercury Battery Kit is environmentally friendly and contributes to a greener planet. This innovative kit helps extend the lifespan of batteries, reducing waste and promoting eco-friendly practices in the automotive industry.",
    images: [Pfirst, Product11, Product12, Product13, Product14],
    type: ["Two-wheeler", "100% Environment Friendly"],
  },
  {
    id: 2,
    name: "Venus Battery Kit",
    about:"Our Four-Wheeler Battery Kit is a specialized tool designed for application, testing, and charging in the four-wheeler battery sector. It offers precise diagnostics and reliable performance, ensuring that batteries are maintained in optimal condition. The kit's user-friendly interface and durable construction make it suitable for both professional mechanics and DIY enthusiasts. As a product from our company, dedicated to innovation and excellence, this Four-Wheeler Battery Kit is a testament to our commitment to quality and reliability. It is designed to seamlessly integrate with various four-wheeler battery systems, making it easy for users to install and utilize the necessary tools for effective battery management. This innovative kit helps extend the lifespan of batteries, reducing waste and promoting eco-friendly practices in the automotive industry. With our Four-Wheeler Battery Kit, you can be confident in maintaining your batteries efficiently and sustainably, contributing to a greener planet.",
    images: [Psecond, Pthird],
    type: ["Four-wheeler", "100% Environment Friendly"],
  },
  {
    id: 3,
    name: "Earth Battery Kit",
    about:"Our Four-Wheeler Battery Kit stands out with its ability to handle a wide range of high-capacity batteries, making it an indispensable tool for both professional mechanics and DIY enthusiasts. The kit is equipped with two specialized modules, each tailored to specific environments. Water module is designed for batteries used in aquatic environments, providing robust performance and longevity even under the most challenging conditions. It's ideal for marine vehicles and other water-based applications, ensuring your batteries remain reliable and efficient. Land module is Tailored for land-based vehicles, this module offers precise diagnostics and efficient charging capabilities. It helps to extend the lifespan of your batteries, maintaining their optimal condition and ensuring your vehicle is always ready for the road.",
    images: [Pthird, Psecond],
    type: ["High capacity", "100% Environment Friendly"],
  },
];

const Product = () => {
  const { id } = useParams();
  const product = data.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div> Product not found </div>;
  }

  const [mainImage, setMainImage] = useState(product.images[0]);

  const handleClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="product-page">
      <Navbar/>
      <h1 className="para mt-2 mb-2 ml-1 font-medium">
        <ChevronRightIcon className="text-black" />
        <Link to="/products" className="pare font-medium">
          Products
        </Link>
        <ChevronRightIcon className="text-black"  />
        {product.name}
      </h1>
      <div className="secn flex w-full">
        <div className="product-image w-2/4 pl-5 pr-5">
          <img src={mainImage} alt="Main product image" className="mainImage" />
          <div className="other w-full">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product image ${index + 1}`}
                onClick={() => handleClick(image)}
              />
            ))}
          </div>
        </div>
        <div className="centric w-2/4 pr-5">
          <h1 className="pname text-6xl">{product.name}</h1>
          <div className="flex">
            {product.type.map((image, index) => (
              <p className="product-type mr-2 pl-2 pr-2 font-medium">
                {product.type[index]}
              </p>
            ))}
          </div>
          <p className="product-about">{product.about}</p>
          <h1 className="text-2xl font-md mt-2 font-medium mb-2">Advantages:</h1>
          <ul className="ml-10 adv pb-5">
            <li>Environmentally friendly: Supports sustainability by extending battery lifespan.</li>
            <li>Versatile: Suitable for two-wheelers and low-voltage batteries.</li>
            <li>User-friendly: Easy operation for both professionals and DIY users.</li>
            <li>Portable: Lightweight and compact for convenient transportation.</li>
            <li>Instant diagnostics: Color-coded indicators for quick battery health assessment.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
