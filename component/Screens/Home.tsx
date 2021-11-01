import React from 'react'
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
                    <div className=' w-96 bg-gradient-to-r from-startgrad to-stopgrad mt-12 relative ' > 
                        <img src='/assets/images/building.png'  className=' absolute w-full rounded-2xl z-10' /> 
                    </div>
                </div>
            </div>
        </div>
    )
}
