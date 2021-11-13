import React from 'react'
import { IoIosAdd } from 'react-icons/io'

export default function LinkedCards(props: any) { 
    const [select, setSelect] = React.useState(0)

    return (
        <div className='w-full grid grid-cols-2 gap-4 mt-2' > 
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
    )
}
