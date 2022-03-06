import React from 'react' 

export default function HeroSection() {
    return (
        <div className='w-full flex items-center px-10' >
            <div className='w-full flex flex-col items-center ' >
                <div>
                    <p style={{color:'#002343'}} className='w-389px font-CircularStd-Medium text-5xl' >Your Personal Online SAVE</p>
                    <p style={{color:'#333333'}} className='w-389px font-CircularStd-Light text-lg mt-4'>Your money is digital with Vault. Anywhere in the World, Your money is
                    safe, transferable and convertible</p>
                    <button style={{backgroundColor: '#002343'}} className='text-white rounded-lg px-6 mt-3 py-3 text-sm' >Create account</button>
            </div>
            </div>
            <div className='w-full relative' >
                <div style={{width:'400px'}} className='relative mb-14 ml-14 z-40' >
                    <img style={{width: '300px'}} className='absolute top-2 -left-32 ' src='/assets/images/Hero1.png' alt='Hero' />
                    <img style={{width: '300px'}} className='absolute top-40 -right-28 ' src='/assets/images/Hero2.png' alt='Hero' />
                    <img style={{width: '200px'}}  className='absolute top-64 -left-28 ' src='/assets/images/Hero3.png' alt='Hero' />
                    <img style={{width: '400px', borderTopRightRadius: '80px', borderBottomRightRadius: '80px'}} src='/assets/images/HeroImage.png' alt='Hero' />
                </div>
                <div style={{height: '300px', backgroundColor: '#002343'}} className=' absolute bottom-0 w-full - rounded-t-full ' >

                </div>
            </div>
        </div>
    )
}
