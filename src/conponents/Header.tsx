import { AlignJustify, ChevronRight, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

const Header = () => {
   const [isOpen, setIsOpen] = useState(false)
   console.log(isOpen)
  return (
    <div className="bg-red-300 h-[60px] w-full flex items-center">
      <div className="flex items-center justify-between w-full px-4 relative">
        <div className="text-2xl font-bold w-1/2 md:text-center ml-20 md:ml-0">My App</div>
        <nav className=" space-x-4 hidden md:flex w-1/2">
          <Link to="/" className="text-lg">Home</Link>
          <Link to="/about" className="text-lg">About</Link>
          <Link to="/services" className="text-lg">Services</Link>
          
        </nav>
        <div className="md:hidden flex items-center justify-end w-1/2 ">
          <button 
            className=" absolute top-0 left-5 text-lg cursor-pointer bg-orange-400 p-2 rounded-sm text-white active:bg-orange-500 active:p hover:bg-orange-500 shadow-lg w-10 h-10 justify-center items-center flex"
            onClick={() => setIsOpen(!isOpen)}
           
            >
              <AnimatePresence mode="wait">
                {
                  isOpen ? 
                    <motion.button
                      exit={{scale:0,opacity:0}}
                      initial={{scale:0.1,opacity:0}}
                      animate={{scale:1,opacity:1}}
                      transition={{duration:0.11}}
                      className=" "
                      key={"close"}
                      >
                      <X/>
                    </motion.button>
                  : 
                    <motion.button
                      initial={{scale:0,opacity:0}}
                      animate={{scale:1,opacity:1}}
                      transition={{duration:0.11}}
                      exit={{scale:0.5,opacity:0}}
                      className="cursor-pointer"
                      key={"open"}
                    >
                        <AlignJustify className="text-white" size={30}/>
                    </motion.button>
                }
              </AnimatePresence>
            </button>
        </div>
        
          <AnimatePresence mode="wait">
            {
                isOpen &&(
                <motion.div 
                  className="fixed left-0 top-15 bottom-0 w-full bg-white shadow-lg z-10 md:hidden"
                  initial={{ translateX: "-100%", opacity: 0.1}}
                  animate={{ translateX: 0, opacity: 1}}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  exit={{translateX:"-100%", opacity:0.1}}
                  key={"menu"}
                >
                  <nav className="flex flex-col items-center space-y-5 p-4 pt-20">
                    
                    
                    <div className="relative w-full flex items-center justify-center">
                      <Link to="/" className="text-lg hover:text-red-800 hover:font-bold text-center">Home</Link>
                      <span className="absolute top-0 right-0 ">
                      <ChevronRight className="w-6 h-6"/>
                      </span>
                    </div>
                    
                    <div className="relative w-full flex items-center justify-center">
                      <Link to="/about" className="text-lg hover:text-red-800 hover:font-bold text-center">About</Link>
                      <span className="absolute top-0 right-0 ">
                      <ChevronRight className="w-6 h-6"/>
                      </span>
                    </div>
                    <div className="relative w-full flex items-center            justify-center">
                      <Link to="/services" className="text-lg hover:text-red-800 hover:font-bold text-center">Services</Link>
                      <span className="absolute top-0 right-0 ">
                      <ChevronRight className="w-6 h-6"/>
                      </span>
                    </div>
                    
                  </nav>
                </motion.div>
                )              
            }
          </AnimatePresence>
        
      </div>
    </div>
  )
}

export default Header