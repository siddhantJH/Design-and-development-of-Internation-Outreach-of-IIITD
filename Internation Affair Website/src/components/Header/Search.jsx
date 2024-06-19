import React from 'react'
function Search() {
  return (
    <div className=" flex w-full items-center space-x-2 md:w-1/5">
      <input
        className="flex h-8 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-white focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
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
  )
}


export default Search