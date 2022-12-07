import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className='bg-black-1 flex flex-col justify-center items-center py-5'>
      <div className='flex justify-center items-center my-4'>
        <a className='pr-4'>
          <Image src='/assets/icon/linkedin.svg' alt='Linkedin Logo' width={44} height={44} />
        </a>
        <a className='pr-4'>
          <Image src='/assets/icon/github.svg' alt='Github Logo' width={44} height={44} />
        </a>
        <a className='pr-4'>
          <Image src='/assets/icon/discord.svg' alt='Discord Logo' width={44} height={44} />
        </a>
        <a>
          <Image src='/assets/icon/instagram.svg' alt='Instagram Logo' width={40} height={40} />
        </a>
      </div>
      <div>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-1 justify-center items-center'>
          <p className='text-orange-cst'>Powered by </p>
          <span>
            <Image src='/assets/icon/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
