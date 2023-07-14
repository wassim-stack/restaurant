import React, { useState } from 'react'
import { categories } from '../data/data'

export const Category = () => {
    const [categorie, setCategorie] = useState(categories)

  return (
    <div className='max-w-[1640px] px-4 py-12 mx-auto'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated menu Items</h1>
        {/* Categoties */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
            {categorie.map((item,index)=>(
                <div key={index} className='bg-gray-100 rounded-lg p-4 flex justify-between items-center'>
                    <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                    <img src={item.image} alt={item.name} className='w-20'/>
                </div>
            ))}
        </div>
    </div>
  )
}
