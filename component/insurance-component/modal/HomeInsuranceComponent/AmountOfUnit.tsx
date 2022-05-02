import { Checkbox, Input, Select } from '@chakra-ui/react'
import React from 'react'

export default function AmountOfUnit(props: any) {

    const [show, setShow] = React.useState(false)

    return (
        <div className='w-full h-full' > 
            <p className='font-Montserrat-Medium text-base mb-6' >Enter amount of unit</p>
            <div className={!show ? '': 'hidden'} >
                <div className='w-full mb-4' > 
                    <p className='font-Montserrat-Regular text-sm mb-2' >First Name</p>
                    <Input size='lg' placeholder='Your first name' fontSize='sm' backgroundColor='#E0E0E0' />
                </div>
                <div className='w-full mb-4' > 
                    <p className='font-Montserrat-Regular text-sm mb-2' >Last Name</p>
                    <Input size='lg' placeholder='Your last name' fontSize='sm' backgroundColor='#E0E0E0' />
                </div>
                <div className='w-full mb-4' > 
                    <p className='font-Montserrat-Regular text-sm mb-2' >Email Address</p>
                    <Input size='lg' placeholder='You@email.com' fontSize='sm' backgroundColor='#E0E0E0' />
                </div>
                <div className='w-full mb-4' > 
                    <p className='font-Montserrat-Regular text-sm mb-2' >Contact Number</p>
                    <Input size='lg' placeholder='080 000 000 000' fontSize='sm' backgroundColor='#E0E0E0' />
                </div>
                <button onClick={()=> setShow(true)} className='w-full py-3 text-sm mt-10 rounded-lg ' style={{ color: '#667B8E', backgroundColor: '#CCD3D9'}} >PROCEED</button>
            </div>
            <div className={show ? '': 'hidden'} >
                <div className='w-full mb-4' > 
                    <p className='font-Montserrat-Regular text-sm mb-2' >Property to be Insured</p>
                    <Select size='lg' placeholder='Select' fontSize='sm' backgroundColor='#E0E0E0'>
                        <option>Building Only</option>
                    </Select>
                </div>
                <div className='w-full mb-4' > 
                    <p className='font-Montserrat-Regular text-sm mb-2' >Building Value</p>
                    <Input size='lg' placeholder='0' fontSize='sm' backgroundColor='#E0E0E0' />
                </div> 
                <div className='flex' >
                    <Checkbox />
                    <p className='font-Inter-Regular text-sm ml-2' >I declare that i have read the <span className=' font-Inter-SemiBold text-vault' >privacy information</span> on the use of personal data.</p>
                </div> 
                <button onClick={()=> props.next(2)}  className='w-full py-3 text-sm mt-10 rounded-lg ' style={{ color: '#667B8E', backgroundColor: '#CCD3D9'}} >PROCEED</button>
            </div>
        </div>
    )
} 