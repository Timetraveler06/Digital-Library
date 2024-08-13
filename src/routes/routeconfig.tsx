import Landing from "../scenes/Home/Landing";
import About from "../scenes/pages/AboutPage/About";
import History from "../scenes/pages/AboutPage/History";
import Internship from "../scenes/pages/AboutPage/Internship";
import JobOpening from "../scenes/pages/AboutPage/JobOpening";
import Leadership from "../scenes/pages/AboutPage/Leadership";
import Team from "../scenes/pages/AboutPage/Team";
import VisVal from "../scenes/pages/AboutPage/VisVal";
import Contact from "../scenes/pages/ContactPage/Contact";


// routesConfig.ts
const routesConfig = [
    { path: "/", element: <Landing /> },
    { path: "/about", element: <About /> },
    { path: "/about/history", element: <History /> },
    { path: "/about/internship", element: <Internship /> },
    { path: "/about/leadership", element: <Leadership /> },
    { path: "/about/jobopening", element: <JobOpening /> },
    { path: "/about/team", element: <Team /> },
    { path: "/about/visval", element: <VisVal /> },
    { path: "/contact", element: <Contact /> },
    // Add more routes here
  ];
  
  export default routesConfig;
  