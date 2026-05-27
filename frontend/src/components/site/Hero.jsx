import { Phone, ArrowDownRight } from "lucide-react";

const HERO_BG =
  "https://static.prod-images.emergentagent.com/jobs/reborn-beauty-ladies-salon-btm/images/446d32038938846474756ee62236b7bb0f0bacdac33718ea450ecbf301e11723.png";

const Hero = () => {
  const scrollToServices = () => {
    const el = document.querySelector("#services");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HERO_BG})`,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 45%, rgba(45,45,45,0.65) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 min-h-screen flex flex-col justify-end pb-20 md:pb-28 pt-32">
        <div className="max-w-3xl fade-up">
          <p
            data-testid="hero-overline"
            className="text-xs md:text-sm uppercase tracking-[0.32em] font-medium text-[#F9A825] mb-6"
          >
            Ladies-Only · BTM Layout · Since 2014
          </p>
          <h1
            data-testid="hero-heading"
            className="font-serif-display text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-[#FFF8E7] leading-[0.95]"
          >
            Reborn
            <br />
            <span className="italic text-[#F9A825]">Beauty</span>
            <span className="text-[#F9A825]">.</span>
          </h1>

          <p
            data-testid="hero-tagline"
            className="font-serif-display italic text-2xl md:text-3xl text-[#FFF8E7]/95 mt-6 max-w-xl"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
          >
            Your glow, our craft — trusted by BTM's women for over a decade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="tel:+918041119254"
              data-testid="hero-book-cta"
              className="inline-flex items-center justify-center gap-3 bg-[#C2185B] text-[#FFF8E7] px-8 py-5 hover:bg-[#A3144C] transition-colors duration-300 text-sm tracking-[0.18em] uppercase font-medium"
            >
              <Phone size={16} strokeWidth={1.75} /> Book an Appointment
            </a>
            <button
              onClick={scrollToServices}
              data-testid="hero-services-cta"
              className="inline-flex items-center justify-center gap-3 border border-[#FFF8E7] text-[#FFF8E7] px-8 py-5 hover:bg-[#FFF8E7] hover:text-[#2D2D2D] transition-colors duration-300 text-sm tracking-[0.18em] uppercase font-medium"
            >
              See Our Services <ArrowDownRight size={16} strokeWidth={1.75} />
            </button>
          </div>
        </div>

        <div className="hidden md:flex absolute bottom-10 right-12 items-center gap-3 text-[#FFF8E7]/80">
          <div className="h-px w-12 bg-[#FFF8E7]/40" />
          <span className="text-xs tracking-[0.28em] uppercase">
            4.5 ★ · 1,500+ Google Reviews
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
