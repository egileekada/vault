import React from 'react'
import { IoIosClose } from 'react-icons/io'
import MedicalDetails from '../MedicalDetails'
import AmountOfUnit from './HomeInsuranceComponent/AmountOfUnit'
import Benfits from './HomeInsuranceComponent/Benfits'
import GetQuote from './HomeInsuranceComponent/GetQuote'
import PersonalInformation from './HomeInsuranceComponent/PersonalInformation'

export default function HomeInsurance(props: any) {

    const [tabs, setTabs] = React.useState(0)  

    return (
        <div className=' w-full lg:w-560px bg-white h-screen overflow-y-auto'  >
            <div className='w-full px-8 flex flex-row items-center pb-6 pt-10' > 
                <p onClick={()=> props.close(0)} style={{color:'#03C8DB'}} className='font-Montserrat-Bold text-sm cursor-pointer ' >Go back</p>
                <div className='w-full flex flex-1' />
                <div onClick={()=> props.close(-1)} style={{backgroundColor: '#FAFAFA', borderRadius: '4px'}} className='w-auto h-auto cursor-pointer' >
                    <IoIosClose size='30px' />
                </div>
            </div> 
            <div className='w-full  relative ' >
                <p className=' font-Montserrat-Bold text-sm text-center' >Home Insurance</p>
                <svg className='absolute right-8 -top-2'  width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0003 4.66699C9.75099 4.66699 4.66699 9.75099 4.66699 16.0003C4.66699 22.2497 9.75099 27.3337 16.0003 27.3337C22.2497 27.3337 27.3337 22.2497 27.3337 16.0003C27.3337 9.75099 22.2497 4.66699 16.0003 4.66699ZM16.0003 29.3337C8.64832 29.3337 2.66699 23.3523 2.66699 16.0003C2.66699 8.64832 8.64832 2.66699 16.0003 2.66699C23.3523 2.66699 29.3337 8.64832 29.3337 16.0003C29.3337 23.3523 23.3523 29.3337 16.0003 29.3337Z" fill="#002343"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9922 17.8305C15.4402 17.8305 14.9922 17.3825 14.9922 16.8305V10.9385C14.9922 10.3865 15.4402 9.93848 15.9922 9.93848C16.5442 9.93848 16.9922 10.3865 16.9922 10.9385V16.8305C16.9922 17.3825 16.5442 17.8305 15.9922 17.8305Z" fill="#002343"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.005 22.3942C15.2677 22.3942 14.665 21.7982 14.665 21.0609C14.665 20.3235 15.2557 19.7275 15.9917 19.7275H16.005C16.7424 19.7275 17.3384 20.3235 17.3384 21.0609C17.3384 21.7982 16.7424 22.3942 16.005 22.3942Z" fill="#002343"/>
                </svg>
            </div>

            <div className='w-full bg-yellow-400 h-44 my-8 relative' >  
                <img src='/assets/images/Insurance1.png' className='w-full h-full object-cover ' alt='insure2' /> 
            </div>
            <div className='w-full px-8 pb-8' >
                {tabs === 0 && (
                    <GetQuote next={setTabs} />
                )}
                {tabs === 1 && (
                    <AmountOfUnit next={setTabs} />
                )}
                {tabs === 2 && (
                    <Benfits next={setTabs} />
                )}
                {tabs === 3 && (
                    <PersonalInformation next={setTabs} />
                )}
                {tabs === 4 && (
                    <MedicalDetails next={setTabs} />
                )}
            </div>
        </div>
    )
}
