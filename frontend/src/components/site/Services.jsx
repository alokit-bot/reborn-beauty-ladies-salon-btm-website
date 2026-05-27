import { Crown, Scissors, Flower2, Hand, Phone } from "lucide-react";

const categories = [
  {
    Icon: Crown,
    title: "Bridal & Festive",
    subtitle: "The day you'll never forget",
    items: [
      { name: "Bridal Makeup (HD / Airbrush)", price: "₹6,000 – ₹15,000" },
      { name: "Engagement / Party Makeup", price: "₹2,500 – ₹5,000" },
      { name: "Saree Draping", price: "₹500 – ₹1,000" },
      { name: "Bridal Mehndi (Full Hands + Feet)", price: "₹2,000 – ₹5,000" },
    ],
  },
  {
    Icon: Scissors,
    title: "Hair",
    subtitle: "Cut, colour, care",
    items: [
      { name: "Haircut & Styling", price: "₹250 – ₹600" },
      { name: "Blow Dry & Setting", price: "₹350 – ₹700" },
      { name: "Hair Colour (Global)", price: "₹900 – ₹2,500" },
      { name: "Highlights / Balayage", price: "₹2,000 – ₹6,000" },
      { name: "Hair Smoothening / Keratin", price: "₹3,000 – ₹7,000" },
      { name: "Hair Spa", price: "₹600 – ₹1,500" },
    ],
  },
  {
    Icon: Flower2,
    title: "Skin",
    subtitle: "Glow that lingers",
    items: [
      { name: "Facial (Basic to Advanced)", price: "₹500 – ₹2,000" },
      { name: "Cleanup & Bleach", price: "₹300 – ₹800" },
      { name: "Detan & Brightening Treatment", price: "₹600 – ₹1,200" },
      { name: "Eyebrow Threading", price: "₹60" },
      { name: "Upper Lip Threading", price: "₹40" },
    ],
  },
  {
    Icon: Hand,
    title: "Waxing & Nail Care",
    subtitle: "The everyday essentials",
    items: [
      { name: "Full Arms Waxing", price: "₹250 – ₹400" },
      { name: "Full Legs Waxing", price: "₹350 – ₹500" },
      { name: "Manicure", price: "₹350 – ₹700" },
      { name: "Pedicure", price: "₹450 – ₹900" },
      { name: "Nail Art (per nail)", price: "₹50 – ₹150" },
    ],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-24 md:py-36 bg-[#FFFFFF]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-20 md:mb-28">
          <div className="md:col-span-7">
            <p className="text-xs md:text-sm uppercase tracking-[0.32em] font-medium text-[#C2185B] mb-5">
              Our Services
            </p>
            <h2
              data-testid="services-heading"
              className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#2D2D2D] leading-[1.05]"
            >
              Crafted care, fairly priced — from the everyday to the once-in-a-lifetime.
            </h2>
          </div>
          <div className="md:col-span-5 md:pt-4 flex md:items-end">
            <p className="text-base md:text-lg font-light leading-relaxed text-[#2D2D2D]/75">
              Prices are indicative ranges and vary by hair length, product
              choice and treatment depth. Call us anytime for a personalised
              quote — there's no obligation.
            </p>
          </div>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {categories.map(({ Icon, title, subtitle, items }) => (
            <div
              key={title}
              data-testid={`service-category-${title.replace(/\s+/g, "-").toLowerCase()}`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#F9A825]/15 flex items-center justify-center shrink-0">
                  <Icon size={20} strokeWidth={1.5} className="text-[#C2185B]" />
                </div>
                <div>
                  <h3 className="font-serif-display text-2xl md:text-3xl font-light text-[#2D2D2D] leading-none">
                    {title}
                  </h3>
                  <p className="text-xs tracking-[0.2em] uppercase text-[#2D2D2D]/55 mt-2">
                    {subtitle}
                  </p>
                </div>
              </div>

              <ul className="divide-y divide-[#2D2D2D]/10 border-t border-[#2D2D2D]/10">
                {items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-6 py-5 px-2 -mx-2 hover:bg-[#FFF8E7]/70 transition-colors duration-200"
                  >
                    <span className="text-base md:text-lg font-light text-[#2D2D2D]">
                      {item.name}
                    </span>
                    <span className="font-serif-display italic text-base md:text-lg text-[#C2185B] whitespace-nowrap">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 md:mt-32 border-t border-[#2D2D2D]/15 pt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h3 className="font-serif-display text-3xl md:text-4xl font-light text-[#2D2D2D]">
              Have something in mind?
            </h3>
            <p className="text-base font-light text-[#2D2D2D]/70 mt-2">
              Tell us about your day, your hair, your wedding date. We'll plan it together.
            </p>
          </div>
          <a
            href="tel:+918041119254"
            data-testid="services-book-cta"
            className="inline-flex items-center justify-center gap-3 bg-[#C2185B] text-[#FFF8E7] px-8 py-5 hover:bg-[#A3144C] transition-colors duration-300 text-sm tracking-[0.18em] uppercase font-medium w-fit"
          >
            <Phone size={16} strokeWidth={1.75} /> Call to Book
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
