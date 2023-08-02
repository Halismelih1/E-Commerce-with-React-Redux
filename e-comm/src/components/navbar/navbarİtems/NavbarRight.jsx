import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../../redux/CartSlice';
import { useNavigate } from 'react-router-dom';

const NavbarRight = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { itemCount } = useSelector(state => state.carts);

  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {

    dispatch(getCartTotal())

    const handleOutsideClick = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [dispatch]);

  const handleInputClick = () => {
    setIsExpanded(true);
  };

  const inputStyle = {
    width: isExpanded ? '300px' : '200px',
    padding: '8px',
    transition: 'width 0.3s ease'
  };

  return (
    <div className='flex items-center gap-7'>
      <div className='flex items-center border p-3 rounded-full bg-gray-200'>
        <input
          ref={inputRef}
          style={inputStyle}
          onClick={handleInputClick}
          className='outline-none bg-gray-200 items-center' type="text" placeholder='Arama Yap..' />
        <AiOutlineSearch className='cursor-pointer' size={26} />
      </div>
      <AiOutlineHeart size={26} />
      <div className='relative'>
        <div onClick={() => navigate("cart")} className='absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center cursor-pointer'>{itemCount}</div>
        <SlBasket className='cursor-pointer' size={26} />
      </div>
    </div>
  );
}

export default NavbarRight;
