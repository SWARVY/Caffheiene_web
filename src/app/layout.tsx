import { USER } from '@/constants/user'
import BottomNavigator from '@/containers/navigator/BottomNavigator'
import TopNavigator from '@/containers/navigator/TopNavigator'
import FramerTransitionProvider from '@/utils/FramerTransitionProvider'
import NextThemeProvider from '@/utils/NextThemeProvider'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Metadata } from 'next'
import { PropsWithChildren } from 'react'

import '../../public/fonts/font.css'
import './globals.css'

export const metadata: Metadata = {
  title: '신현호의 기술서재',
  description: '학습한 내용들을 기록합니다.',
  openGraph: {
    title: '신현호의 기술서재',
    description: '학습한 내용들을 기록합니다.',
    url: 'https://caffhheiene.vercel.app',
    siteName: '신현호의 기술서재',
    images: [
      {
        url: `https://caffhheiene.vercel.app${USER.profileImg}`,
        width: 850,
        height: 600,
        alt: '신현호의 기술서재',
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="google-site-verification"
          content="oiYSaLSyk-bomuW9S4FjnJk3cvGtrJPYNmm4QrYOG0s"
        />
        <meta
          name="naver-site-verification"
          content="47cf760f4112b1ce516d64a87fd5f31bd3f74fc9"
        />
      </head>
      <body className="flex flex-col items-center justify-center w-full transition duration-100 ease-in bg-blue-950/5 font-Pretendard dark:bg-background_dark">
        <NextThemeProvider>
          <TopNavigator />
          <FramerTransitionProvider>{children}</FramerTransitionProvider>
          <BottomNavigator />
        </NextThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
