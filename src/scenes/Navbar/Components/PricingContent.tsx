
export const PricingContent = () => {
    return (
      <div className="w-64 bg-white p-6 shadow-xl">
        <div className="mb-3 space-y-3 ">
          <h3 className="font-semibold">For Individuals</h3>
          <a href="/price/intro" className="block text-sm hover:underline px-2">
            Introduction
          </a>
          <a href="/price/pay" className="block text-sm hover:underline px-2">
            Pay as you go
          </a>
        </div>
        <div className="mb-6 space-y-3">
          <h3 className="font-semibold">For Companies</h3>
          <a href="/price/startup" className="block text-sm hover:underline px-2">
            Startups
          </a>
          <a href="/price/smb" className="block text-sm hover:underline px-2">
            SMBs
          </a>
          <a href="/price/enterprise" className="block text-sm hover:underline px-2">
            Enterprise
          </a>
        </div>
        <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
          Contact sales
        </button>
      </div>
    );
  };
  