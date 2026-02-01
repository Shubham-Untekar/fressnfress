import React from "react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-bakery-red text-white flex items-center justify-center text-center">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')]"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-[-50%] right-[-20%] w-[800px] h-[800px] rounded-full bg-yellow-400/20 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl px-6 space-y-8">
        <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            Celebrate Every Moment <br /> With Fresh N Fresh
        </h2>
        <p className="text-xl md:text-2xl text-white/90 font-light">
            Order your custom cake today or grab a quick bite.
        </p>
        <div className="pt-8">
            <button className="bg-white text-bakery-red px-10 py-5 rounded-full text-lg font-bold hover:bg-cream hover:scale-105 transition-all shadow-xl flex items-center gap-3 mx-auto">
                Order Cake Now <ArrowRight />
            </button>
        </div>
      </div>
    </section>
  );
}
