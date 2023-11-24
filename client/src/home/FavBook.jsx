import React from "react";
import { Link } from "react-router-dom";

const FavBook = () => {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="md:w-1/2">
        <img src="/favoriteart.png" alt="" className="rounded md:w-10/12" />
      </div>

      <div className="md:w-1/2 space-y-6">
        <h2 className="text-5xl font-bold my-5 md:w-3/4 leading-snug">
        Dive into a Collection of  <span className="text-red-600">Artistic Marvels!</span>
        </h2>
        <p className="mb-10 text-lg md:w-5/6">
        Immerse yourself in a world of creativity and expression. Discover captivating artworks that speak to your soul. Join a community of like-minded individuals who share a passion for art.
        </p>
        {/* stats */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
          <div>
            <h3 className="text-3xl font-bold">100+</h3>
            <p className="text-base">Artworks Published</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">200+</h3>
            <p className="text-base">Registered Users</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="text-base">Creators</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavBook;
