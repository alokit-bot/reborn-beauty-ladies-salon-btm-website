import { Sparkles, ShieldCheck, Users } from "lucide-react";

const ABOUT_IMAGE = "https://images.pexels.com/photos/7195809/pexels-photo-7195809.jpeg";

const stats = [
  { value: "10+", label: "Years in BTM" },
  { value: "1,500+", label: "Google Reviews" },
  { value: "4.5 ★", label: "Average Rating" },
];

const pillars = [
  {
    Icon: ShieldCheck,
    title: "Women-only Space",
    body: "A private, comfortable environment designed for women, by women — every day.",
  },
  {
    Icon: Sparkles,
    title: "Bridal Specialists",
    body: "HD & airbrush bridal looks crafted by artists with hundreds of weddings behind them.",
  },
  {
    Icon: Users,
    title: "A Neighbourhood You Know",
    body: "Three generations of BTM women have walked through our doors. We remember every face.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 md:py-36 bg-[#FFF8E7]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Image column */}
          <div className="md:col-span-6 relative">
            <div className="relative overflow-hidden zoom-container">
              <img
                src={ABOUT_IMAGE}
                alt="Reborn Beauty Salon interior"
                className="w-full h-[420px] md:h-[600px] object-cover zoom-image"
              />
            </div>
            {/* Floating year badge */}
            <div className="hidden md:flex absolute -bottom-8 -right-6 bg-[#C2185B] text-[#FFF8E7] py-6 px-8 flex-col items-start">
              <span className="font-serif-display text-5xl leading-none">10+</span>
              <span className="text-xs tracking-[0.24em] uppercase mt-2">
                Years &nbsp;Strong
              </span>
            </div>
          </div>

          {/* Text column */}
          <div className="md:col-span-6 md:pl-8">
            <p className="text-xs md:text-sm uppercase tracking-[0.32em] font-medium text-[#C2185B] mb-5">
              About Reborn Beauty
            </p>
            <h2
              data-testid="about-heading"
              className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#2D2D2D] leading-[1.05]"
            >
              A trusted name in
              <br />
              <span className="italic text-[#C2185B]">BTM Layout</span> for a
              decade.
            </h2>

            <div className="mt-8 space-y-5 text-base md:text-lg font-light leading-relaxed text-[#2D2D2D]/85 max-w-xl">
              <p>
                For over ten years, Reborn Beauty has been the salon BTM's women
                return to — for the bridal day, the festival evening, and every
                quiet afternoon in between. We earned that trust slowly, one
                client at a time.
              </p>
              <p>
                Our team of expert artists specialises in bridal makeup, hair,
                skin and nail care. Whether you're walking down the aisle or
                simply need an hour to feel like yourself again, you'll find a
                warm welcome and serious craft.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-[#2D2D2D]/15">
              {stats.map((s) => (
                <div key={s.label} data-testid={`stat-${s.label.replace(/\s+/g, "-").toLowerCase()}`}>
                  <div className="font-serif-display text-3xl md:text-4xl text-[#C2185B] font-light">
                    {s.value}
                  </div>
                  <div className="text-xs md:text-sm tracking-[0.16em] uppercase text-[#2D2D2D]/70 mt-2">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mt-24 md:mt-32">
          {pillars.map(({ Icon, title, body }) => (
            <div
              key={title}
              data-testid={`pillar-${title.replace(/\s+/g, "-").toLowerCase()}`}
              className="flex flex-col"
            >
              <div className="w-14 h-14 rounded-full bg-[#F9A825]/20 flex items-center justify-center mb-6">
                <Icon size={22} strokeWidth={1.5} className="text-[#C2185B]" />
              </div>
              <h3 className="font-serif-display text-2xl md:text-3xl font-light text-[#2D2D2D]">
                {title}
              </h3>
              <p className="mt-3 text-base font-light leading-relaxed text-[#2D2D2D]/75">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
