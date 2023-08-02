import React from 'react'

const Sorting = ({setSort}) => {
  return (
    <div className='bg-gray-100 my-10 p-5 flex items-center justify-end'>
      <select onChange={e => setSort (e.target.value)} className='bg-gray-300 p-2' name="" id="">
        <option disabled value="">Seçiniz</option>
        <option value="inc">Fiyata Göre Artan</option>
        <option value="dec">Fiyata Göre Azalan</option>
      </select>
    </div>
  )
}

export default Sorting