import React, { useState, useRef } from "react";
import assets, { userDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import useClickOutside from "../Hooks/useClickOutside";

const SideBar = ({ SelectedUser, SetSelectedUser }) => {
  const navigate = useNavigate();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const searchInputRef = useRef(null);

  const menuref = useClickOutside(() => setIsMenuVisible(false));

  const togglemenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const focusInput = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <div className=" h-full p-5 border-r-1 bg-white">
      <div>
        {/* side bar logo and menu option button div */}
        <div className="flex justify-between items-center pb-3 ">
          <img className="w-30" src={assets.logo} alt="logo" />

          <div className=" relative group" ref={menuref}>
            <img
              src={assets.menu_icon}
              alt="menu"
              className="h-7 p-1 cursor-pointer bg-gray-300 transition duration-150"
              onClick={togglemenu}
            />

            {isMenuVisible && (
              <div
                className={`absolute top-full right-0 z-20 w-32 p-5 rounded-md bg-[#0d0d0f] border border-gray-600 text-gray-100`}
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
            )}
          </div>
        </div>

        {/* =================== searchbar div ================= */}
        <div className="flex justify-between items-center">
          <div className="relative flex-grow mr-4 ">
            <CiSearch
              className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 text-lg cursor-pointer"
              onClick={focusInput}
            />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              className="w-full py-2 pl-10 pr-4 bg-[#F5F5F5] text-[#707991] rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#a1a3ab] border border-transparent hover:border-gray-600 transition duration-150"
            />
          </div>
        </div>

        {/* =================== User List ================= */}
        <div className="flex flex-col mt-6">
          {userDummyData.map((user, index) => (
            <div
              onClick={() => {
                SetSelectedUser(user);
              }}
              key={index}
              className={`relative flex mt-2 items-center gap-2 p-2 pl-4 rounded-xl cursor-pointer max-sm:text-sm 
              ${
                SelectedUser?._id === user._id
                  ? "bg-gray-100"
                  : "hover:bg-gray-100"
              } `}
            >
              <img
                src={user?.profilePic || assets.avatar_icon}
                className="w-[40px] rounded-full aspect-[1/1]"
              />
              <div className="flex flex-col leading-5">
                <p>{user.fullName}</p>
                <span>offline</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
