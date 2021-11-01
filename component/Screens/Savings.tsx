import React from 'react'
import Header from '../dashboard-component/Header'

export default function Savings() {
    return (
        <div className='w-full h-full py-20 px-8' >
            <p style={{color: '#828282'}} className='font-Montserrat-Regular text-xs' >Savings Balance</p>
            <p style={{color: '#1D1D1D'}} className='font-Montserrat-Bold text-base mt-1' >₦ 92,323.34</p>
            <Header />
            <div className='w-full flex flex-row' >
                <div style={{width: '657.46px'}} className='mt-10' >
                <p style={{color: '#828282'}} className=' w-full font-Montserrat-SemiBold text-sm' >Fixed Savings</p>
                </div>
            </div>
        </div>
    )
}
