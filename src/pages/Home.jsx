import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="relative">
      <Slider />
      {/* HERO TEXT CONTENTS */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[3] flex flex-col gap-5 items-center">
        <h1 className="text-7xl text-white font-bold text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </h1>
        <Link to="/categories" className="btn">
          Explore Categories
        </Link>
      </div>
      {/* SOCIAL LINKS */}
      <div className="absolute bottom-20 right-20 z-[3] flex items-center gap-5">
        <Link to="/" target="_blank">
          <Facebook color="white" size={24} />
        </Link>
        <Link to="/" target="_blank">
          <Instagram color="white" size={24} />
        </Link>
        <Link to="/" target="_blank">
          <Twitter color="white" size={24} />
        </Link>
        <Link to="/" target="_blank">
          <Linkedin color="white" size={24} />
        </Link>
        <Link to="/" target="_blank">
          <Youtube color="white" size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
