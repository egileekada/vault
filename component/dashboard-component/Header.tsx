import React from 'react'

export default function Header() {
    return (
        <div className='lg:w-full w-auto dashboardslide flex overflow-x-auto m-4 lg:p-8 mt-10'>
            <div style={{border: '1px solid #CCD3D9', borderRadius: '8px', }} className='lg:w-full w-auto flex p-8 flex-row' >
                <div className=' items-center justify-center lg:w-full w-auto  flex flex-col ' >
                    <p style={{color: '#828282'}} className='w-40 font-Montserrat-Regular text-xs' >Total Savings</p>
                    <p style={{color: '#03C8DB'}} className='w-40 font-Montserrat-Bold text-base mt-2' >₦ 250,909.00</p>
                </div>
                <div className=' items-center justify-center lg:w-full w-auto flex flex-col ' >
                    <p style={{color: '#828282'}} className='w-40 font-Montserrat-Regular text-xs' >You owe</p>
                    <p style={{color: '#002343'}} className='w-40 font-Montserrat-Bold text-base mt-2' >₦ 92,909.00</p>
                </div>
                <div className=' items-center justify-center lg:w-full w-auto flex flex-col ' >
                    <p style={{color: '#828282'}} className='w-40 font-Montserrat-Regular text-xs' >Dollar safe Balance</p>
                    <p style={{color: '#753FF6'}} className='w-40 font-Montserrat-Bold text-base mt-2' >$ 909.00</p>
                </div>
                <div className=' items-center justify-center lg:w-full w-auto  flex flex-col ' >
                    <p style={{color: '#828282'}} className='w-40 font-Montserrat-Regular text-xs' >Total Investment</p>
                    <p style={{color: '#C10101'}} className='w-40 font-Montserrat-Bold text-base mt-2' >₦ 22,909.00</p>
                </div>
                <div className=' items-center justify-center lg:w-full w-auto  flex flex-col ' >
                    <p style={{color: '#828282'}} className='w-40 font-Montserrat-Regular text-xs' >Property(ies) Insured</p>
                    <p style={{color: '#D8A903'}} className='w-40 font-Montserrat-Bold text-base mt-2' >10</p>
                </div>
            </div>
        </div>
    )
}
