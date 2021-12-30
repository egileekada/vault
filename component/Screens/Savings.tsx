import { Select } from '@chakra-ui/select'
import React from 'react'
import { IoIosAdd } from 'react-icons/io'
import Header from '../dashboard-component/Header'
import SuccessModal from '../reusable-modal/SucessModal'
import FixedSaving from '../savings-component/FixedSaving'
import ConfirmTransaction from '../savings-component/modal-controller/SavingsModal/ConfirmTransaction'
import SignatureModal from '../savings-component/modal-controller/SavingsModal/SignatureModal'
import Transaction from '../savings-component/modal-controller/SavingsModal/Transaction'
import Withdrawal from '../savings-component/modal-controller/SavingsModal/Withdrawal'
import WithdrawalMoney from '../savings-component/modal-controller/SavingsModal/WithdrawalMoney'
import SavingsOption from '../savings-component/savings-modal/SavingsOption'
import TabMenu from '../savings-component/TabMenu'
import DollarSafeTab from '../savings-component/Tabs/DollarSafeTab'
import FixedDepositTab from '../savings-component/Tabs/FixedDepositTab'
import FixedSavingTab from '../savings-component/Tabs/FixedSavingTab'
import JointSavingTab from '../savings-component/Tabs/JointSavingTab'
import TabScreen from '../savings-component/TabScreen'


export default function Savings(props: any) {

    const [savingsModal, setSavingModal] = React.useState(false);
    const [showModal, setShowModal] = React.useState(0)
    const [joint, setJoint] = React.useState(false)
    const [tab, setTab] = React.useState(-1);

    return (
        <div className='w-full h-auto pt-8 lg:pt-20 ' >
            <p style={{color: '#828282'}} className='px-8 font-Montserrat-Regular text-xs' >Savings Balance</p>
            <p style={{color: '#1D1D1D'}} className='px-8 font-Montserrat-Bold text-base mt-1' >₦ 0.00</p>
            
            {tab === -1 ?  
                <div>
                    <Header />
                    <div className='w-full flex px-4 lg:px-8 justify-center items-center'>
                        <div className='lg:w-659px w-full' >
                            <div className='w-full flex flex-row mt-10 items-center' > 
                                <p style={{color: '#828282'}} className=' w-full font-Montserrat-SemiBold text-sm hidden lg:flex' >Fixed Savings</p>
                                <div className='lg:w-auto w-full flex items-center justify-end' >
                                    <p style={{color: '#002343'}} className=' w-auto hidden lg:flex font-Montserrat-Medium text-xs mr-2' >Filter:</p>
                                    <div className='w-28 hidden lg:flex' >
                                        <Select placeholder='All' border='1px' borderColor='#002343' borderRadius='4px' fontSize='sm' >
                                            <option>Month</option>
                                        </Select> 
                                    </div> 
                                    <button onClick={()=> setSavingModal(true)}  style={{backgroundColor: '#002343', borderRadius: '4px'}}  className=' w-28 ml-4 flex text-white font-Montserrat-Medium text-sm h-10 items-center justify-center' ><IoIosAdd size='25px' /> Save Now</button>
                                </div>
                            </div>
                            <FixedSaving click={setShowModal}  />
                            <div className='w-full flex flex-row' >
                                <div className='mt-10 w-657.46px ' >
                                <p style={{color: '#828282'}} className=' w-full font-Montserrat-SemiBold text-sm' >Joint Savings</p>
                                </div>
                            </div>
                            <FixedSaving Joint='true' sign={setJoint} click={setShowModal} />
                        </div>
                    </div> 
                </div>:
                <div className='w-full h-full flex mt-8 px-4 lg:px-8 '  >
                    <div className=' hidden lg:flex w-260px' >
                        <TabMenu check={tab} tab={setTab} />
                    </div>
                    <div className='w-full h-full ' >
                        {tab === 0 ? 
                                <FixedSavingTab close={setTab} />    
                                :tab === 1 ? 
                                    <FixedDepositTab close={setTab} /> 
                                    :tab === 2 ? 
                                        <JointSavingTab close={setTab} />
                                        :tab === 3 ? 
                                            <DollarSafeTab close={setTab}/>
                            :null
                        }
                    </div>
                </div>
            }
            {savingsModal ? 
                (
                    <>
                        <div className="h-auto flex justify-end items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <SavingsOption close={setSavingModal} tab={setTab} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
            
            {showModal === 1 ? 
                (
                    <>
                        <div className="h-auto flex justify-end items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <Withdrawal close={setShowModal} click={setShowModal} next={setShowModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null}
            {showModal === 2 ? 
                (
                    <>
                        <div className="h-auto flex justify-end items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <Transaction close={setShowModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null}
            {showModal === 3 ? 
                (
                    <>
                        <div className="h-auto flex justify-end items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <WithdrawalMoney close={setShowModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null}
            {showModal === 4 ? 
                (
                    <>
                        <div className="h-auto flex justify-end items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <ConfirmTransaction joint={joint} close={setShowModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null}
            {showModal === 5 ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                        <SuccessModal header='TRANSACTION SUCCESSFUL' body='You have successfully withdrawn ₦ 10,000.00 from your savings account.' close={setShowModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
            {showModal === 6 ? 
                (
                    <>
                        <div className="h-auto flex justify-end items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <SignatureModal close={setShowModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null}
    </div>
    )
}
