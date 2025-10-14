import React from "react";
import assets, { messagesDummyData } from "../assets/assets";
import { GrGallery } from "react-icons/gr";
import { LuMessageSquareMore } from "react-icons/lu";


const ChatContainer = ({ SelectedUser }) => {
  const SENDER_ID = "680f50e4f10f3cd28382ecf9";

  return SelectedUser ? (
    <div
      style={{ backgroundImage: `url(${assets.ChatContainerBg})` }}
      className="w-full h-screen flex flex-col"
    >
      {/* Header */}
      <div className="flex gap-5 items-center p-5 bg-white shadow-md flex-shrink-0">
        <img
          className="rounded-full h-12 w-12"
          src={SelectedUser?.profilePic || assets.avatar_icon}
          alt="profile pic"
        />
        <div>
          <h2 className="font-semibold">{SelectedUser?.fullName || " "}</h2>
          <p className="text-[#707991] text-sm">last seen 5 mins ago</p>
        </div>
      </div>

      {/*-----------------CHAT AREA -------------------- */}

      <div className="flex-grow overflow-y-auto px-10 py-4 space-y-4">
        {messagesDummyData.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.senderId === SENDER_ID ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[60%] ${
                msg.senderId === SENDER_ID
                  ? "bg-blue-500 rounded-bl-2xl rounded-tr-2xl rounded-tl-2xl "
                  : "bg-white rounded-br-2xl rounded-tr-2xl rounded-tl-2xl"
              }   p-3 `}
            >
              {msg.text && <p>{msg.text}</p>}
              <span
                className={`text-[10px] block mt-2 ${
                  msg.senderId === SENDER_ID
                    ? "text-white"
                    : "text-gray-600 text-right"
                }`}
              >
                {new Date(msg.createdAt).toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Input Footer  */}
      <div className="px-3 pb-3 bg-transparent relative flex items-center flex-shrink-0 ">
        {/* Input Field  */}
        <input
          type="text"
          placeholder="Type your message here..."
          className="flex-grow py-3 px-5 pr-14 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Gallery Button */}
        <input type="file" id="image" hidden />
        <label htmlFor="image" className="absolute right-25 cursor-pointer">
          <GrGallery className="w-7 h-7 text-gray-500 hover:text-blue-500" />
        </label>

        {/* Send Button */}
        <button className="ml-3 p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors flex-shrink-0">
          <img src={assets.send_button} alt="Send" className="h-5 w-5" />
        </button>
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center bg-gray-100">
      <LuMessageSquareMore size={70} className="text-blue-500"/>

      <h1 className="text-3xl font-mono text-blue-800">
        start chatting
      </h1>
    </div>
  );
};

export default ChatContainer;
