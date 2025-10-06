import React, { useState, useRef } from "react"; // 👈️ useRef import करें
import assets from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const SideBar = ({ SelectedUser, SetSelectedUser }) => {
  const navigate = useNavigate();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const searchInputRef = useRef(null);

  const togglemenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const focusInput = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <div className=" h-full p-5">
      <div className="pb-5">
        {/*side bar logo and menu option button div*/}

        <div className="flex justify-between items-center pb-3 ">
          <img className="w-30" src={assets.logo} alt="" />
          <div className=" relative group">
            <img
              src={assets.menu_icon}
              alt="menu"
              className="max-h-5 cursor-pointer"
              onClick={togglemenu}
            />
            <div
              className={`absolute top-full right-0 z-20 w-32 p-5 rounded-md bg-[#0d0d0f] border border-gray-600 text-gray-100 ${
                isMenuVisible ? "" : "hidden"
              }`}
            >
              <p
                onClick={() => {
                  setIsMenuVisible(false);
                  navigate("/profile");
                }}
                className="cursor-pointer text-sm"
              >
                Edit Profile
              </p>
              <hr className="my-2 border-t border-gray-500" />
              <p
                onClick={() => setIsMenuVisible(false)}
                className="cursor-pointer text-sm"
              >
                Logout
              </p>
            </div>
          </div>
        </div>

        {/*===================   searchbar div   ================= */}
        <div className="flex justify-between items-center">
          <div className="relative flex-grow mr-4">
            <CiSearch
              className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 text-lg cursor-pointer"
              onClick={focusInput}
            />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              className="w-full py-2 pl-10 pr-4 bg-[#1f1f23] text-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 border border-transparent hover:border-gray-600 transition duration-150"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
