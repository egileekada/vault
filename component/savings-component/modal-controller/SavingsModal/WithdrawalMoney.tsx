import { Input } from '@chakra-ui/input'
import React from 'react'
import { IoIosClose } from 'react-icons/io'

export default function WithdrawalMoney(props: any) {
    return (
        <div className=' w-full lg:w-560px bg-white px-12 h-screen overflow-y-auto'  >
            <div className='w-full flex flex-row items-center py-10' >
                <p onClick={()=> props.close(0)} style={{color:'#03C8DB'}} className='font-Montserrat-Bold text-sm cursor-pointer ' >Go back</p>  
                <div className='w-full flex flex-1' />
                <div onClick={()=> props.close(0)} style={{backgroundColor: '#FAFAFA', borderRadius: '4px'}} className='w-auto h-auto cursor-pointer' >
                    <IoIosClose size='30px' />
                </div>
            </div>
            <p className='font-Montserrat-Bold text-base' >Withdraw Money 💰</p> 
            <p className='font-Montserrat-Medium text-sm mt-1' >Withdraw money to your local account</p>
            <p className='font-Montserrat-Medium mt-8 text-xs' >Amount</p>
            <div className='w-full flex items-center pt-1' >
                <Input placeholder='0.00' backgroundColor='#E0E0E0' opacity='0.3px' />
                <p className='font-Montserrat-Medium w-20 ml-6 text-sm'>(₦) Naira</p>
            </div>  
            <p style={{color: '#828282'}} className=' font-Montserrat-Medium text-sm text-center mt-8' >1108789782</p>
            <p style={{color: '#333333'}} className=' font-Montserrat-Bold text-base text-center mt-2' >MBA BRIGHT CHISOM</p>
            <p style={{color: '#4F4F4F'}} className=' font-Montserrat-Medium text-xs text-center mt-2' >First Bank</p>
                <button onClick={()=> {props.withdraw ? props.close(7):props.close(4)}} style={{backgroundColor: '#002343'}} className='w-full rounded text-white py-3 mt-12 text-sm font-Montserrat-Medium ' >PROCEED TO CONFIRMATION 🔒</button>
        </div>
    )
}
