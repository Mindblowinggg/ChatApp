import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import assets from "../assets/assets";

const ProfilePage = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const navigate = useNavigate();
  const [name, setName] = useState("Aaman Kahar");
  const [bio, setBio] = useState("hi everyone");
  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className=" min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
      <div className="w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-between max-sm:flex-col-reverse rounded-lg">
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col gap-5 p-10 flex-1"
        >
          <h3 className="text-lg text-black">Profile Details</h3>
          <label
            htmlFor="avatar"
            className="flex text-black w-fit items-center gap-3 cursor-pointer"
          >
            <input
              onChange={(e) => setSelectedImg(e.target.files[0])}
              type="file"
              id="avatar"
              accept=".png , .jpeg ,.jpg"
              hidden
            />
            <img
              src={
                selectedImg
                  ? URL.createObjectURL(selectedImg)
                  : assets.avatar_icon
              }
              className={`w-12 h-12 ${selectedImg && "rounded-full"}`}
            />
            upload profile image
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            required
            placeholder="Your Name"
            className="p-2 border border-gray-500 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            className="p-2 text-black border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 "
            rows={4}
            placeholder="Write profile bio"
            required
            id=""
          ></textarea>
          <button
            className="py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-black rounded-md cursor-pointer"
            type="submit"
          >
            save
          </button>
        </form>
        <img className="max-w-60 mx-10 max-sm:mt-10 " src={assets.logo} />
      </div>
    </div>
  );
};

export default ProfilePage;
