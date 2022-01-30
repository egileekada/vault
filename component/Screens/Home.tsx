import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import CreditCard from '../dashboard-component/CreditCard'
import LinkCard from '../dashboard-component/dashboard-modal/LinkCard'
import TransactionInformation from '../dashboard-component/dashboard-modal/TransactionInformation'
import Header from '../dashboard-component/Header'
import Information from '../dashboard-component/Information'
import TransactionModal from '../dashboard-component/dashboard-modal/Transaction'
import Transaction from '../dashboard-component/Transaction'
import SuccessModal from '../reusable-modal/SucessModal'
import { IUser, UserContext } from '../../context/UserContext'

export default function Home(props: any) {

    const [savingsModal, setSavingModal] = React.useState(false);
    const [linkCardModal, setLinkCardModal] = React.useState(false);
    const [sucessModal, setSucessModal] = React.useState(false);
    const [transactionModal, setTransactionModal] = React.useState(false);
    const [tab, setTab] = React.useState(false)
    const [transaction, setTransaction] = React.useState(false)
    const userContext: IUser = React.useContext(UserContext);  

    React.useEffect(() => {
        {tab ? 
            props.tab(5)
        :null}
    }, )

    return (
        <div className='w-full h-full py-8 lg:py-20 ' >
            <p style={{color: '#828282'}} className='px-8 font-Montserrat-Regular text-xs' >Balance</p>
            <p style={{color: '#1D1D1D'}} className='px-8 font-Montserrat-Bold text-base mt-1' >₦ 0.00</p>
            <Header />
            <div className='w-full flex flex-col px-4 lg:px-8 ' >
                <div className='w-full flex flex-col lg:flex-row mt-10'  >  
                {transaction ?
                        <Transaction transac={setTransactionModal} open={setSavingModal} /> 
                    :
                        <div className='w-full h-full flex justify-center items-center flex-col'>
                            <svg className='my-6' width="48" height="34" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M47.9944 16.7309H47.9992C47.9992 15.0644 47.3466 13.5503 46.2854 12.4209L46.2873 12.4191L37.0639 0.571991H10.5276L1.56997 12.6593L1.57381 12.6632C0.7264 13.6657 0.205249 14.9397 0.115424 16.33C0.048287 16.4604 0 16.6013 0 16.7584V32.4823C0 33.0053 0.423763 33.4281 0.945844 33.4281H47.0543C47.5773 33.4281 48.0001 33.0054 48.0001 32.4823V16.7584C48 16.749 47.9944 16.7404 47.9944 16.7309ZM11.3846 2.46368H36.2362L41.8665 10.434C41.8069 10.4321 41.7502 10.4245 41.6896 10.4245H30.3449V13.26C30.3449 16.4795 26.9645 15.7833 25.9281 15.7833H22.1505C21.1139 15.7833 17.7337 16.4795 17.7337 13.26V10.4245H6.38785C6.26964 10.4245 6.15421 10.4359 6.03693 10.4415L11.3846 2.46368ZM46.1084 31.5364H1.8925V16.7584C1.8925 16.749 1.88773 16.7405 1.8868 16.7309H1.97093C1.97093 14.2964 3.95232 12.316 6.38774 12.316H15.8419V13.2598C15.8419 16.5163 18.318 17.6748 22.1504 17.6748H25.9279C29.7612 17.6748 32.2364 16.5163 32.2364 13.2598V12.316H41.6915C42.9087 12.316 44.0125 12.8106 44.8126 13.6098L44.8145 13.6117C45.6137 14.4109 46.1074 15.5137 46.1074 16.7309H46.114C46.114 16.7404 46.1083 16.7488 46.1083 16.7584C46.1084 16.7584 46.1084 31.5364 46.1084 31.5364Z" fill="#192F5D"/>
                            </svg> 
                            <p className='font-Montserrat-Medium w-80 text-sm text-center' >You have no transaction.</p>
                        </div>
                }

                    <div className=' w-auto lg:w-700px lg:ml-8' >
                        <p style={{color: '#828282'}} className=' w-full font-Montserrat-ExtraBold text-sm mt-10' >Linked Cards</p>
                        <CreditCard open={setLinkCardModal} />
                    </div>
                </div>
                <div className='w-full flex mt-8 mb-20'>
                    {userContext.userData.country === null ?
                        <>
                            <Information close={setTab} />  
                        </>
                    :null}
                    <div style={{width: '700px'}} className=' h-44 hidden lg:flex' > 
                        <div className=' w-96 -mt-4 rounded-2xl relative ' > 
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
                            <LinkCard next={setSucessModal} header='Link Card' close={setLinkCardModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
            {sucessModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <SuccessModal header='Card has been added successfully' body='You have successfully added this card ... 0489.' close={setSucessModal} />
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
