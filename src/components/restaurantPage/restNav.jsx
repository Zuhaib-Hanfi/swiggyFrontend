import { useState } from "react";
import { Link } from "react-router";
import { FiSearch, FiHelpCircle, FiUser, FiShoppingCart } from "react-icons/fi";
import { MdLocalOffer } from "react-icons/md";
import { RiBriefcaseLine } from "react-icons/ri";
import { useSelector } from "react-redux";

export default function RestNav() {
  const [isOpen, setIsOpen] = useState(false);

  const counter = useSelector(state => state.cartSlice.countOfOrders);

  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur-sm bg-white shadow-lg shadow-white z-50 rounded-b-2xl">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <Link to="/">
          <div className="bg-[#ff5600] bg-gradient-to-l from-[#ef9a6f] to-[#ff5600] w-45 p-1.5 rounded-2xl hover:scale-[0.95] transition-all duration-300 shadow-xl shadow-gray-300">
            <img
              src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
              alt="Swiggy Logo"
              className="w-36 md:w-40 h-10 md:h-12 object-contain hover:scale-[0.85] transition-all duration-300"
            />
          </div>
        </Link>

        {/* Location */}
        <div className="hidden sm:flex items-center gap-6">
          <div className="text-sm">
            <span className="font-bold">Other</span>{" "}
            <span className="text-gray-800">Delhi, India</span>
            <span className="text-orange-500 cursor-pointer"> ▼</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-shadow-2xs text-shadow-gray-400">
          <a href="https://www.swiggy.com/corporate" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#ff5600]">
            <RiBriefcaseLine size={18} /> Swiggy Corporate
          </a>
          <Link to={"/city/delhi/16866/search"}>
            <div className="flex items-center gap-2 hover:text-[#ff5600]">
              <FiSearch size={18} /> Search
            </div>
          </Link>
          <a href="#" className="flex items-center gap-2 hover:text-[#ff5600]">
            <MdLocalOffer size={18} /> Offers <span className="text-xs text-orange-500 font-bold">NEW</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-[#ff5600]">
            <FiHelpCircle size={18} /> Help
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-[#ff5600]">
            <FiUser size={18} /> Sign In
          </a>
          <Link to={"/checkout"}>
            <div className="flex items-center gap-2 hover:text-[#ff5600]">
              <FiShoppingCart size={18} /> Cart <span className={`${(counter > 0) ? "text-[#ff5600] text-lg" : "text-black text-sm"}`}>{counter}</span>
            </div>
          </Link>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden w-[100vw] bg-[#ebc2af7d] border-t border-[#ffffff] shadow-lg">
          <div className="flex flex-col p-4 gap-4 text-sm font-medium text-black">
            <a href="https://www.swiggy.com/corporate" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gray-200">
              <RiBriefcaseLine size={18} /> Swiggy Corporate
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-200">
              <FiSearch size={18} /> Search
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-200">
              <MdLocalOffer size={18} /> Offers <span className="text-xs text-orange-500 font-bold">NEW</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-200">
              <FiHelpCircle size={18} /> Help
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-200">
              <FiUser size={18} /> Sign In
            </a>
            <Link to={"/checkout"}></Link>
            <div className="flex items-center gap-2 hover:text-gray-200">
              <FiShoppingCart size={18} /> Cart <span>{counter}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
