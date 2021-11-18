import { Input } from '@chakra-ui/input'
import { FastField } from 'formik'
import React from 'react'
import { IoIosClose } from 'react-icons/io'
import RadioButton from '../../reusable-modal/RadioButton'

export default function Transaction(props: any) {

    const [sort, setSort] = React.useState(false)
    const Array = [ 
        {
            name: 'MBA BRIGHT CHISOM', 
            amount: '₦ 200,000.00',
            time: '1:00 PM',
            image: '/assets/images/visa.png'
        }, 
        {
            name: 'DAVID SOLOMON KINGSLEY', 
            amount: '₦ 35,000.00',
            time: '5:45 PM',
            image: '/assets/images/mastercard.png'
        },  
    ]  

    return (
        <div className='  w-full lg:w-560px bg-white px-4 lg:px-8  h-screen'  >
            <div className='w-full flex flex-row items-center py-10' > 
                <p onClick={()=> props.close(false)} style={{color:'#03C8DB'}} className='font-Montserrat-Bold text-sm cursor-pointer ' >Go back</p>
                <div className='w-full flex flex-1' />
                <div onClick={()=> props.close(false)} style={{backgroundColor: '#FAFAFA', borderRadius: '4px'}} className='w-auto h-auto cursor-pointer' >
                    <IoIosClose size='30px' />
                </div>
            </div>
            <p className='text-center font-Inter-Medium text-base' >Transaction</p>

            <div className='w-full relative pr-6 pt-8 pb-2' >
                <div className='absolute w-full flex pt-2 pl-3 pr-8' >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.7659 20.755C16.7301 20.755 20.7545 16.7306 20.7545 11.7664C20.7545 6.80215 16.7301 2.77783 11.7659 2.77783C6.80166 2.77783 2.77734 6.80215 2.77734 11.7664C2.77734 16.7306 6.80166 20.755 11.7659 20.755Z" stroke="#1D1D1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.0176 18.4849L21.5416 21.9998" stroke="#1D1D1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div className='w-full flex flex-1' />
                    <svg onClick={()=> setSort(true)} className='cursor-pointer z-10' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.0918 9.4043H20.9158" stroke="#002343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.4414 13.3096H16.4506" stroke="#002343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.0039 13.3096H12.0132" stroke="#002343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.55859 13.3096H7.56786" stroke="#002343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.4414 17.1963H16.4506" stroke="#002343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.0039 17.1963H12.0132" stroke="#002343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.55859 17.1963H7.56786" stroke="#002343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.043 2V5.29078" stroke="#002343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.96484 2V5.29078" stroke="#002343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2383 3.5791H7.77096C4.83427 3.5791 3 5.21504 3 8.22213V17.2718C3 20.3262 4.83427 21.9999 7.77096 21.9999H16.229C19.175 21.9999 21 20.3545 21 17.3474V8.22213C21.0092 5.21504 19.1842 3.5791 16.2383 3.5791Z" stroke="#002343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                {sort ? 
                    <div style={{borderRadius:'8px'}} className='absolute shadow-md bg-white right-5 z-20 px-2 py-3' >
                        
                        <div className='w-full flex justify-end' >
                                <IoIosClose onClick={()=> setSort(false)} className='cursor-pointer' size='20px' />
                            </div>
                        <div className='w-full flex' >
                            <RadioButton array={['Last week','Last Month','Last (2) Months']} size='20px' font='12px' />
                        </div>
                    </div>
                :null}
                <Input placeholder='Search' paddingLeft='12' fontSize='sm' />
            </div>

            <div className='w-full mt-4' >
                <p style={{color: '#828282'}} className=' w-auto font-Montserrat-Regular text-xs ' >21/MAY/2021</p>
            </div>
            {Array.map((item: any, index: any) => {
                return(
                    <div key={index} className='w-full flex cursor-pointer flex-row mt-4 items-center' >
                        <div style={{backgroundColor: '#F1ECFE', borderRadius: '8px'}} className='w-9 h-8 flex px-1 items-center justify-center'  >
                            <img className='w-full' src={item.image} /> 
                        </div>
                        <div className='w-auto ml-2' >
                            <p style={{color: '#282828'}} className=' w-auto font-Montserrat-Bold text-xs' >{item.name}</p>
                            <p style={{color: '#828282'}} className=' w-auto font-Montserrat-Regular text-xs' >{item.time}</p>
                        </div>
                        <div className='w-full flex flex-1' /> 
                        <p style={{color: '#282828'}} className=' w-auto font-Montserrat-Regular text-xs' >{item.amount}</p> 
                    </div>
                )
            })}
            <div className='w-full mt-4' >
                <p style={{color: '#828282'}} className=' w-auto font-Montserrat-Regular text-xs ' >21/MAY/2020</p>
            </div>
            {Array.map((item: any, index: any) => {
                return(
                    <div key={index} className='w-full flex flex-row mt-4 items-center' >
                        <div style={{backgroundColor: '#F1ECFE', borderRadius: '8px'}} className='w-9 h-8 flex px-1 items-center justify-center'  >
                            <img className='w-full' src={item.image} /> 
                        </div>
                        <div className='w-auto ml-2' >
                            <p style={{color: '#282828'}} className=' w-auto font-Montserrat-Bold text-xs' >{item.name}</p>
                            <p style={{color: '#828282'}} className=' w-auto font-Montserrat-Regular text-xs' >{item.time}</p>
                        </div>
                        <div className='w-full flex flex-1' /> 
                        <p style={{color: '#282828'}} className=' w-auto font-Montserrat-Regular text-xs' >{item.amount}</p> 
                    </div>
                )
            })}
        </div> 
    )
}
