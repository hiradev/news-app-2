import React from 'react';
import Link from 'next/link';

const BreadCrumbs = ({ data }) => {
  return (
    <div className='flex items-center py-4 overflow-x-auto whitespace-nowrap dark:invert'>
      {data.map((item, index) => (
        <div key={index} className='text-black opacity-50 text-xs md:text-sm'>
          <Link href={item.link}>
            {item.name}
          </Link>
          {index !== data.length - 1 && <span className='px-3'>/</span>}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumbs;
