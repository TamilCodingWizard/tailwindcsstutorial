import React from "react";

const Appbar = () => {
  return (
    <nav className="mt-5">
      <div className="flex justify-between max-w-7xl mx-auto">
        <div>
          <span className=" text-green-500 font-bold text-4xl">Fruit </span>
          <span className="text-slate-500 font-thin text-3xl">Shop</span>
        </div>
        <div >
          <ul className="flex space-x-8">
            <li className=" menu border-b-4">
              <a href="#" className="font-body">Fruits</a>
            </li>
            <li className="menu">
              <a href="#" className="font-body">Vegetables</a>
            </li>
            <li className="menu">
              <a href="#" className="font-body">More</a>
            </li>
            <li className="px-4 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Appbar;
