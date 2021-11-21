import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import AccountAddress from './component/AccountAddress'
import AccountContact from './component/AccountContact'
import AccountEmail from './component/AccountEmail'
import AcountIdentification from './component/AccountIdentification'
import AccountName from './component/AccountName'

export default function AccountTab() {

    const tabArray =[
        {
            name: 'Bright Mba',
            detail: 'Account Name'
        },
        {
            name: 'Emmene Port Harcourt Rivers',
            detail: 'Address'
        },
        {
            name: '7890-290-234',
            detail: 'Contact Details'
        },
        {
            name: 'brightbright@gmail.com',
            detail: 'Email Address'
        },
        {
            name: 'NIN',
            detail: 'Identification'
        }
    ]

    const [tab, setTab] = React.useState(-1)

    return (
        <div className='w-full h-auto justify-center items-center flex flex-col py-10 px-14' >
            {tab === -1 ?
                <>
                    <div className='w-16 rounded-2xl h-16 bg-yellow-300' >

                    </div>
                    <p className='font-Montserrat-Bold text-base mb-10' >Bright Mba</p>
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
                    <AccountName tab={setTab} />
                    : tab === 1 ?
                        <AccountAddress tab={setTab} />
                        : tab === 2 ?
                            <AccountContact tab={setTab} />
                            : tab === 3 ?
                                <AccountEmail tab={setTab} />
                                : tab === 4 ?
                                    <AcountIdentification tab={setTab} />
            :null}
        </div>
    )
}
