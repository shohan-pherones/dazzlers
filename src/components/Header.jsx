import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed z-[100] left-1/2 -translate-x-1/2 top-10 bg-rose-300 w-full container px-20 flex items-center justify-between">
      <Link to="/" className="">
        Dazzlers
      </Link>
      <p>Right</p>
    </div>
  );
};

export default Header;
