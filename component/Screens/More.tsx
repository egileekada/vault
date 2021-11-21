import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Header from '../dashboard-component/Header';
import AccountTab from '../more-component/AccountDetail/AccountTab';
import AccountLimit from '../more-component/AccountLimit';
import LegalTab from '../more-component/Legal/LegalTab';
import SecurityTab from '../more-component/Security/SecurityTab';

export default function More() {

    const tabArray = [
        {
            icon: 'Chat',
            title: 'Chat with us',
            detail: 'Get support and send feedbacks'
        },
        {
            icon: 'Security',
            title: 'Security',
            detail: 'Enhance your secruity'
        },
        {
            icon: 'Account',
            title: 'Account Limits',
            detail: 'How much you can Deposit & withdraw'
        },,
        {
            icon: 'Legal',
            title: 'Legals',
            detail: 'Term os use and others'
        },
    ]

    const [tab, setTab] = React.useState(-1)

  return (
        <div className='w-full h-full py-20  ' >
            <p style={{color: '#828282'}} className='px-8 font-Montserrat-Regular text-xs' >Balance</p>
            <p style={{color: '#1D1D1D'}} className='px-8 font-Montserrat-Bold text-base mt-1' >₦ 2,909,323.06</p>
            <Header />
            <div className='w-full flex px-8' >
                <div className=' w-400px mx-8' >
                    <div className='w-full flex' >
                        <div style={{backgroundColor: '#F9F9F9'}} className='rounded-full cursor-pointer p-2'>
                            <IoIosArrowBack size='20px' />
                        </div>
                    </div>

                    <div className='w-full h-full mt-20' >
                        <div onClick={()=> setTab(-1)} style={tab === -1 ?  {background: 'rgba(224, 224, 224, 0.2)', opacity:'0.8', border:'1px solid #002343'}:{background: 'rgba(224, 224, 224, 0.2)', opacity:'0.8'}} className='w-full mb-10 flex rounded-lg cursor-pointer items-center p-3' >
                                <div className='w-16 rounded-2xl h-16 bg-yellow-300' >

                                </div>
                                <div className=' w-auto mx-2' >
                                    <p className='font-Montserrat-Bold text-base' >Bright Mba</p>
                                    <p style={{color:'#667B8E'}} className='font-Montserrat-Medium text-sm' >Account Details</p>
                                </div>
                                <div className='w-full flex flex-1' />
                                <IoIosArrowForward size='20px' />
                        </div> 
                        {tabArray.map((item: any, index: any) => {
                            return( 
                                <div key={index} onClick={()=> setTab(index)} style={tab === index ?  {background: 'rgba(224, 224, 224, 0.2)', opacity:'0.8', border:'1px solid #002343'}:{background: 'rgba(224, 224, 224, 0.2)', opacity:'0.8'}} className='w-full rounded-lg cursor-pointer flex items-center my-2 p-3' >
                                        <div className='w-16 rounded-2xl h-14 bg-yellow-300' >

                                        </div>
                                        <div className=' w-auto mx-2' >
                                            <p className='font-Montserrat-Bold text-base' >{item.title}</p>
                                            <p style={{color:'#667B8E'}} className='w-40 font-Montserrat-Medium text-xs' >{item.detail}</p>
                                        </div>
                                        <div className='w-full flex flex-1' />
                                        <IoIosArrowForward size='20px' />
                                </div> 
                            )
                        })}
                    </div>
                </div>
                <div style={{backgroundColor: '#F9F9F9'}} className=' w-full h-auto rounded-xl' >
                        {tab === -1 ? 
                            <AccountTab /> 
                            :tab === 0 ? 
                                <div>
                                    
                                </div>
                            :tab === 1 ? 
                                <SecurityTab /> 
                                :tab === 2 ? 
                                    <AccountLimit />  
                                        
                        :<LegalTab />}
                </div>
            </div>
        </div>
    );
}
