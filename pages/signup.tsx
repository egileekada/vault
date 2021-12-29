import React from 'react'
import Carousel from '../component/Carousel';
import StepTwo from '../component/registration-compnent/StepTwo';
import StepOne from '../component/registration-compnent/StepOne';
import Router from 'next/router';

export default function login() {

    const [next, setNext] = React.useState(false);
    const [firstStep, setFirstStep] = React.useState({
        email: '', password: '' 
    })


    React.useEffect(() => { 
        const token = localStorage.getItem('token')
        if(token ){
            Router.push('/dashboard')
        }
    }); 

    return (
        <div className='w-full h-screen flex relative overflow-hidden flex-row bg-white' > 
            <div className='w-full h-full justify-center items-center overflow-y-auto ' >
                {next ?
                    <StepTwo value={firstStep} />:
                    <StepOne value={setFirstStep} click={setNext} /> 
                }
            </div> 
            <div className='w-full h-screen relative hidden lg:flex' > 
                <Carousel />
            </div>
        </div>      
    )
}
