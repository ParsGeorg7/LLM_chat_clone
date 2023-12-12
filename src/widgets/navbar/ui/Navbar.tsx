import { FC, memo } from 'react';

import { Logo } from '@/shared/ui';
import { Settings } from '@/features';

const NavbarWitoutMemo: FC = (): JSX.Element => {
  return (
    <nav className='flex items-center justify-between px-4 py-6'>
      <div className='flex cursor-pointer items-center gap-4 font-bold'>
        <Logo />
        <h1>{'LLM Chat Clone'}</h1>
      </div>
      <Settings />
    </nav>
  );
};

export const Navbar = memo(NavbarWitoutMemo);
