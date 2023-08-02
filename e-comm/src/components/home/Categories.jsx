import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/CategorySlice';

const Categories = ({setCategory}) => {
  const dispatch = useDispatch();
  const state = useSelector(store => store.categories || { categories: [] });

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      {state.categories.map((category, i) => (
        <div onClick={()=> setCategory(category)}
          key={i}
          className="flex items-center justify-between py-3 px-4 bg-white border-t border-gray-300 last:border-b"
        >
          <span className="text-gray-800 hover:font-bold cursor-pointer">{category}</span>
        </div>
      ))}
    </div>
  );
};

export default Categories;
