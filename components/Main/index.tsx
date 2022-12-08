import React from 'react';
import Image from 'next/image';

const Main: React.FC = () => {
  return (
    <div className=" h-screen w-full flex flex-col lg:flex-row justify-between items-center h-full w-full pt-[1.75rem] pb-[2.5rem] md:pt-[2.5rem] lg:py-[3rem] font-['Headland_One']">
      <div className='flex flex-col flex-1 w-full h-full justify-center'>
        <div className='max-h-full pb-10 lg:pb-16'>
          <h1 className='text-orange-cst pb-4 lg:pb-6 font-bold'>Hi,</h1>
          <h2>I'm Gerrad</h2>
          <h3 className='text-turqoise-cst pt-6 lg:pt-10'>A Frontend Developer</h3>
        </div>
        <div>
          <a href='CV Gerrad Natanael Daloma.pdf' download='Gerrad Natanael Daloma CV.pdf'>
            <button className='bg-orange-cst flex p-4 lg:p-6 rounded-lg w-fit cursor-pointer justify-center items-center'>
              <p className='text-black-1 pr-4 lg:text-xl font-medium'>Download CV </p>
              <Image src='/assets/icon/download.svg' alt='download icon' height={24} width={24} />
            </button>
          </a>
        </div>
      </div>
      <div className='h-[40vh] lg:h-[85vh] lg:pl-5 flex-1 pt-10 lg:pt-0'>
        <img className='h-full w-full object-contain' src='/assets/gerrad-pic.png' />
      </div>
    </div>
  );
};

export default Main;
