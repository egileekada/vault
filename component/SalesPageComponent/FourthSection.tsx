import React from 'react'

export default function FourthSection() {
    return (
        <div className='w-full flex lg:flex-row flex-col px-6 lg:px-0 mt-12 lg:mt-0 py-6' >
            <div className='w-full flex flex-col justify-center items-center' >
                <div className='lg:w-486px w-full' >
                    <div style={{borderLeftWidth: '5px', borderColor: '#017DC3'}} className='pl-4 py-2' > 
                        <p style={{color: '#017DC3'}} className='text-2xl font-CircularStd-Medium' >Reach your financial Goals.</p>
                        <p style={{color: '#727272'}} className=' mt-4 text-SM font-CircularStd-Light'>We’ve gone the extra mile, to ensure that all investment are vetted, and
                            with a minimum investment amount of just 10,000 it’s now possible for
                            anyone to get started on their investment Journey</p>
                        <p style={{color: '#727272'}} className=' mt-2 text-SM font-CircularStd-Light'>Grow your money confidently by investing in pre-vetted, insured and verified
                            assets investment opportunities. From mutual market funds to real estate to
                            agriculture. 
                            Up To 25% Returns (jpeg of app screen by the side to explain</p>
                    </div>
                    <p className='text-xl ml-4 font-CircularStd-Medium mt-6' >Fractional investment reimagined</p>
                    <p style={{color: '#727272'}} className=' ml-4 mt-4 text-SM font-CircularStd-Light'>Mutual Fund : UP to 24% interest</p>
                    <p style={{color: '#727272'}} className=' mt-1 ml-4 text-SM font-CircularStd-Light'>Real Estate : UP to 20% interest</p>
                    <p style={{color: '#727272'}} className=' mt-1 ml-4 text-SM font-CircularStd-Light'>Agriculture : UP TO 18% Interest</p>
                    <p style={{color: '#727272'}} className=' mt-1 ml-4 text-SM font-CircularStd-Light'>Stock/shares : Coming soon</p> 
                </div>
            </div> 
            <div className='w-full flex justify-center items-center py-20' >
                <img src='/assets/images/FourthImage.png' alt='second' />
            </div> 
        </div>
    )
}
