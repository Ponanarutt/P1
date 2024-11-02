import { assets } from '@/Assets/assets';
import React from 'react';

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-38'>
      <div className='flex justify-between items-center'>
        <img src={assets.logo} width={180} alt="Logo" className='w-[130px] sm:w-auto' />
      </div>
    </div>
  );
};

export default Header;
