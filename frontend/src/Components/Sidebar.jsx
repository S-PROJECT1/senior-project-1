import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const Sidebar = [
  {
    title: 'Home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Hand Maid',
    icon: <IoIcons.IoMdHand />,
    cName: 'nav-text',
  },
  {
    title: 'Handi Work',
    icon: <IoIcons.IoMdHand />,
    cName: 'nav-text',
  },
  {
    title: 'Contact US',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text',
  },
  {
    title: 'About US',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text',
  },
];