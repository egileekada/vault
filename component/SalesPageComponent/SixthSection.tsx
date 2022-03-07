import React from 'react'

export default function SixthSection() {
    return (
        <div style={{backgroundColor: '#002343'}} className='w-full pt-14 lg:pt-6 lg:px-0 px-6' > 
            <div className='w-full flex lg:flex-row flex-col' >
                <div className='w-full flex flex-col justify-center items-center' >
                    <div className='lg:w-486px w-full' > 
                        <p style={{color: '#FFF'}} className='text-3xl font-CircularStd-Medium' >What customers are saying</p>
                        <div className='relative' >
                        <p style={{color: '#FFF'}} className='text-lg mt-12 font-CircularStd-Medium' >Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                        <p style={{color: 'rgba(255, 255, 255, 0.8)'}} className=' mt-2 text-SM font-CircularStd-Light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae molestie et risus eleifend diam dignissim viverra. Faucibus turpis nibh sapien orci sagittis. Rhoncus posuere viverra a gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
                        <p style={{color: '#FFF'}} className='text-lg mt-4 font-CircularStd-Medium' >Ralhp Edwards, FInancial Manager CBN</p>
                        <div className='mt-6 hidden lg:flex'>  
                            <div style={{backgroundColor: '#011B33'}} className='w-10 h-10 cursor-pointer flex justify-center items-center rounded-full' >
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 11L1 6L6 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div> 
                            <div style={{backgroundColor: '#011B33'}} className='w-10 h-10 ml-6 cursor-pointer flex justify-center items-center rounded-full' >
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 11L6 6L1 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div> 
                        </div>
                    </div>
                </div> 
                <div className='w-full flex lg:flex-row flex-col justify-center items-center py-8' >
                    <img src='/assets/images/SixthImage.png' alt='second' />
                    <div className='mt-6 lg:hidden flex'>  
                        <div style={{backgroundColor: '#011B33'}} className='w-10 h-10 cursor-pointer flex justify-center items-center rounded-full' >
                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 11L1 6L6 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div> 
                        <div style={{backgroundColor: '#011B33'}} className='w-10 h-10 ml-6 cursor-pointer flex justify-center items-center rounded-full' >
                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 11L6 6L1 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div> 
                    </div>
                </div> 
            </div>
            <div className='w-full flex lg:flex-row flex-col pb-10 lg:pb-0' >
                <div className='w-full flex flex-col justify-center items-center' >
                    <div className='lg:w-486px w-full' > 
                        <p style={{color: '#FFF'}} className='text-sm font-CircularStd-Light' >Try Vault Africa Now</p> 
                        <p style={{color: '#FFF'}} className='text-3xl font-CircularStd-Bold my-1' >Create an account for free.</p> 
                        <p style={{color: '#FFF'}} className='text-sm font-CircularStd-Light' >it onlt takes few minutes to start enjoying the benefit that comes with using vaultafrica</p>
                        <button style={{color: '#002343'}} className='font-CircularStd-Medium text-sm py-3 px-8 bg-white rounded-md mt-6' >Get Vaultafrica</button>
                    </div>
                </div> 
                <div className='w-full flex justify-center items-center pt-20' >
                    <img src='/assets/images/SixthImage2.png' alt='second' />
                </div> 
            </div>
        </div>
    )
}
