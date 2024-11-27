'use client'

import DarkmodeButton from '@/containers/navigator/DarkmodeButton'
import Link from 'next/link'

import { LogoSVG } from '../../../public/svgs'
import ProgressBar from './ProgressBar'

export default function TopNavigator() {
  return (
    <nav className="sticky left-0 top-0 z-50 flex w-full flex-col items-center bg-light_main/95 backdrop-blur-lg dark:bg-dark_main/95 dark:text-white">
      <ProgressBar />
      <div className="flex w-full justify-between px-4 xs:px-20">
        <div className="w-fit">
          <Link
            className="flex flex-col items-center justify-center gap-y-1 border-gray-300 fill-white py-3"
            href="/posts/all/1">
            <div className="h-12">
              <LogoSVG className="size-full transition-colors hover:fill-gray-300" />
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-x-5">
          <DarkmodeButton />
        </div>
      </div>
    </nav>
  )
}
