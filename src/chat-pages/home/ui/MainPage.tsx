import { FC } from 'react';

import { Chats, Navbar } from '@/widgets';

export const MainPage: FC = (): JSX.Element => {
  return (
    <div className='h-screen w-screen items-start'>
      <Navbar />
      <Chats />
    </div>
  );
};
