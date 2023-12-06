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

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Welegend',
  description: 'Welegend was created by dreamtech',
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body
      className={cn(
        inter.className,
        'min-h-screen w-full max-w-screen-xl mx-auto'
      )}
    >
      <StyledComponentsRegistry>
        <ConfigProvider theme={theme}>{children}</ConfigProvider>
      </StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
