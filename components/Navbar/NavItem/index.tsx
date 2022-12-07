import React from 'react';
import Link from 'next/link';
import { NavItemProps } from '../../../interfaces';

const NavItem: React.FC<NavItemProps> = ({ name, path, currentPath, style, onClick }) => {
  return (
    <li
      className={`${
        currentPath == path ? 'text-orange-cst' : 'text-white'
      } font-semibold ${style}`}>
      <Link href={path} scroll={path == '/' ? true : false} onClick={onClick}>
        {name}
      </Link>
    </li>
  );
};

export default NavItem;
