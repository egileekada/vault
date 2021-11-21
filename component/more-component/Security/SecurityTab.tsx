import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import ForgotPin from './component/ForgotPin';
import TransactionPin from './component/TransactionPin';

export default function SecurityTab() { 

    const [tab, setTab] = React.useState(-1)

    return (
        <div className='w-full h-auto py-10 px-14' >
            {tab === -1 ?
                <> 
                <p className='font-Montserrat-Bold text-base ' >Security</p> 
                    <div onClick={()=> setTab(0)} style={{background: 'rgba(224, 224, 224, 0.2)', opacity:'0.8'}} className='w-full rounded-lg cursor-pointer flex items-center mt-10 my-2 p-3' >
                        <div className=' w-auto mx-2' >
                            <p className='font-Montserrat-Bold text-base' >Transaction Pin</p>
                            <p style={{color:'#667B8E'}} className='w-auto font-Montserrat-Medium text-xs' >Change your Transaction Pin</p>
                        </div>
                        <div className='w-full flex flex-1' />
                        <IoIosArrowForward size='20px' />
                    </div>  
                </>  
                :tab === 0 ?
                    <TransactionPin tab={setTab} />
                    :tab === 1 ?
                        <ForgotPin tab={setTab} />
            :null}
        </div>
    );
}
