import React from "react";

const Testimonial = () => {
  return (
    <div className="py-16">
      <h2 className="text-4xl text-black text-center font-light">
        My <span className="font-bold">Testimonial</span>
      </h2>
      <div className="flex justify-center text-black items-center mt-10 space-x-6">
        {/* First Testimonial */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center w-80">
          <div className="relative mx-auto mb-4 w-20 h-20">
            <img
              src="/pngwing.png"
              alt="Evren Shah"
              className="rounded-full w-full h-full"
            />
            <div className="absolute bottom-0 right-0 bg-black text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              17
            </div>
          </div>
          <p className="text-sm mb-4">
            I recently had to jump on 10+ different calls across eight different
            countries to find the right owner.
          </p>
          <h3 className="font-bold">Evren Shah</h3>
          <p className="text-sm text-gray-500">Designer</p>
        </div>

        {/* Second (Highlighted) Testimonial */}
        <div className="  shadow-lg bg-white rounded-lg p-6 text-center w-80">
          <div className="relative mx-auto mb-4 w-20 h-20">
            <img
              src="/pngwing.png"
              alt="Flora Sheen"
              className="rounded-full w-full h-full"
            />
            <div className="absolute bottom-0 right-0 bg-white text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              19
            </div>
          </div>
          <p className="text-sm mb-4">
            I recently had to jump on 10+ different calls across eight different
            countries to find the right owner.
          </p>
          <h3 className="font-bold">Flora Sheen</h3>
          <p className="text-sm">Designer</p>
        </div>

        {/* Third Testimonial */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center w-80">
          <div className="relative mx-auto mb-4 w-20 h-20">
            <img
              src="/pngwing.png"
              alt="Evren Shah"
              className="rounded-full w-full h-full"
            />
            <div className="absolute bottom-0 right-0 bg-black text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              17
            </div>
          </div>
          <p className="text-sm mb-4">
            I recently had to jump on 10+ different calls across eight different
            countries to find the right owner.
          </p>
          <h3 className="font-bold">Evren Shah</h3>
          <p className="text-sm text-gray-500">Designer</p>
        </div>
      </div>
      
    </div>
  );
};

export default Testimonial;
