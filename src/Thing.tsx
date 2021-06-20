import React, { FC, HTMLAttributes, ReactChild } from 'react';
import './tailwind.css'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}
import './tailwind.css'

export const Thing: FC<Props> = ({ children }) => {
  return <div className="flex item-center justify-center w-screen h-screen bg-red-100">{children || `the snozzberries taste like snozzberries`}</div>;
};
