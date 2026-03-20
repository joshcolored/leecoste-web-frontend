const AboutUs = () => {
  return (
    <main className="pt-16 lg:pt-0">
      <section className="relative min-h-[921px] flex items-center overflow-hidden px-8">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 space-y-8">
            <div className="inline-flex items-center px-4 py-2 gap-2 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-sm font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-on-secondary-container"></span>
              Our Legacy
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary leading-[1.1] tracking-tighter">
              Building More Than Structures
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                -Building Trust
              </span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              Rooted in the heritage of Bacolod City, LeeCoste Corp represents
              the evolution of architectural excellence and uncompromising
              integrity in every square meter we develop.
            </p>
            <div className="flex gap-4">
              <button className="bg-surface-container-lowest bg-tertiary-fixed text-on-tertiary-fixed-variant px-10 py-4 rounded-full font-bold text-lg flex items-center gap-2">
                Our Portfolio
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl clay-card">
              <img
                alt="Modern Architectural Building"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhBN7LEw52gKC4sMe9bC0q1LYIeb2GlvJVVpLf8p0-SKiLWlHx6F7Kydpj3nfF-q2WfC_T5np9iRkpML4hwYZfcYQwFS58ZlY0q8h3OdxF6u7dswRoJgbOOSWm4kLSr_2kKxBAV9CTiwINGpze0rGFW5E_jdzW8wZ1BjJ1_yqfdgwpmyWWVUDGYxqukW0HHqdN12LVIXWWKWLKbv_QoNhPYFggCe-yYEA_Vov_2uP7M4520tlyPej1NW9adKEGfCgmy4gko7YeeSvE"
              />
            </div>
            <div className="absolute -bottom-6 -left-10 hidden md:block w-64 h-46 bg-surface-container-lowest p-6 rounded-lg">
              <div className="space-y-4">
                <span className="material-symbols-outlined text-on-tertiary-container text-4xl">
                  verified
                </span>
                <h3 className="font-bold text-primary font-headline">
                  Bacolod Certified
                </h3>
                <p className="text-sm text-on-surface-variant">
                  Defining the skyline of the City of Smiles for over a decade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 360-degree Approach: Bento Grid */}
      <section className="bg-surface-container-low py-24 md:py-32 rounded-xl mx-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary font-headline">
              Our 360-degree approach
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              We don't just sell property; we engineer lifestyle ecosystems
              through a holistic cycle of excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            <div className="md:col-span-8 bg-surface-container-lowest rounded-lg p-10 clay-card flex flex-col justify-between group overflow-hidden relative">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-secondary text-5xl mb-6">
                  architecture
                </span>
                <h3 className="text-3xl font-bold text-primary mb-4 font-headline">
                  Consultative Design
                </h3>
                <p className="text-on-surface-variant max-w-[300px]">
                  Every project begins with a deep dive into the human element,
                  ensuring our structures serve the soul as much as the
                  function.
                </p>
              </div>
              <img
                alt="Architectural Blueprint"
                className="absolute bottom-0 right-0 w-1/2 opacity-10 group-hover:opacity-20 transition-opacity"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIyEtNA_mQx9dx5gvjeBQ_O8X_Vsq1EjYaAYNoLGwDp2OKpA-cR5aaDxkdsBipzHi-kd2ltsLbV9UHjwV_8c43M40DfQbRV9FxqAWopqdqrsFV0c7XT_Pai6jegrSBnHdAfsu43FRRPDR8aAOqljZY93wEGWcNl_VpQ_1QlAizfdXYoOgVL2vdmFGfarLkbC7PxmNF_tQ_HUBrcTvLpzTjt2yJKUgawysuEWTEB1p07loQuwx3zqyqY46lHkycQXlUaiaXwN8mLlDs"
              />
            </div>
            <div className="md:col-span-4 bg-primary text-white rounded-lg p-10 flex flex-col justify-center items-center text-center space-y-6">
              <div className="w-20 h-20 rounded-full border-4 border-orange-500/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-orange-500">
                  construction
                </span>
              </div>
              <h3 className="text-2xl font-bold font-headline">
                Precision Build
              </h3>
              <p className="text-on-primary-container text-sm">
                Industrial-grade materials met with artisan craftsmanship.
              </p>
            </div>
            <div className="md:col-span-4 bg-white rounded-lg p-10 clay-card">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">
                real_estate_agent
              </span>
              <h3 className="text-xl font-bold text-primary mb-2 font-headline">
                Realty Management
              </h3>
              <p className="text-on-surface-variant text-sm">
                Seamless transition from construction to occupancy and beyond.
              </p>
            </div>
            <div className="md:col-span-8 bg-surface-container-highest rounded-lg p-10 flex items-center justify-between overflow-hidden">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary font-headline">
                  Future Proofing
                </h3>
                <p className="text-on-surface-variant max-w-sm">
                  Integrating smart-home technologies and sustainable energy
                  solutions into every core.
                </p>
              </div>
              <span className="material-symbols-outlined text-primary/10 text-9xl">
                energy_savings_leaf
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partners Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-white rounded-lg flex items-center justify-center p-4 md:p-8">
                <img
                  alt="Corporate Partner"
                  className="w-full h-full object-cover rounded-lg"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2bpqv7lvXFtwqjEbQIv3VEvQU0wu7kBdqjgbmr1QhkuHxqmcqhWHp6wTXvCxW4JLNJ01OBUAuX-0ByB9tBfFixCIsyG8hhEJ39oiMhajmA8Qf9UCk013ksk-nGc4kVLFzIOiFOKIkC65PqUkNCep0YseG0gcLAHMAEEa9rTe2EIOSMlQ-gMrwsc2ytOeitE5cFHrijUgUJWqxoW9RWErXfAsTugexk5gfcO2XJ5cf3wO_bl2ooMV4IUw2AZfA7FPmzl7ZEPn_MhcC"
                />
              </div>
              <div className="aspect-square bg-white rounded-lg flex items-center justify-center p-4 md:p-8 mt-4 md:mt-8">
                <img
                  alt="Business Partnership"
                  className="w-full h-full object-cover rounded-lg"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_7BiW_jYLe7bHokmtnDseG-qXYzCW1BIx8Utcxlhxt7stVaMDrRtE1qhhMm1SclywoG1GuVrHam4YsCiNke667946Tjt5WBq053b789wVnUqgArveKKxoh8Xv_aFq2WDh6Ke42FbksgR4lXZpv07IOMy_m2x19SyaNB2Bb2jcwjPk7pgMi8lDMrbaYe9Iam44rj24K-YnGmcNen_nMm2ixBNj02TT2nba6TdDEmUtuTg-LmS_HgZQGyyzGvZQJfR6w3LSK_86JAej"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-8 order-1 md:order-2">
            <span className="text-orange-600 font-bold tracking-widest text-sm uppercase">
              Collaboration
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary font-headline">
              Strategic Partners in Your Property Journey
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              We believe in the power of collective expertise. By partnering
              with the region's leading financial institutions, supply chains,
              and interior designers, we ensure your investment is protected and
              your vision is realized to the highest standards.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-secondary-fixed rounded-full flex items-center justify-center group-hover:bg-secondary transition-colors text-on-secondary-fixed-variant group-hover:text-white">
                  <span className="material-symbols-outlined">handshake</span>
                </div>
                <span className="font-bold text-primary font-headline">
                  Top-tier Financial Linkages
                </span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-secondary-fixed rounded-full flex items-center justify-center group-hover:bg-secondary transition-colors text-on-secondary-fixed-variant group-hover:text-white">
                  <span className="material-symbols-outlined">
                    workspace_premium
                  </span>
                </div>
                <span className="font-bold text-primary font-headline">
                  Certified Material Suppliers
                </span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-secondary-fixed rounded-full flex items-center justify-center group-hover:bg-secondary transition-colors text-on-secondary-fixed-variant group-hover:text-white">
                  <span className="material-symbols-outlined">imagesmode</span>
                </div>
                <span className="font-bold text-primary font-headline">
                  Award-winning Design Studios
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-primary-container rounded-xl p-12 md:p-24 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent"></div>
          <h2 className="text-3xl md:text-6xl font-bold text-white relative z-10 font-headline">
            Ready to start your legacy?
          </h2>
          <p className="text-on-primary-container max-w-xl mx-auto relative z-10">
            Connect with our consultants today for a private viewing of our
            premier Bacolod developments.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 relative z-10">
            <button className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg flex items-center justify-center gap-2">
              Inquire Now{" "}
              <span className="material-symbols-outlined">send</span>
            </button>
            <button className="bg-white/10 text-white backdrop-blur-md px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all border border-white/10 flex items-center justify-center gap-2">
              Download Brochure{" "}
              <span className="material-symbols-outlined">download</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
