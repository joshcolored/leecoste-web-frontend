const Home = () => {
  return (
    <main className="pt-32 lg:pt-0">
      <section className="relative min-h-[921px] flex items-center overflow-hidden px-8">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-sm font-bold tracking-widest uppercase">
              Bacolod City's Premier Hub
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary leading-[1.1] tracking-tighter">
              Bringing Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Blueprints
              </span>{" "}
              to Life
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              We build trust through a 360-degree approach to development. From
              foundational construction to premium realty and climate solutions,
              we are your architectural partners in Bacolod City.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all active:scale-95">
                Start Building
              </button>
              <button className="bg-surface-container-lowest clay-card text-primary px-10 py-4 rounded-full font-bold text-lg flex items-center gap-2">
                Our Projects
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl transform lg:rotate-2 lg:scale-105">
              <img
                alt="Modern Architecture"
                className="w-full h-[600px] object-cover"
                data-alt="Stunning modern architectural skyscraper in clear blue sky"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu1oxpOBh9FPwZW4iDgAaubtUi_XMzbzssEBwt4-Bk7tAOge_u0IrRK-Tr6ADBrf9-H3ncZjHvjNBHl9k18NOZGtquu0PB0wYK56cpJb6u9z-CRj2v4uf8iHQNSeQjadnD5DG7TCWj4ExSY5hjiZidYzVN0rTacmUaIQm8DrV6XgXYmlKNpXrwZv-6csJgmhowwDPgX48VD_-nYlzWCkoUznNzJ9SakCZ7B1NxGTSp_k0fsg-DcSFep1dNcCNnSY69kjkjekSxEOEK"
              />
              <div className="absolute bottom-8 left-8 right-8 p-6 backdrop-blur-xl rounded-lg bg-white">
                <p className="text-primary font-bold">Latest Masterpiece</p>
                <p className="text-sm text-on-surface-variant">
                  The Heights Executive Village, Bacolod
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-surface-container-low px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tighter mb-4">
              Mastering the Lifecycle
            </h2>
            <p className="text-on-surface-variant text-lg">
              Integrated solutions for every stage of your investment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-10 rounded-xl clay-card flex flex-col items-start gap-6 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-2xl bg-primary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl">
                  domain
                </span>
              </div>
              <h3 className="text-2xl font-bold text-primary">
                Real Estate Services
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Curated luxury listings and strategic property acquisitions
                across the Negros region.
              </p>
              <button className="mt-auto group flex items-center gap-2 text-on-tertiary-fixed-variant font-bold uppercase text-sm tracking-widest">
                Explore Properties
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  chevron_right
                </span>
              </button>
            </div>

            <div className="bg-primary p-10 rounded-xl flex flex-col items-start gap-6 text-on-primary hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-2xl bg-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-3xl">
                  foundation
                </span>
              </div>
              <h3 className="text-2xl font-bold">
                Construction &amp; Engineering
              </h3>
              <p className="text-on-primary-container leading-relaxed">
                Turnkey engineering solutions with a focus on structural
                integrity and modern aesthetics.
              </p>
              <button className="mt-auto group flex items-center gap-2 text-on-tertiary-fixed-dim font-bold uppercase text-sm tracking-widest">
                View Works
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  chevron_right
                </span>
              </button>
            </div>

            <div className="bg-surface-container-lowest p-10 rounded-xl clay-card flex flex-col items-start gap-6 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-2xl bg-secondary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-3xl">
                  ac_unit
                </span>
              </div>
              <h3 className="text-2xl font-bold text-primary">HVAC Systems</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Advanced climate control and industrial cooling supplies for
                commercial and residential units.
              </p>
              <button className="mt-auto group flex items-center gap-2 text-on-tertiary-fixed-variant font-bold uppercase text-sm tracking-widest">
                Our Catalog
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img
                  alt="Construction site"
                  className="rounded-xl w-full aspect-square object-cover"
                  data-alt="Architectural blueprints on a wooden desk with safety helmet"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjeZh5ivRl1ziPuQllF4EtJk8Y_JWkDr7kOpcFISaDi8GBWCDY-YZaL_T0gSm-uZAq3eqzrib8HKEjveNPFfKU5x3m9GnJWX9_54fb8iZRBoV3xRJTBBE7D7MH9PkmEcxzZiWh93sG8PdYasLIuprjQXpNLJqAPcNmgpEtJT47H6RahN7jWSxr7UuwFCt0RWhnf1qd2Vl5tueF4nXhGn_P11r3FSfopcqfYMKQH202bCPksS16zDKWdrdrNRwGCBtlIL6Nu3RFuHp-"
                />
                <div className="bg-tertiary p-8 rounded-xl text-on-tertiary">
                  <p className="text-4xl font-black">15+</p>
                  <p className="text-sm uppercase tracking-widest">
                    Years Experience
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-secondary-container p-8 rounded-xl text-on-secondary-container">
                  <p className="text-4xl font-black">200+</p>
                  <p className="text-sm uppercase tracking-widest">
                    Projects Completed
                  </p>
                </div>
                <img
                  alt="Built structure"
                  className="rounded-xl w-full aspect-[3/4] object-cover"
                  data-alt="Modern high-end residence building in evening light"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHpCybpFIBjmwOm7EAs-4RkmXdlth-ffS6sOjTvP406oWDfoR4FowfUWRncs0aLDDSbB1BgRw75oz1P0c1BC9UNSz05ipo4he_p-Upl__7-ogVLJoJCAlbzssHEP4VwOHQPD0dY3qZsKJOorBzrBX5_dHxTuCDihURlGbhCExVUIC7N5gV4Zsn_JEVVAumLpu-Z1cX4yyE0y7KZe_nu3_IGeE6SUpaAo7Gzngw8lKhDJDhm8372xP3xiFu15Z_Clcfj3MRLDpgxyYx"
                />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h4 className="text-orange-600 font-bold uppercase tracking-[0.2em] text-sm">
              Strategic Partners
            </h4>
            <h2 className="text-5xl md:text-6xl font-bold text-primary tracking-tighter leading-tight">
              We are the Bridge-Builders of Bacolod
            </h2>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              LeeCoste Corp isn't just a service provider; we are your strategic
              partners in growth. We bridge the gap between abstract concepts
              and solid reality, ensuring that every nail driven and every
              property signed contributes to a legacy of excellence.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-primary font-semibold">
                <span className="material-symbols-outlined text-orange-500">
                  check_circle
                </span>
                Integrated Multi-Disciplinary Expert Team
              </li>
              <li className="flex items-center gap-4 text-primary font-semibold">
                <span className="material-symbols-outlined text-orange-500">
                  check_circle
                </span>
                Bacolod Heritage &amp; Modern Design Fusion
              </li>
              <li className="flex items-center gap-4 text-primary font-semibold">
                <span className="material-symbols-outlined text-orange-500">
                  check_circle
                </span>
                End-to-End Asset Management
              </li>
            </ul>
            <div className="pt-6">
              <a
                className="inline-flex items-center gap-2 text-primary border-b-2 border-primary pb-2 font-bold text-lg hover:text-orange-600 hover:border-orange-600 transition-colors"
                href="#"
              >
                Learn more about our mission
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="max-w-7xl mx-auto rounded-xl py-16 px-10 md:p-24 relative overflow-hidden bg-primary text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-50"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
              Ready to Build Your Future?
            </h2>
            <p className="text-on-primary-container text-xl max-w-2xl mx-auto">
              Whether it's a dream home, a commercial hub, or professional HVAC
              solutions, let's start the conversation today.
            </p>
            <button className="bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-xl shadow-xl hover:bg-orange-500 transition-all active:scale-95">
              Consult Our Experts
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
