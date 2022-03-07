import React from 'react'

export default function Footer() {
    return (
        <div style={{backgroundColor: '#002343'}} className='w-full flex flex-col justify-center text-white pt-28 px-6 lg:px-0 py-6' >
            <div  className=' grid mx-auto lg:grid-cols-4 grid-cols-2 gap-y-6 justify-center' > 
                    <div className='mx-6' > 
                        <p className='font-CircularStd-Bold' >Product</p>
                        <p className='font-CircularStd-Light mt-3' >Partnerships</p>
                        <p className='font-CircularStd-Light mt-1' >Transparency</p>
                        <p className='font-CircularStd-Light mt-1' >Press</p>
                        <p className='font-CircularStd-Light mt-1' >Join Our Team</p>
                        {/* <div className=' hidden lg:flex mt-8' >
                            <img src='/assets/images/NDIC.png' alt='second' />
                            <p className='font-CircularStd-Light ml-3' >NCID Insured</p>
                        </div> */}
                    </div>
                    <div className='mx-6' > 
                        <p className='font-CircularStd-Bold' >Resources</p>
                        <p className='font-CircularStd-Light mt-3' >FAQ’s</p>
                        <p className='font-CircularStd-Light mt-1' >Blog</p>
                        <p className='font-CircularStd-Light mt-1' >Terms & Conditions</p>
                        <p className='font-CircularStd-Light mt-1' >Privacy Policy</p> 
                    </div> 
                    <div className='mx-6' > 
                        <p className='font-CircularStd-Bold' >About us</p>
                        <p className='font-CircularStd-Light mt-3' >About us</p>
                        <p className='font-CircularStd-Light mt-1' >Contact us</p>
                        <p className='font-CircularStd-Light mt-1' >Hiring</p>
                    </div>
                    <div className='mx-6' > 
                        <p className='font-CircularStd-Bold' >Socials</p>
                        <p className='font-CircularStd-Light mt-3' >FB. Facebook</p>
                        <p className='font-CircularStd-Light mt-3' >IG. Instagram</p>
                        <p className='font-CircularStd-Light mt-3' >TW. Twitter</p>
                    </div> 
            </div> 
            <div className='flex mt-8 ml-6 lg:ml-80' >
                <img src='/assets/images/NDIC.png' alt='second' />
                <p className='font-CircularStd-Light ml-3' >NCID Insured</p>
            </div>

            <p className='font-CircularStd-Light mt-12 text-center' >copyright 2022 vaultafrica.</p>
        </div>
    )
}
