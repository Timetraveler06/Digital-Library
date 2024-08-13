import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AboutContent } from './Components/AboutContent';
import { ContactContent } from './Components/ContactContent';
import { PricingContent } from './Components/PricingContent';
import { ResourceContent } from './Components/ResourceContent';
import { SolutionsContent } from './Components/SolutionsContent';
import { FlyoutLink } from './FlyOutLink';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    if (window.scrollY >= 300) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`transition-all ease-in ${isFixed ? 'fixed top-0 z-50 w-full  shadow-md' : 'relative'}`}>
      
                {/* Desktop Navbar */}
     
        <motion.div
          className="mx-auto w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
     
            
          <div className={`hidden md:flex h-[100px] md:bg-black  justify-between items-start px-3 py-12 ${isFixed ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="flex px-5 whitespace-nowrap font-extrabold text-white">
              <a href="/">BRESC Library</a>
            </div>
            <div className="flex px-36 gap-24 ">
              <FlyoutLink FlyoutContent={SolutionsContent}>
                Solutions
              </FlyoutLink>
              <FlyoutLink  FlyoutContent={ResourceContent}>
                Resources
              </FlyoutLink>
              <FlyoutLink  FlyoutContent={AboutContent}>
                About Us
              </FlyoutLink>
              <FlyoutLink  FlyoutContent={ContactContent}>
                Contact Us
              </FlyoutLink>
              <FlyoutLink  FlyoutContent={PricingContent}>
                Pricing
              </FlyoutLink>
            </div>
          </div>
        </motion.div>


                  {/* Mobile Navbar */}
        <motion.div
          className="mx-auto w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
          }}
        
        >
      
          <div className="flex md:hidden items-center  p-4 bg-neutral-900">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            <div className="flex px-7 whitespace-nowrap font-extrabold text-white">
              <a href="/">BRESC Library</a>
            </div>
            <div
              className={`fixed top-0 right-0 h-full w-36 bg-neutral-900 transition-transform ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <div className="p-4">
                <ul className="flex flex-col gap-9 py-11">
                  <li>
                    <FlyoutLink  FlyoutContent={SolutionsContent}>
                      Solutions
                    </FlyoutLink>
                  </li>
                  <li>
                    <FlyoutLink  FlyoutContent={ResourceContent}>
                      Resources
                    </FlyoutLink>
                  </li>
                  <li>
                    <FlyoutLink  FlyoutContent={AboutContent}>
                      About Us
                    </FlyoutLink>
                  </li>
                  <li>
                    <FlyoutLink FlyoutContent={ContactContent}>
                      Contact Us
                    </FlyoutLink>
                  </li>
                  <li>
                    <FlyoutLink FlyoutContent={PricingContent}>
                      Pricing
                    </FlyoutLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
    </nav>
  );
};

export default Navbar;
