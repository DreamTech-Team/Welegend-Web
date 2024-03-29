import '~/app/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { ConfigProvider } from 'antd';
import { Inter } from 'next/font/google';
import React from 'react';
import theme from '~/app/_externals/constants/theme.constant';
import StyledComponentsRegistry from '~/app/_externals/lib/AntdRegistry';
import cn from '~/app/_externals/utils/classes.merge';
import Navbar from '../_externals/components/Navbar';
import Footer from '../_externals/components/Footer';
import { PopupMessage } from '../_externals/components/popup-mesage/PopupMessage';

import HeaderAdmin from '../_externals/components/HeaderAdmin';
import SideBar from '../_externals/components/SideBar';

import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: React.ReactNode;
  params: { id: string };
}

export const metadata = {
  title: 'Welegend',
  description: 'Welegend was created by dreamtech',
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'min-h-screen w-full mx-auto')}>
        <StyledComponentsRegistry>
          <>
            <Navbar />
            <ConfigProvider theme={theme}>{children}</ConfigProvider>
            <PopupMessage />
            <Footer />
          </>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
