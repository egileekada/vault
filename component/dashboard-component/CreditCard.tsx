import React from 'react'
import { useQuery } from 'react-query'

export default function CreditCard(props: any) {

    const [show, setShow] = React.useState(false)

    const { isLoading, data } = useQuery('cards', () =>
        fetch(`https://api.vaultafrica.co/cards`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )

    // const request = fetch(`https://api.vaultafrica.co/cards`, {
    //             method: 'GET',
    //             headers: {
    //             'Content-Type': 'application/json',
    //             Authorization : `Bearer ${localStorage.getItem('token')}`
    //             }, 
    //         });  

    console.log(data)
    return (
        <div className='lg:w-full w-auto dashboardslide flex overflow-x-auto flex-row mt-6 items-center' >
            {!isLoading ?
                <>
                    {data.length > 0 ? 
                        <>
                            {data.map((item: any, index: any)=> {
                                if(index === 0 ){
                                    return( 
                                        <div style={{ backgroundColor: '#6691FF'}} className=' w-auto h-48 ml-2 relative rounded-2xl p-6' > 
                                            <div className=' w-60 flex ' >
                                                <div className='w-full flex flex-1' />
                                                <svg className='cursor-pointer' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.8835 6.31201C12.8835 6.31201 12.5215 10.802 12.3115 12.6933C12.2115 13.5967 11.6535 14.126 10.7395 14.1427C9.00016 14.174 7.25883 14.176 5.52019 14.1393C4.64085 14.1213 4.09219 13.5853 3.99419 12.698C3.78285 10.79 3.42285 6.31201 3.42285 6.31201" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M13.8053 4.15967H2.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M11.6274 4.15998C11.1041 4.15998 10.6534 3.78998 10.5507 3.27732L10.3887 2.46665C10.2887 2.09265 9.95006 1.83398 9.56406 1.83398H6.74206C6.35604 1.83398 6.01738 2.09265 5.91738 2.46665L5.75538 3.27732C5.65271 3.78998 5.20204 4.15998 4.67871 4.15998" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </div> 
                                            <p style={{color: 'white'}} className=' w-32 font-Montserrat-Medium text-sm' >{item.name}</p>
                                            <p style={{color: 'white'}} className=' w-32 font-Montserrat-Medium text-sm' >**** **** **** {item.last}</p>
                                            <div className=' w-full mt-10 flex flex-row items-center ' > 
                                                <p style={{color: 'white'}} className=' w-32 font-Montserrat-Medium text-sm' >{item.expiry}</p>
                                                <div className='w-full flex flex-1' /> 
                                                    <img src='/assets/images/mastercard.png' className='w-8' /> 
                                            </div>
                                        </div>
                                    )
                                } else if(index === 1 ){
                                    return(
                                        <div style={{ backgroundColor: '#FF9979' }} className=' lg:w-4 lg:h-40 w-auto h-48 ml-2 lg:ml-0 lg:p-0 relative rounded-2xl p-6 lg:rounded-tl-none lg:rounded-bl-none'>
                                            <div className='w-60 lg:hidden flex flex-col' >
                                                <div className='w-full flex ' >
                                                    <div className='w-full flex flex-1' />
                                                    <svg className='cursor-pointer' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.8835 6.31201C12.8835 6.31201 12.5215 10.802 12.3115 12.6933C12.2115 13.5967 11.6535 14.126 10.7395 14.1427C9.00016 14.174 7.25883 14.176 5.52019 14.1393C4.64085 14.1213 4.09219 13.5853 3.99419 12.698C3.78285 10.79 3.42285 6.31201 3.42285 6.31201" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M13.8053 4.15967H2.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M11.6274 4.15998C11.1041 4.15998 10.6534 3.78998 10.5507 3.27732L10.3887 2.46665C10.2887 2.09265 9.95006 1.83398 9.56406 1.83398H6.74206C6.35604 1.83398 6.01738 2.09265 5.91738 2.46665L5.75538 3.27732C5.65271 3.78998 5.20204 4.15998 4.67871 4.15998" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </div> 
                                                <p style={{color: 'white'}} className=' w-32 font-Montserrat-Medium text-sm' >{item.name}</p>
                                                <p style={{color: 'white'}} className=' w-32 font-Montserrat-Medium text-sm' >**** **** **** {item.last}</p>
                                                <div className=' w-full mt-10 flex flex-row items-center ' > 
                                                    <p style={{color: 'white'}} className=' w-32 font-Montserrat-Medium text-sm' >{item.expiry}</p>
                                                    <div className='w-full flex flex-1' /> 
                                                    <img src='/assets/images/mastercard.png' className='w-8' /> 
                                                </div> 
                                            </div>
                                        </div>
                                    )
                                }else if(index === 2 ){
                                    return(
                                        <div style={{ backgroundColor: '#FFE27C' }} className=' lg:w-4 lg:h-32 w-auto h-48 ml-2 lg:ml-0 lg:p-0 relative rounded-2xl p-6 lg:rounded-tl-none lg:rounded-bl-none'>
                                            <div className='w-60 lg:hidden flex flex-col' >
                                                <div className='w-full flex ' >
                                                    <div className='w-full flex flex-1' />
                                                    <svg className='cursor-pointer' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.8835 6.31201C12.8835 6.31201 12.5215 10.802 12.3115 12.6933C12.2115 13.5967 11.6535 14.126 10.7395 14.1427C9.00016 14.174 7.25883 14.176 5.52019 14.1393C4.64085 14.1213 4.09219 13.5853 3.99419 12.698C3.78285 10.79 3.42285 6.31201 3.42285 6.31201" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M13.8053 4.15967H2.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M11.6274 4.15998C11.1041 4.15998 10.6534 3.78998 10.5507 3.27732L10.3887 2.46665C10.2887 2.09265 9.95006 1.83398 9.56406 1.83398H6.74206C6.35604 1.83398 6.01738 2.09265 5.91738 2.46665L5.75538 3.27732C5.65271 3.78998 5.20204 4.15998 4.67871 4.15998" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </div> 
                                                <p style={{color: 'white'}} className=' w-32 font-Montserrat-Medium text-sm' >{item.name}</p>
                                                <p style={{color: 'white'}} className=' w-32 font-Montserrat-Medium text-sm' >**** **** **** {item.last}</p>
                                                <div className=' w-full mt-10 flex flex-row items-center ' > 
                                                    <p style={{color: 'white'}} className=' w-32 font-Montserrat-Medium text-sm' >{item.expiry}</p>
                                                    <div className='w-full flex flex-1' /> 
                                                    <img src='/assets/images/mastercard.png' className='w-8' /> 
                                                </div> 
                                            </div>
                                        </div>
                                    )
                                }else{
                                    return( 
                                        <div style={{ backgroundColor: '#000' }} className=' lg:w-4 lg:h-32 w-auto lg:hidden h-48 ml-2 lg:ml-0 lg:p-0 relative rounded-2xl p-6 lg:rounded-tl-none lg:rounded-bl-none'>
                                            <div className='w-60 lg:hidden flex flex-col' >
                                                <div className='w-full flex ' >
                                                    <div className='w-full flex flex-1' />
                                                    <svg className='cursor-pointer' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.8835 6.31201C12.8835 6.31201 12.5215 10.802 12.3115 12.6933C12.2115 13.5967 11.6535 14.126 10.7395 14.1427C9.00016 14.174 7.25883 14.176 5.52019 14.1393C4.64085 14.1213 4.09219 13.5853 3.99419 12.698C3.78285 10.79 3.42285 6.31201 3.42285 6.31201" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M13.8053 4.15967H2.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M11.6274 4.15998C11.1041 4.15998 10.6534 3.78998 10.5507 3.27732L10.3887 2.46665C10.2887 2.09265 9.95006 1.83398 9.56406 1.83398H6.74206C6.35604 1.83398 6.01738 2.09265 5.91738 2.46665L5.75538 3.27732C5.65271 3.78998 5.20204 4.15998 4.67871 4.15998" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </div> 
                                                <p style={{color: 'white'}} className=' w-32 font-Montserrat-Medium text-sm' >{item.name}</p>
                                                <p style={{color: 'white'}} className=' w-32 font-Montserrat-Medium text-sm' >**** **** **** {item.last}</p>
                                                <div className=' w-full mt-10 flex flex-row items-center ' > 
                                                    <p style={{color: 'white'}} className=' w-32 font-Montserrat-Medium text-sm' >{item.expiry}</p>
                                                    <div className='w-full flex flex-1' /> 
                                                    <img src='/assets/images/mastercard.png' className='w-8' /> 
                                                </div> 
                                            </div>
                                        </div>
                                    )
                                }
                            })} 
                        </>
                    : 
                        <div className='w-full h-full flex justify-center items-center flex-col'> 
                            <p className='font-Montserrat-Medium w-80 text-sm text-center' >You have no Debit Card.</p>
                        </div>
                    }
                </>
            : 
                <div className='w-full h-full flex justify-center items-center ' >
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-vault"></div>
                </div>
            }
            <div className='lg:w-full flex lg:flex-1' />
            <div onClick={()=> props.open(true)} className=' h-40 w-auto px-4  ml-14 rounded-2xl  cursor-pointer mr-12 lg:mr-6 border border-black shadow-md flex justify-center items-center' >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="11.5" fill="white" stroke="#000"/>
                    <path d="M12 12L12 18M12 6V12V6ZM12 12L18 12L12 12ZM12 12H6H12Z" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> 
            </div>
        </div>
    )
}
