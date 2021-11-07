import React from 'react'
import { IoIosAdd, IoIosClose } from 'react-icons/io'

export default function AddMoney(props: any) {

    const [select, setSelect] = React.useState(0)

    return (
        <div style={{width : '560px'}} className='bg-white px-8 h-screen'  >
            <div className='w-full flex flex-row items-center py-10' > 
                <p onClick={()=> props.close(false)} style={{color:'#03C8DB'}} className='font-Montserrat-Bold text-sm cursor-pointer ' >Go back</p>
                <div className='w-full flex flex-1' />
                <div onClick={()=> props.close(false)} style={{backgroundColor: '#FAFAFA', borderRadius: '4px'}} className='w-auto h-auto cursor-pointer' >
                    <IoIosClose size='30px' />
                </div>
            </div> 
            <p className=' font-Montserrat-Bold text-base' >Add Money 💰</p>
            <p style={{color: '#4F4F4F'}} className=' font-Montserrat-Regular mt-2 text-sm' >Please select your preferred card.</p>
            <div className='w-full flex flex-row' >
                <div className='w-full flex flex-col mr-2' >
                    <div onClick={()=> setSelect(1)} style={select === 1 ? {border: '1px solid #002343', color: '#002343'}: {border: '1px solid #CCD3D9', color: '#828282'}} className='w-full h-40 p-3 my-2 rounded-lg cursor-pointer' >
                        <p className=' w-28 font-Montserrat-Bold text-base' >Mba Bright Chisom</p>
                        <p style={{color: '#828282'}} className=' font-Montserrat-Bold text-sm mt-4' >.... .... .... 9090</p>
                        <div className='w-full flex mt-4' >
                            <p className=' font-Montserrat-Regular text-sm ' >09/25</p>
                            <div className='w-full flex flex-1' />
                            <img src='/assets/images/mastercard.png' className='w-10' />
                        </div>
                    </div>
                    <div onClick={()=> props.next(2)} style={{border: '1px solid #CCD3D9', color: '#828282'}} className='w-full h-40 p-3 flex cursor-pointer justify-center items-center my-2 rounded-lg' >
                         <IoIosAdd size='50px' />
                    </div>
                </div>
                <div onClick={()=> setSelect(2)} style={select === 2 ? {border: '1px solid #002343', color: '#002343'}: {border: '1px solid #CCD3D9', color: '#828282'}} className='w-full h-40 mt-2 ml-2 p-3 rounded-lg cursor-pointer' >
                    <p className=' w-28 font-Montserrat-Bold text-base' >Mba Bright Chisom</p>
                    <p style={{color: '#828282'}} className=' font-Montserrat-Bold text-sm mt-4' >.... .... .... 9090</p>
                    <div className='w-full flex mt-4' >
                        <p className=' font-Montserrat-Regular text-sm ' >09/25</p>
                        <div className='w-full flex flex-1' />
                        <img src='/assets/images/visa.png' className='w-10' />
                    </div>
                </div>
            </div>
            <button onClick={()=> props.next(4)} style={select !== 0 ? {backgroundColor: '#002343', color: 'white'}: {backgroundColor: '#CCD3D9', color: '#667B8E'}} className='w-full text-white font-Montserrat-Medium text-sm h-10 rounded  mt-10' >PROCEED  🔒</button>
        </div>
    )
}
