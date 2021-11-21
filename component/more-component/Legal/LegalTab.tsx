import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

export default function LegalTab(){

    const tabArray =[
        {
            name: 'Terms of Use',
            detail: 'Our contract with you'
        },
        {
            name: 'FAQ',
            detail: 'Frequently Asked questions'
        }, 
    ]

    const [tab, setTab] = React.useState(-1)

    return (
        <div className='w-full h-auto py-10 px-14' >
            {tab === -1 ?
                <> 
                    <p className='font-Montserrat-Bold text-base ' >Legal</p> 
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
            :null}
        </div>
    )
}
