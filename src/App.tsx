import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout'; // Adjust import path as needed
import Landing from './scenes/Home/Landing'; // Adjust import path as needed
import About from './scenes/pages/AboutPage/About'
import Contact from './scenes/pages/ContactPage/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          {/* Add more routes here */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
