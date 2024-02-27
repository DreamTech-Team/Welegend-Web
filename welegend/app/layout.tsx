import React from 'react';
import { Inter } from 'next/font/google';

import '~/app/globals.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import { ConfigProvider } from 'antd';
import StyledComponentsRegistry from '~/app/_externals/lib/AntdRegistry';
import theme from '~/app/_externals/constants/theme.constant';

import cn from '~/app/_externals/utils/classes.merge';
import Navbar from './_externals/components/Navbar';
import Footer from './_externals/components/Footer';
import SideBar from './_externals/components/SideBar';
import HeaderAdmin from './_externals/components/HeaderAdmin';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Welegend',
  description: 'Welegend was created by dreamtech',
};

const role = 'admin' || 'user';

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body className={cn(inter.className, 'min-h-screen w-full mx-auto')}>
      <StyledComponentsRegistry>
        {role === 'admin' ? (
          <>
            <HeaderAdmin />
            <ConfigProvider theme={theme}>
              {<div className="ml-[250px] pt-[75px]">{children}</div>}
            </ConfigProvider>
            <SideBar />
          </>
        ) : (
          <>
            <Navbar />
            <ConfigProvider theme={theme}>{children}</ConfigProvider>
            <Footer />
          </>
        )}
      </StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
