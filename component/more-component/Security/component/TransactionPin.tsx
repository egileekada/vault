import { Input } from '@chakra-ui/react'
import React from 'react'
import SuccessModal from '../../AccountDetail/component/SucessModal'

export default function TransactionPin(props: any) { 

    const [showModal, setShowModal] =   React.useState(false)
    const [closeTab, setCloseTab] =   React.useState(false) 

    React.useEffect(() => {
        {closeTab ?
            props.tab(-1)
        :null}
    },)

    return (
        <div className='w-full h-full py-10 px-14'>
            <p className='font-Montserrat-Bold text-base ' >Security</p> 
            <div className='w-560px' > 
                <p className='font-Montserrat-Medium text-sm mt-8 mb-1' >Current PIN</p>
                    <Input backgroundColor='#fff' fontSize='sm' />
                <p className='font-Montserrat-Medium text-sm mt-4 mb-1' >New PIN</p>
                    <Input backgroundColor='#fff' fontSize='sm' />
                <p className='font-Montserrat-Medium text-sm mt-4 mb-1' >Confirm new PIN</p>
                    <Input backgroundColor='#fff' fontSize='sm' />

                <p className='font-Montserrat-Medium text-sm text-center mt-12 ' >Forgot Transaction Pin? <span onClick={()=> props.tab(1)} className='cursor-pointer' style={{color: '#03C8DB'}} >Reset Now </span></p>
                <button onClick={()=>setShowModal(true)} style={{backgroundColor: '#002343'}} className='w-full rounded text-white py-3 mt-12 text-sm font-Montserrat-Medium ' >Update</button>
            </div>
            {showModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <SuccessModal image={true} header='SUCCESS' body='You new Transaction PIN has been updated' close={setCloseTab} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
        </div>
    )
}
