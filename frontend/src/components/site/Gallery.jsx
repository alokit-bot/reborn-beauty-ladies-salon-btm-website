const GALLERY = [
  {
    url: "https://static.prod-images.emergentagent.com/jobs/reborn-beauty-ladies-salon-btm/images/d3d6167d25312a32277180a76b1f9a409630709e49aef1554cb0ef81a2f9e439.png",
    alt: "Soft skin and subtle natural makeup",
    span: "md:col-span-1 md:row-span-1",
    h: "h-72 md:h-[280px]",
  },
  {
    url: "https://images.pexels.com/photos/29368881/pexels-photo-29368881.jpeg",
    alt: "Indian bride in full traditional attire",
    span: "md:col-span-2 md:row-span-2",
    h: "h-96 md:h-[592px]",
  },
  {
    url: "https://static.prod-images.emergentagent.com/jobs/reborn-beauty-ladies-salon-btm/images/eb5b8e13ee6e73d8f34a3c3062b6c293eff7209919047fac997beed0aa0395e4.png",
    alt: "Polished hair styling",
    span: "md:col-span-1 md:row-span-1",
    h: "h-72 md:h-[280px]",
  },
  {
    url: "https://images.unsplash.com/photo-1684868268327-7e5590bcfbd6",
    alt: "Traditional red bridal look",
    span: "md:col-span-3 md:row-span-1",
    h: "h-80 md:h-[380px]",
  },
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="relative py-24 md:py-36 bg-[#FFF8E7]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <p className="text-xs md:text-sm uppercase tracking-[0.32em] font-medium text-[#C2185B] mb-5">
              Gallery
            </p>
            <h2
              data-testid="gallery-heading"
              className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#2D2D2D] leading-[1.05]"
            >
              Moments we've helped create.
            </h2>
          </div>
          <p className="text-base font-light text-[#2D2D2D]/70 max-w-sm">
            A small glimpse of brides, hair transformations, and the soft glow
            our clients leave with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 md:auto-rows-[280px]">
          {GALLERY.map((g, i) => (
            <figure
              key={i}
              data-testid={`gallery-item-${i}`}
              className={`relative overflow-hidden zoom-container ${g.span}`}
            >
              <img
                src={g.url}
                alt={g.alt}
                loading="lazy"
                className={`w-full ${g.h} object-cover zoom-image`}
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5 bg-gradient-to-t from-black/55 via-black/15 to-transparent text-[#FFF8E7] text-xs md:text-sm tracking-[0.16em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                {g.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
