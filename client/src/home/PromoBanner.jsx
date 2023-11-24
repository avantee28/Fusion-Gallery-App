import React from "react";
import {Link} from 'react-router-dom';

const PromoBanner = () => {
  return (
    <div className="mt-16 py-12 bg-yellow-50 px-4 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 leading-snug">
          "Artistry in Every Frame, a Gallery of Dreams."
          </h2>
          <Link to="/shop" className="mt-12 block">
            <button className="bg-red-900 text-white font-semibold px-5 py-2 roundedhover:bg-black transition-all duration-300">
              Explore More
            </button>
          </Link>
        </div>

        <div>
            <img src="./awardbooks.png" alt="" className="w-96" />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
