'use client';

import { FC, memo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';

import { LOCALE } from '@/app/locale';

type Inputs = {
  chatName: string;
};

interface IProps {
  currentChat: string;
}

const ChatsSidebarWithoutMemo: FC<any> = ({ chatList, addChat, currentChat, onChatClick }: any): JSX.Element => {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onAddNewChat: SubmitHandler<Inputs> | any = async (data: any) => {
    if(data.chatName) {
      addChat(data.chatName)
      reset({ chatName: '' });
    }
  };

  return (
    <aside className='flex min-w-[200px] flex-row gap-10 px-10 py-4 lg:flex-col'>
      <h2 className='bg-purple-300'>{LOCALE.sideBarTitle}</h2>        
      <form
        onSubmit={handleSubmit(onAddNewChat)}
        className='flex w-full items-center rounded-xl border-[1px] border-gray-10 p-3'
      >
      <input
          placeholder={LOCALE.chatCreationPlaceholder}
          type='text'
          {...register('chatName')}
        />
        <button
          className='bg-purple-100 cursor-pointer rounded-xl px-4 py-2 ml-5 mr-10 transition-all hover:bg-gray-40'>
          {LOCALE.chatCreationBtnName}
        </button>
      </form>
      
      <ul className='flex flex-col gap-5'>
        {chatList?.map((chat: string) => (
          <li
            className={`${currentChat === chat && 'bg-violet-700'} bg-pink-200 cursor-pointer rounded-xl px-4 py-2 transition-all hover:bg-gray-40`}
            onClick={() => onChatClick?.(chat)}   
            key={chat + nanoid()}
          >
            {chat}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export const ChatsSidebar = memo(ChatsSidebarWithoutMemo);