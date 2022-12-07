import React from 'react';
import Download from '../Download';

const Main: React.FC = () => {
  return (
    <div className=" h-screen w-full flex flex-col sm:flex-row justify-between items-center h-full w-full pt-[1.5rem] pb-[2.5rem] sm:py-[3rem] font-['Headland_One']">
      <div className='flex flex-col flex-1 w-full h-full justify-center'>
        <div className='max-h-full pb-10 sm:pb-16'>
          <h1 className='text-orange-cst pb-4 sm:pb-6 font-bold'>Hi,</h1>
          <h2>I'm Gerrad</h2>
          <h3 className='text-turqoise-cst pt-6 sm:pt-10'>A Frontend Developer</h3>
        </div>
        <Download />
      </div>
      <div className='h-[40vh] sm:h-[85vh] sm:pl-5 flex-1 pt-10 sm:pt-0'>
        <img className='h-full w-full object-contain' src='/assets/gerrad-pic.png' />
      </div>
    </div>
  );
};

export default Main;
