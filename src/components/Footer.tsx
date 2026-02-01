"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <h2 className="text-2xl font-display font-bold text-white">
            Fresh N Fresh<span className="text-bakery-red">.</span>
          </h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Premium bakery offering the freshest cakes, breads, and snacks.
            Baked with love, served with a smile.
          </p>
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-bakery-red transition-colors"
              >
                <Icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-white">Quick Links</h3>
          <ul className="space-y-3">
            {["Home", "Products", "Cakes", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-white/60 hover:text-bakery-red transition-colors text-sm"
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
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-white">Contact Us</h3>
          <ul className="space-y-3 text-sm text-white/60">
            <li>4/B, Tithal Rd, Gitanjali Society, Government Colony</li>
            <li> Valsad, Gujarat 396001</li>
            <li>+91 7041904904</li>
            <li>hello@freshnfresh.com</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-white/40 text-xs">
        © {new Date().getFullYear()} Fresh N Fresh. All rights reserved.
      </div>
    </footer>
  );
}
