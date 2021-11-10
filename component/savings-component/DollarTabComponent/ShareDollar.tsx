import { Input } from '@chakra-ui/input';
import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import FriendsModal from './DollarTabModal/FriendsModal';
import SuccessModal from './DollarTabModal/SucessModal';
import WithdrawalMoney from './DollarTabModal/WithdrawalMoney';

export default function ShareDollar(props: any) { 

    const [showModal, setShowModal] = React.useState(-1)
    const [friends, setFriends] = React.useState({} as any)
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
                    <img src='/assets/images/Share.png' className='w-8 h-8' /> 
                    <div className='w-auto ml-3' >
                        <p className='font-Montserrat-SemiBold text-sm' >Share with friends</p>
                        <p style={{color: '#828282'}} className='font-Montserrat-SemiBold text-xs' >Send dollars to your friends using vault.</p>
                    </div> 
                </div>
                <p className='font-Montserrat-SemiBold mt-10 text-sm mb-2' >Enter the dollar amount you want to buy.</p>
                <Input backgroundColor='#F6F6F6' fontSize='sm' placeholder='$ 0.00' />
                <p style={{color: '#828282'}} className='font-Montserrat-SemiBold text-xs mt-1' >(Min: $5 & Max: $1,000) - 560/$</p>
                <p className='font-Montserrat-SemiBold mt-6 text-sm mb-2' >Add Recepient</p>
                <div className='relative' > 
                    <Input value={friends.name} className='font-Montserrat-SemiBold' backgroundColor='#F6F6F6'  fontSize='sm' placeholder='Vault username'/>
                    <IoIosArrowRoundForward onClick={()=> setShowModal(6)} size='35px' color='#262F56' className='absolute right-1 top-1 z-10 cursor-pointer'  />
                </div>

            <button onClick={()=> setShowModal(0)} style={props ? {backgroundColor: '#002343', color: 'white'}: {backgroundColor: '#CCD3D9', color: '#667B8E'}} className='w-full text-white font-Montserrat-Medium text-sm h-10 rounded  mt-10 mb-12' >CONFIRM TRANSFER</button>
            </div>
            {showModal === 6 ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <FriendsModal close={setShowModal} check={friends} friends={setFriends} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null}  
            {showModal === 0 ? 
                (
                    <>
                        <div className="h-auto flex justify-end items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <WithdrawalMoney share='true' close={setShowModal} next={setShowModal} friends={friends} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null}    
            {showModal === 1 ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <SuccessModal image='dollar' close={setCloseTab} header='Sharing Successful' body='You have successfully Shared $100 to Okey Arsmtrong. This will take few mins to deliver.' />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
        </div>
    );
}
