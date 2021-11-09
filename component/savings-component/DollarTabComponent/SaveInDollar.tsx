import { Input } from '@chakra-ui/input'
import React from 'react'

export default function SaveInDollar() {
    return (
        <div className='w-full flex justify-center items-center ' >
            <div className=' w-96' > 
                <div className='w-full flex flex-row items-center' >
                    <img src='/assets/images/wallet.png' className='w-8 h-8' /> 
                    <div className='w-auto ml-3' >
                        <p className='font-Montserrat-SemiBold text-base' >Save in Dollar</p>
                        <p style={{color: '#828282'}} className='font-Montserrat-SemiBold text-sm' >Save your extra cash in dollars.</p>
                    </div> 
                </div>
                <p className='font-Montserrat-SemiBold mt-6 text-sm mb-2' >Enter the dollar amount you want to buy.</p>
                <Input backgroundColor='#F6F6F6' />
                <p style={{color: '#68DEE9'}} className='font-Montserrat-Bold text-sm text-center mt-12' >Buy @</p>
                <p style={{color: '#68DEE9'}} className='font-Montserrat-Bold text-xl text-center ' >560/$</p>
                <button style={{backgroundColor: '#002343'}} className='w-full rounded text-white py-3 mt-12 text-sm font-Montserrat-Medium ' >ACCEPT TERMS AND PROCEED</button>
                <p style={{color: '#2F80ED'}} className='font-Montserrat-Bold text-xs text-center mt-6 mb-8' >Terms of service</p>
            </div>
        </div>
    )
}
