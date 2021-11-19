import { Input } from '@chakra-ui/input'
import React from 'react'
import { IoIosClose } from 'react-icons/io'

export default function ConfirmTransaction(props: any) {
    return (
        <div className=' w-full lg:w-560px bg-white px-6 lg:px-12 h-screen overflow-y-auto'  >
            <div className='w-full flex flex-row items-center py-10' >
                <p onClick={()=> props.close(0)} style={{color:'#03C8DB'}} className='font-Montserrat-Bold text-sm cursor-pointer ' >Go back</p>  
                <div className='w-full flex flex-1' />
                <div onClick={()=> props.close(0)} style={{backgroundColor: '#FAFAFA', borderRadius: '4px'}} className='w-auto h-auto cursor-pointer' >
                    <IoIosClose size='30px' />
                </div>
            </div>
            <p className='font-Montserrat-Bold text-base text-center' >Confirm Transaction</p> 
            <div className='w-full mt-4' >
                <div style={{backgroundColor: '#F3F3F3'}} className='w-full flex p-1 rounded' >
                    <p className='font-Montserrat-Medium text-sm' >Name</p>
                    <div className='w-full flex flex-1' />
                    <p className='font-Montserrat-Medium text-sm' >Abeg keep this m...</p>
                </div>
                <div className='w-full flex p-1 rounded' >
                    <p className='font-Montserrat-Medium text-sm' >Amount saved</p>
                    <div className='w-full flex flex-1' />
                    <p className='font-Montserrat-Medium text-sm' >₦100,000.00</p>
                </div>
                <div style={{backgroundColor: '#F3F3F3'}} className='w-full flex p-1 rounded' >
                    <p className='font-Montserrat-Medium text-sm' >Interest earned</p>
                    <div className='w-full flex flex-1' />
                    <p className='font-Montserrat-Medium text-sm' >₦0.00</p>
                </div>
                <div className='w-full flex p-1 rounded' >
                    <p className='font-Montserrat-Medium text-sm' >Amount to withdraw</p>
                    <div className='w-full flex flex-1' />
                    <p className='font-Montserrat-Medium text-sm' >₦10,000.00</p>
                </div>
                <div style={{backgroundColor: '#F3F3F3'}} className='w-full flex p-1 rounded' >
                    <p className='font-Montserrat-Medium text-sm' >Penalty</p>
                    <div className='w-full flex flex-1' />
                    <p className='font-Montserrat-Medium text-sm' >₦0.00</p>
                </div>
                <div className='w-full flex p-1 rounded' >
                    <p className='font-Montserrat-Medium text-sm' >New Balance</p>
                    <div className='w-full flex flex-1' />
                    <p className='font-Montserrat-Medium text-sm' >₦90,000.00</p>
                </div>
                <div style={{backgroundColor: '#F3F3F3'}} className='w-full flex p-1 rounded' >
                    <p className='font-Montserrat-Medium text-sm' >New Completion Date</p>
                    <div className='w-full flex flex-1' />
                    <p className='font-Montserrat-Medium text-sm' >07-09-2021</p>
                </div>
            </div>
            <div className='w-full flex mt-8' >
                <div className='w-full' >
                    <p style={{color: '#828282'}} className='text-sm font-Montserrat-Bold' >SERVICE FEE</p>
                    <p className='text-sm mt-2 font-Montserrat-Medium' >₦ 0.01</p>
                </div>
                <div className='w-full' >
                    <p style={{color: '#828282'}} className='text-sm font-Montserrat-Bold' >TRANSACTION REF</p>
                    <p className='text-sm mt-2 font-Montserrat-Medium' >KJDNJUDN-77900</p>
                </div>
                <div className='w-full ml-4' >
                    <p style={{color: '#828282'}} className='text-sm font-Montserrat-Bold' >BANK</p>
                    <p className='text-sm mt-2 font-Montserrat-Medium' >FIRST BANK</p>
                </div>
            </div>
            <div className='w-full flex mt-8' >
                <div className='w-full' >
                    <p style={{color: '#828282'}} className='text-sm font-Montserrat-Bold' >ACCOUNT NUMBER</p>
                    <p className='text-sm mt-2 font-Montserrat-Medium' >1108789782</p>
                </div>
                <div className='w-full' >
                    <p style={{color: '#828282'}} className='text-sm font-Montserrat-Bold' >ACCOUNT NAME</p>
                    <p className='text-sm mt-2 font-Montserrat-Medium' >MBA BRIGHT CHISOM</p>
                </div> 
            </div>
            <p style={{color: '#828282'}} className='text-xs font-Montserrat-Bold mt-6 text-center' >Enter Transaction Pin </p>
            <div className='w-full flex items-center justify-center mt-2' >
                <div className='w-40'>
                    <Input backgroundColor="#F6F6F6" />
                </div>
            </div> 
            <div className='w-full flex my-8 lg:px-12' >
                <button style={{border: '1px solid #002343', color: '#002343', borderRadius: '2px'}}  className=' w-full text-white font-Montserrat-Medium text-sm h-10 items-center justify-center mr-4' >CANCEL</button> 
                <button onClick={()=> {props.joint ? props.close(6):props.withdraw ? props.close(8):props.close(5)}} style={{backgroundColor: '#002343', borderRadius: '2px'}}  className=' w-full text-white font-Montserrat-Medium text-sm h-10 items-center justify-center ml-4' >COMPLETE</button>
            </div>
        </div>
    )
}
