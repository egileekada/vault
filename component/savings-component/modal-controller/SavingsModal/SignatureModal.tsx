import React from 'react'
import { IoIosClose } from 'react-icons/io'

export default function SignatureModal(props: any) {
    return (
        <div className=' w-full lg:w-560px bg-white px-12 h-screen overflow-y-auto'  >
            <div className='w-full flex flex-row items-center py-10' >
                <p onClick={()=> props.close(0)} style={{color:'#03C8DB'}} className='font-Montserrat-Bold text-sm cursor-pointer ' >Go back</p>  
                <div className='w-full flex flex-1' />
                <div onClick={()=> props.close(0)} style={{backgroundColor: '#FAFAFA', borderRadius: '4px'}} className='w-auto h-auto cursor-pointer' >
                    <IoIosClose size='30px' />
                </div>
            </div>
            <p className='font-Montserrat-Bold text-base text-center' >Confirm Transaction</p> 
            <p className='font-Montserrat-Medium text-sm mt-14 text-center' >Withrawal Signatures</p> 
            <p style={{color: '#03C8DB'}} className='font-Montserrat-Bold text-base mt-6 text-center' >1 of 6</p> 
            <p className='font-Montserrat-Medium text-sm mt-12 text-center' >Every member of the group has to approve this withdraw. You will be credited 48hrs after this action is approved by every participant.</p> 
        
            <p onClick={()=> props.close(0)} style={{color: '#EB5757'}} className='font-Montserrat-Bold text-base mt-14 cursor-pointer text-center' >Cancel withdrawal</p> 
        </div>
    )
}
