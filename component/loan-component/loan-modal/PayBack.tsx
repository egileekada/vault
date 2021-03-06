import { Input } from '@chakra-ui/input'
import React from 'react'
import { IoIosClose } from 'react-icons/io'

export default function PayBack(props: any) {
    return (
        <div className=' w-full lg:w-560px bg-white h-screen px-6 lg:px-8  overflow-y-auto font-Montserrat-Regular '  >
            <div className='w-full flex flex-row items-center py-10' > 
                <p onClick={()=> props.close(-1)} style={{color:'#03C8DB'}} className='font-Montserrat-Bold text-sm cursor-pointer ' >Go back</p>
                <div className='w-full flex flex-1' />
                <div onClick={()=> props.close(-1)} style={{backgroundColor: '#FAFAFA', borderRadius: '4px'}} className='w-auto h-auto cursor-pointer' >
                    <IoIosClose size='30px' />
                </div>
            </div> 
            <div className='w-full ' >
                <p className=' font-Montserrat-Bold text-sm text-center' >Pay Back</p>
            </div> 
            <div className='w-full flex items-center my-8' >
                <img src='/assets/images/Eligible.png'  className='w-12' />
                <div className='w-full flex flex-1' />
                <p style={{color: '#828282'}} className=' font-Montserrat-Medium text-sm text-center' >Amt owed: N50,000.00</p>
            </div>
            <p className=' font-Montserrat-Bold text-sm mb-2 mt-10' >Amount to pay(N)</p> 
            <Input backgroundColor='#f6f6f6' fontSize='sm' placeholder='0.00' /> 
            <button onClick={()=> props.close(3)} style={{backgroundColor: '#002343', borderRadius: '2px'}}  className=' w-full mt-16 text-white font-Montserrat-Bold mb-8 text-sm h-12 items-center justify-center' >Next</button>
        </div>
    )
}
