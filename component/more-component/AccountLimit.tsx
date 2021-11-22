import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'

export default function AccountLimit(props: any) {

    const [mobile, setMobile] = React.useState(true) 

    const CloseHandler =()=> { 
        props.tab(false) 
        setMobile(true)
    }

    React.useEffect(() => {
        {!mobile ?
            CloseHandler()
        :null}
    },)

    return (
        <div className='w-full h-auto py-6 lg:py-10 lg:px-14'> 
            <div className='w-full flex items-center  ' > 
                <div onClick={()=> setMobile(false)} style={{backgroundColor: '#F9F9F9'}} className='rounded-full mr-12 lg:hidden cursor-pointer p-2'>
                    <IoIosArrowBack size='20px' />
                </div>   
                <p className='font-Montserrat-Bold text-base' > Account Limits</p>
            </div>  
            <div className=' w-full lg:w-560px mt-8' >
                <div style={{backgroundColor: '#F3F3F3'}} className='w-full flex p-1 rounded' >
                    <p className='font-Montserrat-Medium text-sm' >Daily Withdrawal Limit</p>
                    <div className='w-full flex flex-1' />
                    <p className='font-Montserrat-Medium text-sm' >N500,000</p>
                </div>
                <div className='w-full flex p-1 rounded' >
                    <p className='font-Montserrat-Medium text-sm' >Daily Deposit Limit</p>
                    <div className='w-full flex flex-1' />
                    <p className='font-Montserrat-Medium text-sm' >N500,000</p>
                </div>
                <div style={{backgroundColor: '#F3F3F3'}} className='w-full flex p-1 rounded' >
                    <p className='font-Montserrat-Medium text-sm' >Depositing Per Transaction</p>
                    <div className='w-full flex flex-1' />
                    <p className='font-Montserrat-Medium text-sm' >N500,000</p>
                </div>
                <div className='w-full flex p-1 rounded' >
                    <p className='font-Montserrat-Medium text-sm' >Withdrawing Per Transaction</p>
                    <div className='w-full flex flex-1' />
                    <p className='font-Montserrat-Medium text-sm' >N500,000</p>
                </div> 
            </div>
        </div>
    )
}
