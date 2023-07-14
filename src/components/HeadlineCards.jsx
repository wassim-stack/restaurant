import React from 'react'

export const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='rouded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'> 
             <p className='fond-bold text-2xl px-2 pt-4'>Sun's !out</p>
             <p className='px-2'>Through 8/26</p>  
             <button className='border-white bg-white mx-2 text-black absolute bottom-4'>Order now</button> 
            </div>
            {/* Img */}
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div className='rouded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'> 
             <p className='fond-bold text-2xl px-2 pt-4'>Sun's !out</p>
             <p className='px-2'>Through 8/26</p>  
             <button className='border-white bg-white mx-2 text-black absolute bottom-4'>Order now</button> 
            </div>
            {/* Img */}
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1998920/pexels-photo-1998920.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div><div className='rouded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'> 
             <p className='fond-bold text-2xl px-2 pt-4'>Sun's !out</p>
             <p className='px-2'>Through 8/26</p>  
             <button className='border-white bg-white mx-2 text-black absolute bottom-4'>Order now</button> 
            </div>
            {/* Img */}
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
    </div>
  )
}
