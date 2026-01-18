import React from "react";

const GetInTouch = () => {
  return (
    <div className="md:py-16 py-12">
      <div className="container mx-auto md:px-20">
        <div
          className="w-full min-h-[450px] md:h-[500px] rounded-3xl mx-auto 
          flex flex-col items-center justify-center text-center px-6 py-10
          shadow-2xl relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #17386f 0%, #2b59cf 100%)",
          }}
        >
          {/* Background Decorative Elements (Optional) */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-16 -translate-y-16 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-400/10 rounded-full translate-x-20 translate-y-20 blur-3xl"></div>

          {/* Heading */}
          <h3 className="font-bold text-white text-2xl md:text-4xl lg:text-5xl max-w-[900px] leading-snug md:leading-[60px] z-10">
            Discover how My Softake drives business growth through innovative and reliable technology solutions.
          </h3>

          {/* Subtext */}
          <p className="font-light text-white/80 pt-6 text-base md:text-xl max-w-2xl z-10">
            Schedule a meeting to explore tailored solutions for your unique business needs.
          </p>

          {/* Button */}
          <button
            className="
              px-8 py-3 md:px-12 md:py-4 mt-10
              bg-white text-[#17386f] font-bold text-lg
              rounded-xl
              hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300
              shadow-[0_10px_20px_rgba(0,0,0,0.2)] z-10"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;