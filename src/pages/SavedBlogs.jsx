import { useContext } from "react";
import SectionHeader from "../components/SectionHeader";
import { BlogContext } from "../contexts/BlogContext";
import BlogCard from "../components/BlogCard";

const SavedBlogs = () => {
  const [state, dispatch] = useContext(BlogContext);

  return (
    <div className="container mx-auto px-5 sm:px-20 py-20">
      <SectionHeader
        heading={`Saved Items (${state?.blogs?.length})`}
        subHeading="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo itaque minus illo recusandae molestias mollitia ullam sit impedit laborum! Iure recusandae eos nulla perferendis modi!"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
        {state?.blogs?.length > 0 &&
          state.blogs.map((blog, index) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              index={index}
              catid={blog.catid}
            />
          ))}
      </div>
    </div>
  );
};

export default SavedBlogs;
