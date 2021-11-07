import { Input } from '@chakra-ui/react'
import React from 'react'
import { IoIosArrowDropright, IoIosArrowRoundForward } from 'react-icons/io'
import RadioButton from '../../dashboard-component/RadioButton'

export default function JointSavingTab() {
    return (
        <div className='w-full flex-row flex mb-10' >
            <div className='w-full mx-3'>
                <p className='font-Montserrat-Bold text-base' >Joint Savings</p>
                <p className='font-Montserrat-Medium text-sm mt-6 mb-2' >What is tthe name of your group?</p>
                <Input backgroundColor='#E0E0E0' placeholder='Name your group' fontSize='sm' />
                <p className='font-Montserrat-Medium text-sm mt-4 mb-2' >What are you saving for?</p>
                <Input backgroundColor='#E0E0E0' placeholder='Name your savings plan' fontSize='sm' />
                <p className='font-Montserrat-Medium text-sm mt-4 mb-2' >Amount<span style={{color: '#828282'}}>(₦)</span></p>
                <Input backgroundColor='#E0E0E0' placeholder='Amount you wanat to save' fontSize='sm' />
                <p className='font-Montserrat-Medium text-sm mt-6 mb-2' >Start Date</p>
                <Input backgroundColor='#E0E0E0' placeholder='DD-MM-YYYY' fontSize='sm' />
                <p className='font-Montserrat-Medium text-sm mt-4 mb-2' >End Date</p>
                <Input backgroundColor='#E0E0E0' placeholder='DD-MM-YYYY' fontSize='sm' />
                <p className='font-Montserrat-Bold text-base mt-8 mb-4' >How would you like to save?</p>
                <RadioButton array={['Daily','Weekly','Monthly']} size='32px' font='14px' />
            </div>
            <div className='w-full mx-3'>
                <p className='font-Montserrat-Bold text-base' >Add Participants</p>
                <div style={{backgroundColor:'#E0E0E0'}} className='w-full flex items-center rounded px-4 py-3 mt-8' >
                    <p className='font-Montserrat-Regular text-sm' >Find friends using vault</p>
                    <div className='w-full flex flex-1' />
                    <IoIosArrowRoundForward size='25px' className='cursor-pointer' />
                </div>
                <div className='w-full flex flex-col py-14' > 
                    <p className='font-Montserrat-Bold text-sm text-center' >No Participant added yet</p>
                    <p className='font-Montserrat-Regular text-xs text-center' >You have to add at least one<br/> participant to proceed</p>
                </div> 
                <button style={{backgroundColor: '#002343'}} className='w-full font-Montserrat-Bold py-3 text-white rounded text-sm font-Montserrat-Bold' >PROCEED</button>
            </div>
        </div>
    )
}
