import React from 'react'
import Carousel from '../component/Carousel';
import SignMessage from '../component/registration-compnent/SignMessage';
import Verification from '../component/registration-compnent/Verification';

export default function verify() {

    const [show, setShow] = React.useState(false)

    return (
        <div className='w-full h-screen flex relative flex-row bg-white' > 
            <div className='w-full h-full flex justify-center items-center  ' >
                {show ? 
                        <SignMessage />
                    :
                        <Verification click={setShow} />
                }
            </div> 
            <div className='w-full h-screen relative hidden lg:flex' > 
                <Carousel />
            </div>
        </div>   
    )
}
