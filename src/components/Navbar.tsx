"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    const showAnim = gsap.from(navRef.current, {
      yPercent: -100,
      paused: true,
      duration: 0.3,
      ease: "power2.out",
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        // Show only when scrolling up
        if (self.direction === -1) {
            showAnim.play();
        } else {
            showAnim.reverse();
        }
      },
      // Keep showing if at very top
      onLeaveBack: () => showAnim.play(),
    });
  }, { scope: navRef });

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-cream/80 backdrop-blur-md border-b border-charcoal/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <h1 className="text-2xl font-bold font-display text-bakery-red tracking-tight group-hover:opacity-80 transition-opacity">
            Fresh N Fresh<span className="text-fresh-green text-sm align-super">.</span>
          </h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {["Home", "Products", "Cakes", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-charcoal font-medium text-sm tracking-wide group overflow-hidden"
                onClick={(e) => {
                e.preventDefault();
                const targetId = `#${item.toLowerCase()}`;
                const elem = document.querySelector(targetId);
                if (window.lenis && elem) {
                    window.lenis.scrollTo(elem as HTMLElement);
                } else if (elem) {
                    elem.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                {item}
              </span>
              <span className="absolute top-0 left-0 block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-bakery-red">
                {item}
              </span>
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-6">

          <button className="bg-bakery-red text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-red-600 transition-all shadow-md hover:shadow-lg">
            Order Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-charcoal"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-cream border-b border-charcoal/10 shadow-lg p-6 flex flex-col gap-4 animate-in slide-in-from-top-4">
          {["Home", "Products", "Cakes", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium text-charcoal hover:text-bakery-red"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                const targetId = `#${item.toLowerCase()}`;
                const elem = document.querySelector(targetId);
                if (window.lenis && elem) {
                    window.lenis.scrollTo(elem as HTMLElement);
                } else if (elem) {
                    elem.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {item}
            </Link>
          ))}
          <button className="w-full bg-bakery-red text-white py-3 rounded-full text-sm font-semibold">
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
}
