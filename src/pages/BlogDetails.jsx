import { useNavigate, useParams } from "react-router-dom";
import { categories } from "../data/categories";
import NotFound from "../pages/NotFound";
import SectionHeader from "../components/SectionHeader";

const BlogDetails = () => {
  const { catid, blogid } = useParams();

  const selectedCategory = categories.find(
    (category) => category.url === "/" + catid
  );

  if (!selectedCategory) {
    return <NotFound />;
  }

  const selectedBlog = selectedCategory.items.find(
    (item) => item.id === +blogid
  );

  if (!selectedBlog) {
    return <NotFound />;
  }

  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-20">
      <SectionHeader
        heading={selectedBlog.title}
        subHeading={selectedBlog.description}
      />

      <div className="w-full mt-5 sm:mt-20 aspect-[5/4] overflow-hidden">
        <img
          src={selectedBlog.image}
          alt={selectedBlog.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-10 sm:mt-20 flex justify-center">
        <button onClick={() => navigate(-1)} className="btn__outline">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;
