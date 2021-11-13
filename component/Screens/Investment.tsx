import React from 'react'
import { IoIosAdd, IoIosArrowRoundForward } from 'react-icons/io'
import CreditCard from '../dashboard-component/CreditCard'
import Header from '../dashboard-component/Header'
import Information from '../dashboard-component/Information'
import Transaction from '../dashboard-component/Transaction'
import ExportInvestment from '../investmen-component/Investment-Modal/ExploreInvestment'
import InvestmentAmount from '../investmen-component/Investment-Modal/InvestmentAmount'
import InvestmentOption from '../investmen-component/Investment-Modal/InvestmentOption'
import LinkCard from '../investmen-component/Investment-Modal/LinkCard'
import Payment from '../investmen-component/Investment-Modal/Payment'
import SuccessModal from '../investmen-component/Investment-Modal/SucessModal'
import InvestmentHistory from '../investmen-component/InvestmentHistory'

export default function Investment() {

    const [showModal, setShowModal] = React.useState(-1);
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
                    <InvestmentHistory transac={setTransactionModal} />  
                </div>
                <div style={{width: '700px'}} className='ml-8' > 
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
                                <InvestmentOption close={setShowModal}/>
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
        </div>
    )
}
