import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mx-auto py-20 w-full h-screen flex flex-col items-center justify-center gap-5">
      <h2 className="text-5xl md:text-8xl font-semibold text-gray-700 text-center">
        Page not found!
      </h2>
      <Link to="/" className="btn">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
