'use client';

import { FC, useState } from 'react';
import { Tooltip } from 'react-tooltip';

import { AccountIcon, AppsIcon, SettingsIcon, SupportIcon } from '@/shared/ui';

import styles from './Tools.module.css';
import { Settings } from '@/features/settings/ui/Settings';

export const Tools: FC = (): JSX.Element => {
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  const modalToggleHandler = () => setShowSettingsModal((prevState) => !prevState);

  const onSettingsClick = () => modalToggleHandler();

  const appsClickHandler = () => console.log('appsClickHandler');

  const supportClickHandler = () => console.log('supportClickHandler');

  const accountClickHandler = () => console.log('accountClickHandler');

  return (
    <div className='flex items-center gap-5 pr-10'>
      <a
        className={styles.controlButton}
        data-tooltip-id='settings'
        data-tooltip-content='Settings'
        data-tooltip-place='bottom'
      >
        <Settings open={showSettingsModal} onClose={modalToggleHandler} />
        <Tooltip id='settings' />
        <div onClick={onSettingsClick}>
          <SettingsIcon />
        </div>
      </a>
      <a
        className={styles.controlButton}
        data-tooltip-id='apps'
        data-tooltip-content='Apps'
        data-tooltip-place='bottom'
      >
        <Tooltip id='apps' />
        <div onClick={appsClickHandler}>
          <AppsIcon />
        </div>
      </a>
      <a
        className={styles.controlButton}
        data-tooltip-id='support'
        data-tooltip-content='Support'
        data-tooltip-place='bottom'
      >
        <Tooltip id='support' />
        <div onClick={supportClickHandler}>
          <SupportIcon />
        </div>
      </a>
      <a
        className={styles.controlButton}
        data-tooltip-id='account'
        data-tooltip-content='Account'
        data-tooltip-place='bottom'
      >
        <Tooltip id='account' />
        <div onClick={accountClickHandler}>
          <AccountIcon />
        </div>
      </a>
    </div>
  );
};
