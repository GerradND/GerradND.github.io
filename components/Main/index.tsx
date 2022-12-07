import React from 'react';
import Download from '../Download';

const Main: React.FC = () => {
  return (
    <div className='flex justify-between items-center h-screen w-full py-[80px]'>
      <div className='flex flex-col flex-1 h-full justify-center'>
        <div className='max-h-full pb-16'>
          <h1 className='text-orange-cst pb-6'>Hi,</h1>
          <h2>I'm Gerrad</h2>
          <h3 className='text-turqoise-cst pt-10'>A Frontend Developer</h3>
        </div>
        <Download />
      </div>
      <div className='h-full flex-1'>
        <img
          className='h-full max-w-full pl-10 object-contain float-right'
          src='/assets/gerrad-pic.png'
        />
      </div>
    </div>
  );
};

export default Main;
