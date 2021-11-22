import { Input } from '@chakra-ui/react'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import SuccessModal from '../../AccountDetail/component/SucessModal'

export default function ForgotPin(props: any) {

    const [next, setNext] = React.useState(false) 
    const [showModal, setShowModal] =   React.useState(false)
    const [closeTab, setCloseTab] =   React.useState(false) 

    React.useEffect(() => {
        {closeTab ?
            props.tab(-1)
        :null}
    },) 
    
    return (
        <div className='w-full h-full py-6 lg:py-10 lg:px-14'>
            {!next ?
                <>
                    <div className='w-full flex items-center ' > 
                        <div onClick={()=> props.close(false)} style={{backgroundColor: '#F9F9F9'}} className='rounded-full mr-12 lg:hidden cursor-pointer p-2'>
                            <IoIosArrowBack size='20px' />
                        </div>   
                    <p className='font-Montserrat-Bold text-base ' >Transaction PIN</p>
                    </div>  
                    <div className=' w-full lg:w-560px' >
                        <p className='font-Montserrat-Medium text-sm mt-6' >We just sent an OTP to your mail</p>
                        <p className='font-Montserrat-Medium text-sm mt-4 mb-1' >OTP</p>
                        <Input backgroundColor='#fff' fontSize='sm' /> 
                        <div className='w-full flex flex-col items-center justify-center' > 
                            <p className='font-Montserrat-Medium text-xs mt-12 ' >Didn’t get the OTP? <span className='cursor-pointer' style={{color: '#03C8DB'}} >Resend Now </span></p>
                            <p className='font-Montserrat-Medium text-xs mt-6 ' >Resend in 50 seconds</p>
                        </div>
                        <button onClick={()=> setNext(true)} style={{backgroundColor: '#002343'}} className='w-full rounded text-white py-3 mt-12 text-sm font-Montserrat-Medium ' >Next</button>
                    </div>
                </>
            :
                <>
                    <p className='font-Montserrat-Bold text-base ' >Create New Transaction PIN</p> 
                    <div className=' w-full lg:w-560px' >  
                        <p className='font-Montserrat-Medium text-sm mt-4 mb-1' >New PIN</p>
                            <Input backgroundColor='#fff' fontSize='sm' />
                        <p className='font-Montserrat-Medium text-sm mt-4 mb-1' >Confirm new PIN</p>
                            <Input backgroundColor='#fff' fontSize='sm' />
        
                        <p className='font-Montserrat-Medium text-sm text-center mt-12 ' >Forgot Transaction Pin? <span onClick={()=> props.tab(1)} className='cursor-pointer' style={{color: '#03C8DB'}} >Reset Now </span></p>
                        <button onClick={()=> setShowModal(true)} style={{backgroundColor: '#002343'}} className='w-full rounded text-white py-3 mt-12 text-sm font-Montserrat-Medium ' >Update</button>
                    </div>
                </>
            }

            {showModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <SuccessModal image={true} header='SUCCESS' body='You new Transaction PIN has been updated' close={setCloseTab} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
        </div>
    )
}
