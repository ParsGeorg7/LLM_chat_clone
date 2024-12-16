'use client';

import { FC, useState } from 'react';
import { Tooltip } from 'react-tooltip';

import { AccountIcon, AppsIcon, SettingsIcon, SupportIcon } from '@/shared/ui';
import { SettingsModal } from '@/entities';

import styles from './Settings.module.css';

interface IProps {
  open?: boolean;
  onClose?: () => any;
}

export const Settings: FC<IProps> = (): JSX.Element => {
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  const onSettingsClick = () => modalToggle();

  const onAppsClick = () => console.log('icon Apps was clicked');

  const onSupportClick = () => console.log('icon Support was clicked');

  const onAccountClick = () => console.log('icon Account was clicked');
  
  const modalToggle = () => setShowSettingsModal((prevState) => !prevState);
  
  return (
    <div className='flex items-center gap-10 pr-5'>
      <a className={styles.controlButton} data-tooltip-id='apps' data-tooltip-content='Apps'>
        <Tooltip id='apps' />
        <div onClick={onAppsClick}>
          <AppsIcon />
        </div>
      </a>
      <a className={styles.controlButton} data-tooltip-id='settings' data-tooltip-content='Settings'>
        <SettingsModal open={showSettingsModal} onClose={modalToggle} />
        <Tooltip id='settings' />
        <div onClick={onSettingsClick}>
          <SettingsIcon />
        </div>
      </a>
      <a className={styles.controlButton} data-tooltip-id='account' data-tooltip-content='Account'>
        <Tooltip id='account' />
        <div onClick={onAccountClick}>
          <AccountIcon />
        </div>
      </a>
      <a className={styles.controlButton} data-tooltip-id='support' data-tooltip-content='Support'>
        <Tooltip id='support' />
        <div onClick={onSupportClick}>
          <SupportIcon />
        </div>
      </a>
    </div>
  );
};
