const Footer = () => {
  return (
    <footer className="w-full rounded-t-[3rem] mt-20 bg-surface text-slate-500 text-sm">
      <div className="bg-surface-container-low">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-16 max-w-screen-2xl mx-auto">
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-bold text-primary mb-6">
              LeeCoste Realty Constructions & Supplies Corp.
            </div>
            <p className="mb-6 leading-relaxed">
              Defining the skyline with architectural integrity and specialized
              construction expertise.
            </p>
            <div className="flex gap-4">
              <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">
                social_leaderboard
              </span>
              <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">
                language
              </span>
              <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">
                share
              </span>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <a
                  className="hover:text-primary hover:translate-x-1 transition-all block"
                  href="#"
                >
                  Residential Construction
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary hover:translate-x-1 transition-all block"
                  href="#"
                >
                  Commercial Development
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary hover:translate-x-1 transition-all block"
                  href="#"
                >
                  Property Management
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-6">Company</h4>
            <ul className="space-y-4">
              <li>
                <a
                  className="hover:text-primary hover:translate-x-1 transition-all block"
                  href="#"
                >
                  Real Estate Consulting
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary hover:translate-x-1 transition-all block"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary hover:translate-x-1 transition-all block"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-6">Legal</h4>
            <ul className="space-y-4">
              <li>
                <a
                  className="hover:text-primary hover:translate-x-1 transition-all block"
                  href="#"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary hover:translate-x-1 transition-all block"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 px-12 py-8 max-w-screen-2xl mx-auto flex justify-between items-center text-xs">
          <div>
            © {new Date().getFullYear()} LeeCoste Realty Constructions &
            Supplies Corp. All rights reserved.
          </div>
          <div className="flex gap-6">
            <span>Bacolod City, Negros Occidental, PH</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
