import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import TabIcons from '../TabIcons';
import ForgotPin from './component/ForgotPin';
import TransactionPin from './component/TransactionPin';

export default function SecurityTab(props: any) { 

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
                    <div className='w-full flex items-center ' > 
                        <div onClick={()=> setMobile(false)} style={{backgroundColor: '#F9F9F9'}} className='rounded-full mr-12 lg:hidden cursor-pointer p-2'>
                            <IoIosArrowBack size='20px' />
                        </div>   
                        <p className='font-Montserrat-Bold text-base ' >Security</p> 
                    </div> 
                    <div onClick={()=> setTab(0)} style={{background: 'rgba(224, 224, 224, 0.2)', opacity:'0.8'}} className='w-full rounded-lg cursor-pointer flex items-center mt-10 my-2 p-3' >
                        <div style={{border:'1px solid #000000', borderRadius: '12px'}} className='w-auto p-2 rounded-2xl' >
                            <svg width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25026 1.33516C10.1969 1.33516 11.7823 2.9205 11.7823 4.86916L11.7822 5.92023C12.9657 6.3321 13.817 7.45877 13.817 8.78103V11.6404C13.817 13.3104 12.459 14.6684 10.789 14.6684H5.69499C4.02499 14.6684 2.66699 13.3104 2.66699 11.6404V8.78103C2.66699 7.45902 3.51801 6.33253 4.70113 5.92046L4.70159 4.86916C4.70559 3.90916 5.07693 3.02316 5.74693 2.35916C6.41759 1.6945 7.30293 1.30983 8.25026 1.33516ZM10.789 6.75303H5.69499C4.57633 6.75303 3.66699 7.66236 3.66699 8.78103V11.6404C3.66699 12.759 4.57633 13.6684 5.69499 13.6684H10.789C11.907 13.6684 12.817 12.759 12.817 11.6404V8.78103C12.817 7.66236 11.907 6.75303 10.789 6.75303ZM8.24186 8.97023C8.51786 8.97023 8.74186 9.19423 8.74186 9.47023V10.9509C8.74186 11.2269 8.51786 11.4509 8.24186 11.4509C7.96586 11.4509 7.74186 11.2269 7.74186 10.9509V9.47023C7.74186 9.19423 7.96586 8.97023 8.24186 8.97023ZM8.24826 2.33516H8.23759C7.56226 2.33516 6.92959 2.59516 6.45159 3.06916C5.97026 3.54516 5.70426 4.1805 5.70159 4.85783L5.70099 5.75265H10.7817L10.7823 4.86916C10.7823 3.47183 9.64559 2.33516 8.24826 2.33516Z" fill="#002343"/>
                            </svg>
                        </div>
                        <div className=' w-auto mx-2' >
                            <p className='font-Montserrat-Bold text-base' >Transaction Pin</p>
                            <p style={{color:'#667B8E'}} className='w-auto font-Montserrat-Medium text-xs' >Change your Transaction Pin</p>
                        </div>
                        <div className='w-full flex flex-1' />
                        <IoIosArrowForward size='20px' />
                    </div>  
                </>  
                :tab === 0 ?
                    <TransactionPin tab={setTab} close={setMobile} />
                    :tab === 1 ?
                        <ForgotPin tab={setTab} close={setMobile} />
            :null}
        </div>
    );
}
