import { Input, Select, Textarea } from '@chakra-ui/react'
import React from 'react'

export default function MedicalDetails(props: any) {
    return (
        <div className='w-full h-full' > 
            <p className='font-Montserrat-Medium text-base mb-6' >Medical Details</p>  
            <div className='w-full mb-4' > 
                <p className='font-Montserrat-Regular text-sm mb-2' >HouseType</p>
                <Select size='lg' placeholder='Select HouseType' fontSize='sm' backgroundColor='#E0E0E0'>
                    <option>Bungalow</option>
                </Select>
            </div>
            <div className='w-full mb-4' > 
                <p className='font-Montserrat-Regular text-sm mb-2' >bedroomNo</p>
                <Input size='lg' placeholder='0' fontSize='sm' backgroundColor='#E0E0E0' />
            </div>
            <div className='w-full mb-4' > 
                <p className='font-Montserrat-Regular text-sm mb-2' >Builtyear</p>
                <Input size='lg' placeholder='0' fontSize='sm' backgroundColor='#E0E0E0' />
            </div>
            <div className='w-full mb-4' > 
                <p className='font-Montserrat-Regular text-sm mb-2' >RiskAddress</p>
                <Textarea size='lg' placeholder='Enter Address' fontSize='sm' backgroundColor='#E0E0E0' />
            </div>
            
            <div style={{backgroundColor:'#F3F3F3'}} className=' p-5 mt-4 rounded-md' >
                <p style={{color: '#667B8E'}} className='font-Montserrat-Regular text-xs' >Monthly</p>
                <div className='w-full mt-4 grid grid-cols-3 gap-6' >
                    <div className='w-full' >
                        <p className='text-xs font-Montserrat-Regular text-vault' >Product</p>
                        <p className='text-xs font-Montserrat-Regular mt-1 ' style={{color: '#304D67'}}  >ALLIANZ - HOME</p>
                    </div> 
                    <div className='w-full' >
                        <p className='text-xs font-Montserrat-Regular text-vault' >Value</p>
                        <p className='text-xs font-Montserrat-Regular mt-1 ' style={{color: '#304D67'}}  >₦10,000</p>
                    </div> 
                    <div className='w-full' >
                        <p className='text-xs font-Montserrat-Regular text-vault' >Reference</p>
                        <p className='text-xs font-Montserrat-Regular mt-1 ' style={{color: '#304D67'}}  >LIFE/WEB/0013499</p>
                    </div> 
                    <div className='w-full' >
                        <p className='text-xs font-Montserrat-Regular text-vault' >Total Premium</p>
                        <p className='text-xs font-Montserrat-Regular mt-1 ' style={{color: '#304D67'}}  >₦20</p>
                    </div> 
                    <div className='w-full' >
                        <p className='text-xs font-Montserrat-Regular text-vault' >Frequency</p>
                        <p className='text-xs font-Montserrat-Regular mt-1 ' style={{color: '#304D67'}}  >Annual</p>
                    </div> 
                    <div className='w-full' >
                        <p className='text-xs font-Montserrat-Regular text-vault' >Installment Premium</p>
                        <p className='text-xs font-Montserrat-Regular mt-1 ' style={{color: '#304D67'}}  >₦20</p>
                    </div> 
                </div>
            </div>
            <button onClick={()=> props.next(4)}  className='font-Montserrat-SemiBold mt-8 w-full text-white py-3 text-sm rounded-md bg-vault' >PROCEED</button>
        </div>
    )
} 