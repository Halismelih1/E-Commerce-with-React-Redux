
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/CartSlice';

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    if (productDetail?.rating?.count > quantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addBasket = () => {
    const itemToAdd = {
      id: productDetail?.id,
      title: productDetail?.title,
      image: productDetail?.image,
      price: productDetail?.price,
      quantity: quantity
    };

    dispatch(addToCart(itemToAdd));
    console.log('Ürün sepete eklendi:', itemToAdd); // Ürün bilgilerini konsola yazdır
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Ürün Resmi */}
        <div className="md:order-2">
          <img
            src={productDetail?.image}
            alt={productDetail?.title}
            className="w-full h-auto max-w-lg mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Ürün Detayları */}
        <div className="md:order-1">
          <h1 className="text-3xl font-bold mb-2">{productDetail?.title}</h1>
          <p className="text-gray-700 text-lg mb-4">{productDetail?.description}</p>
          <div className='flex'>
            <p className="text-xl font-bold mb-4">
              Rating: {' '}
              <span
                style={{ color: productDetail?.rating?.rate >= 4 ? 'green' : 'red' }}
              >
                {productDetail?.rating?.rate}
              </span>
            </p>
            <p className='text-xl mb-4 ml-4'>Left: {productDetail?.rating?.count}</p>
          </div>
          <div className="flex items-center">
            <button
              className="bg-gray-200 text-gray-600 px-4 py-1 rounded hover:bg-gray-300"
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="mx-4">{quantity}</span>
            <button
              className="bg-gray-200 text-gray-600 px-4 py-1 rounded-lg hover:bg-gray-300"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mb-4 mt-4" // mt-4 ekleyin
            onClick={addBasket}
          >
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
