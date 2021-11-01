import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import CreditCard from '../dashboard-component/CreditCard'
import Header from '../dashboard-component/Header'
import Information from '../dashboard-component/Information'
import Transaction from '../dashboard-component/Transaction'

export default function Home() {
    return (
        <div className='w-full h-full py-20 px-8' >
            <p style={{color: '#828282'}} className='font-Montserrat-Regular text-xs' >Balance</p>
            <p style={{color: '#1D1D1D'}} className='font-Montserrat-Bold text-base mt-1' >₦ 2,909,323.06</p>
            <Header />
            <div className='w-full flex flex-row' >
                <div className='w-full mt-10'  >  
                    <Transaction /> 
                    <Information />  
                </div>
                <div style={{width: '700px'}} className='ml-8' >
                    <p style={{color: '#828282'}} className=' w-full font-Montserrat-ExtraBold text-sm mt-10' >Linked Cards</p>
                    <CreditCard />
                    <div className=' w-96  mt-12 rounded-2xl relative ' > 
                        <img src='/assets/images/building.png'  className=' w-full rounded-3xl' />  
                        <div className="absolute inset-0 bg-gradient-to-r from-startgrad to-stopgrad opacity-40 rounded-3xl  h-full flex flex-col" />
                        <div className='absolute py-6 px-8 top-0 w-full' >
                            <div className='w-full flex flex-row' >
                                <div className='w-full flex flex-1' />
                                <img src='/assets/images/Vault-logo.png'  className='' /> 
                            </div>
                            <div className='w-full h-full flex flex-row z-20' >
                                <p style={{color: '#E0E0E0'}} className=' w-32 mt-8 font-Montserrat-Bold text-xl' >Lets help you Build wealth with ease.</p>
                                <div className='w-full flex flex-1' />
                                <div style={{marginTop: '120px'}} className='w-auto h-full flex flex-row items-center ' > 
                                    <p style={{color: '#E0E0E0'}} className='font-Montserrat-Medium text-xs' >Invest with us</p>
                                    <IoIosArrowRoundForward size='25px' className='cursor-pointer text-white ' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
