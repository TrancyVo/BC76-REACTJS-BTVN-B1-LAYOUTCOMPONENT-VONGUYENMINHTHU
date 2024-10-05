import React from "react";

const Header = () => {
  return (
    <header className="bg-black text-white p-4">
      <div className="container flex justify-between items-center ">
        <div className="text-[20px] ">
          <a href="#">Start Bootstrap</a>
        </div>
        <div>
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
