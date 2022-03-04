import { HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode;
    variant: 'primary' | 'secondary';
    textSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
}