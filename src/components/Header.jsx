import React from "react";

const Header = () => {
  return (
    <header className="bg-black text-white p-4">
      <div className="container flex justify-between items-center p-0 lg:px-[50px]">
        <div className="text-[20px] ">
          <a href="#">Start Bootstrap</a>
        </div>
        <div className="block lg:hidden">
          <button className="border-2 border-[#ffffff1a] py-1 px-4 text-xl rounded-md">
            <i className="fa-solid fa-bars text-[#ffffff8c]"></i>
          </button>
        </div>
        <div className="hidden lg:block">
          <ul className="flex space-x-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#ffffff8c] hover:text-[#ffffffbf] transition-all duration-150"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#ffffff8c] hover:text-[#ffffffbf] transition-all duration-150"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
