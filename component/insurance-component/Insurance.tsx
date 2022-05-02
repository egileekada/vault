import React from 'react'
import Header from '../dashboard-component/Header'
import HomeInsurance from './modal/HomeInsurance'

export default function Insurance() {
    const [showModal, setShowModal] = React.useState(-1);
    return (
        <div className='w-full py-8 lg:py-20  ' >
            <p style={{color: '#828282'}} className='px-8 hidden lg:flex font-Montserrat-Regular text-xs' >Balance</p>
            <p style={{color: '#1D1D1D'}} className='px-8 hidden lg:flex font-Montserrat-Bold text-base mt-1' >₦ 0.00</p>
            <div className='w-full hidden lg:flex ' >
                <Header />
            </div>
            <div className='w-full px-8' >
                <p className='text-xl font-Inter-SemiBold' >What package would you like to go for?</p>
                <div className='mt-6 w-full grid grid-cols-3 gap-6 gap-y-10' >
                    <div className='w-full ' >
                        <div className='w-full rounded-lg h-36 ' >
                        <img src='/assets/images/Insurance1.png' alt='insure1' className=' w-full h-full object-cover rounded-lg  ' />
                        </div>
                        <div className='w-full flex items-center mt-6' >
                            <div className='' >
                                <p className='font-Inter-SemiBold text-sm' >Home Insurance</p>
                                <p className='font-Inter-Regular mt-1 text-sm'>Get our life insurance package</p>
                            </div>
                            <button onClick={()=> setShowModal(0)} className='bg-vault text-white font-Inter-Regular px-4 py-2 rounded-md ml-auto text-sm' >Insure</button>
                        </div>
                    </div>
                    <div className='w-full ' >
                        <div className='w-full rounded-lg h-36 ' >
                        <img src='/assets/images/insurance2.png' alt='insure2' className=' w-full h-full object-cover rounded-lg  ' />
                        </div>
                        <div className='w-full flex items-center mt-6' >
                            <div className='' >
                                <p className='font-Inter-SemiBold text-sm' >Education Insurance</p>
                                <p className='font-Inter-Regular mt-1 text-sm'>Get our life insurance package</p>
                            </div>
                            <button className='bg-vault text-white font-Inter-Regular px-4 py-2 rounded-md ml-auto text-sm' >Insure</button>
                        </div>
                    </div>
                    <div className='w-full ' >
                        <div className='w-full rounded-lg h-36 bg-errorRed ' >
                        <img src='/assets/images/insurance3.png' alt='insure3' className=' w-full h-full object-cover rounded-lg  ' />
                        </div>
                        <div className='w-full flex items-center mt-6' >
                            <div className='' >
                                <p className='font-Inter-SemiBold text-sm' >Car Insurance</p>
                                <p className='font-Inter-Regular mt-1 text-sm'>Get our life insurance package</p>
                            </div>
                            <button className='bg-vault text-white font-Inter-Regular px-4 py-2 rounded-md ml-auto text-sm' >Insure</button>
                        </div>
                    </div>
                    <div className='w-full ' >
                        <div className='w-full rounded-lg h-36 bg-errorRed ' >
                            <img src='/assets/images/insurance4.png' alt='insure4' className=' w-full h-full object-cover rounded-lg  ' />
                        </div>
                        <div className='w-full flex items-center mt-6' >
                            <div className='' >
                                <p className='font-Inter-SemiBold text-sm' >Health Insurance</p>
                                <p className='font-Inter-Regular mt-1 text-sm'>Get our life insurance package</p>
                            </div>
                            <button className='bg-vault text-white font-Inter-Regular px-4 py-2 rounded-md ml-auto text-sm' >Insure</button>
                        </div>
                    </div>
                </div>
            </div>

            {showModal === 0 ? 
                (
                    <>
                        <div className="h-auto flex justify-end items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <HomeInsurance close={setShowModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null}
        </div>
    )
} 