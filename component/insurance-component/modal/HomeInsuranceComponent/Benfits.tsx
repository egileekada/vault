import React from 'react'

export default function Benfits(props: any) {
    
    const [tab, setTab] = React.useState(false)

    return (
        <div className='w-full h-full' >
            <div style={{backgroundColor: '#F3F3F3'}} className=' flex p-1 rounded-lg w-56' >
                <div onClick={()=> setTab(false)} className={!tab ? 'font-Montserrat-Regular text-white text-sm py-2 w-full flex justify-center bg-vault rounded-lg cursor-pointer ' : 'font-Montserrat-Regular text-vault text-sm py-2 w-full flex justify-center rounded-lg cursor-pointer '} >Product Info</div>
                <div onClick={()=> setTab(true)} className={tab ? 'font-Montserrat-Regular text-white text-sm py-2 w-full flex justify-center bg-vault rounded-lg cursor-pointer ' : 'font-Montserrat-Regular text-vault text-sm py-2 w-full flex justify-center rounded-lg cursor-pointer '} >Price Info</div>
            </div> 
            {!tab && (
                <div className='w-full' > 
                    <p className='font-Montserrat-SemiBold text-sm mt-4 mb-2 ' >Benefits</p>
                    <div style={{backgroundColor: '#F3F3F3'}} className='py-4 px-6 mt-2 w-full flex h-14 justify-center items-center rounded-md ' >
                        <p className=' font-Montserrat-Regular text-xs ' >15 % Cash back after 24 months without a claim</p>
                        <svg className='ml-auto'  width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.295 2.79L4 6.085L2.205 4.295L1.5 5L4 7.5L8 3.5L7.295 2.79ZM5 0C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10C7.76 10 10 7.76 10 5C10 2.24 7.76 0 5 0ZM5 9C2.79 9 1 7.21 1 5C1 2.79 2.79 1 5 1C7.21 1 9 2.79 9 5C9 7.21 7.21 9 5 9Z" fill="#27AE60"/>
                        </svg>
                    </div> 
                    <div style={{backgroundColor: '#F3F3F3'}} className='py-4 px-6 mt-2 w-full flex h-14 justify-center items-center rounded-md ' >
                        <p className=' font-Montserrat-Regular text-xs ' >Liability for third party losses up to 50% of sum insured</p>
                        <svg className='ml-auto'  width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.295 2.79L4 6.085L2.205 4.295L1.5 5L4 7.5L8 3.5L7.295 2.79ZM5 0C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10C7.76 10 10 7.76 10 5C10 2.24 7.76 0 5 0ZM5 9C2.79 9 1 7.21 1 5C1 2.79 2.79 1 5 1C7.21 1 9 2.79 9 5C9 7.21 7.21 9 5 9Z" fill="#27AE60"/>
                        </svg>
                    </div> 
                    <div style={{backgroundColor: '#F3F3F3'}} className='py-4 px-6 mt-2 w-full flex h-14 justify-center items-center rounded-md ' >
                        <p className=' font-Montserrat-Regular text-xs ' >Cover on items you take out and about, whether you’re at home or on holiday</p>
                        <svg className='ml-auto'  width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.295 2.79L4 6.085L2.205 4.295L1.5 5L4 7.5L8 3.5L7.295 2.79ZM5 0C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10C7.76 10 10 7.76 10 5C10 2.24 7.76 0 5 0ZM5 9C2.79 9 1 7.21 1 5C1 2.79 2.79 1 5 1C7.21 1 9 2.79 9 5C9 7.21 7.21 9 5 9Z" fill="#27AE60"/>
                        </svg>
                    </div> 
                    <div style={{backgroundColor: '#F3F3F3'}} className='py-4 px-6 mt-2 w-full flex h-14 justify-center items-center rounded-md ' >
                        <p className=' font-Montserrat-Regular text-xs ' >This cover includes an excess of 10% of sum insured</p>
                        <svg className='ml-auto'  width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.295 2.79L4 6.085L2.205 4.295L1.5 5L4 7.5L8 3.5L7.295 2.79ZM5 0C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10C7.76 10 10 7.76 10 5C10 2.24 7.76 0 5 0ZM5 9C2.79 9 1 7.21 1 5C1 2.79 2.79 1 5 1C7.21 1 9 2.79 9 5C9 7.21 7.21 9 5 9Z" fill="#27AE60"/>
                        </svg>
                    </div> 
                    <div style={{backgroundColor: '#F3F3F3'}} className='py-4 px-6 mt-2 w-full flex h-14 justify-center items-center rounded-md ' >
                        <p className=' font-Montserrat-Regular text-xs ' >Prompt claim settlement from time of notification</p>
                        <svg className='ml-auto'  width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.295 2.79L4 6.085L2.205 4.295L1.5 5L4 7.5L8 3.5L7.295 2.79ZM5 0C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10C7.76 10 10 7.76 10 5C10 2.24 7.76 0 5 0ZM5 9C2.79 9 1 7.21 1 5C1 2.79 2.79 1 5 1C7.21 1 9 2.79 9 5C9 7.21 7.21 9 5 9Z" fill="#27AE60"/>
                        </svg>
                    </div> 
                </div>
            )}
            {tab && (
                <div className='w-full' > 
                    <div style={{backgroundColor:'#F3F3F3'}} className=' p-5 mt-4 rounded-md' >
                        <p style={{color: '#667B8E'}} className='font-Montserrat-Regular text-xs' >Monthly</p>
                        <div className='w-full mt-4 grid grid-cols-2' >
                            <div className='w-full' >
                                <p className='text-xs font-Montserrat-Regular text-vault' >Building(₦):<span className='ml-2' style={{color: '#304D67'}}  >20 (20)</span></p>
                                <p className='text-xs font-Montserrat-Regular mt-2 text-vault' >Movable(₦):<span className='ml-2' style={{color: '#304D67'}}  >0 (0)</span></p>
                            </div>
                            <div className='w-full' >
                                <p className='text-xs font-Montserrat-Regular text-vault' >Non-Movable(₦):<span className='ml-2' style={{color: '#304D67'}}  >0 (0)</span></p>
                                <p className='text-xs font-Montserrat-Regular mt-2 text-vault' >Total(₦):<span className='ml-2' style={{color: '#304D67'}}  >20 (20)</span></p>
                            </div>
                        </div>
                    </div>
                    <button onClick={()=> props.next(3)}  className='font-Montserrat-Regular mt-2 w-full text-white py-3 text-sm rounded-md bg-vault' >Buy Now</button>
                </div>
            )}
        </div>
    )
} 