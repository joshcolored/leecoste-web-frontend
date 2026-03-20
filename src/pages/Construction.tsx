const Construction = () => {
  return (
    <main className="pt-32 lg:pt-0">
      <section className="relative min-h-[921px] flex items-center overflow-hidden px-8">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-sm font-bold tracking-widest uppercase">
              Engineering Excellence
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary leading-[1.1] tracking-tighter">
              Defining the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Architectural
              </span>{" "}
              <br />
              Monolith.
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              LeeCoste Corp blends technical precision with premium aesthetics
              to build heritage-grade environments across the Philippines.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all active:scale-95">
                View Our Portfolio{" "}
                <span className="material-symbols-outlined">architecture</span>
              </button>
              <button className="bg-surface-container-lowest clay-card text-primary px-10 py-4 rounded-full font-bold text-lg flex items-center gap-2">
                Our Process{" "}
                <span className="material-symbols-outlined">
                  settings_suggest
                </span>
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl transform lg:rotate-2 lg:scale-105">
              <img
                alt="Architectural closeup of modern building"
                className="w-full h-[600px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD69KZvpTzxRaEF70grlGgJkFAfp73E2SgfrVlDfWpX9NrVOcqfZphBIv-90zLq0w--YS08YviMfDhgGRM5qTwPPrSg0jL5V6uhtYChXvNAiRsjMm6tKSx5wmLBQiPR3wxJELsKX_xe2wZjYyFp4rYyNRWuI5dSbS8xLZ4Kie-B3thkD2k2xhzu-ESfHK_ll9nDx-e2wuPaIBrnNUeNxyzppi83YmvwNnXDMFtKLw7YocB9EfOuD4cNfQgnnlI1_a9xpHVFOoV4rajd"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Pillars Section (Bento Grid) */}
      <section className="px-8 py-32 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-primary tracking-tight mb-4">
              Engineering Pillars
            </h2>
            <p className="text-on-surface-variant max-w-2xl">
              Expertly delivered solutions ranging from ground-up design-build
              projects to high-end interior refinements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Pillar 1: Design-Build */}
            <div className="md:col-span-8 clay-card rounded-lg p-10 flex flex-col justify-between group">
              <div className="flex justify-between items-start">
                <div>
                  <span className="material-symbols-outlined text-4xl text-on-primary-container mb-6">
                    architecture
                  </span>
                  <h3 className="text-3xl font-bold mb-4">Design-Build</h3>
                  <p className="text-on-surface-variant max-w-md">
                    The complete lifecycle from conceptual blueprinting to final
                    structural delivery. Unified accountability for massive
                    scales.
                  </p>
                </div>
                <div className="text-on-tertiary-container font-black text-6xl opacity-10">
                  01
                </div>
              </div>
              <div className="mt-12 flex items-center justify-between">
                <ul className="flex gap-4 text-xs font-bold text-on-surface-variant tracking-wider uppercase">
                  <li className="bg-surface-container-highest px-3 py-1 rounded-full">
                    Structural
                  </li>
                  <li className="bg-surface-container-highest px-3 py-1 rounded-full">
                    Planning
                  </li>
                  <li className="bg-surface-container-highest px-3 py-1 rounded-full">
                    MEPF
                  </li>
                </ul>
                <div className="material-symbols-outlined group-hover:translate-x-2 transition-transform cursor-pointer">
                  arrow_forward
                </div>
              </div>
            </div>
            {/* Pillar 2: Condo Interior Design */}
            <div className="md:col-span-4 rounded-lg p-10 flex flex-col justify-between bg-primary-container text-white">
              <div>
                <span className="material-symbols-outlined text-4xl text-secondary-container mb-6">
                  chair
                </span>
                <h3 className="text-2xl font-bold mb-4">
                  Condo Interior Design
                </h3>
                <p className="text-on-primary-container text-sm leading-relaxed">
                  Maximizing urban living spaces with luxury finishes and
                  intelligent space-saving modularity.
                </p>
              </div>
              <div className="mt-8">
                <img
                  alt="Modern condo interior design"
                  className="rounded-xl w-full h-40 object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1QUB8BpFOoNJsFsgnBIlwi7UZE0rPHIk49sRA3pFNC_M5NeEnKj1kLSRBWdPsCXEjNVRFECpZTtsT3i6VQKyPi-Lrw_CIKzIast-rqnu-orOr2q_QDzRi0nqBRD_BdbmAY5SFKnkIvlNc7uT0Xh_f2uLZ0hj7RTkpgdOcYv1oYqMCc6N__oo0qKXdfsi5JHzmJbymIR3N1gik3XftEvTqDALxkdOTKNsGgde1drDokKnH0J2QDZ7rWQ9hz6eljRzAwIim1GQYpq3K"
                />
              </div>
            </div>
            {/* Pillar 3: Kitchen/Grill solutions */}
            <div className="md:col-span-4 clay-card rounded-lg p-10">
              <span className="material-symbols-outlined text-4xl text-tertiary-container mb-6">
                outdoor_grill
              </span>
              <h3 className="text-2xl font-bold mb-4">
                Kitchen & Grill Solutions
              </h3>
              <p className="text-on-surface-variant text-sm mb-6">
                Bespoke culinary spaces, outdoor kitchens, and custom grill
                hardware engineered for performance.
              </p>
              <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-on-tertiary-container w-2/3"></div>
              </div>
              <p className="text-[10px] mt-2 font-bold text-on-tertiary-container uppercase tracking-widest">
                Custom Fabrication
              </p>
            </div>
            {/* Pillar 4: Building Improvements */}
            <div className="md:col-span-4 clay-card rounded-lg p-10 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-4xl text-on-primary-container mb-6">
                  foundation
                </span>
                <h3 className="text-2xl font-bold mb-4">
                  Building Improvements
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Retrofitting, waterproofing, and facade upgrades to increase
                  asset value and longevity.
                </p>
              </div>
              <button className="mt-6 flex items-center gap-2 text-sm font-bold text-primary group">
                Technical Scope{" "}
                <span className="material-symbols-outlined text-sm group-hover:scale-125 transition-transform">
                  launch
                </span>
              </button>
            </div>
            {/* Pillar 5: Renovation/Remodeling */}
            <div className="md:col-span-4 clay-card rounded-lg p-10 bg-secondary-container">
              <span className="material-symbols-outlined text-4xl text-on-secondary-fixed-variant mb-6">
                auto_awesome_motion
              </span>
              <h3 className="text-2xl font-bold mb-4 text-on-secondary-fixed">
                Renovation & Remodeling
              </h3>
              <p className="text-on-secondary-fixed-variant text-sm mb-8">
                Transforming legacy structures into contemporary masterpieces
                through thoughtful reimagining.
              </p>
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-secondary-container bg-slate-300 flex items-center justify-center text-[10px] font-bold">
                  Res
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-secondary-container bg-slate-400 flex items-center justify-center text-[10px] font-bold text-white">
                  Com
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-secondary-container bg-slate-500 flex items-center justify-center text-[10px] font-bold text-white">
                  Ind
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-8 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="md:w-1/2 relative">
            <div className="w-full aspect-square bg-surface-container rounded-full absolute -top-10 -left-10 -z-10"></div>
            <div className="clay-card p-12 rounded-xl">
              <h3 className="text-4xl font-extrabold mb-8 tracking-tighter">
                The Structural <br /> Guarantee.
              </h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary-container">
                    verified_user
                  </span>
                  <div>
                    <h4 className="font-bold">Precision Auditing</h4>
                    <p className="text-sm text-on-surface-variant">
                      Every joint, bolt, and slab is inspected against
                      international ISO standards.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary-container">
                    eco
                  </span>
                  <div>
                    <h4 className="font-bold">Sustainable Integration</h4>
                    <p className="text-sm text-on-surface-variant">
                      Passive cooling and recycled material sourcing are
                      standard in our Design-Build process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-5xl font-bold text-primary mb-8 tracking-tighter">
              Solid foundations for a modern legacy.
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
              At LeeCoste Corp, we don't just build structures; we mold
              environments. Our "Claymorphic" approach to construction ensures
              that every project—from a simple kitchen grill to a multi-story
              condo—feels tactile, permanent, and perfectly integrated into its
              surroundings.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-surface-container-low rounded-lg">
                <div className="text-3xl font-black text-primary">150+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  Completed Projects
                </div>
              </div>
              <div className="p-6 bg-surface-container-low rounded-lg">
                <div className="text-3xl font-black text-primary">12yr</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  Industry Tenure
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8">
        <div className="max-w-screen-2xl mx-auto rounded-xl py-16 px-10 md:p-24 flex flex-col items-center text-center bg-gradient-to-br from-primary to-primary-container text-white">
          <h2 className="text-5xl font-black mb-6 tracking-tighter">
            Ready to Build Your Legacy?
          </h2>
          <p className="text-on-primary-container max-w-2xl text-lg mb-10">
            Consult with our engineering leads today for a detailed site
            assessment and architectural consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-white text-primary px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-lg">
              Schedule Consultation{" "}
              <span className="material-symbols-outlined">calendar_month</span>
            </button>
            <button className="border-2 border-on-primary-container px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
              Download Brochure{" "}
              <span className="material-symbols-outlined">download</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Construction;
