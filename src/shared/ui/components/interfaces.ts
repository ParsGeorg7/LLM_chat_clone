import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';
import { UseControllerProps } from 'react-hook-form';

export interface IProps extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, UseControllerProps {
    name: string;
    control?: any;
    defaultValue?: string;
}
