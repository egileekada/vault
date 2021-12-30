import React from 'react'
import { IoIosAdd, IoIosArrowRoundForward } from 'react-icons/io'
import CreditCard from '../dashboard-component/CreditCard'
import Header from '../dashboard-component/Header' 
import ExportInvestment from '../investmen-component/Investment-Modal/ExploreInvestment'
import InvestmentAmount from '../investmen-component/Investment-Modal/InvestmentAmount'
import InvestmentOption from '../investmen-component/Investment-Modal/InvestmentOption'
import LinkCard from '../investmen-component/Investment-Modal/LinkCard'
import Payment from '../investmen-component/Investment-Modal/Payment'
import SuccessModal from '../investmen-component/Investment-Modal/SucessModal'
import InvestmentHistory from '../investmen-component/InvestmentHistory'
import ConfirmTransaction from '../savings-component/modal-controller/SavingsModal/ConfirmTransaction' 
import WithdrawalMoney from '../savings-component/modal-controller/SavingsModal/WithdrawalMoney'

export default function Investment(props: any) {

    const [showModal, setShowModal] = React.useState(-1); 
    const [withdrawModal, setWithdrawModal] = React.useState(false);
    return (
        <div className='w-full h-full py-20 ' >
            <p style={{color: '#828282'}} className='px-8 font-Montserrat-Regular text-xs' >Balance</p>
            <p style={{color: '#1D1D1D'}} className='px-8 font-Montserrat-Bold text-base mt-1' >₦ 0.00</p>
            <Header />
            <div className='px-8 w-full flex flex-row' >
                <div className='w-full mt-10'  > 
                    <div className='w-full flex justify-end lg:hidden' >
                        <button onClick={()=> setShowModal(0)}  style={{backgroundColor: '#002343', borderRadius: '2px'}}  className=' w-32 ml-4 flex text-white ml-auto  font-Montserrat-Medium text-sm h-10 items-center justify-center' ><IoIosAdd size='25px' /> Invest Now</button>    
                    </div> 
                    <InvestmentHistory open={setShowModal} withdraw={setWithdrawModal} />  
                </div>
                <div className='ml-8 hidden flex-col lg:flex lg:w-700px' > 
                    <button onClick={()=> setShowModal(0)}  style={{backgroundColor: '#002343', borderRadius: '2px'}}  className=' w-32 ml-4 flex text-white ml-auto mt-16 mb-8 font-Montserrat-Medium text-sm h-10 items-center justify-center' ><IoIosAdd size='25px' /> Invest Now</button>
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
                            <ExportInvestment close={setShowModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null}
                {showModal === 1 ? 
                    (
                        <>
                            <div className="h-auto flex justify-end items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                                <InvestmentOption withdraw={withdrawModal} close={setShowModal}/>
                            </div> 
                            <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                        </>
                    ) : null}
                    {showModal === 2 ? 
                        (
                            <>
                                <div className="h-auto flex justify-end items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                                    <InvestmentAmount close={setShowModal}/>
                                </div> 
                                <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                            </>
                        ) : null}
                        {showModal === 3 ? 
                            (
                                <>
                                    <div className="h-auto flex justify-end items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                                        <Payment close={setShowModal}/>
                                    </div> 
                                    <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                                </>
                            ) : null}
                            {showModal === 4 ? 
                                (
                                    <>
                                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                                            <SuccessModal image='dollar' close={setShowModal} header='Success' body='You have successfully bought some some unit of GBG farms rice investment.'  />
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
                                                    <WithdrawalMoney withdraw={withdrawModal} close={setShowModal}/>
                                                </div> 
                                                <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                                            </>
                                        ) : null}
                                        {showModal === 7 ? 
                                            (
                                                <>
                                                    <div className="h-auto flex justify-end items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                                                        <ConfirmTransaction withdraw={withdrawModal} close={setShowModal}/>
                                                    </div> 
                                                    <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                                                </>
                                            ) : null}
                                            {showModal === 8 ? 
                                                (
                                                    <>
                                                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                                                            <SuccessModal end='loan' close={setShowModal} header='TRANSACTION SUCCESSFUL' body='You have successfully withdrawn ₦ 10,000.00 from your savings account.' />
                                                        </div> 
                                                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                                                    </>
                                                ) : null}
        </div>
    )
}
