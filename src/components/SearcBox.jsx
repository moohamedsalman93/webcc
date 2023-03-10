import React from "react";

const SearchBox = () => {
  return (
    <div className="relative text-gray-600 focus-within:text-gray-400">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M22 22L15.5 15.5M10 14H6C4.93913 14 4.05872 13.5786 3.53554 12.8787C3.01236 12.1788 3.01236 11.2212 3.53554 10.5213C4.05872 9.82139 4.93913 9.4 6 9.4H10V14Z" />
          </svg>
        </button>
      </span>
      <input
        type="search"
        name="q"
        className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
        placeholder="Search..."
        autoComplete="off"
      />
    </div>
  );
};

export default SearchBox;
