import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AboutContent } from './Components/AboutContent';
import { ContactContent } from './Components/ContactContent';
import { PricingContent } from './Components/PricingContent';
import { ResourceContent } from './Components/ResourceContent';
import { SolutionsContent } from './Components/SolutionsContent';
import { FlyoutLink } from './FlyOutLink';

const Navbar = () => {
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
    <div className={`transition-all ease-in ${isFixed ? 'fixed top-0 z-50 w-full bg-white shadow-md' : 'relative'}`}>
      {/* Desktop Navbar */}
      <div className={`hidden md:flex h-[100px] justify-between items-start px-3 py-12 ${isFixed ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="flex px-5 whitespace-nowrap font-extrabold text-black">
          <p>BRESC Library</p>
        </div>
        <div className="flex px-36 gap-24">
          <FlyoutLink href="#" FlyoutContent={SolutionsContent}>
            Solutions
          </FlyoutLink>
          <FlyoutLink href="#" FlyoutContent={ResourceContent}>
            Resources
          </FlyoutLink>
          <FlyoutLink href="#" FlyoutContent={AboutContent}>
            About Us
          </FlyoutLink>
          <FlyoutLink href="#" FlyoutContent={ContactContent}>
            Contact Us
          </FlyoutLink>
          <FlyoutLink href="#" FlyoutContent={PricingContent}>
            Pricing
          </FlyoutLink>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden items-center justify-between p-4 bg-neutral-900">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <div
          className={`fixed top-0 right-0 h-full w-36 bg-neutral-900 transition-transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-4">
            <ul className="flex flex-col gap-9 py-11">
              <li>
                <FlyoutLink href="#" FlyoutContent={SolutionsContent}>
                  Solutions
                </FlyoutLink>
              </li>
              <li>
                <FlyoutLink href="#" FlyoutContent={ResourceContent}>
                  Resources
                </FlyoutLink>
              </li>
              <li>
                <FlyoutLink href="#" FlyoutContent={AboutContent}>
                  About Us
                </FlyoutLink>
              </li>
              <li>
                <FlyoutLink href="#" FlyoutContent={ContactContent}>
                  Contact Us
                </FlyoutLink>
              </li>
              <li>
                <FlyoutLink href="#" FlyoutContent={PricingContent}>
                  Pricing
                </FlyoutLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
