import React from 'react'
import { IoIosAdd, IoIosClose } from 'react-icons/io'

export default function AddMoney(props: any) {

    const [select, setSelect] = React.useState(0)

    return (
        <div className=' w-560px bg-white px-6 lg:px-8 h-screen overflow-y-auto'  >
            <div className='w-full flex flex-row items-center py-10' > 
                {/* <p onClick={()=> props.close(false)} style={{color:'#03C8DB'}} className='font-Montserrat-Bold text-sm cursor-pointer ' >Go back</p> */}
                <div className='w-full flex flex-1' />
                <div onClick={()=> props.close(-1)} style={{backgroundColor: '#FAFAFA', borderRadius: '4px'}} className='w-auto h-auto cursor-pointer' >
                    <IoIosClose size='30px' />
                </div>
            </div> 
            <p className=' font-Montserrat-Bold text-sm text-center' >Confirm Dollar Purchase</p>
            <div style={{backgroundColor:'#002343'}} className=' w-full flex py-12 my-10 justify-center rounded-lg items-center' >
                <p className='text-xs font-Montserrat-Regular text-white' >$</p>
                <p className='text-3xl font-Montserrat-Bold text-white ml-1' >100.00</p>
            </div>
            <p style={{color: '#828282'}} className=' font-Montserrat-Bold mt-2 text-xs text-center' >You will be charged</p>
            <p style={{color: '#03C8DB'}} className=' font-Montserrat-Medium mt-2 text-lg text-center' >₦56,000.00</p>
            <p style={{color: '#282828'}} className=' font-Montserrat-Bold mt-8 text-sm' >Charge me via</p>
            <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4' > 
                    <div onClick={()=> setSelect(1)} style={select === 1 ? {border: '1px solid #002343', color: '#002343'}: {border: '1px solid #CCD3D9', color: '#828282'}} className='w-full h-40 p-3 rounded-lg cursor-pointer' >
                        <p className=' w-28 font-Montserrat-Bold text-base' >Mba Bright Chisom</p>
                        <p style={{color: '#828282'}} className=' font-Montserrat-Bold text-sm mt-4' >.... .... .... 9090</p>
                        <div className='w-full flex mt-4' >
                            <p className=' font-Montserrat-Regular text-sm ' >09/25</p>
                            <div className='w-full flex flex-1' />
                            <img src='/assets/images/mastercard.png' className='w-10' />
                        </div>
                    </div> 
                <div onClick={()=> setSelect(2)} style={select === 2 ? {border: '1px solid #002343', color: '#002343'}: {border: '1px solid #CCD3D9', color: '#828282'}} className='w-full h-40 p-3 rounded-lg cursor-pointer' >
                    <p className=' w-28 font-Montserrat-Bold text-base' >Mba Bright Chisom</p>
                    <p style={{color: '#828282'}} className=' font-Montserrat-Bold text-sm mt-4' >.... .... .... 9090</p>
                    <div className='w-full flex mt-4' >
                        <p className=' font-Montserrat-Regular text-sm ' >09/25</p>
                        <div className='w-full flex flex-1' />
                        <img src='/assets/images/visa.png' className='w-10' />
                    </div>
                </div>
                <div onClick={()=> props.next(1)} style={{border: '1px solid #CCD3D9', color: '#828282'}} className='w-full h-40 p-3 flex cursor-pointer justify-center items-center rounded-lg' >
                        <IoIosAdd size='50px' />
                </div>
            </div>
            <button onClick={()=> props.next(3)} style={select !== 0 ? {backgroundColor: '#002343', color: 'white'}: {backgroundColor: '#CCD3D9', color: '#667B8E'}} className='w-full text-white font-Montserrat-Medium text-sm h-10 rounded  mt-10 mb-20' >PROCEED  🔒</button>
        </div>
    )
}
