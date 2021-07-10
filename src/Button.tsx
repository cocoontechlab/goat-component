import React, { FC, ButtonHTMLAttributes } from 'react';

type ButtonVariants = 'default' | 'warning';
type Icons = JSX.Element | null;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariants;
  leftIcon?: Icons;
  rightIcon?: Icons;
}

export const Button: FC<ButtonProps> = ({
  text,
  variant = 'default',
  leftIcon = null,
  rightIcon = null,
  ...rest
}) => {
  const wrappedClass = `px-8 py-2 font-semibold transition duration-500 ease-in-out transform rounded-lg flex items-center gap-1 shadow-xl bg-gradient-to-r from-red-300 to-blue-300 hover:from-pink-400 hover:to-indigo-400`;

  return (
    <button className={wrappedClass} {...rest}>
      {leftIcon && leftIcon}
      {text}
      {rightIcon && rightIcon}
    </button>
  );
};
