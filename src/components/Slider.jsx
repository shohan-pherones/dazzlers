import { useEffect, useState } from "react";
import Overlay from "../components/Overlay";

const slides = [
  "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2229490/pexels-photo-2229490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/375880/pexels-photo-375880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const Slider = () => {
  const [curImg, setCurImg] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (curImg === slides.length - 1) {
        setCurImg(0);
      } else {
        setCurImg(curImg + 1);
      }
    }, 10000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [curImg]);

  return (
    <div className="w-screen h-screen relative">
      <img
        src={slides[curImg]}
        alt="Slide image"
        className="w-full h-full object-cover"
      />
      <Overlay />
      <div className="absolute left-1/2 -translate-x-1/2 bottom-20 z-[2] flex items-center gap-5">
        {slides.map((_, index) => (
          <button
            onClick={() => setCurImg(index)}
            key={index}
            className={`${
              index === curImg ? "w-10" : "w-3"
            } h-3 rounded-full bg-white`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
