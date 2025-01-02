import React, {useState, useEffect, useRef} from "react";
import {MdArrowOutward} from "react-icons/md";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference to the dropdown menu

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Close the dropdown if clicked outside
  useEffect(() => {
    // Function to check if click is outside the dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    // Add event listener on mount
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-black text-white">
      <h1 className="text-2xl font-bold ">
        <span className="block">AGENCY</span>
        <span className="block">MART</span>
      </h1>

      {/* Mobile Dropdown */}
      <div className="lg:hidden md:hidden flex items-center">
        <button
          onClick={toggleDropdown}
          className="px-4 py-2 h-10 rounded-xl font-medium transition bg-[#76aaaf] text-black hover:bg-[#6e9b9d]"
        >
          Menu
        </button>

        {isDropdownOpen && (
          <div
            ref={dropdownRef} // Attach the dropdownRef to the dropdown div
            className="absolute right-6 mt-6 bg-black text-white w-48 rounded-lg shadow-md z-10"
          >
            <ul className="space-y-2 pt-10">
              <li>
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-[#6e9b9d]">
                  Post your requirement
                </button>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 rounded-lg hover:bg-[#6e9b9d]"
                >
                  LinkedIn{" "}
                  <MdArrowOutward
                    style={{color: "#76aaaf", fontSize: "1.5rem"}}
                  />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="hidden md:flex lg:flex lg:space-x-3 items-center md:space-x-1">
        <button className="px-4 py-1 h-10 rounded-xl font-medium transition bg-[#76aaaf] text-black hover:bg-[#6e9b9d]">
          Post your requirement
        </button>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 rounded transition flex items-center text-[1.4rem] lg:pr-40 md:pr-1"
        >
          LinkedIn{" "}
          <MdArrowOutward style={{color: "#76aaaf", fontSize: "1.5rem"}} />
        </a>
      </div>
    </header>
  );
};

export default Header;
