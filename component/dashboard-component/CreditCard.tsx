import React from 'react'

export default function CreditCard() {
    return (
        <div className='w-full flex flex-row  items-center' >
            <div style={{width: '270px', height: '180px', backgroundColor: '#6691FF'}} className='mt-6 ml-2 relative rounded-2xl p-6' > 
                <div style={{width: '15px', height: '153px', backgroundColor: '#FF9979', top: '13.5px', right: '-15px', borderTopRightRadius: '16px', borderBottomRightRadius: '16px'}} className=' absolute rounded-tr-2xl rounded-br-2xl' />
                <div style={{width: '15px', height: '127px', backgroundColor: '#FFE27C', top: '27px', right: '-30px', borderTopRightRadius: '16px', borderBottomRightRadius: '16px'}} className=' absolute rounded-tr-2xl rounded-br-2xl' />
                <div className='w-full flex' >
                    <div className='w-full flex flex-1' />
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.8835 6.31201C12.8835 6.31201 12.5215 10.802 12.3115 12.6933C12.2115 13.5967 11.6535 14.126 10.7395 14.1427C9.00016 14.174 7.25883 14.176 5.52019 14.1393C4.64085 14.1213 4.09219 13.5853 3.99419 12.698C3.78285 10.79 3.42285 6.31201 3.42285 6.31201" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.8053 4.15967H2.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.6274 4.15998C11.1041 4.15998 10.6534 3.78998 10.5507 3.27732L10.3887 2.46665C10.2887 2.09265 9.95006 1.83398 9.56406 1.83398H6.74206C6.35604 1.83398 6.01738 2.09265 5.91738 2.46665L5.75538 3.27732C5.65271 3.78998 5.20204 4.15998 4.67871 4.15998" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div> 
                <p style={{color: 'white'}} className=' w-32 font-Montserrat-Medium text-sm' >Mba Bright Chisom</p>
                <p style={{color: 'white'}} className=' w-32 font-Montserrat-Medium text-sm' >**** **** **** 9090</p>
                <div className=' w-full mt-10 flex flex-row items-center ' > 
                    <p style={{color: 'white'}} className=' w-32 font-Montserrat-Medium text-sm' >09/25</p>
                    <div className='w-full flex flex-1' /> 
                        <img src='/assets/images/mastercard.png' className='w-8' /> 
                </div>
            </div>
            <div className='w-full flex flex-1' />
            <div style={{width: '55px', height: '132px'}} className='rounded-2xl ml-14 cursor-pointer mt-4 shadow-md flex justify-center items-center' >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="11.5" fill="white" stroke="#CCD3D9"/>
                    <path d="M12 12L12 18M12 6V12V6ZM12 12L18 12L12 12ZM12 12H6H12Z" stroke="#CCD3D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> 
            </div>
        </div>
    )
}
