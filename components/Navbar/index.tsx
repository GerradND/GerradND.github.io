import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { navItems } from '../../data';
import NavItem from './NavItem';

const Navbar: React.FC = () => {
  const [path, setPath] = useState('/');
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop - 60 && scrollY < sectionTop + sectionHeight) {
          const currentId = section.getAttribute('id');
          if (currentId != null) {
            setPath(currentId === 'home' ? '/' : '#' + currentId);
          }
        }
      });
    });
  }, []);

  const handleSideNav = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className='bg-black-1 w-full sticky top-0 z-10'>
      <div className='px-[2.5rem] md:px-[4.5rem] lg:px-[8rem] py-4 flex justify-between items-center'>
        <div className='items-center'>
          <Link href='/'>
            <Image src='/assets/icon/logo.svg' alt='My Logo' width={80} height={40} />
          </Link>
        </div>
        <div className='flex justify-center items-center'>
          <ul className='hidden lg:flex'>
            {navItems.map((navItem) => {
              return (
                <NavItem
                  name={navItem.name}
                  path={navItem.path}
                  currentPath={path}
                  style='my-2 mx-8 text-lg '
                  key={navItem.path}
                />
              );
            })}
          </ul>
        </div>
        <div className='cursor-pointer lg:hidden' onClick={handleSideNav}>
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={`${
          !isOpen ? 'hidden' : ''
        } fixed left-0 top-0 bg-black/30 w-full h-screen lg:hidden ease-in duration-500`}>
        <div
          id='sideNav'
          className='fixed left-0 top-0 w-[75%] sm:w-[50%] md:w-[33%] bg-black-1 w-full h-full px-[2.5rem] py-[1rem] z-20 ease-in duration-500'>
          <div className='flex justify-between items-center'>
            <div>
              <Link href='/'>
                <Image src='/assets/icon/logo.svg' alt='My Logo' width={80} height={40} />
              </Link>
            </div>
            <div className='rounded-full border-2 cursor-pointer' onClick={handleSideNav}>
              <AiOutlineClose size={20} />
            </div>
          </div>
          <div className='pt-[1rem]'>
            <ul className='flex flex-col'>
              {navItems.map((navItem) => {
                return (
                  <NavItem
                    name={navItem.name}
                    path={navItem.path}
                    currentPath={path}
                    style='py-[0.75rem]'
                    onClick={handleSideNav}
                    key={navItem.path}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
