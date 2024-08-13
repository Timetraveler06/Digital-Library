
import About from "../scenes/pages/AboutPage/About";
import History from "../scenes/pages/AboutPage/History";
import Internship from "../scenes/pages/AboutPage/Internship";
import JobOpening from "../scenes/pages/AboutPage/JobOpening";
import Leadership from "../scenes/pages/AboutPage/Leadership";
import Team from "../scenes/pages/AboutPage/Team";
import VisVal from "../scenes/pages/AboutPage/VisVal";
import Bibliographic from "../scenes/pages/ResourcePage/Bibliographic";
import Citation from "../scenes/pages/ResourcePage/Citation";
import FAQs from "../scenes/pages/ResourcePage/FAQs";
import Guides from "../scenes/pages/ResourcePage/Guides";
import Search from "../scenes/pages/ResourcePage/Search";
import Tutorial from "../scenes/pages/ResourcePage/Tutorial";
import ContactSupport from "../scenes/pages/ResourcePage/ContactSupport";
import BenefitsSolutions from "../scenes/pages/SolutionsPage/BenefitsSolutions";
import Catalog from "../scenes/pages/SolutionsPage/Catalog";
import Circulation from "../scenes/pages/SolutionsPage/Circulation";
import Databases from "../scenes/pages/SolutionsPage/Databases";
import Ebooks from "../scenes/pages/SolutionsPage/Ebooks";
import IntergrationServices from "../scenes/pages/SolutionsPage/IntergrationServices";
import IntroSolutions from "../scenes/pages/SolutionsPage/IntroSolutions";
import OnlineJournals from "../scenes/pages/SolutionsPage/OnlineJournals";
import Solutions from "../scenes/pages/SolutionsPage/Solutions";
import Support from "../scenes/pages/SolutionsPage/Support";
import TailoredSystems from "../scenes/pages/SolutionsPage/TailoredSystems";
import UsrManagement from "../scenes/pages/SolutionsPage/UsrManagement";
import ContactForm from "../scenes/pages/ContactPage/ContactForm";
import Office from "../scenes/pages/ContactPage/Office";
import Phone from "../scenes/pages/ContactPage/Phone";
import Collab from "../scenes/pages/ContactPage/Collab";
import Library from "../scenes/pages/ContactPage/Library";
import Technical from "../scenes/pages/ContactPage/Technical";
import Landing from "../scenes/Home/Landing";
import Enterprise from "../scenes/pages/PricingPage/Enterprise";
import StartUp from "../scenes/pages/PricingPage/StartUp";
import Smb from "../scenes/pages/PricingPage/Smb";
import Pay from "../scenes/pages/PricingPage/Pay";
import Intro from "../scenes/pages/PricingPage/Intro";


// routesConfig.ts
const routesConfig = [


     /** Home Route */
    { path: "/", element: <Landing/> },

     /** Solution Route */
    { path: "/solution/benefitsSolutions", element: <BenefitsSolutions/> },
    { path: "/solution/catalog", element: <Catalog/> },
    { path: "/solution/circulation", element: <Circulation/> },
    { path: "/solution/Databases", element: <Databases/> },
    { path: "/solution/Ebooks", element: <Ebooks/> },
    { path: "/solution/Integration", element: <IntergrationServices/> },
    { path: "/solution/IntroSolutions", element: <IntroSolutions/> },
    { path: "/solution/Online", element: <OnlineJournals/> },
    { path: "/solution/solution", element: <Solutions/> },
    { path: "/solution/Support", element: <Support/> },
    { path: "/solution/Tailored", element: <TailoredSystems/> },
    { path: "/solution/usrManagement", element: <UsrManagement/> },

     /** Resource Route */
    { path: "/resource/Bibliographic", element: <Bibliographic/> },
    { path: "/resource/Citation", element: <Citation/> },
    { path: "/resource/Search", element: <Search/> },
    { path: "/resource/Tutorial", element: <Tutorial/> },
    { path: "/resource/Practices", element: <Citation/> },
    { path: "/resource/Citations", element: <Citation/> },
    { path: "/resource/FAQs", element: <FAQs/> },
    { path: "/resource/FAQs", element: <FAQs/> },
    { path: "/resource/Guides", element: <Guides/> },
    { path: "/resource/Contact", element: <ContactSupport/> },

     /** About Route */
    { path: "/about", element: <About /> },
    { path: "/about/history", element: <History /> },
    { path: "/about/internship", element: <Internship /> },
    { path: "/about/leadership", element: <Leadership /> },
    { path: "/about/jobopening", element: <JobOpening /> },
    { path: "/about/team", element: <Team /> },
    { path: "/about/visval", element: <VisVal /> },

     /** Contact Route */
    { path: "/contact/contactForm", element: <ContactForm /> },
    { path: "/contact/office", element: <Office /> },
    { path: "/contact/phone", element: <Phone /> },
    { path: "/contact/collab", element: <Collab/> },
    { path: "/contact/library", element: <Library /> },
    { path: "/contact/technical", element: <Technical /> },

    /** Price Route */
    { path: "/price/intro", element: <Intro /> },
    { path: "/price/enterprise", element: <Enterprise /> },
    { path: "/price/pay", element: <Pay /> },
    { path: "/price/smb", element: <Smb /> },
    { path: "/price/startup", element: <StartUp /> },
    
    
  ];
  
  export default routesConfig;
  