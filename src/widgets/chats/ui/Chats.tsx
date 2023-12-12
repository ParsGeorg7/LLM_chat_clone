'use client';

import { FC, useCallback, useMemo, useState } from 'react';

import { ChatsSidebar, Dialogs } from '@/features';
import { LOCALE } from '@/app/locale';

const ar = [LOCALE.chatName1, LOCALE.chatName2, LOCALE.chatName3]

export const Chats: FC = (): JSX.Element => {
  const [ chatList, setChatList ] = useState(ar);
  const [currentChat, setCurrentChat] = useState(chatList[0]);
  
  //мемоизируем на случай, если в родительский компонент Chats будут со временем переданы пропсы
  const chatListMemo = useMemo(() => chatList, [chatList])
  const currentChatMemo = useMemo(() => currentChat, [currentChat])
  const addChatHandler = useCallback((chat: string) => setChatList((prev: string[]) => [...prev, chat]), [setChatList])
  const setCurrentChatHandler = useCallback(setCurrentChat, [setCurrentChat])
  
  return (
    <div className='flex h-[80%] flex-col lg:flex-row'>
      <ChatsSidebar 
        chatList={chatListMemo} 
        currentChat={currentChatMemo} 
        addChat={addChatHandler} 
        onChatClick={setCurrentChatHandler} 
      />
      <Dialogs currentChat={currentChat} />
    </div>
  );
};
