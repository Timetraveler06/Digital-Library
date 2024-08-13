
export const ResourceContent = () => {
    return (
      <div className="w-64 bg-white p-6 shadow-xl">
        <div className="mb-3 space-y-3">
          <h3 className="font-semibold">Research Tools</h3>
          <a href="/resource/Search" className="block text-sm hover:underline px-2">
            Search Engine
          </a>
          <a href="/resource/Bibliographic" className="block text-sm hover:underline px-2">
            Bibliographic Tools
          </a>
        </div>
        <div className="mb-6 space-y-3">
          <h3 className="font-semibold">Learning Materials</h3>
          <a href="/resource/Tutorial" className="block text-sm hover:underline px-2">
            Tutorials and Guides
          </a>
          <a href="/resource/Practices" className="block text-sm hover:underline px-2">
           Best Practices
          </a>
          <a href="/resource/Citations" className="block text-sm hover:underline px-2">
            Citation Guides
          </a>
        </div>
        <div className="mb-6 space-y-3">
          <h3 className="font-semibold">Help Center</h3>
          <a href="/resource/FAQs" className="block text-sm hover:underline px-2">
            FAQs
          </a>
          <a href="/resource/Guides" className="block text-sm hover:underline px-2">
            User Guides
          </a>
          <a href="/resource/Contact" className="block text-sm hover:underline px-2">
            Contact Support
          </a>
        </div>
        
        
      </div>
    );
  };
  