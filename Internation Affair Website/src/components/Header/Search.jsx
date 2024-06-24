import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Assuming you're using react-icons

function Search() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchIconClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute right-12 space-x-2">
      <FaSearch
        className="h-10 w-10 cursor-pointer text-xl text-cyan-500 hover:text-cyan-800"
        onClick={handleSearchIconClick}
      />
      {isOpen && (
        <div className="absolute top-10 right-0 flex w-full flex-col items-center space-y-2 md:w-1/5 bg-white rounded-md shadow-md p-2">
          <input
            className="h-15 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="email"
            placeholder="Search"
          ></input>
          <button
            type="button"
            className="rounded-md border-2 border-cyan-500 bg-white px-3 py-1 text-sm font-semibold text-black shadow-sm hover:bg-cyan-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Search
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;
