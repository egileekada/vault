import React from 'react'

export default function Footer() {
    return (
        <div style={{backgroundColor: '#002343'}} className='w-full text-white pt-28 py-6' >
            <div className='flex w-full justify-center' >
                <div className='mx-6' > 
                    <p className='font-CircularStd-Bold' >Product</p>
                    <p className='font-CircularStd-Light mt-3' >Partnerships</p>
                    <p className='font-CircularStd-Light mt-1' >Transparency</p>
                    <p className='font-CircularStd-Light mt-1' >Press</p>
                    <p className='font-CircularStd-Light mt-1' >Join Our Team</p>
                    <div className='flex mt-8' >
                        <img src='/assets/images/NDIC.png' alt='second' />
                        <p className='font-CircularStd-Light ml-3' >NCID Insured</p>
                    </div>
                </div>
                <div className='mx-6' > 
                    <p className='font-CircularStd-Bold' >Product</p>
                    <p className='font-CircularStd-Light mt-3' >FAQ’s</p>
                    <p className='font-CircularStd-Light mt-1' >Blog</p>
                    <p className='font-CircularStd-Light mt-1' >Terms & Conditions</p>
                    <p className='font-CircularStd-Light mt-1' >Privacy Policy</p> 
                </div>
                <div className='mx-6' > 
                    <p className='font-CircularStd-Bold' >Product</p>
                    <p className='font-CircularStd-Light mt-3' >About us</p>
                    <p className='font-CircularStd-Light mt-1' >Contact us</p>
                    <p className='font-CircularStd-Light mt-1' >Hiring</p>
                </div>
                <div className='mx-6' > 
                    <p className='font-CircularStd-Bold' >Product</p>
                    <p className='font-CircularStd-Light mt-3' >FB. Facebook</p>
                    <p className='font-CircularStd-Light mt-3' >IG. Instagram</p>
                    <p className='font-CircularStd-Light mt-3' >TW. Twitter</p>
                </div>
            </div>

            <p className='font-CircularStd-Light mt-12 text-center' >copyright 2022 vaultafrica.</p>
        </div>
    )
}
