const Contact = () => {
  return (
    <main className="pt-32 pb-20 px-6 max-w-screen-2xl mx-auto">
      {/* Hero Section */}
      <header className="mb-8">
        <span className="text-on-tertiary-container font-medium tracking-[0.2em] font-bold text-xs uppercase">
          Get In Touch
        </span>
        <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-primary mt-4 tracking-tighter leading-tight">
          Let's Build Your{" "}
          <span className="text-secondary">Next Landmark.</span>
        </h1>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info Column */}
        <div className="lg:col-span-5 space-y-12">
          <section className="space-y-8">
            <div className="clay-card rounded-lg p-8 group transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Bacolod Office
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Lacson Street
                    <br />
                    Bacolod City, Negros Occidental
                    <br />
                    Philippines, 6100
                  </p>
                  <a
                    className="inline-flex items-center mt-4 text-secondary font-bold hover:gap-2 transition-all"
                    href="https://maps.app.goo.gl/oyiea7aVhjCJSkJY6"
                    target="_blank"
                  >
                    View on Maps{" "}
                    <span className="material-symbols-outlined text-sm ml-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="clay-card rounded-lg p-8 group transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">chat</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Direct Communication
                  </h3>
                  <div className="space-y-3">
                    <a
                      className="flex items-center gap-3 text-on-surface-variant hover:text-secondary transition-colors"
                      href="https://wa.me/639123456789"
                    >
                      <span className="font-semibold">WhatsApp:</span> +63 912
                      345 6789
                    </a>
                    <a
                      className="flex items-center gap-3 text-on-surface-variant hover:text-secondary transition-colors"
                      href="mailto:hello@leecoste.corp"
                    >
                      <span className="font-semibold">Email:</span>{" "}
                      hello@leecoste.corp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Map Component (Static Representation) */}
          <div className="rounded-xl overflow-hidden shadow-sm h-64 bg-surface-container-low relative">
            <img
              className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
              src="/bacolodmap.svg"
              alt="bacolodmap"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-primary text-white p-3 rounded-full animate-bounce shadow-xl">
                <span className="material-symbols-outlined">location_on</span>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Form Column */}
        <div className="lg:col-span-7">
          <div className="clay-card rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-headline font-bold text-primary mb-8">
              Request a Quote
            </h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest text-on-surface-variant uppercase ml-1">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-surface-container-high border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-secondary/20 transition-all outline-none"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest text-on-surface-variant uppercase ml-1">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-surface-container-high border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-secondary/20 transition-all outline-none"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest text-on-surface-variant uppercase ml-1">
                    Service Type
                  </label>
                  <select className="w-full bg-surface-container-high border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-secondary/20 transition-all outline-none appearance-none">
                    <option>Residential Construction</option>
                    <option>Commercial Development</option>
                    <option>Real Estate Consulting</option>
                    <option>Property Management</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest text-on-surface-variant uppercase ml-1">
                    Budget Range
                  </label>
                  <select className="w-full bg-surface-container-high border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-secondary/20 transition-all outline-none appearance-none">
                    <option>₱1M - ₱5M</option>
                    <option>₱5M - ₱20M</option>
                    <option>₱20M+</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-on-surface-variant uppercase ml-1">
                  Project Details
                </label>
                <textarea
                  className="w-full bg-surface-container-high border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-secondary/20 transition-all outline-none"
                  placeholder="Tell us about your architectural vision..."
                  rows={4}
                ></textarea>
              </div>
              <button
                className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-5 rounded-full font-bold text-lg hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20 flex items-center justify-center gap-3 active:scale-[0.98]"
                type="submit"
              >
                Send Inquiry
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Secondary CTA Section */}
      <section className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-8 items-center -mb-32 lg:mb-0">
        <div className="rounded-xl overflow-hidden aspect-video clay-card">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvagws-nvHtlzwMWLe3_NvqIYv54WrNS8LEmzdI6kI5-srbaQT86QQnnhDLejOFDXU1EXoyNeVSpLnxffCD4AJLH4A2ydT3rD0w1yAOCTAunlk0E0wgqYDnp4CAeI6aQSsl41qf5QZYTDXlCjrVsremvE-I1718vs-GX7qZK11iI3_YHIf9X8N1ZKx8RcXhGwLPUAHPIN8iFGUkjtc1PpoXJPvd-qubtllY9fPze1K2POf84__abo2aiPgqWB6FzbsVLavNj5PSHFD"
          />
        </div>
        <div className="p-8 md:p-12">
          <h2 className="text-4xl font-headline font-extrabold text-primary tracking-tight mb-6">
            Experience Excellence.
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
            Our team of master architects and developers are ready to transform
            your concepts into concrete reality. Precision is our legacy.
          </p>
          <div className="flex gap-4">
            <div className="text-center">
              <div className="text-3xl font-black text-secondary">15+</div>
              <div className="text-xs font-bold tracking-widest text-on-surface-variant uppercase">
                Years Experience
              </div>
            </div>
            <div className="w-px h-12 bg-outline-variant/30"></div>
            <div className="text-center">
              <div className="text-3xl font-black text-secondary">250+</div>
              <div className="text-xs font-bold tracking-widest text-on-surface-variant uppercase">
                Projects Completed
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
