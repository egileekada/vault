import React from 'react' 

export default function HeroSection() {
    return (
        <div className='w-full flex lg:flex-row flex-col items-center px-10' >
            <div className='w-full flex flex-col lg:items-center ' >
                <div className='mx-auto' >
                    <p style={{color:'#002343'}} className='lg:w-389px w-full font-CircularStd-Medium text-3xl lg:text-5xl' >Your Personal Online SAVE</p>
                    <p style={{color:'#333333'}} className='lg:w-389px w-full font-CircularStd-Light text-lg mt-4'>Your money is digital with Vault. Anywhere in the World, Your money is
                    safe, transferable and convertible</p>
                    <button style={{backgroundColor: '#002343'}} className='text-white rounded-lg px-6 mt-3 py-3 text-sm' >Create account</button>
                </div>
            </div>
            <div className='w-full relative' >
                <div style={{width:''}} className='lg:w-400px w-full relative mb-14 lg:ml-14 mt-10 lg:mt-0 z-40' >
                    <img className='lg:w-300px w-48 absolute top-2 -left-14 lg:-left-32 ' src='/assets/images/Hero1.png' alt='Hero' />
                    <img className=' lg:w-300px w-48 absolute top-40 -right-8 lg:-right-28 ' src='/assets/images/Hero2.png' alt='Hero' />
                    <img className=' lg:w-200px w-40 absolute top-48 lg:top-64 -left-14 lg:-left-28 ' src='/assets/images/Hero3.png' alt='Hero' />
                    <img style={{borderTopRightRadius: '80px', borderBottomRightRadius: '80px'}} className='w-full' src='/assets/images/HeroImage.png' alt='Hero' />
                </div>
                <div style={{height: '300px', backgroundColor: '#002343'}} className=' absolute lg:flex hidden bottom-0 w-full - rounded-t-full ' >

                </div>
            </div>
        </div>
    )
}
