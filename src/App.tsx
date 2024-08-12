import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout'; // Adjust import path as needed
import Landing from './scenes/Home/Landing'; // Adjust import path as needed
import AboutPage from './scenes/pages/AboutPage/About'

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Add more routes here */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
