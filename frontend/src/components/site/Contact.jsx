import { Phone, MapPin, Clock, Navigation as NavigationIcon, Star } from "lucide-react";

const MAPS_LINK =
  "https://www.google.com/maps/place/Reborn+Beauty+Ladies+Salon/@12.9131736,77.6061169,17z";

const MAPS_EMBED =
  "https://www.google.com/maps?q=Reborn+Beauty+Ladies+Salon,+BTM+Layout+2nd+Stage,+Bengaluru&output=embed";

const hours = [
  { day: "Monday", time: "9:00 AM – 9:00 PM" },
  { day: "Tuesday", time: "9:00 AM – 9:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 9:00 PM" },
  { day: "Thursday", time: "9:00 AM – 9:00 PM" },
  { day: "Friday", time: "9:00 AM – 9:00 PM" },
  { day: "Saturday", time: "9:00 AM – 9:00 PM" },
  { day: "Sunday", time: "9:00 AM – 9:00 PM" },
];

const Contact = () => {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 md:py-36 bg-[#2D2D2D] text-[#FFF8E7]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Left: Info */}
          <div className="md:col-span-6">
            <p className="text-xs md:text-sm uppercase tracking-[0.32em] font-medium text-[#F9A825] mb-5">
              Visit Us
            </p>
            <h2
              data-testid="contact-heading"
              className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]"
            >
              Step into the
              <br />
              <span className="italic text-[#F9A825]">Reborn</span> chair.
            </h2>

            <p className="mt-6 text-base md:text-lg font-light text-[#FFF8E7]/75 max-w-lg leading-relaxed">
              Walk-ins welcome. For bridal bookings and weekend appointments,
              we recommend calling ahead so we can give you our full attention.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+918041119254"
                data-testid="contact-phone-cta"
                className="inline-flex items-center justify-center gap-3 bg-[#C2185B] text-[#FFF8E7] px-8 py-5 hover:bg-[#A3144C] transition-colors duration-300 text-sm tracking-[0.18em] uppercase font-medium"
              >
                <Phone size={16} strokeWidth={1.75} /> +91 80 4111 9254
              </a>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-directions-cta"
                className="inline-flex items-center justify-center gap-3 border border-[#FFF8E7] text-[#FFF8E7] px-8 py-5 hover:bg-[#FFF8E7] hover:text-[#2D2D2D] transition-colors duration-300 text-sm tracking-[0.18em] uppercase font-medium"
              >
                <NavigationIcon size={16} strokeWidth={1.75} /> Get Directions
              </a>
            </div>

            {/* Address */}
            <div className="mt-14 space-y-7 border-t border-[#FFF8E7]/15 pt-10">
              <div className="flex gap-4">
                <MapPin size={20} strokeWidth={1.5} className="text-[#F9A825] shrink-0 mt-1" />
                <div>
                  <p className="text-xs tracking-[0.24em] uppercase text-[#FFF8E7]/55 mb-2">
                    Address
                  </p>
                  <p className="font-serif-display text-lg md:text-xl font-light text-[#FFF8E7]/95 leading-relaxed max-w-md">
                    1st Floor, 435, 7th Main Road,
                    <br />
                    above Cherry Tyre Park, near Indra Canteen,
                    <br />
                    BTM Layout 2nd Stage, Bengaluru, Karnataka 560076
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Star size={20} strokeWidth={1.5} className="text-[#F9A825] shrink-0 mt-1" />
                <div>
                  <p className="text-xs tracking-[0.24em] uppercase text-[#FFF8E7]/55 mb-2">
                    Rated by you
                  </p>
                  <p className="font-serif-display text-lg md:text-xl font-light text-[#FFF8E7]/95">
                    4.5 / 5 — 1,500+ Google reviews
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map + Hours */}
          <div className="md:col-span-6">
            <div className="relative overflow-hidden h-[320px] md:h-[400px] border border-[#FFF8E7]/15">
              <iframe
                title="Reborn Beauty Salon Location"
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.2) contrast(1.05)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="contact-map-iframe"
              ></iframe>
            </div>

            <div className="mt-10">
              <div className="flex items-center gap-3 mb-6">
                <Clock size={18} strokeWidth={1.5} className="text-[#F9A825]" />
                <p className="text-xs tracking-[0.24em] uppercase text-[#FFF8E7]/55">
                  Working Hours
                </p>
              </div>
              <ul className="divide-y divide-[#FFF8E7]/10 border-t border-b border-[#FFF8E7]/15">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-baseline justify-between py-3.5"
                    data-testid={`hours-${h.day.toLowerCase()}`}
                  >
                    <span className="text-sm tracking-[0.14em] uppercase text-[#FFF8E7]/90">
                      {h.day}
                    </span>
                    <span className="font-serif-display italic text-base text-[#F9A825]">
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs tracking-[0.14em] uppercase text-[#FFF8E7]/55">
                Open all 7 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
