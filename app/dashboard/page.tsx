"use client";

import db from './../lib/db'
import { useEffect, useState } from 'react';
import './dashboard.css'

async function getChats() {
  // const userId = await db.authStore.model?.id as string;
  // const user = await db.collection('users').getOne(userId);
  // console.log(user.id);
  const chats = await db.collection('chat').getFullList({
    sort: '-created',
  });
  return chats;
}

export default function Dashboard() {
  const [chats, setChats] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const chats = await getChats();
      console.log(chats);
      setChats(chats as any);
    };

    fetchData();
  }, [])

  return (
    <div className="dashboard">
      <div className="dashboard-chats">
        {/* {chats.map((chat) => {
          return <ChatButton key={chat.id} chat={chat}/>
        })} */}
      </div>
    </div>
  )
}

function ChatButton(chat: any) {
  return (
    <button>

    </button>
  )
}