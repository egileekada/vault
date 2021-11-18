import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Information() {
    return (
        <div style={{border: '1px solid #CCD3D9', borderRadius: '8px', }} className='w-full p-4 my-10' >
            <p style={{color: '#828282'}} className='text-xs font-Montserrat-Bold' >Let’s get to know more about you, Brightmac.</p>
            <div className='mt-2 w-full flex flex-col lg:flex-row' >
                <div className='w-full flex flex-col mr-2' > 
                    <div style={{border: '1px solid #CCD3D9', borderRadius: '8px', }} className='w-full my-2 h-11 flex items-center p-3' >
                        <p style={{color: '#002343'}} className='text-xs font-Montserrat-Regular' >Confirm Phone number</p>
                        <div className='w-full flex flex-1' />
                        <IoIosArrowRoundForward size='25px' className='cursor-pointer' />
                    </div>
                    <div style={{border: '1px solid #CCD3D9', borderRadius: '8px', }} className='w-full my-2 h-11 flex items-center p-3' >
                        <p style={{color: '#002343'}} className='text-xs font-Montserrat-Regular' >Add an identity card</p>
                        <div className='w-full flex flex-1' />
                        <IoIosArrowRoundForward size='25px' className='cursor-pointer' />
                    </div>
                </div>
                <div style={{border: '1px solid #CCD3D9', borderRadius: '8px', }} className='w-full h-11 flex mt-2 items-center p-3 lg:ml-2' >
                    <p style={{color: '#002343'}} className='text-xs font-Montserrat-Regular' >Add your BVN</p>
                        <div className='w-full flex flex-1' />
                        <IoIosArrowRoundForward size='25px' className='cursor-pointer' />
                </div>
            </div>
        </div>
    )
}
