import React from 'react'
import ShowBooks from '../home/ShowBooks'


const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center' >
      <div className='flex w-full md: flex-row justify-between items-center gap-12 py-40'>
    
            {/* left side*/}
            <div className='left'>
              <div className='md:w-1/2 space-y-8 h-full left'>
              <h2 className='text-5xl font-bold text-black'>Buy and Sell Your Books <span className='text-blue-800 text-5xl'>
                for the Best Quality
              </span>
              </h2>
              <p className='md:w-4/5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aliquam fuga debitis. Eius eligendi, alias ea architecto odio dolorum placeat porro incidunt nesciunt aperiam veritatis quo atque? Aperiam, totam aut?</p>

                <div>
                  <input type="search" name="search" placeholder="Search a Book....." className='py-2 px-2 outline-none'/>
                
                  <button className='px-6 py-2 bg-blue-600 text-white font-medium hover:bg-black duration-200'>Submit</button>
                </div>
              </div>
            </div>
        
            {/* right side*/}
            <div className='right'>
              <ShowBooks></ShowBooks>
            </div>


      </div>
    </div>
  )
}

export default Banner