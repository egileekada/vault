import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import CreditCard from '../dashboard-component/CreditCard'
import LinkCard from '../dashboard-component/dashboard-modal/LinkCard'
import TransactionInformation from '../dashboard-component/dashboard-modal/TransactionInformation'
import Header from '../dashboard-component/Header'
import Information from '../dashboard-component/Information'
import TransactionModal from '../dashboard-component/dashboard-modal/Transaction'
import Transaction from '../dashboard-component/Transaction'
import SuccessModal from '../dashboard-component/dashboard-modal/SucessModal'

export default function Home() {

    const [savingsModal, setSavingModal] = React.useState(false);
    const [linkCardModal, setLinkCardModal] = React.useState(false);
    const [sucessModal, setSucessModal] = React.useState(false);
    const [transactionModal, setTransactionModal] = React.useState(false);

    return (
        <div className='w-full h-full py-20 px-8' >
            <p style={{color: '#828282'}} className='font-Montserrat-Regular text-xs' >Balance</p>
            <p style={{color: '#1D1D1D'}} className='font-Montserrat-Bold text-base mt-1' >₦ 2,909,323.06</p>
            <Header />
            <div className='w-full flex flex-row' >
                <div className='w-full mt-10'  >  
                    <Transaction transac={setTransactionModal} open={setSavingModal} /> 
                    <Information />  
                </div>
                <div style={{width: '700px'}} className='ml-8' >
                    <p style={{color: '#828282'}} className=' w-full font-Montserrat-ExtraBold text-sm mt-10' >Linked Cards</p>
                    <CreditCard open={setLinkCardModal} />
                    <div className=' w-96  mt-12 rounded-2xl relative ' > 
                        <img src='/assets/images/building.png'  className=' w-full rounded-3xl' />  
                        <div className="absolute inset-0 bg-gradient-to-r from-startgrad to-stopgrad opacity-40 rounded-3xl  h-full flex flex-col" />
                        <div className='absolute py-6 px-8 top-0 w-full' >
                            <div className='w-full flex flex-row' >
                                <div className='w-full flex flex-1' />
                                <img src='/assets/images/Vault-logo-white.png'  className='' /> 
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
            {savingsModal ? 
                (
                    <>
                        <div className="h-auto flex justify-end items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <TransactionInformation close={setSavingModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
            {linkCardModal ? 
                (
                    <>
                        <div className="h-auto flex justify-end items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <LinkCard next={setSucessModal} close={setLinkCardModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
            {sucessModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <SuccessModal close={setSucessModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
            {transactionModal ? 
                (
                    <>
                        <div className="h-auto flex justify-end items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <TransactionModal close={setTransactionModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
        </div>
    )
}
