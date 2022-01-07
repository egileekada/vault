import { Input } from '@chakra-ui/react'
import React from 'react'
import { IoIosArrowRoundForward, IoIosClose } from 'react-icons/io'
import RadioButton from '../../reusable-modal/RadioButton'
import JointSavingsController from '../modal-controller/JointSavingsController'
import FriendsModal from '../modal-controller/SavingsTabModals/FriendsModal'

export default function JointSavingTab(props: any) { 

    const [showModal, setShowModal] = React.useState(false)
    const [friendsModal, setFriendsModal] = React.useState(false)
    const [endModal, setEndModal] = React.useState(true)
    const [friends, setFriends] = React.useState([] as any)
    const [catergory, setCatergory] = React.useState('');

    const ClickHandler =()=> {
        props.close(-1)  
        setEndModal(true)
    }

    React.useEffect(() => { 
        {endModal === false ? 
            ClickHandler() 
            :null
        }
    },) 

    const NextClick =()=> {
        setShowModal(true);
        setFriendsModal(false)
    }

    const DeleteHandler =(value: any)=> {

        let index = friends.findIndex((item: any) => item.number === value.number)  
        let newarr = [...friends] 
        newarr.splice(index, 1) 
        setFriends(newarr)
    }

    return (
        <div className='w-full flex-col lg:flex-row flex mb-10' >
            <div className='w-full lg:mx-3'>
                <div className='flex justify-center lg:justify-start mb-10 relative'>
                    <p onClick={()=> props.close(-1)} style={{color:'#03C8DB'}} className=' lg:hidden font-Montserrat-Bold text-base cursor-pointer absolute left-0 ' >Go back</p>
                    <p className='font-Montserrat-Bold text-base ' >Joint Savings</p>
                </div>
                {/* <p className='font-Montserrat-Bold text-base' >Joint Savings</p> */}
                <p className='font-Montserrat-Medium text-sm mt-6 mb-2' >What is tthe name of your group?</p>
                <Input backgroundColor='#E0E0E0' placeholder='Name your group' fontSize='sm' />
                <p className='font-Montserrat-Medium text-sm mt-4 mb-2' >What are you saving for?</p>
                <Input backgroundColor='#E0E0E0' placeholder='Name your savings plan' fontSize='sm' />
                <p className='font-Montserrat-Medium text-sm mt-4 mb-2' >Amount<span style={{color: '#828282'}}>(₦)</span></p>
                <Input backgroundColor='#E0E0E0' placeholder='Amount you wanat to save' fontSize='sm' />
                <p className='font-Montserrat-Medium text-sm mt-6 mb-2' >Start Date</p>
                <Input backgroundColor='#E0E0E0' placeholder='DD-MM-YYYY' fontSize='sm' />
                <p className='font-Montserrat-Medium text-sm mt-4 mb-2' >End Date</p>
                <Input backgroundColor='#E0E0E0' placeholder='DD-MM-YYYY' fontSize='sm' />
                <p className='font-Montserrat-Bold text-base mt-8 mb-4' >How would you like to save?</p>
                <RadioButton value={setCatergory} array={['Daily','Weekly','Monthly']} size='32px' font='14px' />
            </div>
            <div className='w-full lg:mx-3 mt-8 lg:mt-0'>
                <p className='font-Montserrat-Bold text-base' >Add Participants</p>
                <div style={{backgroundColor:'#E0E0E0'}} className='w-full flex items-center rounded px-4 py-3 mt-8' >
                    <p className='font-Montserrat-Regular text-sm' >Find friends using vault</p>
                    <div className='w-full flex flex-1' />
                    <IoIosArrowRoundForward onClick={()=> setFriendsModal(true)} size='25px' className='cursor-pointer' />
                </div>
                {friends.length > 0 ?  
                    <div className='w-full mt-6 mb-12' >  
                        <p className='font-Montserrat-Bold text-sm mb-4' style={{color: '#828282'}} >Participants</p>
                        <div className=' grid-cols-3 lg:grid-cols-5 gap-6 w-full grid ' >
                            {friends.map((item: any)=> {
                                return(
                                    <div key={item} className='w-16 h-16 bg-yellow-300 rounded-lg relative'> 
                                        <IoIosClose onClick={()=> DeleteHandler(item)} size='20px' className=' w-auto rounded-full absolute -right-1 -top-2 cursor-pointer' color='#EB5757' style={{backgroundColor: '#FBDDDD'}}  />
                                    </div>
                                )
                            })}
                        </div> 
                    </div>
                    :
                    <div className='w-full flex flex-col py-14' > 
                        <p className='font-Montserrat-Bold text-sm text-center' >No Participant added yet</p>
                        <p className='font-Montserrat-Regular text-xs text-center' >You have to add at least one<br/> participant to proceed</p>
                    </div>
                }
                <button onClick={()=> NextClick()} style={{backgroundColor: '#002343'}} className='w-full font-Montserrat-Bold py-3 text-white rounded text-sm font-Montserrat-Bold' >PROCEED</button>
            </div>
            {showModal ?  
                <JointSavingsController friends={setFriends} close={setShowModal} end={setEndModal} />
            :null}
            {friendsModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <FriendsModal check={friends} friends={setFriends} close={setFriendsModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
        </div>
    )
}
