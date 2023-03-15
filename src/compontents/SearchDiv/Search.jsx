import React from 'react'
import { GoSearch } from 'react-icons/go';
export const Search = () => {
  return (
    <div className='searchDiv grid gp-10 bg-darkerGrey rounded-[10px] p-[3rem]'>
      <form action=''>
        <div className='firstDiv flex  justify-between items-center 
        rounded-[8px] gap-[10px] bg-white p-5  shadow-black-500/50 shadow-lg'>

          <div className='flex gap-2 items-center w-[100%]'>
            <GoSearch className='icon text-[25px]' />
            <input type='text' className='bg-transparent text-green-800 focus:outline-none w-[100%]' placeholder='Search your job here...'></input>
          </div>
        </div>
      </form>
    </div>
  )
}
