import React from 'react'
import { IoIosClose } from 'react-icons/io'

export default function TransactionInformation(props: any) {
    return (
        <div className='  w-full lg:w-560px bg-white h-screen'  >
            <div className='w-full flex flex-row items-center px-8 py-10' > 
                <p onClick={()=> props.close(false)} style={{color:'#03C8DB'}} className='font-Montserrat-Bold text-sm cursor-pointer ' >Go back</p>
                <div className='w-full flex flex-1' />
                <div onClick={()=> props.close(false)} style={{backgroundColor: '#FAFAFA', borderRadius: '4px'}} className='w-auto h-auto cursor-pointer' >
                    <IoIosClose size='30px' />
                </div>
            </div>
            <p className='text-center font-Inter-Medium text-sm' >On jul 14, 1:00AM</p>
            <div className='w-full flex-row flex justify-center mt-4 px-10' >
                <div className='w-auto mx-4' >
                    <div className='w-full my-8' >
                        <p className='text-xs font-Montserrat-Regular' >Amount</p>
                        <p style={{color:'#03C8DB'}} className='text-sm font-Montserrat-Bold mt-2' >₦200,000.00</p>
                    </div>
                    <div className='w-full my-8' >
                        <p className='text-xs font-Montserrat-Regular' >Card Name</p>
                        <p style={{color:'#03C8DB'}} className='text-sm font-Montserrat-Bold mt-2' >MBA BRIGHT</p>
                    </div>
                    <div className='w-full my-8' >
                        <p className='text-xs font-Montserrat-Regular' >Payment method</p>
                        <p style={{color:'#03C8DB'}} className='text-sm font-Montserrat-Bold mt-2' >Money Received</p>
                    </div>
                </div>
                <div className='w-auto mx-4' >
                    <div className='w-full my-8' >
                        <p className='text-xs font-Montserrat-Regular' >Service fee</p>
                        <p style={{color:'#03C8DB'}} className='text-sm font-Montserrat-Bold mt-2' >₦0.00</p>
                    </div>
                    <div className='w-full my-8' >
                        <p className='text-xs font-Montserrat-Regular' >Card Type</p>
                        <p style={{color:'#03C8DB'}} className='text-sm font-Montserrat-Bold mt-2' >VISA</p>
                    </div>
                    <div className='w-full my-8' >
                        <p className='text-xs font-Montserrat-Regular' >Transaction Ref</p>
                        <p style={{color:'#03C8DB'}} className='text-sm font-Montserrat-Bold mt-2' >098765FG-3567</p>
                    </div>
                </div>
                <div className='w-auto mx-4' >
                    <div className='w-full my-8' >
                        <p className='text-xs font-Montserrat-Regular' >To</p>
                        <p style={{color:'#03C8DB'}} className='text-sm font-Montserrat-Bold mt-2' >Fixed Savings</p>
                    </div>
                    <div className='w-full my-8' >
                        <p className='text-xs font-Montserrat-Regular' >Card Digit</p>
                        <p style={{color:'#03C8DB'}} className='text-sm font-Montserrat-Bold mt-2' >.... .... .... 7683</p>
                    </div> 
                </div>
            </div>
        </div>
    )
}
