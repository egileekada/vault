import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import AccountDocument from './Identification-component/AccountDocument'
import AccountID from './Identification-component/AccountID'
import AccountNIN_BVN from './Identification-component/AccountNIN_BVN'
import SuccessModal from './SucessModal'

export default function AcountIdentification(props: any) {

    const tabArray =[
        {
            name: 'BVN/NIN',
            notactive: 'Unverified',
            active: 'verified'
        }, 
        {
            name: 'ID Image',
            notactive: 'Unverified',
            active: 'verified'
        }, 
        {
            name: 'Other Documents',
            notactive: 'Unverified',
            active: 'verified'
        }, 
    ]

    const [tab, setTab] = React.useState(-1)
    
    const [showModal, setShowModal] =   React.useState(0)
    const [closeTab, setCloseTab] =   React.useState(false) 

    React.useEffect(() => {
        {closeTab ?
            props.tab(-1)
        :null}
    },)

    return (
        <div className='w-full h-full py-6 lg:py-10 lg:px-14'> 
            <div className='w-full flex items-center'> 
                <div onClick={()=> props.close(false)} style={{backgroundColor: '#F9F9F9'}} className='rounded-full mr-12 flex lg:hidden cursor-pointer p-2'>
                    <IoIosArrowBack size='20px' />
                </div>    
                <p className='font-Montserrat-Bold text-sm lg:text-base w-auto ' >{tab === 1 ? 'ID Image' :tab === 2 ? 'Other Document':'Account Verification'}</p> 
                <div className='w-full flex flex-1' />
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5C7.313 3.5 3.5 7.313 3.5 12C3.5 16.687 7.313 20.5 12 20.5C16.687 20.5 20.5 16.687 20.5 12C20.5 7.313 16.687 3.5 12 3.5ZM12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22Z" fill="#03C8DB"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9941 13.3721C11.5801 13.3721 11.2441 13.0361 11.2441 12.6221V8.20313C11.2441 7.78913 11.5801 7.45312 11.9941 7.45312C12.4081 7.45312 12.7441 7.78913 12.7441 8.20313V12.6221C12.7441 13.0361 12.4081 13.3721 11.9941 13.3721Z" fill="#03C8DB"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.004 16.7969C11.451 16.7969 10.999 16.3499 10.999 15.7969C10.999 15.2439 11.442 14.7969 11.994 14.7969H12.004C12.557 14.7969 13.004 15.2439 13.004 15.7969C13.004 16.3499 12.557 16.7969 12.004 16.7969Z" fill="#03C8DB"/>
                </svg> 
                <p style={{color: '#03C8DB'}} className='font-Montserrat-Medium ml-1 text-sm lg:flex hidden ' >Learn more</p> 
            </div> 
            <div className=' w-full lg:w-560px' >
                {tab === -1 ?
                    <> 
                        <p className=' w-full lg:w-560px font-Montserrat-Medium text-sm mt-6 mb-10' >Enter your BVN/NIN for verification</p>
                        {tabArray.map((item: any, index: any)=> {
                            return(
                                <div key={index} onClick={()=> setTab(index)} style={{background: 'rgba(224, 224, 224, 0.2)', opacity:'0.8'}} className='w-full rounded-lg cursor-pointer flex items-center my-2 p-3' >
                                    <div className=' w-auto mx-2' >
                                        <p className='font-Montserrat-Bold text-base' >{item.name}</p>
                                        <p style={{color:'#667B8E'}} className='w-40 font-Montserrat-Medium text-xs' >{item.notactive}</p>
                                    </div>
                                    <div className='w-full flex flex-1' />
                                    <IoIosArrowForward size='20px' />
                                </div> 
                            )
                        })} 
                    </>
                    :tab === 0 ?
                        <AccountNIN_BVN close={setShowModal} />
                        :tab === 1 ?
                            <AccountID close={setShowModal} />
                            :tab === 2 ?
                                <AccountDocument close={setShowModal} />
                :null}
            </div>  
            {showModal === 1 ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <SuccessModal image={true} header='RECEIVED' body='Thanks for the submission, we’ll revert immediately the review is complete.' close={setCloseTab} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
                {showModal === 2 ? 
                    (
                        <>
                            <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                                <SuccessModal image={true} header='IMAGE UPLOADED' body='An email will be sent to you immediately we review this document.' close={setCloseTab} />
                            </div> 
                            <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                        </>
                    ) : null} 
                    {showModal === 3 ? 
                        (
                            <>
                                <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                                    <SuccessModal image={true} header='DOCUMENT UPLOADED' body='An email will be sent to you immediately we review this document.' close={setCloseTab} />
                                </div> 
                                <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                            </>
                        ) : null} 
        </div>
    )
}
