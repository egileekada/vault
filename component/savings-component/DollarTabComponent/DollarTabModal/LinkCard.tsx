import { Input } from '@chakra-ui/input';
import React from 'react';
import { IoIosClose } from 'react-icons/io';

export default function LinkCard(props: any) {

    return (
        <div style={{width : '560px'}} className='bg-white px-8 h-screen'  >
            <div className='w-full flex flex-row items-center py-10' > 
                <p onClick={()=> props.close(-1)} style={{color:'#03C8DB'}} className='font-Montserrat-Bold text-sm cursor-pointer ' >Go back</p>
                <div className='w-full flex flex-1' />
                <div onClick={()=> props.close(-1)} style={{backgroundColor: '#FAFAFA', borderRadius: '4px'}} className='w-auto h-auto cursor-pointer' >
                    <IoIosClose size='30px' />
                </div>
            </div>
            <p className='font-Inter-Medium text-base' >{props.header}</p>
            <p style={{color: '#828282'}} className='font-Montserrat-Regular text-xs mt-1' >Add your card details to link your card.</p>
            <div className='mt-10' >
                <p className=' font-Montserrat-Regular text-xs mb-2' >Card details</p>
                <Input backgroundColor='#E0E0E0' />
                <div style={{marginTop: '25px'}} className='w-full flex flex-row' >
                    <Input backgroundColor='#E0E0E0' marginRight='25px' />
                    <Input backgroundColor='#E0E0E0' marginLeft='25px' />
                </div>
                <button onClick={()=> props.next(2)} style={{backgroundColor: '#002343'}} className='w-full rounded text-white py-3 mt-8 text-sm font-Montserrat-Medium ' >PROCEED TO LINK CARD 🔒</button>
            </div>
        </div>
    );
}
