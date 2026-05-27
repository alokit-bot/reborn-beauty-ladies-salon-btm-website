import { Accessibility } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="site-footer"
      className="bg-[#2D2D2D] text-[#FFF8E7] border-t border-[#FFF8E7]/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-6">
            <p className="font-serif-display text-2xl md:text-3xl font-light">
              Reborn Beauty<span className="text-[#C2185B]">.</span>{" "}
              <span className="italic text-[#FFF8E7]/60 text-lg">Ladies Salon</span>
            </p>
            <p className="mt-3 text-sm font-light text-[#FFF8E7]/55 max-w-md">
              Your glow, our craft — trusted by BTM's women for over a decade.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs tracking-[0.24em] uppercase text-[#FFF8E7]/45 mb-3">
              Reach Us
            </p>
            <a
              href="tel:+918041119254"
              data-testid="footer-phone"
              className="block text-sm text-[#FFF8E7]/90 hover:text-[#F9A825] transition-colors"
            >
              +91 80 4111 9254
            </a>
            <p className="text-sm text-[#FFF8E7]/70 mt-2">Open daily · 9 AM – 9 PM</p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs tracking-[0.24em] uppercase text-[#FFF8E7]/45 mb-3">
              Accessibility
            </p>
            <div className="flex items-start gap-2 text-sm text-[#FFF8E7]/70">
              <Accessibility size={16} strokeWidth={1.5} className="mt-0.5 text-[#F9A825]" />
              <span>Wheelchair-accessible entrance — please call ahead so we can assist.</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#FFF8E7]/10 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-[#FFF8E7]/45">
          <p>© {year} Reborn Beauty Ladies Salon. All rights reserved.</p>
          <p>BTM Layout 2nd Stage, Bengaluru, Karnataka 560076</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
