import React from 'react'

export const Footer = () => {
  return (
    <div className='footer p-20 mb-4 bg-greenColor rounded-[10px] gap-2 grid grid-cols-5 m-auto items-center justify-center'>
      <div>
        <div className="logoDiv ">
           <h1 className='logo text-[25px] text-whiteSmoke pb-6'><strong>Jobs</strong>Search</h1>   
        </div>
        <p className='text-whiteSmoke pb-[13px] opacity-70 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, obcaecati aspernatur corporis quod, delectus dicta a amet minus explicabo in quia quis voluptatum fuga dolores autem quam minima impedit sapiente?</p>
      </div>
      <div className='grid'>
        <span className='divTitle text-[20px] font-semibold pb-6 text-whiteSmoke'>
          Company
        </span>
        <div className='grid gaps-3'>
          <li className=' text-whiteSmoke opacity-70 hover:opacity-100'>About Us</li>
          <li className=' text-whiteSmoke opacity-70 hover:opacity-100'>Features</li>
          <li className=' text-whiteSmoke opacity-70 hover:opacity-100'>Contant</li>

        </div>
      </div>


    </div>
  )
}
