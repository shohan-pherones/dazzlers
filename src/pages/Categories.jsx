import { categories } from "../data/categories";
import Overlay from "../components/Overlay";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BOX_WIDTH } from "../constants/index";

const Categories = () => {
  const [shouldCategoryExpand, setShouldCategoryExpand] = useState(0);

  const expandedBoxWidth = BOX_WIDTH * (categories.length - 1);

  return (
    <div className="w-screen h-screen flex">
      {categories.map((category, index) => (
        <Link
          onMouseOver={() => setShouldCategoryExpand(index)}
          to={`/categories${category.url}`}
          key={category.id}
          className={`h-full ${
            index === shouldCategoryExpand
              ? `w-[calc(100vw-${expandedBoxWidth}px)]`
              : `w-[${BOX_WIDTH}px]`
          } overflow-hidden relative transition-[width] duration-300 ease-in-out`}
        >
          <img
            src={category.banner}
            alt={category.title}
            className="w-full h-full object-cover"
          />
          <Overlay />
          <div className="absolute z-[2] top-0 left-0 right-0 bottom-0 w-full h-full p-10 flex flex-col gap-5 items-center justify-center text-center text-white">
            <h2 className="text-4xl font-bold">{category.title}</h2>
            <p className={shouldCategoryExpand === index ? "block" : "hidden"}>
              {category.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
