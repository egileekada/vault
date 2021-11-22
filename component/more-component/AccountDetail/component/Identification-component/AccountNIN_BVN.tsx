import { Select, Input } from '@chakra-ui/react'
import React from 'react'

export default function AccountNIN_BVN(props: any) {
    return (
        <div className='w-full' >
            <p className=' w-full lg:w-560px font-Montserrat-Medium text-sm mt-6 mb-10' >Enter your BVN/NIN for verification</p>
            <p className='font-Montserrat-Medium text-sm mt-8 mb-1' >verification</p>
                <Select placeholder='Select one' backgroundColor='#fff' fontSize='sm' />
            <p className='font-Montserrat-Medium text-sm mt-4 mb-1' >Enter the 11 Digits</p>
                <Input backgroundColor='#fff' fontSize='sm' /> 
            <button onClick={()=> props.close(1)} style={{backgroundColor: '#002343'}} className='w-full rounded text-white py-3 mt-12 text-sm font-Montserrat-Medium ' >Submit</button>
        
            <p style={{color: '#03C8DB'}} className='font-Montserrat-Medium mt-12 text-center text-sm ' >Why do you want my BVN/NIN?</p> 
        </div>
    )
}
