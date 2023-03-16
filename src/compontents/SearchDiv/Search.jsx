import React from 'react'
import { GoSearch } from 'react-icons/go';
import { AiOutlineCloseCircle } from 'react-icons/ai';
export const Search = () => {
  return (
    <div className='searchDiv grid gap-5 bg-darkerGrey rounded-[10px] p-[3rem]'>
      <form action=''>
        <div className='firstDiv flex  justify-between items-center 
        rounded-[8px] gap-[10px] bg-white p-5  shadow-black-500/50 shadow-lg'>

          <div className='flex gap-1 items-center w-[100%]'>
            <GoSearch className='icon text-[25px]' />
            <input type='text' className='bg-transparent text-green-800 focus:outline-none w-[100%]' placeholder='Search your job here...'></input>
            <AiOutlineCloseCircle className='text-[30px] text-greyColor hover:text-darkerGrey icon' />     
          </div>
          <div className='flex gap-1 items-center w-[100%]'>
            <GoSearch className='icon text-[25px]' />
            <input type='text' className='bg-transparent text-green-800 focus:outline-none w-[100%]' placeholder='Location'></input>
            <AiOutlineCloseCircle className='text-[30px] text-greyColor hover:text-darkerGrey icon' />     
          </div>
          <button className='bg-greenColor h-full p-5 px-10 rounded-[10px] text-black hover:shadow-black-500/50 hover:shadow-lg'>search</button>          
        </div>
      </form>

      <div className='secDiv flex items-center gap-5 justify-center'>
      <div className='single Search flex items-center gap-2'>
          <label htmlFor='relevance' className='text-darkGrey font-semibold'>
            Sort by:
            <select name='' id='relevance' className='bg-whiteSmoke rounded-[3px] px-4 py-1'>
            <option value="">Relevance</option>
            <option value="">Start With</option>
            <option value="">Contains</option>
            </select>
          </label>
        </div>
        <div className='single Search flex items-center gap-2'>
          <label htmlFor='relevance' className='text-darkGrey font-semibold'>
            Sort by:
            <select name='' id='relevance' className='bg-whiteSmoke rounded-[3px] px-4 py-1'>
            <option value="">Relevance</option>
            <option value="">Start With</option>
            <option value="">Contains</option>
            </select>
          </label>
        </div>
        <div className='single Search flex items-center gap-2'>
          <label htmlFor='relevance' className='text-darkGrey font-semibold'>
            Sort by:
            <select name='' id='relevance' className='bg-whiteSmoke rounded-[3px] px-4 py-1'>
            <option value="">Relevance</option>
            <option value="">Start With</option>
            <option value="">Contains</option>
            </select>
          </label>
        </div>

      </div>
      
    </div>
  )
}
