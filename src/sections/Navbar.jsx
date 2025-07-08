/* eslint-disable no-unused-vars */
import { Menu, X } from "lucide-react";
import { useState } from "react"
import { motion } from 'motion/react';



 export const Navbar = () => {
    const [isOpen , setIsOpen] = useState(false);

  return (
    
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">      
        <div className="mx-auto c-space max-w-7xl">
            <div className="flex items-center justify-between py-2 sm:py-0 " >
                <a
                 href="/"
                 className="text-3xl font-bold text-neutral-400 hover:text-white 
             transition-all duration-300 transform hover:scale-105 hover:shadow-sm scroll-smooth">
                   AtmosFlix 
                </a>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className=" flex items-center justify-center sm:hidden 
                               text-neutral-400 hover:text-white 
                               transition-all duration-300 ease-in-out 
                               transform hover:scale-110 focus:outline-none"
                >
                    {isOpen ? 
                       <X className="h-6 w-6"/> :
                       <Menu className="h-6 w-6"/> 
                    }
                </button>
                
                <nav className="hidden sm:flex">
                    <Navigation />
                </nav>
            </div>
        </div>

        {isOpen && 
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      }
    </div>
  )
}
 
function Navigation() {
    return (
      <ul className="nav-ul">
        <li className="nav-li">
          <a className="nav-link" href="#home">
            Home
          </a>
        </li>
        <li className="nav-li">
          <a className="nav-link" href="#about">
            About
          </a>
        </li>
        <li className="nav-li">
          <a className="nav-link" href="#work">
            Work
          </a>
        </li>
        <li className="nav-li">
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    );
  }