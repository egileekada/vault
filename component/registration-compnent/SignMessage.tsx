import React from 'react'

export default function SignMessage() { 

    const [loading, setLoading] = React.useState(false);

    return (
        <div className='bg-white w-full h-full flex items-center flex-col pt-28  py-14 px-6 lg:px-40 rounded-lg' >
            <img src='/assets/images/Vault-logo.png' alt='login' style={{width: '100px'}} className=' h-auto  ' /> 
            <img src='/assets/images/success.png' alt='success' style={{width: '80px'}} className=' h-auto  pt-14 ' />
            <p style={{color: '#002343'}} className='font-Inter-ExtraBold text-2xl flex mt-6'>You’re good to go! 😎</p> 
            <p style={{color: '#5788AD'}} className='font-Inter-Regular my-2 text-xs text-center mb-2' >You have successfully created your<br/>registered your account. </p>
             
            
            <button style={{backgroundColor: '#002343', color: 'white'}} className='w-full py-3 flex justify-center items-center text-white font-Inter-Bold text-xs mr-2 mt-4 rounded-md' >
                {!loading ? 
                    <div className='py-1' >
                        Enjoy!
                    </div>:
                    <>
                        <div className="animate-spin rounded-full h-6 w-6 mr-4 border-t-2 border-b-2 border-white"></div>
                        LOADING
                    </>
                } 
            </button> 
        </div>
    )
}
