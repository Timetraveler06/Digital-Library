
export const ContactContent = () => {
    return (
      <div className="w-64 bg-white p-6 shadow-xl">
        <div className="mb-3 space-y-3">
          <h3 className="font-semibold">General Inquiries</h3>
          <a href="#" className="block text-sm hover:underline px-2">
            Contact Form
          </a>
          <a href="#" className="block text-sm hover:underline px-2">
            Office Location 
          </a>
          <a href="#" className="block text-sm hover:underline px-2">
            Phone Numbers
          </a>
        </div>
        <div className="mb-6 space-y-3">
          <h3 className="font-semibold">Support</h3>
          <a href="#" className="block text-sm hover:underline px-2">
            Technical Support
          </a>
          <a href="#" className="block text-sm hover:underline px-2">
            Library Help Desk
          </a>
        </div>
        <div className="mb-6 space-y-3">
          <h3 className="font-semibold">Partnerships</h3>
          <a href="#" className="block text-sm hover:underline px-2">
          Collaboration Opportunities
          </a>
          
        </div>

        <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
          Contact Us
        </button>
        
        
      </div>
    );
  };
  