import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryProduct, getProducts } from '../../redux/ProductSlice';
import Loading from "../home/Loading"
import ProductMap from './ProductMap';

const Product = ({category,sort}) => {
  const dispatch = useDispatch();
  const {products,productsStatus} = useSelector(state => state.products)

  
  useEffect(()=>{
    if(category){
      dispatch(getCategoryProduct(category))
    }
    else{
      dispatch(getProducts())
    }

  },[dispatch,category])
  return (
    <div className="p-8">
      {
        productsStatus == "LOADİNG" ?<Loading/> :
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
  {products
    ?.slice()
    .sort((a, b) =>
      sort === "inc" ? a.price - b.price : sort === "dec" ? b.price - a.price : 0
    )
    .map((product, i) => (
      <ProductMap key={i} product={product} />



          )

          )}
        </div>
      
      }
    </div>
  )
}

export default Product