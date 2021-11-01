import React from 'react'

export default function Header() {
    return (
        <div style={{border: '1px solid #CCD3D9', borderRadius: '8px', }} className='w-full flex p-8 flex-row mt-10' >
            <div className='w-full flex flex-col ' >
                <p style={{color: '#828282'}} className='font-Montserrat-Regular text-xs' >Total Savings</p>
                <p style={{color: '#03C8DB'}} className='font-Montserrat-Bold text-base mt-2' >₦ 250,909.00</p>
            </div>
            <div className='w-full flex flex-col ' >
                <p style={{color: '#828282'}} className='font-Montserrat-Regular text-xs' >You owe</p>
                <p style={{color: '#002343'}} className='font-Montserrat-Bold text-base mt-2' >₦ 92,909.00</p>
            </div>
            <div className='w-full flex flex-col ' >
                <p style={{color: '#828282'}} className='font-Montserrat-Regular text-xs' >Dollar safe Balance</p>
                <p style={{color: '#753FF6'}} className='font-Montserrat-Bold text-base mt-2' >$ 909.00</p>
            </div>
            <div className='w-full flex flex-col ' >
                <p style={{color: '#828282'}} className='font-Montserrat-Regular text-xs' >Total Investment</p>
                <p style={{color: '#C10101'}} className='font-Montserrat-Bold text-base mt-2' >₦ 22,909.00</p>
            </div>
            <div className='w-full flex flex-col ' >
                <p style={{color: '#828282'}} className='font-Montserrat-Regular text-xs' >Property(ies) Insured</p>
                <p style={{color: '#D8A903'}} className='font-Montserrat-Bold text-base mt-2' >10</p>
            </div>
        </div>
    )
}
