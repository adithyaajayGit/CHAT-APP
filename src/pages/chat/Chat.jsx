import React from 'react'
import './Chat.css'
import LeftSidebar from '../../components/leftsidebar/LeftSidebar'
import RightSidebar from '../../components/rightsidebar/RightSidebar'
import Chatbox from '../../components/chatbox/Chatbox'


const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat-container">
        <LeftSidebar />
        <Chatbox />
        <RightSidebar />
      </div>
    </div>
  )
}

export default Chat
