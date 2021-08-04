import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
   {
      title: 'Home',
      path: '/',
      icon: <IoIcons.IoIosHome />,
      cName: 'nav-text'
   },
   {
      title: 'Design',
      path: '/design',
      icon: <GiIcons.GiPencilBrush />,
      cName: 'nav-text'
   },
   {
      title: 'Development',
      path: '/development',
      icon: <IoIcons.IoIosDesktop />,
      cName: 'nav-text'
   },
   {
      title: 'Contact',
      path: '/contact',
      icon: <IoIcons.IoIosContact />,
      cName: 'nav-text'
   },
];