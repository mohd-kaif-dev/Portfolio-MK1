import Initials from "../assets/initials.svg?react";
import { useState } from "react";
import { NAVIGATION_LINKS } from "../constants";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -50;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 z-50 lg:top-4">
        {/* Desktop Menu */}
        <div className="mx-auto hidden max-w-lg items-center justify-center rounded-full border border-white/30 backdrop-blur-lg lg:flex">
          <div className="flex items-center justify-between gap-6">
            <div>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <Initials className="h-16 w-16" />
              </a>
            </div>
            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((items, index) => (
                  <li key={index}>
                    <a
                      href={items.href}
                      className="text-sm hover:text-stone-300"
                      onClick={(e) => handleLinkClick(e, items.href)}
                    >
                      {items.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="backdrop-blur-md lg:hidden flex items-center justify-between px-4 lg:px-0 mt-4">
          <div>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <Initials className="h-12 w-12 " />
            </a>
          </div>
          <div className="flex items-center">
            <button
              className="focus:outline-none lg:hidden"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMobileMenuOpen ? (
                <RiCloseLine className="h-6 w-7 text-stone-300" />
              ) : (
                <RiMenu3Line className="h-6 w-6 text-stone-300" />
              )}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <ul className="my-4 ml-4 flex flex-col gap-6 backdrop-blur-md">
            {NAVIGATION_LINKS.map((items, index) => (
              <li key={index}>
                <a
                  href={items.href}
                  className="text-stone-300"
                  onClick={(e) => handleLinkClick(e, items.href)}
                >
                  {items.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
