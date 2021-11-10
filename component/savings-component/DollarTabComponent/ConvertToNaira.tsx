import { Input } from '@chakra-ui/input';
import React from 'react';
import AddMoney from './DollarTabModal/AddMoney';
import LinkCard from './DollarTabModal/LinkCard';
import SuccessModal from './DollarTabModal/SucessModal';
import WithdrawalMoney from './DollarTabModal/WithdrawalMoney';

export default function ConvertToNaira(props: any) { 

    const [showModal, setShowModal] = React.useState(-1)
    const [closeTab, setCloseTab] = React.useState(true)


    const CloseTab =()=> {
        props.end(false) 
        setCloseTab(true) 
    } 

    React.useEffect(() => {   
        {closeTab === false ? 
            CloseTab() 
            :null
        }   
    },) 


    return (
        <div className='w-full flex justify-center items-center ' >
            <div className=' w-96 mt-4' > 
                <div className='w-full flex flex-row items-center' >
                    <img src='/assets/images/Convert.png' className='w-8 h-8' /> 
                    <div className='w-auto ml-3' >
                        <p className='font-Montserrat-SemiBold text-sm' >Convert to naira</p>
                        <p style={{color: '#828282'}} className='font-Montserrat-SemiBold text-xs' >Convert your dollars to naira.</p>
                    </div> 
                </div>
                <p className='font-Montserrat-SemiBold mt-6 text-sm mb-2' >Enter the dollar amount you want to buy.</p>
                <Input backgroundColor='#F6F6F6' />
                <p style={{color: '#68DEE9'}} className='font-Montserrat-Bold text-sm text-center mt-12' >Buy @</p>
                <p style={{color: '#68DEE9'}} className='font-Montserrat-Bold text-xl text-center ' >460/$</p>
                <button onClick={()=> setShowModal(0)}  style={{backgroundColor: '#002343'}} className='w-full rounded text-white py-3 mt-12 text-sm font-Montserrat-Medium ' >ACCEPT TERMS AND PROCEED</button>
                <p style={{color: '#2F80ED'}} className='font-Montserrat-Bold text-xs text-center mt-6' >Terms of service</p>
                <p style={{color: '#828282'}} className=' mx-16 font-Montserrat-Bold text-xs text-center mt-6 mb-8' >Funds from conversion will be sent to your Local account immediately.</p>
            </div> 
            {showModal === 0 ? 
                (
                    <>
                        <div className="h-auto flex justify-end items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <WithdrawalMoney close={setShowModal} next={setShowModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null}   
            {showModal === 1 ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <SuccessModal image='dollar' close={setCloseTab} header='Dollar credited' body='You have successfully withdrawn N56,000.00 ($100). kudos ✌🏾' />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
        </div>
    )
}
