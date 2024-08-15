import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface FlyoutLinkProps {
  children: React.ReactNode;
  FlyoutContent: React.FC;
}

export const FlyoutLink: React.FC<FlyoutLinkProps> = ({ children, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const [isSmallDevice, setIsSmallDevice] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <button className="relative text-white">
        {children}
        <span
          style={{
            transform: open ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: isSmallDevice ? "-100%" : "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
              <div className="absolute top-0 right-2 h-5 w-8 bg-white  rotate-45
                  md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2
                  md:right-0 md:w-5">
              </div>


            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
