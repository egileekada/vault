import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { IUser, UserContext } from '../../../context/UserContext'
import AccountAddress from './component/AccountAddress'
import AccountContact from './component/AccountContact'
import AccountEmail from './component/AccountEmail'
import AcountIdentification from './component/AccountIdentification'
import AccountName from './component/AccountName'

export default function AccountTab(props: any) {
     
    const userContext: IUser = React.useContext(UserContext);  

    const CheckValues =(index: any)=> {
        if(index === null){
            return 'Not Available'
        } else {
            index
        }
    }
 
    const tabArray =[
        {
            name: userContext.userData.firstname+ ' '+userContext.userData.lastname,
            detail: 'Account Name'
        },
        {
            name: CheckValues(userContext.userData.street),
            detail: 'Address'
        },
        {
            name: userContext.userData.phoneNumber,
            detail: 'Contact Details'
        },
        {
            name: userContext.userData.email,
            detail: 'Email Address'
        },
        {
            name: 'NIN',
            detail: 'Identification'
        }
    ]

    const [tab, setTab] = React.useState(-1)
    const [mobile, setMobile] = React.useState(true) 

    const CloseHandler =()=> { 
        props.tab(false)
        setTab(-1)
        setMobile(true)
    }

    React.useEffect(() => {
        {!mobile ?
            CloseHandler()
        :null}
    },)

    return (
        <div className='w-full h-auto justify-center items-center flex flex-col py-6 lg:py-10 lg:px-14' >
            {tab === -1 ?
                <>  
                    <div className='w-full flex lg:hidden items-center mb-8 ' > 
                        <div onClick={()=> setMobile(false)} style={{backgroundColor: '#F9F9F9'}} className='rounded-full mr-12 lg:hidden cursor-pointer p-2'>
                            <IoIosArrowBack size='20px' />
                        </div>   
                        <p className='font-Montserrat-Bold text-base' >Account Name</p>
                    </div> 
                    <div className='w-16 rounded-2xl h-16 bg-yellow-300' >

                    </div>
                    <p className='font-Montserrat-Bold text-base mb-10' >{userContext.userData.firstname+ ' '+userContext.userData.lastname}</p>
                    {tabArray.map((item: any, index: any)=> {
                        return(
                            <div key={index} onClick={()=> setTab(index)} style={{background: 'rgba(224, 224, 224, 0.2)', opacity:'0.8'}} className='w-full rounded-lg cursor-pointer flex items-center my-2 p-3' >
                                <div className=' w-auto mx-2' >
                                    <p className='font-Montserrat-Bold text-base' >{item.name}</p>
                                    <p style={{color:'#667B8E'}} className='w-40 font-Montserrat-Medium text-xs' >{item.detail}</p>
                                </div>
                                <div className='w-full flex flex-1' />
                                <IoIosArrowForward size='20px' />
                            </div> 
                        )
                    })} 
                </> 
                : tab === 0 ?
                    <AccountName tab={setTab} close={setMobile} />
                    : tab === 1 ?
                        <AccountAddress tab={setTab} close={setMobile} />
                        : tab === 2 ?
                            <AccountContact tab={setTab} close={setMobile} />
                            : tab === 3 ?
                                <AccountEmail tab={setTab} close={setMobile} />
                                : tab === 4 ?
                                    <AcountIdentification tab={setTab} close={setMobile} />
            :null}
        </div>
    )
}
