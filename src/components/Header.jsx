import {
  AlignJustify,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import { useContext, useState } from "react";
import { Link, useResolvedPath } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { BlogContext } from "../contexts/BlogContext";

const navItems = [
  { label: "Home", url: "/" },
  { label: "Categories", url: "/categories" },
  { label: "Saved Items", url: "/saved" },
  { label: "About", url: "/about" },
  { label: "Contact", url: "/contact" },
];

const Header = () => {
  const [shouldNavAppear, setShouldNavAppear] = useState(false);
  const [state, dispatch] = useContext(BlogContext);

  const { pathname } = useResolvedPath();

  return (
    <>
      <div
        className={`overflow-hidden fixed z-[100] left-1/2 -translate-x-1/2 top-10 w-full container px-5 sm:px-20 flex items-center ${
          pathname === "/" ? "justify-center" : "justify-between"
        }`}
      >
        <motion.div
          initial={{ y: "-100%" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
        >
          <Link
            to="/"
            className={`text-2xl lowercase font-semibold bg-white/80 backdrop-blur-lg px-5 py-2.5 rounded-xl border ${
              pathname === "/" ? "hidden" : "inline-block"
            }`}
          >
            Dazzlers<span className="text-cyan-600">.</span>
          </Link>
        </motion.div>

        <motion.button
          initial={{ y: "-100%" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
          onClick={() => setShouldNavAppear(!shouldNavAppear)}
          className="w-10 aspect-square bg-white/80 backdrop-blur-lg rounded-full flex items-center justify-center border"
        >
          <AlignJustify size={18} />
        </motion.button>
      </div>

      <AnimatePresence>
        {shouldNavAppear && (
          <>
            <div
              onClick={() => setShouldNavAppear(false)}
              className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-transparent z-[100]"
            ></div>
            <motion.div
              onClick={() => setShouldNavAppear(false)}
              initial={{ x: "100%" }}
              whileInView={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed right-0 top-0 bottom-0 w-screen sm:w-[50vw] lg:w-[35vw] xl:w-[25vw] h-full bg-white z-[101] shadow-2xl"
            >
              <button
                onClick={() => setShouldNavAppear(false)}
                className="top-10 right-10 absolute z-[102]"
              >
                <X size={18} />
              </button>

              <div className="px-10 py-20 flex flex-col gap-5 items-start">
                <p className="uppercase text-sm font-semibold tracking-widest text-gray-400 border-b w-full pb-2.5">
                  Navigations
                </p>
                {navItems.map((item, index) => (
                  <Link
                    key={item.url}
                    to={item.url}
                    className="text-3xl font-semibold text-gray-700 overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: "100%" }}
                      whileInView={{ y: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: 0.125 * index,
                      }}
                    >
                      {item.label}{" "}
                      {item.url === "/saved" && `(${state?.blogs?.length})`}
                    </motion.div>
                  </Link>
                ))}
              </div>

              <div className="px-10 py-20 mt-20 sm:mt-40 flex flex-col gap-5 items-start">
                <p className="uppercase text-sm font-semibold tracking-widest text-gray-400 border-b w-full pb-2.5">
                  Socials
                </p>
                <div className="flex items-center gap-5 text-gray-700">
                  <Link to="/" target="_blank">
                    <Facebook size={24} />
                  </Link>
                  <Link to="/" target="_blank">
                    <Instagram size={24} />
                  </Link>
                  <Link to="/" target="_blank">
                    <Twitter size={24} />
                  </Link>
                  <Link to="/" target="_blank">
                    <Linkedin size={24} />
                  </Link>
                  <Link to="/" target="_blank">
                    <Youtube size={24} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
