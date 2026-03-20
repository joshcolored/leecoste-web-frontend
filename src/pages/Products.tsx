const Products = () => {
  return (
    <main className="pt-32 lg:pt-0">
      <section className="relative min-h-[921px] flex items-center overflow-hidden px-8">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 space-y-8">
            <div className="inline-flex items-center px-4 py-2 gap-2 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-sm font-bold tracking-widest uppercase">
              <span className="material-symbols-outlined text-sm">air</span>
              INTELLIGENT PURIFICATION
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary leading-[1.1] tracking-tighter">
              E-VIPO System:
              <br />
              The Future of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                IAQ Control
              </span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              Experience clinical-grade whole-house purification with the E-VIPO
              Intelligent Fresh Air system. Engineered for high-end residential
              estates where air quality is non-negotiable.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all active:scale-95">
                Technical Specs{" "}
                <span className="material-symbols-outlined">
                  precision_manufacturing
                </span>
              </button>
              <button className="bg-surface-container-lowest clay-card text-primary px-10 py-4 rounded-full font-bold text-lg flex items-center gap-2">
                Download Brochure{" "}
                <span className="material-symbols-outlined">download</span>
              </button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-secondary/10 blur-3xl rounded-full opacity-50"></div>
            <div className="relative clay-card rounded-xl overflow-hidden aspect-[4/3]">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyS0IluWX1bghxruIb5Lqk2s_1DfPtrmW6jrSADSTR-dJjot4a-tmQDJzj-nScez_bBbaMm3MjGE-s5C5ulouSFbE7Znm9yM1q0aZ5TXec1yOlkQ5WNRcxU_xc8OOlbjX6zHrPytVcWbxlH7QYwvolZEWpNV7jH9lWSr-Gjb0xyYilVNRAKBA-A6nHgXgmJxiRKTwLgMjmK5Qr9HDoTBw-0mQ5EVQw5CMzH6RdHINemfKRweFvXo_-fqvq3sSKb6xiuyqY4670btAN"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-surface/70 backdrop-blur-md p-6 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest">
                      Current Status
                    </p>
                    <p className="text-xl font-bold text-primary">
                      IAQ Monitoring Active
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-on-tertiary-container flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Bento Grid */}
      <section className="px-6 md:px-12 py-20 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 tracking-tight">
              Core Systems Architecture
            </h2>
            <p className="text-on-surface-variant">
              The E-VIPO series combines structural engineering with biological
              safety protocols.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 clay-card rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-4">
                <span className="material-symbols-outlined text-4xl text-secondary">
                  home_health
                </span>
                <h3 className="text-2xl font-bold text-primary">
                  Whole-House Purification
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Multi-stage filtration cycles the entire volume of your
                  residence every 45 minutes, neutralizing PM2.5, VOCs, and
                  airborne pathogens.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm font-semibold">
                    <span className="material-symbols-outlined text-secondary text-base">
                      verified
                    </span>{" "}
                    HEPA H13 Grade Filtration
                  </li>
                  <li className="flex items-center gap-2 text-sm font-semibold">
                    <span className="material-symbols-outlined text-secondary text-base">
                      verified
                    </span>{" "}
                    Negative Ion Injection
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 aspect-video rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtEThVxTjBir53cScOu4C34zfS9jGubuBCjJ9jJNYjvxUbjorKd5hfM9cWuZkpBO_2ciDpP7ifLxMtkleU2sz9ZLjN0-4jbwJ07KytWJBMY9tMGUC3OWrjj7gLu6pXPOh83sEf340houZnC4dC5t_bPPH_EN2Oqt1vY3adPFxyXSJ_Vobc1A1xz97yh9EYtdn2d_ZNiUPDZoT8GBMqsJVfz0cLp-c1Sdx4xMPdnGmYfgcVsW1bqoJXjHouGL-OXqEz3m9d9hVPTefS"
                />
              </div>
            </div>
            <div className="md:col-span-4 clay-card rounded-xl p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="material-symbols-outlined text-4xl text-on-tertiary-container">
                  energy_program_saving
                </span>
                <h3 className="text-2xl font-bold text-primary">
                  Graphene ERV
                </h3>
                <p className="text-on-surface-variant">
                  Next-gen Graphene Energy Recovery Ventilation ensures 90%
                  thermal efficiency, reducing HVAC load while maintaining
                  humidity.
                </p>
              </div>
              <div className="pt-4 border-t border-surface-container-highest">
                <p className="text-3xl font-black text-primary">
                  90%{" "}
                  <span className="text-sm font-medium text-on-surface-variant">
                    Efficiency
                  </span>
                </p>
              </div>
            </div>
            <div className="md:col-span-4 clay-card rounded-xl p-8 space-y-6">
              <span className="material-symbols-outlined text-4xl text-secondary">
                analytics
              </span>
              <h3 className="text-2xl font-bold text-primary">
                Live IAQ Monitoring
              </h3>
              <p className="text-on-surface-variant">
                Laser-precision sensors track air quality in real-time, feeding
                data directly to your automation hub or smartphone.
              </p>
              <div className="bg-surface-container p-4 rounded-lg flex flex-col gap-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  <span>Particulates</span>
                  <span className="text-secondary">Excellent</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-secondary"></div>
                </div>
              </div>
            </div>
            <div className="md:col-span-8 clay-card rounded-xl p-8 bg-primary text-on-primary flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold">
                  CO2 Concentration Management
                </h3>
                <p className="text-on-primary-container leading-relaxed">
                  Automatic oxygen enrichment triggers when CO2 levels exceed
                  800ppm, ensuring cognitive performance and sleep quality.
                </p>
                <div className="flex gap-4">
                  <div className="px-4 py-2 bg-primary-container rounded-lg border border-on-primary-fixed-variant/20">
                    <p className="text-xs opacity-70">O2 LEVEL</p>
                    <p className="text-xl font-bold">21.2%</p>
                  </div>
                  <div className="px-4 py-2 bg-primary-container rounded-lg border border-on-primary-fixed-variant/20">
                    <p className="text-xs opacity-70">CO2 PPM</p>
                    <p className="text-xl font-bold">420</p>
                  </div>
                </div>
              </div>
              <div className="w-16 h-16 md:w-32 md:h-32 flex-shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-7xl text-on-tertiary-container">
                  co2
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 max-w-screen-xl mx-auto">
        <div className="rounded-xl overflow-hidden bg-surface-container-highest flex flex-col md:flex-row">
          <div className="p-8 md:w-1/2 md:p-12 flex flex-col justify-center space-y-6">
            <h2 className="text-4xl font-extrabold text-primary tracking-tight">
              Ready to integrate E-VIPO?
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              Our technical team provides end-to-end consulting for new
              constructions and retrofitting high-value estates with intelligent
              air systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg">
                Request Installation Quote{" "}
                <span className="material-symbols-outlined">request_quote</span>
              </button>
              <button className="px-8 py-4 text-primary font-bold hover:underline flex items-center justify-center gap-2">
                Consult an Expert{" "}
                <span className="material-symbols-outlined">
                  person_pin_circle
                </span>
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative min-h-[300px]">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFzG-ZJs2tefg82_eRZugb0LRfCRWq1GXaD4MzQb28QBdRXYCB-MMA8y6ScMIyx_7Dqga-KzrtfCUYXDjXJbBPG1guzw5YLtrkg1cStakJnYlosI-POS2wWj8BSF6Lua-7x4jpSyTtZiw8MP0XWPBfoFIUV22rsq62yksA_SSYupRiXYb15ehI7G5FI7WQecpiJ-1mxuXwh5BwRfDryE8N7YJZRT--jPa_NGalYKFiBzallUaDRunA70mV_Sg2woBQR6GU8tyJ_tJu"
            />
            <div className="absolute inset-0 bg-primary/20"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
