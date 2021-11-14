import React from 'react'
import { IoIosAdd, IoIosArrowRoundForward } from 'react-icons/io'
import Header from '../dashboard-component/Header'
import LinkCard from '../investmen-component/Investment-Modal/LinkCard'
import SuccessModal from '../investmen-component/Investment-Modal/SucessModal'
import Agreement from '../loan-component/Agreement'
import ConfirmTransaction from '../loan-component/loan-modal/ConfirmTransaction'
import History from '../loan-component/loan-modal/History'
import LoanAmount from '../loan-component/loan-modal/LoanAmount'
import PayBack from '../loan-component/loan-modal/PayBack'
import Payment from '../loan-component/loan-modal/Payment'
import PaymentInformation from '../loan-component/PaymentInformation'

export default function Loan() {

    const [eligible, setEligiblity] = React.useState(1)
    const [showModal, setShowModal] = React.useState(-1);

    return (
        <div className='w-full h-full py-20 px-8' >
            <p style={{color: '#828282'}} className='font-Montserrat-Regular text-xs' >Balance</p>
            <p style={{color: '#1D1D1D'}} className='font-Montserrat-Bold text-base mt-1' >₦ 2,909,323.06</p>
            <Header />
            <div className='w-full flex flex-row' >
                <div className='w-full mt-10'  >  
                    {eligible === 0 ?
                        <div className='w-full h-full flex justify-center items-center flex-col'>
                            <img src='/assets/images/NotEligible.png' className='my-10'  />
                            <p className='font-Montserrat-Medium w-80 text-sm text-center' >You are not Eligible to borrow from vault africa, we will et you know when this feature is available to you.</p>
                        </div>
                            : eligible === 1 ?
                                <div className='w-full h-full flex justify-center items-center flex-col'>
                                    <img src='/assets/images/Eligible.png' className='my-10'  />
                                    <p className='font-Montserrat-Medium w-80 text-sm text-center' >We understand life happens, you can now borrow to pay later.</p>
                                    <button onClick={()=>setEligiblity(2)} style={{backgroundColor:'#03C8DB', color: 'white'}} className='rounded font-Montserrat-Bold py-3 px-4 text-sm my-6'  >Borrow Now</button>
                                </div>
                                : eligible === 2 ?
                                    <Agreement click={setEligiblity} />
                                    : eligible === 3 ?
                                        <PaymentInformation close={setShowModal} />
                    :null}
                </div>
                <div style={{width: '700px'}} className='ml-8' >  
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
            {showModal === 0 ? 
                (
                    <>
                        <div className="h-auto flex justify-end items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <History close={setShowModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null}
                {showModal === 1 ? 
                    (
                        <>
                            <div className="h-auto flex justify-end items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                                <LoanAmount close={setShowModal} />
                            </div> 
                            <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                        </>
                    ) : null}
                    {showModal === 2 ? 
                        (
                            <>
                                <div className="h-auto flex justify-end items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                                    <PayBack close={setShowModal} />
                                </div> 
                                <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                            </>
                        ) : null}
                        {showModal === 3 ? 
                            (
                                <>
                                    <div className="h-auto flex justify-end items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                                        <Payment close={setShowModal} />
                                    </div> 
                                    <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                                </>
                            ) : null}
                            {showModal === 4 ? 
                                (
                                    <>
                                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                                            <SuccessModal end='loan' close={setShowModal} header='WITHDRAWAL SUCCESSFUL' body='You have successfully withdrawn ₦ 10,000.00 from your loan account.'  />
                                        </div> 
                                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                                    </>
                                ) : null}
                                {showModal === 5 ? 
                                    (
                                        <>
                                            <div className="h-auto flex justify-end items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                                                <LinkCard close={setShowModal}/>
                                            </div> 
                                            <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                                        </>
                                    ) : null}
                                    {showModal === 6 ? 
                                        (
                                            <>
                                                <div className="h-auto flex justify-end items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                                                    <ConfirmTransaction loan={true} close={setShowModal} />
                                                </div> 
                                                <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                                            </>
                                        ) : null}
                                        {showModal === 7 ? 
                                            (
                                                <>
                                                    <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                                                        <SuccessModal image='dollar' end='loan' close={setShowModal} header='Success' body='You have successfully paid back N20,000.00 out of youe debt. Your new balance is -N30,983.12'  />
                                                    </div> 
                                                    <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                                                </>
                                            ) : null}
        </div>
    )
}
