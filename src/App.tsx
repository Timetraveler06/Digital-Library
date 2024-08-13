import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import routesConfig from './routes/routeconfig';


// Importing the routes configuration

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {routesConfig.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
