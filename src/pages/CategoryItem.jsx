import { useParams } from "react-router-dom";
import { categories } from "../data/categories";
import NotFound from "../pages/NotFound";
import SectionHeader from "../components/SectionHeader";
import BlogCard from "../components/BlogCard";
import { useState } from "react";

const CategoryItem = () => {
  const [shouldAllItemsAppear, setShouldAllItemsAppear] = useState(false);

  const { catid } = useParams();
  const categoryItem = categories.find((item) => item.url === "/" + catid);

  if (!categoryItem) {
    return <NotFound />;
  }

  return (
    <div className="container mx-auto px-5 sm:px-20 py-20">
      <SectionHeader
        heading={categoryItem.title}
        subHeading={categoryItem.description}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 mb-10">
        {categoryItem.items.length > 0 &&
          !shouldAllItemsAppear &&
          categoryItem.items
            .slice(0, 8)
            .map((item, index) => (
              <BlogCard
                key={item.id}
                blog={item}
                index={index}
                catid={categoryItem.url}
              />
            ))}

        {categoryItem.items.length > 0 &&
          shouldAllItemsAppear &&
          categoryItem.items.map((item, index) => (
            <BlogCard
              key={item.id}
              blog={item}
              index={index}
              catid={categoryItem.url}
            />
          ))}
      </div>

      {!shouldAllItemsAppear && (
        <div className="flex justify-center">
          <button
            onClick={() => setShouldAllItemsAppear(true)}
            className="btn__outline"
          >
            Load More
          </button>
        </div>
      )}

      {shouldAllItemsAppear && (
        <div className="flex justify-center">
          <button
            onClick={() => setShouldAllItemsAppear(false)}
            className="btn__outline"
          >
            Collapse Items
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryItem;
