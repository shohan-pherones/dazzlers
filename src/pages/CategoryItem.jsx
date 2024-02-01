import { useParams } from "react-router-dom";

const CategoryItem = () => {
  const { catid } = useParams();

  return <div>CategoryItem</div>;
};

export default CategoryItem;
