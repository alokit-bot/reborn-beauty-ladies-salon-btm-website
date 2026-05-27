import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      data-testid="site-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#FFF8E7]/90 border-b border-[#2D2D2D]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-18 py-4 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          data-testid="logo-link"
          className="flex items-center gap-2"
        >
          <span
            className={`font-serif-display text-2xl md:text-3xl tracking-tight ${
              scrolled ? "text-[#2D2D2D]" : "text-[#FFF8E7]"
            }`}
          >
            Reborn<span className="text-[#C2185B]">.</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(l.href);
              }}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className={`text-sm tracking-[0.18em] uppercase font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-[#2D2D2D] hover:text-[#C2185B]"
                  : "text-[#FFF8E7]/90 hover:text-[#F9A825]"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+918041119254"
          data-testid="nav-book-cta"
          className="hidden md:inline-flex items-center gap-2 bg-[#C2185B] text-[#FFF8E7] px-6 py-3 hover:bg-[#A3144C] transition-colors duration-300 text-sm tracking-[0.18em] uppercase font-medium"
        >
          <Phone size={15} strokeWidth={1.75} /> Book Now
        </a>

        <button
          aria-label="Toggle menu"
          data-testid="mobile-menu-toggle"
          className={`md:hidden p-2 ${scrolled ? "text-[#2D2D2D]" : "text-[#FFF8E7]"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="md:hidden bg-[#FFF8E7] border-t border-[#2D2D2D]/10"
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(l.href);
                }}
                data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                className="text-base tracking-[0.14em] uppercase font-medium text-[#2D2D2D] hover:text-[#C2185B]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+918041119254"
              data-testid="mobile-book-cta"
              className="inline-flex items-center gap-2 bg-[#C2185B] text-[#FFF8E7] px-6 py-3 hover:bg-[#A3144C] transition-colors duration-300 text-sm tracking-[0.18em] uppercase font-medium w-fit"
            >
              <Phone size={15} strokeWidth={1.75} /> Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
