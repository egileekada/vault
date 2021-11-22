import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import TabIcons from '../TabIcons'
import FAQ from './component/FAQ'
import TermOfUse from './component/TermOfUse'

export default function LegalTab(props: any){

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
        <div className='w-full h-auto py-6 lg:py-10 lg:px-14' >
            {tab === -1 ?
                <> 
                <div className='w-full flex items-center  ' > 
                    <div onClick={()=> setMobile(false)} style={{backgroundColor: '#F9F9F9'}} className='rounded-full mr-12 lg:hidden cursor-pointer p-2'>
                        <IoIosArrowBack size='20px' />
                    </div>   
                    <p className='font-Montserrat-Bold text-base ' >Legal</p> 
                </div>  
                    {tabArray.map((item: any, index: any)=> {
                        return(
                            <div key={index} onClick={()=> setTab(index)} style={{background: 'rgba(224, 224, 224, 0.2)', opacity:'0.8'}} className='w-full rounded-lg cursor-pointer flex items-center mt-6 my-2 p-3' >
                                <div style={{border:'1px solid #000000', borderRadius: '12px'}} className='w-auto p-2 rounded-2xl' >
                                    <TabIcons icons='Legal' />
                                </div>
                                <div className=' w-auto mx-2' >
                                    <p className='font-Montserrat-Bold text-base' >{item.name}</p>
                                    <p style={{color:'#667B8E'}} className='w-auto font-Montserrat-Medium text-xs' >{item.detail}</p>
                                </div>
                                <div className='w-full flex flex-1' />
                                <IoIosArrowForward size='20px' />
                            </div> 
                        )
                    })} 
                </> 
                :tab === 0 ? 
                    <TermOfUse close={setTab} />
                    :tab === 1 ? 
                        <FAQ close={setTab} />
            :null}
        </div>
    )
}
