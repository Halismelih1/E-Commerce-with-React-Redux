import React from 'react'
import { useSelector } from 'react-redux';
import Slider from "react-slick"
import { Link } from 'react-router-dom';


const SliderComp = () => {

        const {products} = useSelector(state=> state.products)
        
        const getRandomIndex = () => {
                return Math.floor(Math.random() * products.length);
              };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const handleDetailClick = () => {
        const randomIndex = getRandomIndex();
        const randomProduct = products[randomIndex];
        window.location.href = `/products/${randomProduct.id}`;
      };

  return (
    <div>
       <h1 className="text-center text-4xl font-bold mb-4 my-16">Product of the <span className=' text-yellow-500'> WEEK </span>!</h1>
      <Slider {...settings}>
        <div className='!flex items-center bg-gray-200 px-6 '>
        <div className='p-8'>
<div className='text-6xl font-bold'>See More</div>
<div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptate nemo expedita quisquam at repellendus dolor in aut, sed mollitia vitae reprehenderit cum recusandae harum ad provident id possimus necessitatibus?</div>
<button onClick={handleDetailClick} className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-100'>
              Detail
            </button>
        </div>
        <img className='w-[250px] rounded-xl' src="https://i2.milimaj.com/i/milliyet/75/869x477/5ea3069155428010fc7475da.jpg" />
        </div> 
      </Slider>
    </div>
  );
}

    

  


export default SliderComp