import React from 'react';
import Navbar from './scenes/Navbar/Navbar';

 // Adjust import path as needed

interface LayoutProps {
  children: React.ReactNode; // Defines the type for children
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main> {/* Main content will be rendered here */}
    
    </div>
  );
};

export default Layout;
