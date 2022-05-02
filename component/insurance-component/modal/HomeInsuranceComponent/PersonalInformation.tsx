import { Input, Select } from '@chakra-ui/react'
import React from 'react'

export default function PersonalInformation(props: any) {
    return (
        <div className='w-full h-full' > 
            <p className='font-Montserrat-Medium text-base mb-6' >Personal Information</p> 
            <div className='w-full mb-4' > 
                <p className='font-Montserrat-Regular text-sm mb-2' >Title</p>
                <Select size='lg' placeholder='Enter Your Title' fontSize='sm' backgroundColor='#E0E0E0'>
                    <option>Mr</option>
                </Select>
            </div>
            <div className='w-full mb-4' > 
                <p className='font-Montserrat-Regular text-sm mb-2' >First Name</p>
                <Input size='lg' placeholder='Your first name' fontSize='sm' backgroundColor='#E0E0E0' />
            </div>
            <div className='w-full mb-4' > 
                <p className='font-Montserrat-Regular text-sm mb-2' >Last Name</p>
                <Input size='lg' placeholder='Your last name' fontSize='sm' backgroundColor='#E0E0E0' />
            </div>
            <div className='w-full mb-4' > 
                <p className='font-Montserrat-Regular text-sm mb-2' >Gender</p>
                <Input size='lg' placeholder='Enter Your Gender' fontSize='sm' backgroundColor='#E0E0E0' />
            </div>
            <div className='w-full mb-4' > 
                <p className='font-Montserrat-Regular text-sm mb-2' >Email Address</p>
                <Input size='lg' placeholder='Email' fontSize='sm' backgroundColor='#E0E0E0' />
            </div>
            <div className='w-full mb-4' > 
                <p className='font-Montserrat-Regular text-sm mb-2' >Mobile Number</p>
                <Input size='lg' placeholder='090...' fontSize='sm' backgroundColor='#E0E0E0' />
            </div>
            <div className='w-full mb-4' > 
                <p className='font-Montserrat-Regular text-sm mb-2' >Date of Birth</p>
                <Input size='lg' type='date' fontSize='sm' backgroundColor='#E0E0E0' />
            </div>
            <div className='w-full mb-4' > 
                <p className='font-Montserrat-Regular text-sm mb-2' >How did you hear about us</p>
                <Select size='lg' placeholder='Let us know' fontSize='sm' backgroundColor='#E0E0E0' />
            </div>
            <div className='w-full mb-4' > 
                <p className='font-Montserrat-Regular text-sm mb-2' >Cover Start Date</p>
                <Input size='lg' type='date' fontSize='sm' backgroundColor='#E0E0E0' />
            </div>
            <div className='w-full mb-4' > 
                <p className='font-Montserrat-Regular text-sm mb-2' >Property to be Insured</p>
                <Input size='lg' placeholder='Your' fontSize='sm' backgroundColor='#E0E0E0' />
            </div>
            <div className='w-full mb-4' > 
                <p className='font-Montserrat-Regular text-sm mb-2' >Property to be Insured</p>
                <Select size='lg' placeholder='Building Only' fontSize='sm' backgroundColor='#E0E0E0' />
            </div>
            <div className='w-full mb-4' > 
                <p className='font-Montserrat-Regular text-sm mb-2' >Building Value</p>
                <Input size='lg' placeholder='0' fontSize='sm' backgroundColor='#E0E0E0' />
            </div>
            <div className='w-full mb-4' > 
                <p className='font-Montserrat-Regular text-sm mb-2' >Moveable Content Value</p>
                <Input size='lg' placeholder='0' fontSize='sm' backgroundColor='#E0E0E0' />
            </div>
            <div className='w-full mb-4' > 
                <p className='font-Montserrat-Regular text-sm mb-2' >Non-Moveable Content Value</p>
                <Input size='lg' placeholder='0' fontSize='sm' backgroundColor='#E0E0E0' />
            </div>
            <div className='w-full mb-4' > 
                <p className='font-Montserrat-Regular text-sm mb-2' >Address</p>
                <Input size='lg' placeholder='Address' fontSize='sm' backgroundColor='#E0E0E0' />
            </div>
            <div className='w-full mb-4' > 
                <p className='font-Montserrat-Regular text-sm mb-2' >State</p>
                <Select size='lg' placeholder='Enter State' fontSize='sm' backgroundColor='#E0E0E0' />
            </div>
            <div className='w-full mb-4' > 
                <p className='font-Montserrat-Regular text-sm mb-2' >Local Government Area</p>
                <Select size='lg' placeholder='Enter Local Government Area' fontSize='sm' backgroundColor='#E0E0E0' />
            </div>
            <button onClick={()=> props.next(4)}  className='font-Montserrat-SemiBold mt-8 w-full text-white py-3 text-sm rounded-md bg-vault' >PROCEED</button>
        </div>
    )
} 