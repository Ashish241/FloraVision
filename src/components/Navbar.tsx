import { useEffect, useState } from "react";
import { logoIcon, searchIcon, shopIcon } from "@/assets";
import { headerNavigation } from "@/config/navigation.config";

type NavItemsProps = {
  onNavigate?: () => void;
};

const NavItems = ({ onNavigate }: NavItemsProps) => (
  <>
    {headerNavigation.map(({ name, href, img }) => (
      <li key={name} className="group cursor-pointer">
        <a href={href} onClick={() => onNavigate?.()}>
          {img ? (
            <div className="flex items-center gap-1">
              {name}
              <img
                src={img.src}
                alt={img.alt}
                className="size-3 -rotate-180 group-hover:rotate-0 motion-safe:duration-300 motion-reduce:duration-[0ms]"
              />
            </div>
          ) : (
            name
          )}
          <span className="block h-px w-0 rounded-full bg-white group-hover:w-full motion-safe:duration-300 motion-reduce:duration-[0ms]"></span>
        </a>
      </li>
    ))}
  </>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-[#1a221780] backdrop-blur-md">
      <div className="flex w-full items-center justify-between px-5 py-5 md:px-10 md:py-6">
        <div className="flex cursor-pointer items-center gap-2 text-2xl font-black">
          <img src={logoIcon} alt="plant" className="drop-shadow-logo size-8" />
          FloraVision.
        </div>

        <ul className="font-indieflower hidden gap-5 text-xl md:flex">
          <NavItems />
        </ul>

        <div className="flex items-center gap-5">
          <button
            type="button"
            className={`hidden cursor-pointer ${isMenuOpen ? "" : "md:block"}`}
          >
            <img src={searchIcon} alt="search" className="size-5" />
          </button>
          <button
            type="button"
            className={`hidden cursor-pointer ${isMenuOpen ? "" : "md:block"}`}
          >
            <img src={shopIcon} alt="shop" className="size-6" />
          </button>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className="group flex size-6 cursor-pointer flex-col items-end justify-evenly"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="h-1 w-full rounded bg-white"></span>
            <span className="h-1 w-3/4 rounded bg-white group-hover:w-full motion-safe:transition-all motion-reduce:transition-none"></span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-white/15 bg-[#1a2217f0] px-5 py-4" aria-label="Expanded navigation">
          {/* Desktop / tablet expanded panel */}
          <div className="mb-4 hidden items-center gap-5 border-b border-white/15 pb-4 md:flex">
            <button type="button" aria-label="Search" className="cursor-pointer">
              <img src={searchIcon} alt="" className="size-5" />
            </button>
            <button type="button" aria-label="Shopping bag" className="cursor-pointer">
              <img src={shopIcon} alt="" className="size-6" />
            </button>
          </div>
          <ul className="font-indieflower flex flex-col gap-4 text-xl">
            <NavItems onNavigate={() => setIsMenuOpen(false)} />
            {/* Mobile: search + bag at bottom of panel, no separator lines */}
            <li className="mt-2 flex list-none items-center gap-5 md:hidden">
              <button type="button" aria-label="Search" className="cursor-pointer">
                <img src={searchIcon} alt="" className="size-5" />
              </button>
              <button type="button" aria-label="Shopping bag" className="cursor-pointer">
                <img src={shopIcon} alt="" className="size-6" />
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
