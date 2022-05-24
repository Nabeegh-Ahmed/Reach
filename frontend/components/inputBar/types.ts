import React, { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react";

export interface InputBarProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    icon?: React.ReactNode,
    
}