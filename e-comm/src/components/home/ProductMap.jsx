import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductMap = ({ product }) => {
  const navigate = useNavigate()
  
  return (
    <div onClick={()=>navigate(`/products/${product?.id}`)} className="bg-white p-4 rounded-md shadow-md flex flex-col justify-center items-center h-full">
      <div className="text-center">
        <img className="w-48 mx-auto mb-4 cursor-pointer" src={product?.image} alt="" />
        <h3 className="text-lg font-bold text-gray-800">{product?.title}</h3>
      </div>
      <div className="mt-4 text-green-600 font-bold">
        Price: ${product?.price}
      </div>
    </div>
  );
};

export default ProductMap;
