import React from 'react';
import Image from 'next/image';

const Download: React.FC = () => {
  return (
    <a href='CV Gerrad Natanael Daloma.pdf' download='Gerrad Natanael Daloma CV.pdf'>
      <button className='bg-orange-cst flex p-4 md:p-6 rounded-lg w-fit cursor-pointer justify-center items-center'>
        <p className='text-black-1 pr-4 md:text-xl font-medium'>Download CV </p>
        <Image src='/assets/icon/download.svg' alt='download icon' height={24} width={24} />
      </button>
    </a>
  );
};
export default Download;
