const Realty = () => {
  return (
    <main className="pt-32 lg:pt-0">
      <section className="relative min-h-[921px] flex items-center overflow-hidden px-8">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full gap-2 bg-tertiary-fixed text-on-tertiary-fixed-variant text-sm font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
              <span className="text-xs font-bold tracking-widest uppercase font-label">
                Bacolod's Premier Realty
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary leading-[1.1] tracking-tighter">
              Architectural <br />
              Excellence
              <br /> in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Real Estate.
              </span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              Elevating the Bacolod landscape through strategic property
              development, expert brokerage, and seamless rental management
              solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                Explore Projects{" "}
                <span className="material-symbols-outlined">
                  holiday_village
                </span>
              </button>
              <button className="bg-surface-container-lowest clay-card text-primary px-10 py-4 rounded-full font-bold text-lg flex items-center gap-2">
                Contact Brokerage{" "}
                <span className="material-symbols-outlined">
                  contact_support
                </span>
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl transform lg:rotate-2 lg:scale-105">
              <img
                alt="Modern Architectural Estate"
                className="w-full h-[600px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCijAYACVX8Pjl2bodGqCh8tOS6_EkxG1gnSHKDvO5wJJwic3ovjB0sQGRtMX6u-ONw4DtzBzxipRUOMCoM_OGTCUkZ9dxuY9Fc1WOJhJhy0XaffCvn3unMEm6N92JIlEPTj2baIPC7sozHVUAoBuqQv4xSiv4BNDbteal4UCN517j_5zMVSaZCWSlXwfTRW_2yXqrGuPnVu0-gprOgH8pUHmr3b8gZEW4336Va6inSjJggcTaduz8-sQHV4hWF4QoPR3RCd1HiCRWM"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Services */}
      <section className="py-20 px-6 bg-surface-container-low rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-primary tracking-tight font-headline">
              Integrated Solutions
            </h2>
            <p className="text-on-surface-variant mt-4">
              Defining the future of Bacolod heritage estates.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
            {/* Buy and Sell Projects (BTS) */}
            <div className="md:col-span-8 group relative rounded-lg overflow-hidden clay-card bg-surface-container-lowest p-8 flex flex-col justify-end">
              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity">
                <img
                  alt="Corporate Building Construction"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm6VnlhAyYF-KSAflHRkTesA5TnnYIr9lxOl68ePUA1VHZ16FoOCU3oAPSZEw9qfTY6YaSsKiyL7aMmqCNZZhylEAIKoogh4dgEikLqccrOF7FgmCwT9190LFtDjmKmJ6APZVmw5ngpDBiTLVDkr7hAV0pKFdpM6B9CAutZbu9AXqnn5OiPztD_oqs20mhvCVSk9s_mkkOkfEdjiKcgXV6q3d9w3CRjAO12n8J_DWG9l1VuuYiRcZWeL4gzMheLjTlTo_nCB8-s4og"
                />
              </div>
              <div className="relative z-10 space-y-4 max-w-xl">
                <span className="material-symbols-outlined text-4xl text-on-tertiary-container">
                  construction
                </span>
                <h3 className="text-3xl font-bold text-primary">
                  Real Estate Buy and Sell (BTS)
                </h3>
                <p className="text-on-surface-variant">
                  Turnkey development solutions from site selection to final
                  architectural delivery. We specialize in high-yield
                  build-to-suit projects for residential and commercial
                  investors.
                </p>
                <div className="flex gap-4 pt-4">
                  <span className="bg-surface-container-highest px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider font-label">
                    Development
                  </span>
                  <span className="bg-surface-container-highest px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider font-label">
                    Investment
                  </span>
                </div>
              </div>
            </div>
            {/* Brokerage Services */}
            <div className="md:col-span-4 rounded-lg bg-primary p-8 flex flex-col justify-between text-on-primary">
              <span className="material-symbols-outlined text-4xl text-secondary-container">
                handshake
              </span>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">End-to-End Brokerage</h3>
                <p className="text-on-primary-container text-sm leading-relaxed">
                  Strategic property matching, legal due diligence, and expert
                  negotiation for premium Bacolod estates.
                </p>
                <ul className="space-y-2 mt-6">
                  <li className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-xs">
                      check_circle
                    </span>{" "}
                    Asset Valuation
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-xs">
                      check_circle
                    </span>{" "}
                    Legal Transfers
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-xs">
                      check_circle
                    </span>{" "}
                    Portfolio Management
                  </li>
                </ul>
              </div>
            </div>
            {/* Rental & Project Management */}
            <div className="md:col-span-5 rounded-lg clay-card bg-surface-container-lowest p-8 flex flex-col gap-6">
              <div className="aspect-video rounded-xl overflow-hidden bg-surface-container-high">
                <img
                  alt="Luxury Apartment Interior"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkt51dup72Ru1xLm541-eGKonepWM7rhdyxha1HaksR07bymWhTY9oGF2N1u9XeBow_1Ty0I49zhGXYR95NXagMTdS8UnIVx4b_ihSBoMtPkJpjuFKKc8MIdqy_eT4cgBGK1TVK75aYLuYCDUpPofWcMcEY1tHJ0pcMCj3fUoVZKh22AG79XZn7b4RbWLys1AqAJibl5-OKVTPkHyWnaYYt3XsynrtNuh21UvkRCi-2E3Jqq1M7Sqbx56i1sLfehSgFW6xjf4IjeA6"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">
                  Project Management
                </h3>
                <p className="text-on-surface-variant text-sm">
                  Precision oversight of construction timelines and property
                  upkeep for maximum asset longevity.
                </p>
              </div>
            </div>
            {/* Tenant Screening & Rent Collection */}
            <div className="md:col-span-7 rounded-lg clay-card bg-secondary-container/10 p-8 flex flex-col md:flex-row gap-8 items-center border border-white/20">
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl font-bold text-primary tracking-tight">
                  Rental & Tenant Operations
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-white shadow-sm">
                      <span className="material-symbols-outlined text-secondary">
                        verified_user
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">
                        Advanced Screening
                      </h4>
                      <p className="text-sm text-on-surface-variant">
                        Multi-layered background checks and financial vetting
                        for peace of mind.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-white shadow-sm">
                      <span className="material-symbols-outlined text-secondary">
                        payments
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">
                        Automated Collection
                      </h4>
                      <p className="text-sm text-on-surface-variant">
                        Seamless rent remittance and comprehensive monthly
                        financial reporting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4">
                <div className="h-32 bg-white rounded-2xl shadow-sm p-4 flex flex-col justify-between">
                  <span className="text-xs font-black text-on-surface-variant uppercase font-label tracking-tighter">
                    Tenant ROI
                  </span>
                  <span className="text-2xl font-bold text-secondary">
                    12.4%
                  </span>
                </div>
                <div className="h-32 bg-white rounded-2xl shadow-sm p-4 flex flex-col justify-between">
                  <span className="text-xs font-black text-on-surface-variant uppercase font-label tracking-tighter">
                    Occupancy
                  </span>
                  <span className="text-2xl font-bold text-secondary">98%</span>
                </div>
                <div className="col-span-2 h-32 bg-primary rounded-2xl shadow-sm p-4 flex items-center justify-between text-on-primary">
                  <div>
                    <span className="text-xs opacity-60 uppercase font-label">
                      Active Units
                    </span>
                    <div className="text-2xl font-bold">450+ Properties</div>
                  </div>
                  <span className="material-symbols-outlined text-3xl opacity-30">
                    apartment
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Focus */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 rounded-xl overflow-hidden aspect-[8/4] md:aspect-[16/10] clay-card">
            <iframe
              title="Bacolod City Map"
              src="https://maps.google.com/maps?hl=en&q=Bacolod%20City&z=14&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold text-primary font-headline tracking-tighter">
              Strategic Locations across Bacolod
            </h2>
            <p className="text-on-surface-variant">
              We prioritize prime realty in high-growth corridors, ensuring
              every project under our management benefits from urban
              appreciation and accessibility.
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-surface-container-low flex justify-between items-center group cursor-pointer hover:bg-surface-container-high transition-all">
                <span className="font-bold text-primary">
                  Mandalagan Business District
                </span>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-low flex justify-between items-center group cursor-pointer hover:bg-surface-container-high transition-all">
                <span className="font-bold text-primary">
                  The Upper East Corridor
                </span>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-low flex justify-between items-center group cursor-pointer hover:bg-surface-container-high transition-all">
                <span className="font-bold text-primary">
                  Mansilingan Estates
                </span>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-primary-container rounded-[3rem] p-10 md:p-20 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-on-tertiary-container/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter font-headline max-w-3xl mx-auto">
            Ready to Invest in the Future of Bacolod?
          </h2>
          <p className="text-on-primary-container text-lg max-w-2xl mx-auto">
            Join LeeCoste Corp for premium realty solutions, from heritage
            estate brokerage to modern asset management.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2">
              Start Buying/Selling{" "}
              <span className="material-symbols-outlined">
                real_estate_agent
              </span>
            </button>
            <button className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2">
              Rental Management{" "}
              <span className="material-symbols-outlined">apartment</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Realty;
