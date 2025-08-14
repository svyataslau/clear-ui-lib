import React from 'react';
import { NeumorphicGlobalStyle } from '../../styles/neumorphic';

interface NeumorphicProviderProps {
  children: React.ReactNode;
}

export function NeumorphicProvider({ children }: NeumorphicProviderProps) {
  return (
    <>
      <NeumorphicGlobalStyle />
      {children}
    </>
  );
}
