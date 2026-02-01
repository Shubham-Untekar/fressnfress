"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

import Image from "next/image";

// ...

const PRODUCTS = [
  {
    id: 1,
    name: "Classic Sourdough",
    category: "Fresh Bread",
    price: "$6.50",
    image: "/images/Classic Sourdough.webp",
    color: "bg-amber-100",
  },
  {
    id: 2,
    name: "Truffle Chocolate Cake",
    category: "Cakes",
    price: "$35.00",
    image: "/images/Truffle Chocolate Cake.avif",
    color: "bg-rose-100",
  },
  {
    id: 3,
    name: "Assorted Croissants",
    category: "Snacks",
    price: "$12.00",
    image: "/images/Assorted Croissants.jpg",
    color: "bg-orange-50",
  },
  {
    id: 4,
    name: "Berry Cheese Danish",
    category: "Snacks",
    price: "$4.50",
    image: "/images/Berry Cheese Danish.jpg",
    color: "bg-pink-100",
  },
  {
    id: 5,
    name: "Chocolate Croissant",
    category: "Snacks",
    price: "$5.50",
    image: "/images/Chocolate Croissant.jpg",
    color: "bg-stone-200",
  },
  {
    id: 6,
    name: "Blueberry Muffin",
    category: "Snacks",
    price: "$3.75",
    image: "/images/Berry Cheese Danish.jpg",
    color: "bg-blue-100",
  },
  {
    id: 7,
    name: "French Baguette",
    category: "Fresh Bread",
    price: "$4.00",
    image: "/images/French Baguette.jpg",
    color: "bg-yellow-100",
  },
  {
    id: 8,
    name: "Strawberry Tart",
    category: "Cakes",
    price: "$8.50",
    image: "/images/Strawberry Tart.webp",
    color: "bg-red-100",
  },
];

export default function FeaturedProducts() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  // Re-run animations when showAll changes to animate new items
  useEffect(() => {
    if (showAll) {
      gsap.from(".product-card-new", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    }
  }, [showAll]);

  useGSAP(
    () => {
      // Title Animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Initial Cards Stagger
      gsap.from(".product-card-initial", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    },
    { scope: containerRef },
  );

  const displayedProducts = showAll ? PRODUCTS : PRODUCTS.slice(0, 4);

  return (
    <section
      ref={containerRef}
      className="py-24 px-6 max-w-7xl mx-auto"
      id="products"
    >
      <div id="snacks" className="absolute -top-24" />
      <div ref={titleRef} className="text-center mb-16 space-y-4">
        <h3 className="text-fresh-green font-bold tracking-widest uppercase text-sm">
          Our Best Sellers
        </h3>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal">
          Featured Delights
        </h2>
        <p className="text-charcoal/60 max-w-2xl mx-auto">
          Handpicked favorites from our chefs, baked fresh every morning to
          start your day with a smile.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {displayedProducts.map((product, idx) => (
          <div
            key={product.id}
            className={`product-card group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ${idx >= 4 ? "product-card-new" : "product-card-initial"}`}
          >
            {/* Image Container */}
            <div
              className={`h-64 ${product.color} relative overflow-hidden flex items-center justify-center p-8`}
            >
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Image for Product */}
              <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Quick Action Buttons */}
              <div className="absolute bottom-4 right-4 flex gap-2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <button className="bg-white p-2 rounded-full shadow-md text-charcoal hover:text-bakery-red hover:scale-110 transition-all">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <span className="text-xs font-semibold text-fresh-green uppercase tracking-wider">
                {product.category}
              </span>
              <div className="flex justify-between items-start mt-2">
                <h3 className="text-xl font-bold text-charcoal group-hover:text-bakery-red transition-colors">
                  {product.name}
                </h3>
                <span className="font-display font-bold text-lg text-charcoal">
                  {product.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="inline-block px-8 py-3 border-2 border-charcoal/10 rounded-full font-semibold text-charcoal hover:bg-charcoal hover:text-white transition-all"
        >
          {showAll ? "View Less" : "View All Products"}
        </button>
      </div>
    </section>
  );
}
