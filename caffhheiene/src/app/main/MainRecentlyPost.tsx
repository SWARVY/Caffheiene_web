import React from 'react';
import CardComponent from '@/app/main/CardComponent';

export default function MainRecentlyPost() {
  const mockData = [
    {
      date: '2023-07-06',
      title: 'Sample',
    },
    {
      date: '2023-07-06',
      title: 'Sample',
    },
    {
      date: '2023-07-06',
      title: 'Sample',
    },
    {
      date: '2023-07-06',
      title: 'Sample',
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full mt-3 text-start">
        <h1 className="text-3xl md:text-5xl font-MBC_1961_M drop-shadow-xl">Recently Posts</h1>
        <div className="mt-8 grid grid-cols-4 gap-4">
          {mockData.map((data) => (
            <CardComponent data={data} />
          ))}
        </div>
      </div>
    </>
  );
}
