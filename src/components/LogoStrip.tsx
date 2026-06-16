/* eslint-disable @next/next/no-img-element */
const LOGOS = [
  { name: "haven", src: "/images/logos/haven.png", h: 24 },
  { name: "demandDrive", src: "/images/logos/demanddrive.png", h: 22 },
  { name: "parcellogix", src: "/images/logos/parcellogix.png", h: 22 },
  { name: "meridian", src: "/images/logos/meridian.png", h: 34 },
  { name: "ELLINGSON", src: "/images/logos/ellingson.png", h: 20 },
  { name: "swyft", src: "/images/logos/swyft.png", h: 26 },
  { name: "DOSS", src: "/images/logos/doss.svg", h: 24 },
  { name: "Kaleris", src: "/images/logos/kaleris.png", h: 22 },
];

export function LogoStrip() {
  return (
    <section className="border-y border-hairline/60">
      <div className="mx-auto max-w-[1280px] px-5 py-7 sm:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:justify-between sm:gap-x-6">
          {LOGOS.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              style={{ height: logo.h }}
              className="w-auto opacity-50 grayscale"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
