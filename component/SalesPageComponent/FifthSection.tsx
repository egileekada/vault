import React from 'react'

export default function FifthSection() {
    return (
        <div className='w-full flex py-6' >
            <div className='w-full flex justify-center items-center py-20' >
                <img src='/assets/images/FifthImage.png' alt='second' />
            </div> 
            <div className='w-full flex flex-col justify-center items-center' >
                <div style={{width: '486px'}} >
                    <div style={{borderLeftWidth: '5px', borderColor: '#017DC3'}} className='pl-4 py-2' > 
                        <p style={{color: '#017DC3'}} className='text-2xl font-CircularStd-Medium' >Meet life Emergencies</p>
                        <p style={{color: '#727272'}} className=' mt-4 text-SM font-CircularStd-Light'>Get Quick loans to meet Emergencies when they show up with friendly rates
                            on Vault Africa. In need of a loan. No paper works, handled completely online,
                            no collateral needed. Apply and get approved once you meet requirements.</p>
                    </div>
                    <p className='text-xl ml-4 font-CircularStd-Medium mt-6' >Protect the people and things that matters most</p>
                    <p style={{color: '#727272'}} className=' ml-4 mt-2 text-SM font-CircularStd-Light'>Life insurance, Educational Insurance, Health Insurance and more. Access your insurance portfolio or Get insured on Vault Africa</p> 
                    <p className='text-xl ml-4 font-CircularStd-Medium mt-6' >Budget- coming soon</p>
                    <p style={{color: '#727272'}} className=' ml-4 mt-2 text-SM font-CircularStd-Light'>Plan ahead, Get alerts, cut off unnecessary expenses</p>
                </div>
            </div> 
        </div>
    )
}
