import React from 'react'
import assets from '../assets/assets';

const ChatContainer = () => {
  return (
    <div 
      style={{ backgroundImage: `url(${assets.ChatContainerBg})` }}
      className='w-full h-full' 
    >
      ChatContainer
    </div>
  )
}

export default ChatContainer;