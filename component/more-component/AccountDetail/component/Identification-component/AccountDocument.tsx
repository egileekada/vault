import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io'

export default function AccountDocument(props: any) {
    return (
        <div className='w-full' >
            <div className='flex mt-6 items-center' >
                <div  className=' rounded-full mr-2 ' >  
                    <img src='/assets/images/bullet.png' className='w-6' />
                </div>
                <p className='font-Montserrat-Medium text-sm ' >Upload a valid primary ID card</p>
            </div>
            <div className='flex mt-5 items-center' >
                <div  className=' rounded-full mr-2 ' >  
                    <img src='/assets/images/bullet.png' className='w-6' />
                </div>
                <p className='font-Montserrat-Medium text-sm ' >Means of address verification (utility bills, etc)</p>
            </div>
            <div className='flex mt-5 items-center' >
                <div  className=' rounded-full mr-2 ' >  
                    <img src='/assets/images/bullet.png' className='w-6' />
                </div>
                <p className='font-Montserrat-Medium text-sm ' >Statement of account for past 3 months</p>
            </div>
                <div className='w-16 rounded-2xl h-16 my-10 bg-yellow-300' >

                </div> 
                <button onClick={()=> props.close(3)} style={{backgroundColor: '#002343'}} className='w-full rounded text-white py-3  text-sm font-Montserrat-Medium ' >Submit</button>
        </div>
    )
}
