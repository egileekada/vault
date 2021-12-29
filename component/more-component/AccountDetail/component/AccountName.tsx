import { Input } from '@chakra-ui/react'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { IUser, UserContext } from '../../../../context/UserContext'
import SuccessModal from './SucessModal'

export default function AccountName(props: any) {

    const [next, setNext] = React.useState(false)
    const [showModal, setShowModal] =   React.useState(false)
    const [closeTab, setCloseTab] =   React.useState(false) 
    const userContext: IUser = React.useContext(UserContext);  

    React.useEffect(() => {
        {closeTab ?
            props.tab(-1)
        :null}
    },)

    return (
        <div className='w-full h-full py-6 lg:py-10 lg:px-14'> 
            <div className='w-full flex items-center ' > 
                <div onClick={()=> props.close(false)} style={{backgroundColor: '#F9F9F9'}} className='rounded-full mr-12 lg:hidden cursor-pointer p-2'>
                    <IoIosArrowBack size='20px' />
                </div>   
                <p className='font-Montserrat-Bold text-base' >Account Name</p>
            </div> 
            {!next ?
                <div className=' w-full lg:w-560px' >
                    <p className='font-Montserrat-Medium text-sm mt-6' >You full legal names as it apperas on all your document</p>
                    <p className='font-Montserrat-Medium text-sm mt-8 mb-1' >First Name</p>
                        <Input placeholder={userContext.userData.firstname} backgroundColor='#fff' fontSize='sm'  />
                    <p className='font-Montserrat-Medium text-sm mt-4 mb-1' >Other Names</p>
                        <Input placeholder={userContext.userData.othername}  backgroundColor='#fff' fontSize='sm' />
                    <p className='font-Montserrat-Medium text-sm mt-4 mb-1' >Last Name</p>
                        <Input placeholder={userContext.userData.lastname} backgroundColor='#fff' fontSize='sm' />

                    <button onClick={()=> setNext(true)} style={{backgroundColor: '#002343'}} className='w-full rounded text-white py-3 mt-12 text-sm font-Montserrat-Medium ' >Submit</button>
                </div>:
                <div className=' w-full lg:w-560px' >
                    <p className='font-Montserrat-Medium text-sm mt-6' >Sumbit a documet that confims your change in name, it must be one that is accepted by the nigerian governement.</p>
                    <div className='w-16 rounded-2xl h-16 my-10 bg-yellow-300' >

                    </div> 
                    <button onClick={()=> setShowModal(true)} style={{backgroundColor: '#002343'}} className='w-full rounded text-white py-3  text-sm font-Montserrat-Medium ' >Submit</button>
                </div>
            }
            {showModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <SuccessModal header='DOCUMENT UPLOADED' body='An email will be sent to you immediately we review this document.' close={setCloseTab} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
        </div>
    )
}
