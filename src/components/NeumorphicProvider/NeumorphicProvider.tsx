import React from 'react';

interface NeumorphicProviderProps {
  children: React.ReactNode;
}

export function NeumorphicProvider({ children }: NeumorphicProviderProps) {
  return (
    <>
      {children}
    </>
  );
}
