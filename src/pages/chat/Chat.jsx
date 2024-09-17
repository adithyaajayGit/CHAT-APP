import React, { useContext, useEffect, useState } from 'react'
import './Chat.css'
import LeftSidebar from '../../components/leftsidebar/LeftSidebar'
import RightSidebar from '../../components/rightsidebar/RightSidebar'
import Chatbox from '../../components/chatbox/Chatbox'
import { AppContext } from '../../context/AppContext'


const Chat = () => {

  const { chatData, userData } = useContext(AppContext)
  const [loading, setLoading] = useState(true)
  
  useEffect(()=>{
      if (chatData && userData) {
        setLoading(false)
      }
  },[chatData,userData])

  return (
    <div className='chat'>
      {
        loading
          ? <p className='loading'>Loading...</p>
          : <div className="chat-container">
            <LeftSidebar />
            <Chatbox />
            <RightSidebar />
          </div>
      }
    </div>
  )
}

export default Chat
