
import React, { useState,useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const FlyoutLink = ({ children, href, FlyoutContent }) => {
    const [open, setOpen] = useState(false);
    const [isSmallDevice, setIsSmallDevice] = useState(false);
    

    useEffect(() => {
      const handleResize = () => {
        setIsSmallDevice(window.innerWidth < 640); // 640px is the breakpoint for small devices in Tailwind
      };
  
      handleResize();
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    const showFlyout = FlyoutContent && open;
    
  
    return (
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative w-fit h-fit"
      >
        <a href={href} className="relative text-white md:text-black">
          {children}
          <span
            style={{
              transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
            }}
            className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
          />
        </a>
        <AnimatePresence>
          {showFlyout && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              style={{ translateX:  isSmallDevice ? "-100%" : "-50%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className=" absolute  left-1/2  top-12 bg-white text-black "
            >
              <div className="absolute -top-6  left-0 right-0 h-6 bg-transparent" />
              <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
              <FlyoutContent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };