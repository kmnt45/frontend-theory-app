import type { Metadata } from 'next';
import React, { FC, ReactNode } from 'react';
import './globals.scss';

export const metadata: Metadata = {
  title: 'FTA',
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
