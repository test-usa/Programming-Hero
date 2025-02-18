import React, { useState } from 'react'
import CommonContainer from '../../common/CommonContainer'
import { IoMenu } from "react-icons/io5";




const HelpDeskHeader = () => { 
  const [show,setShow] = useState<boolean>(false)

  return (
    <CommonContainer>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col'>
              <h1 className="font-bold font-rubik text-2xl uppercase text-colorBase text-transparent bg-clip-text bg-gradient-to-r from-[#cb43c2] to-[#0f16f1]">
                  <span className='whitespace-nowrap'>help desk</span>
              </h1>
              <p className="text-xs font-light capitalize text-colorBase text-transparent bg-clip-text bg-gradient-to-r from-[#cb43c2] to-[#0f16f1]">By Programming-Hero</p>
          </div>
          <div onClick={()=>setShow(true)}>
          <IoMenu className='text-4xl cursor-pointer' />
          </div>
        </div>
       
    </CommonContainer>
  )
}

export default HelpDeskHeader