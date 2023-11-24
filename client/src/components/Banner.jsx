import React, { useState } from "react";
import { Link } from "react-router-dom";
import BannerCard from "../home/BannerCard";

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const artworks = [
    { id: 1, name: "Tulip in a vase" },
    { id: 2, name: "Wanderer above the Sea of Fog" },
    { id: 3, name: "Green and Blue" },
    // Add more artworks as needed
  ];

  const handleSearch = () => {
    // Simple search logic: filter artworks based on the search query
    const results = artworks.filter((artwork) =>
      artwork.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="px-4 lg:px-24 bg-green-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* left side */}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Fusion Gallery 🎨
            <br />
            <span className="text-green-600">Where Art Speaks, Passion Unveils</span>
          </h2>
          <p className="md:w-4/5">
            Welcome to Fusion Gallery – a virtual sanctuary of global artistry. Immerse yourself in captivating visuals, explore unique stories, and connect with cultures worldwide through the lens of talented artists.
          </p>
          <Link to="/shop" className="mt-12 block">
          <button className="bg-green-600 text-white font-semibold px-5 py-2 roundedhover:bg-black transition-all duration-300">
          Explore Gallery 
          </button>
        </Link>
        </div>

        {/* right side */}
        <div>
          {/* Display search results or the default BannerCard */}
          {searchResults.length > 0 ? (
            searchResults.map((result) => (
              <div key={result.id}>{result.name}</div>
            ))
          ) : (
            <BannerCard />
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
