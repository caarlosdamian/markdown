import React, { ButtonHTMLAttributes } from 'react';
import './Button.scss';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string | React.ReactNode;
}
export const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button className={`btn ${props?.className}`} {...props}>
      {label}
    </button>
  );
};
