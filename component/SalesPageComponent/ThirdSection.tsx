import React from 'react'

export default function ThirdSection() {
    return (
        <div style={{backgroundColor: '#002343'}} className='w-full flex py-36 text-white' >
            <div className='w-full flex justify-center ' >
                <div  style={{width: '470px'}} > 
                    <img className='w-20 h-20' src='/assets/images/third.png' alt='second' /> 
                    <p className='text-xl font-CircularStd-Medium mt-10' >Here, You're in charge: Save and invest on your own terms</p>
                    <p style={{color: 'rgba(255, 255, 255, 0.8)'}} className=' mt-2 text-SM font-CircularStd-Light'>No restrictions, start small, grow big. Starting with N1,000 or N10,000,000 ? no problem, we have just the plan that’ll work for you.</p>
                </div>
            </div> 
            <div className='w-full flex justify-center' >
                <div  style={{width: '470px'}} >
                    <img className='w-20 h-20' src='/assets/images/third1.png' alt='second1' />
                    <p className='text-xl font-CircularStd-Medium mt-10' >Security is our priority : Bank Level Security</p>
                    <p style={{color: 'rgba(255, 255, 255, 0.8)'}} className=' mt-2 text-SM font-CircularStd-Light'>Vault Africa uses the highest levels of Internet Security available. To ensure that your
information is completely protected from fraud, we use 256 bits SSL security
encryption. Additionally, our payment processors are PCI-DSS compliant ensuring
security of your data. All cards and bank data are encrypted to prevent unauthorised
access.</p>
                </div>
            </div>
        </div>
    )
}
