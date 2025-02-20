
export const AboutContent = () => {
    return (
      <div className="w-64 bg-white p-6 shadow-xl">
        <div className="mb-3 space-y-3">
          <h3 className="font-semibold">Our Mission</h3>
          <a href="/about/visval" className="block text-sm hover:underline px-2">
            Vision and Values
          </a>
          <a href="/about/history" className="block text-sm hover:underline px-2">
            History and Background
          </a>
        </div>
        <div className="mb-6 space-y-3">
          <h3 className="font-semibold">Team</h3>
          <a href="/about/team" className="block text-sm hover:underline px-2">
            Meet the Team
          </a>
          <a href="/about/leadership" className="block text-sm hover:underline px-2">
            Leadership
          </a>
        </div>
        <div className="mb-6 space-y-3">
          <h3 className="font-semibold">Careers</h3>
          <a href="/about/jobopening" className="block text-sm hover:underline px-2">
            Job Openings
          </a>
          <a href="/about/internship" className="block text-sm hover:underline px-2">
            Internship Opportunities
          </a>
          
        </div>
        
        
      </div>
    );
  };
  