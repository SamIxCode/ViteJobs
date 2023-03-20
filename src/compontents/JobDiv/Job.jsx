import React from 'react'
import { BiTimeFive } from "react-icons/bi"
import { BiMap } from "react-icons/bi"
import { FaReact } from "react-icons/fa"


export const Job = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center 
      flex-wrap items-center py-10">

      <div className="group group/item singleJob w-[250px] p-[25px] bg-greyColor
        rounded-[10px] hover:bg-greenColor shadow-lg shadow-darkGrey-400/700 
        hover:shadow-lg hover:duration-500 transition duration-150 ease-in hover:ease-out">
          <span className='flex justify-between items-center gap-2'>
            <h1 className=' text-[16px] font-semibold text-textColor'>Web Develooper</h1>
            <span className='flex items-center gap-1 text-[15px] text-darkGrey'> <BiTimeFive /> Now </span>
          </span>
          <h6 className='text-darkGrey flex items-center gap-2 p-2'>
            <BiMap />Canada
          </h6>
          <p className='Posting Job border-t-2 p-2 hover:text-black'>Job Description
            Here you can say anything about your Job Posting!</p>

          <div className=' pb-3 companyDiv flex items-center gap-2 font-semibold text-darkGrey'>
            <FaReact /> React Corp.
          </div>

          <button className=' outline outline-2 outline-greenColor rounded-[10px] gap-2 p-3 block w-full font-semibold text-textColor bg-transparent group-hover:bg-whiteSmoke hover:duration-500 '>
            Apply Now
          </button>

          </div>
      </div>
    </div>
  )
}
