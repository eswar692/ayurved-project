import { AlignJustify, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div className=" h-[60px] w-full flex items-center">
      <div className="md:flex flex-row items-center justify-between w-full  relative ">
        <div className=" font-bold w-full   md:w-auto     ">
          <h3 className="text-[19px]  text-center pl-10 pt-2 text-orange-600">
            <span className="text-orange-700">F</span>amous{" "}
            <span className="text-orange-700">A</span>yurvedic{" "}
            <br className="md:hidden" />
            <span className="text-orange-700">S</span>pecilist
          </h3>
        </div>
        <nav className=" space-x-4 hidden md:flex w-1/2">
          <Link to="/" className="text-lg">
            Home
          </Link>
          <Link to="/about" className="text-lg">
            About
          </Link>
          <Link to="/services" className="text-lg">
            Services
          </Link>
        </nav>
        <div className="md:hidden flex items-center justify-end w-1/2 ">
          <button
            className=" absolute top-3 left-4 text-lg cursor-pointer bg-orange-400 p-2 rounded-sm text-white active:bg-orange-500 active:p hover:bg-orange-500 shadow-lg w-10 h-10 justify-center items-center flex"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.button
                  exit={{ scale: 0, opacity: 0 }}
                  initial={{ scale: 0.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.1 }}
                  className=" "
                  key={"close"}
                >
                  <X />
                </motion.button>
              ) : (
                <motion.button
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  className="cursor-pointer"
                  key={"open"}
                >
                  <AlignJustify className="text-white" size={30} />
                </motion.button>
              )}
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              className="fixed left-0 top-15 bottom-0 w-full bg-white shadow-lg z-10 md:hidden"
              initial={{ translateX: "-100%", opacity: 0.1 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              exit={{ translateX: "-100%", opacity: 0.1 }}
              key={"menu"}
            >
              <nav className="flex flex-col items-center space-y-5 p-4 pt-20">
                <div className="relative w-full flex items-center justify-center">
                  <Link
                    to="/"
                    className="text-lg hover:text-red-800 hover:font-bold text-center"
                  >
                    Home
                  </Link>
                  <span className="absolute top-0 right-0 ">
                    <ChevronRight className="w-6 h-6" />
                  </span>
                </div>

                <div className="relative w-full flex items-center justify-center">
                  <Link
                    to="/about"
                    className="text-lg hover:text-red-800 hover:font-bold text-center"
                  >
                    About
                  </Link>
                  <span className="absolute top-0 right-0 ">
                    <ChevronRight className="w-6 h-6" />
                  </span>
                </div>
                <div className="relative w-full flex items-center            justify-center">
                  <Link
                    to="/services"
                    className="text-lg hover:text-red-800 hover:font-bold text-center"
                  >
                    Services
                  </Link>
                  <span className="absolute top-0 right-0 ">
                    <ChevronRight className="w-6 h-6" />
                  </span>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
