import { Input } from '@chakra-ui/input'
import React from 'react'
import { IoIosClose } from 'react-icons/io'

export default function WithdrawalMoney(props: any) {
    return (
        <div className=' w-560px bg-white px-6 lg:px-12 h-screen overflow-y-auto'  >
            <div className='w-full flex flex-row items-center py-10' >
                <p onClick={()=> props.close(-1)} style={{color:'#03C8DB'}} className='font-Montserrat-Bold text-sm cursor-pointer ' >Go back</p>  
                <div className='w-full flex flex-1' />
                <div onClick={()=> props.close(-1)} style={{backgroundColor: '#FAFAFA', borderRadius: '4px'}} className='w-auto h-auto cursor-pointer' >
                    <IoIosClose size='30px' />
                </div>
            </div>
            <p className=' font-Montserrat-Bold text-sm text-center' >Confirm Dollar Purchase</p>
            <div style={{backgroundColor:'#002343'}} className=' w-full flex py-12 my-10 justify-center rounded-lg items-center' >
                <p className='text-xs font-Montserrat-Regular text-white' >$</p>
                <p className='text-3xl font-Montserrat-Bold text-white ml-1' >90.00</p>
            </div>
            {props.share === 'true' ? 
                <div className='w-full px-12' >
                    <p style={{color: '#828282'}} className=' font-Montserrat-Bold mt-2 text-xs text-center' >Will be sent to</p>
                    <div style={{border: '1px solid #CCD3D9'}} className='w-full flex items-center mt-4 rounded-lg px-3 py-3' >
                        <div className='w-12 h-12 bg-yellow-200 rounded-xl' />
                        <div className='ml-2' >
                    <p style={{color: '#828282'}} className=' font-Montserrat-Bold text-sm' >{props.friends.name}</p> 
                    <p style={{color: '#828282'}} className=' font-Montserrat-Bold text-xs mt-1' >@armstokey</p>
                        </div>
                    </div>
                </div>
                :
                <div className='w-full' > 
                    <p style={{color: '#828282'}} className=' font-Montserrat-Bold mt-2 text-xs text-center' >You will Receive</p>
                    <p style={{color: '#03C8DB'}} className=' font-Montserrat-Medium mt-2 text-lg text-center' >₦56,000.00</p>
                </div>
            }
            <p style={{color: '#828282'}} className=' font-Montserrat-Medium text-sm text-center mt-8' >1108789782</p>
            <p style={{color: '#333333'}} className=' font-Montserrat-Bold text-base text-center mt-2' >MBA BRIGHT CHISOM</p>
            <p style={{color: '#4F4F4F'}} className=' font-Montserrat-Medium text-xs text-center mt-2' >First Bank</p> 
            <p style={{color: '#828282'}} className='text-xs font-Montserrat-Bold mt-6 text-center' >Enter Transaction Pin </p>
            <div className='w-full flex items-center justify-center mt-2' >
                <div className='w-40'>
                    <Input backgroundColor="#F6F6F6" />
                </div>
            </div> 
            <button onClick={()=> props.close(1)} style={{backgroundColor: '#002343'}} className='w-full rounded text-white py-3 my-12 text-sm font-Montserrat-Medium ' >{props.share !== 'true' ? 'PROCEED TO CONFIRMATION 🔒': `CREDIT ${props.friends.name}`}</button>
        </div>
    )
}
