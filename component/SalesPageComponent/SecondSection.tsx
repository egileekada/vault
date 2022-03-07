import React from 'react'

export default function SecondSection() {
    return (
        <div className='w-full flex lg:flex-row flex-col-reverse lg:px-0 px-6  py-20' >
            <div className='w-full flex justify-center items-center py-20' >
                <img src='/assets/images/SecondImage.png' alt='second' />
            </div> 
            <div className='w-full flex flex-col justify-center items-center' >
                <div className='lg:w-486px w-full' >
                    <p className='text-xl font-CircularStd-Medium' >Reach your financial Goals.</p>
                    <p style={{color: '#727272'}} className=' mt-2 text-SM font-CircularStd-Light'>Set achievable financial goals. We hold your hand in setting targets and
                        achieving them to grow. If it’s buying a new Car, laptop, building your dream home, educational certificate. Our goal is to help you get there.</p>
                    <p className='text-xl font-CircularStd-Medium mt-6' >Don’t settle for less. Get higher interest on your money. Up to 15% APY on savings. Different plans to suit your lifestyle.</p>
                    <p style={{color: '#727272'}} className=' mt-2 text-SM font-CircularStd-Light'>Set up automatic savings, Lock up funds for later, Start a fixed deposit, save with a friend or group and lots more.</p>
                </div>
            </div> 
        </div>
    )
}
