import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../redux/CartSlice';
import CartComp from '../components/cart/CartComp';

const Cart = () => {
  const dispatch = useDispatch();
  const { carts, totalAmount, itemCount } = useSelector(state => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div className='container mx-auto px-4 py-8'>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className='text-xl font-bold mt-4 md:mt-0'>Toplam: {totalAmount}TL</div>
        </div>
      ) : (
        <div className='text-xl font-bold mt-4 md:mt-0'>Kartınız boş...</div>
      )}
    </div>
  );
};

export default Cart;
