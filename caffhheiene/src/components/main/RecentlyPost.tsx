import { TestPostData } from '@/components/main/TestSources/TestPostData';
import { TITLE } from '@/constants/title';
import React from 'react';
import Card from '@/components/main/Card';

export default function RecentlyPost() {
  return (
    <>
      <div className="flex flex-col w-full mt-3 text-start">
        <h1 className="text-3xl md:text-5xl font-MBC_1961_M drop-shadow-xl">
          {TITLE.recentlyPost}
        </h1>
        <div className="mt-8 grid grid-cols-4 gap-4">
          {TestPostData.map((data) => (
            <Card data={data} />
          ))}
        </div>
      </div>
    </>
  );
}
