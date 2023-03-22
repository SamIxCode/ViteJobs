import React from 'react'
import { SiSimplenote } from 'react-icons/si';

const Value = () => {
  return (
    <div className=' mb-2 mt-24'>
      <h1 className=' text-textColor text-[25px] py-8 pb-12 font-bold w-[400px] block'>The value that holds us true and to account</h1>
        <div className=" flex gap-10 justify-center 
      flex-wrap items-center py-10">

          <div className="singleGrid rounded-[10px] hover:bg-greyColor p-6  max-w-[400px] min-w-[50px]">
            <div className="flex items-center gap-3">
            <span className='font-semibold text-textColor text-[18px]'>
              Simplicity
            </span>
              
            </div>
            <p>
              Thinf being made beautiful and simple are at the heart of eveything we do.
            </p>

          </div>
          
          <div className="singleGrid rounded-[10px] hover:bg-greyColor p-6  max-w-[400px] min-w-[100px]">
            <div className="flex items-center gap-3">
            <span className='font-semibold text-textColor text-[18px]'>
              Your Value
            </span>
              
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime amet ad consectetur nesciunt nemo, voluptas eligendi dignissimos doloremque. Mollitia, sit nam? Unde numquam similique cumque a? Neque earum fugit itaque!
            </p>

          </div>
          
          <div className="singleGrid rounded-[10px] hover:bg-greyColor p-6  max-w-[400px] min-w-[100px]">
            <div className="flex items-center gap-3">
            <span className='font-semibold text-textColor text-[18px]'>
              Your another Value
            </span>
              
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex iusto adipisci esse repellendus. Nulla sit quidem vel atque accusamus. Odio veritatis ullam asperiores voluptatem dolor quo, perspiciatis vitae expedita nihil.
            </p>

          </div>
          

        </div>    
    </div>
  )
}

export default Value