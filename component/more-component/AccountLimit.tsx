import React from 'react'

export default function AccountLimit() {
    return (
        <div className='w-full h-auto py-10 px-14'> 
            <p className='font-Montserrat-Bold text-base ' >Account Limits</p> 
            <div className='w-560px mt-8' >
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
