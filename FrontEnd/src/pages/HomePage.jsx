import React, { useState } from "react";
import SideBar from "../components/SideBar";
import ChatContainer from "../components/ChatContainer";
import RightSideBar from "../components/RightSideBar";

const HomePage = () => {
  const [SelectedUser, SetSelectedUser] = useState(false);

  return (
    <div className="w-full h-screen">
      <div
        className={` grid grid-cols-1 overflow-hidden h-full ${
          SelectedUser
            ? "md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]"
            : "md:grid-cols-[1fr_2fr]"
        } `}
      >
        <SideBar
          SelectedUser={SelectedUser}
          SetSelectedUser={SetSelectedUser}
        />
        <ChatContainer
          SelectedUser={SelectedUser}
          SetSelectedUser={SetSelectedUser}
        />
        <RightSideBar
          SelectedUser={SelectedUser}
          SetSelectedUser={SetSelectedUser}
        />
      </div>
    </div>
  );
};

export default HomePage;
