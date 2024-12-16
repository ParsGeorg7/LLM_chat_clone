'use client';

import { FC, memo, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';

import { Logo } from '@/shared/ui';
import { Message } from '@/entities';
import { LOCALE } from '@/app/locale';
import { sendMessage } from '@/entities/dialogs/api/chatApi';
import { IProps, IInputs } from '@/entities/dialogs/interfaces';
import { IMessage } from '@/entities/dialogs/ts';

const DialogsWithoutMemo: FC<IProps> = memo((currentChat: IProps): JSX.Element => {
  const [dialogs, setDialogs] = useState<IMessage[]>([]);
  const { register, handleSubmit, reset } = useForm<IInputs>();

  const onSubmit: SubmitHandler<any> = async (data: IInputs) => {
    data.newMessage && setDialogs((prevState: any) => [
      ...prevState,
      {
        id: nanoid(),
        type: 'user-request',
        content: data.newMessage
      }
    ]);

    reset({ newMessage: '' });

    await new Promise((res) => setTimeout(res, 500));

    const chatResponce = await sendMessage(data.newMessage);

    if (chatResponce) setDialogs((prevState: any) => [...prevState, chatResponce]);
   };
  
  useEffect(() => {
    setDialogs([]);
  }, [currentChat]);
  
  return (
    <main className='flex flex-col justify-between h-full w-full mr-30 rounded-xl bg-purple-100 p-5'>
      <div className='h-5/6'>
        {!dialogs.length ? (
          <h2 className='mx-auto w-fit text-xl font-bold'>
            {LOCALE.dialogsTitle}
          </h2>
        ) : (
          <div className='flex max-h-[95%] flex-col gap-5 overflow-x-clip overflow-y-scroll'>
            {dialogs.map((item: IMessage, index: number) => (
              <Message key={index.toString() + item.id} item={item} />
            ))}
          </div>
        )}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex w-full items-center rounded-xl border-[1px] border-gray-10 p-3'
      >
        <input
          placeholder={LOCALE.dialogsInputPlaceholder}
          className='h-fit w-full border-none bg-transparent outline-0'
          type='text'
          {...register('newMessage')}
        />
        <button type='submit'>
          <Logo />
        </button>
      </form>
    </main>
  );
});

DialogsWithoutMemo.displayName = 'DialogsWithoutMemo';

export const Dialogs = memo(DialogsWithoutMemo);
