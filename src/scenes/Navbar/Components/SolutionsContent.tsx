
export const SolutionsContent = () => {
    return (
      <div className="w-64 bg-white p-6 shadow-xl">
        <div className="mb-3 space-y-3">
          <h3 className="font-semibold">OverView</h3>
          <a href="/solution/IntroSolutions" className="block text-sm hover:underline px-2">
            Introduction to Solutions
          </a>
          <a href="/solution/BenefitsSolutions" className="block text-sm hover:underline px-2">
             Benefits of Our Solutions
          </a>
        </div>
        <div className="mb-6 space-y-3">
          <h3 className="font-semibold">Library Management</h3>
          <a href="/solution/Catalog" className="block text-sm hover:underline px-2">
            Catalog Management
          </a>
          <a href="/solution/UsrManagement" className="block text-sm hover:underline px-2">
            User Management
          </a>
          <a href="/solution/Circulation" className="block text-sm hover:underline px-2">
            Circulation Management
          </a>
        </div>
        <div className="mb-6 space-y-3">
          <h3 className="font-semibold">Digital Resources</h3>
          <a href="/solution/Ebooks" className="block text-sm hover:underline px-2">
            E-books
          </a>
          <a href="/solution/Online" className="block text-sm hover:underline px-2">
             Online Journals
          </a>
          <a href="/solution/Databases" className="block text-sm hover:underline px-2">
             Databases
          </a>
        </div>
        <div className="mb-6 space-y-3">
          <h3 className="font-semibold">Custom Solutions</h3>
          <a href="/solution/Tailored" className="block text-sm hover:underline">
            Tailored Systems
          </a>
          <a href="/solution/Integration" className="block text-sm hover:underline">
            Integration Services
          </a>
          <a href="/solution/Support" className="block text-sm hover:underline">
            Support and Maintenance
          </a>
        </div>
       
      </div>
    );
  };
  