import React from 'react'

export default function InvestmentHistory(props: any) {

    const Array = [ 
        {
            name: 'Rice Farm', 
            amount: '₦ 200,000.00',
            interest: '10% ROI/Annum',
            image: '/assets/images/visa.png'
        }, 
        {
            name: 'Fashion Business', 
            amount: '₦ 35,000.00',
            interest: '1/2 months',
            image: '/assets/images/mastercard.png'
        },  
    ]

    const ClickHandler =()=> {
        props.open(1)
        props.withdraw(true)
    }

    return (
        <div className='w-full' >
            {/* <div className=' w-full flex flex-row items-center' >
                <p style={{color: '#828282'}} className=' w-auto font-Montserrat-SemiBold text-sm' >Recent Transaction</p>
                <div className='w-full flex flex-1' />
                <div onClick={()=> props.transac(true)} className='w-auto flex items-center cursor-pointer ' > 
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1619 12.0531C15.1619 13.7991 13.7459 15.2141 11.9999 15.2141C10.2539 15.2141 8.83887 13.7991 8.83887 12.0531C8.83887 10.3061 10.2539 8.89111 11.9999 8.89111C13.7459 8.89111 15.1619 10.3061 15.1619 12.0531Z" stroke="#03C8DB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.998 19.355C15.806 19.355 19.289 16.617 21.25 12.053C19.289 7.48898 15.806 4.75098 11.998 4.75098H12.002C8.194 4.75098 4.711 7.48898 2.75 12.053C4.711 16.617 8.194 19.355 12.002 19.355H11.998Z" stroke="#03C8DB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p style={{color: '#68DEE9'}} className='font-Montserrat-Regular text-sm ml-1' >See more</p>
                </div>
            </div> */}
            <div className='w-full mt-6' >
                <p style={{color: '#828282'}} className=' w-auto font-Montserrat-Regular text-xs ' >21/MAY/2021</p>
            </div>
            {Array.map((item: any, index: any) => {
                return(
                    <div onClick={()=> ClickHandler()} key={index} className='w-full flex cursor-pointer flex-row mt-4 items-center' >
                        <div style={{backgroundColor: '#F1ECFE', borderRadius: '8px'}} className='w-10 h-10 flex rounded-lg bg-yellow-300 px-1 items-center justify-center'  >
                            {/* <img className='w-full' src={item.image} />  */}
                        </div>
                        <div className='w-auto ml-2' >
                            <p style={{color: '#282828'}} className=' w-auto font-Montserrat-Bold text-xs' >{item.name}</p>
                            <p style={{color: '#828282'}} className=' w-auto font-Montserrat-Regular text-xs' >{item.interest}</p>
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
                        <div style={{backgroundColor: '#F1ECFE', borderRadius: '8px'}} className='w-10 h-10 flex rounded-lg bg-yellow-300 px-1 items-center justify-center'  >
                            {/* <img className='w-full' src={item.image} />  */}
                        </div>
                        <div className='w-auto ml-2' >
                            <p style={{color: '#282828'}} className=' w-auto font-Montserrat-Bold text-xs' >{item.name}</p>
                            <p style={{color: '#828282'}} className=' w-auto font-Montserrat-Regular text-xs' >{item.interest}</p>
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
                        <div style={{backgroundColor: '#F1ECFE', borderRadius: '8px'}} className='w-10 h-10 flex rounded-lg bg-yellow-300 px-1 items-center justify-center'  >
                            {/* <img className='w-full' src={item.image} />  */}
                        </div>
                        <div className='w-auto ml-2' >
                            <p style={{color: '#282828'}} className=' w-auto font-Montserrat-Bold text-xs' >{item.name}</p>
                            <p style={{color: '#828282'}} className=' w-auto font-Montserrat-Regular text-xs' >{item.interest}</p>
                        </div>
                        <div className='w-full flex flex-1' /> 
                        <p style={{color: '#282828'}} className=' w-auto font-Montserrat-Regular text-xs' >{item.amount}</p> 
                    </div>
                )
            })}
        </div>
    ) 
}
