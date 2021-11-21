import { Input, Select } from '@chakra-ui/react'
import React from 'react'
import SuccessModal from './SucessModal'

export default function AccountAddress(props: any) {
 
    const [showModal, setShowModal] =   React.useState(false)
    const [closeTab, setCloseTab] =   React.useState(false) 

    React.useEffect(() => {
        {closeTab ?
            props.tab(-1)
        :null}
    },)

    return (
        <div className='w-full h-full py-10 px-14'> 
            <p className='font-Montserrat-Bold text-base ' >Account Name</p> 
            <div className='w-560px' >
                <p className='font-Montserrat-Medium text-sm mt-6' >You full legal names as it apperas on all your document</p>
                <p className='font-Montserrat-Medium text-sm mt-8 mb-1' >Country</p>
                    <Select placeholder='Nigeria' backgroundColor='#fff' fontSize='sm' />
                <p className='font-Montserrat-Medium text-sm mt-4 mb-1' >Street Name</p>
                    <Input backgroundColor='#fff' fontSize='sm' />
                <div className='w-full flex'>
                    <div className='w-full mr-2' > 
                        <p className='font-Montserrat-Medium text-sm mt-4 mb-1' >State</p>
                            <Input backgroundColor='#fff' fontSize='sm' />
                    </div> 
                    <div className='w-full ml-2' > 
                        <p className='font-Montserrat-Medium text-sm mt-4 mb-1' >City</p>
                            <Input backgroundColor='#fff' fontSize='sm' />
                    </div> 
                </div>

                <button onClick={()=> setShowModal(true)} style={{backgroundColor: '#002343'}} className='w-full rounded text-white py-3 mt-12 text-sm font-Montserrat-Medium ' >Submit</button>
            </div>
            {showModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <SuccessModal image={true} header='SUCCESS' body='You address has been updated' close={setCloseTab} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
        </div>
    )
}
