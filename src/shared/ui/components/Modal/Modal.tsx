'use client';

import { FC } from 'react';
import { Modal as ReactModal, ModalProps } from 'react-responsive-modal';

import { CloseIcon } from '@/shared/ui';

import 'react-responsive-modal/styles.css';
import styles from './Modal.module.css';

export const Modal: FC<ModalProps> = (props: ModalProps): JSX.Element => {
  return (
    <ReactModal
      center
      classNames={{
        root: styles.modalBg,
        modal: styles.modalBody
      }}
      closeIcon={<CloseIcon />}
      {...props}
    />
  );
};
