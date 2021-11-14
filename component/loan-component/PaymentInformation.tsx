import React from 'react'

export default function PaymentInformation(props: any) {
    return (
        <div className='w-full h-full'>
            <div className='w-full flex items-center justify-center' > 
                <button onClick={()=> props.close(0)} style={{backgroundColor:'#03C8DB', color: 'white'}} className='rounded flex w-28 items-center font-Montserrat-Bold py-3 px-4 text-xs my-6 mr-4'  >
                    <svg className='mr-2'  width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="8" fill="#CDF4F8"/>
                        <path d="M4.25 5.5H11.75" stroke="#68DEE9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.25 8H11.75" stroke="#68DEE9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.25 10.5H8.625" stroke="#68DEE9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>History
                </button>
                <button onClick={()=> props.close(1)} style={{backgroundColor:'#03C8DB', color: 'white'}} className='rounded flex w-28 items-center font-Montserrat-Bold py-3 px-4 text-xs my-6 ml-4'  >
                    <svg className='mr-2' width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="8" fill="#CDF4F8"/>
                        <path d="M5.8125 9.09375C6.41656 9.09375 6.90625 8.60406 6.90625 8C6.90625 7.39594 6.41656 6.90625 5.8125 6.90625C5.20844 6.90625 4.71875 7.39594 4.71875 8C4.71875 8.60406 5.20844 9.09375 5.8125 9.09375Z" fill="#68DEE9"/>
                        <path d="M10.1875 9.09375C10.7916 9.09375 11.2812 8.60406 11.2812 8C11.2812 7.39594 10.7916 6.90625 10.1875 6.90625C9.58344 6.90625 9.09375 7.39594 9.09375 8C9.09375 8.60406 9.58344 9.09375 10.1875 9.09375Z" fill="#68DEE9"/>
                    </svg>
                    More
                </button>
            </div>
            <div className='w-full mt-4 px-8' >
                <div style={{backgroundColor: '#F3F3F3'}} className='w-full flex p-1 rounded' >
                    <p className='font-Montserrat-Medium text-sm' >Amount Borrowed</p>
                    <div className='w-full flex flex-1' />
                    <p className='font-Montserrat-Medium text-sm' >₦90,000.00</p>
                </div>
                <div className='w-full flex p-1 rounded' >
                    <p className='font-Montserrat-Medium text-sm' >Loan Limit</p>
                    <div className='w-full flex flex-1' />
                    <p className='font-Montserrat-Medium text-sm' >₦10,000.00</p>
                </div>
                <div style={{backgroundColor: '#F3F3F3'}} className='w-full flex p-1 rounded' >
                    <p className='font-Montserrat-Medium text-sm' >Duration</p>
                    <div className='w-full flex flex-1' />
                    <p className='font-Montserrat-Medium text-sm' >10 Day(s)</p>
                </div>
                <div className='w-full flex p-1 rounded' >
                    <p className='font-Montserrat-Medium text-sm' >Interest owed</p>
                    <div className='w-full flex flex-1' />
                    <p className='font-Montserrat-Medium text-sm' >₦0.00</p>
                </div>
                <button onClick={()=> props.close(2)} style={{backgroundColor: '#002343', borderRadius: '2px'}}  className=' w-full mt-24 text-white font-Montserrat-Bold text-sm h-10 mb-6 items-center justify-center' >Get Started</button>
            </div>
        </div>
    )
}
