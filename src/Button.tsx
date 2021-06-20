import React, { FC } from 'react';
import styled from 'styled-components';
import './tailwind.css'

const StyledButton = styled.button.attrs(
  ({ variant }: { variant: BtnVariants }) => ({
    className: `px-8 py-2 font-semibold 
      ${variant === 'default' ? 'text-white' : 'text-red-700'} 
      transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-red-300 to-blue-300 hover:from-pink-400 hover:to-indigo-400`
  })
) <{ variant: BtnVariants }>``;
type BtnVariants = 'default' | 'warning';
export interface ButtonProps {
  text: string;
  variant?: BtnVariants;
}

export const Button: FC<ButtonProps> = ({ text, variant = "default", ...rest }) => {
  return <StyledButton variant={variant} {...rest}>{text}</StyledButton>;
};