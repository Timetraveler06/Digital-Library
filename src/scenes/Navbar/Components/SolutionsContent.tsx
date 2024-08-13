
export const SolutionsContent = () => {
    return (
      <div className="w-64 bg-white p-6 shadow-xl">
        <div className="mb-3 space-y-3">
          <h3 className="font-semibold">OverView</h3>
          <a href="/IntroSolutions" className="block text-sm hover:underline px-2">
            Introduction to Solutions
          </a>
          <a href="/BenefitsSolutions" className="block text-sm hover:underline px-2">
             Benefits of Our Solutions
          </a>
        </div>
        <div className="mb-6 space-y-3">
          <h3 className="font-semibold">Library Management</h3>
          <a href="/Catalog" className="block text-sm hover:underline px-2">
            Catalog Management
          </a>
          <a href="/UsrManagement" className="block text-sm hover:underline px-2">
            User Management
          </a>
          <a href="/Circulation" className="block text-sm hover:underline px-2">
            Circulation Management
          </a>
        </div>
        <div className="mb-6 space-y-3">
          <h3 className="font-semibold">Digital Resources</h3>
          <a href="/Ebooks" className="block text-sm hover:underline px-2">
            E-books
          </a>
          <a href="/OnlineJournals" className="block text-sm hover:underline px-2">
             Online Journals
          </a>
          <a href="/Databases" className="block text-sm hover:underline px-2">
             Databases
          </a>
        </div>
        <div className="mb-6 space-y-3">
          <h3 className="font-semibold">Custom Solutions</h3>
          <a href="/TailoredSystems" className="block text-sm hover:underline">
            Tailored Systems
          </a>
          <a href="/IntegrationServices" className="block text-sm hover:underline">
            Integration Services
          </a>
          <a href="/Support" className="block text-sm hover:underline">
            Support and Maintenance
          </a>
        </div>
       
      </div>
    );
  };
  