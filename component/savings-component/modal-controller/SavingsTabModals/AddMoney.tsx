import React from 'react'
import { IoIosAdd, IoIosClose } from 'react-icons/io'
import { useQuery } from 'react-query'

export default function AddMoney(props: any) {

    const [select, setSelect] = React.useState(0)
    
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

    return (
        <div  className=' w-full lg:w-560px bg-white pb-8 px-8 h-screen overflow-y-auto'  >
            <div className='w-full flex flex-row items-center py-10' > 
                <p onClick={()=> props.close(false)} style={{color:'#03C8DB'}} className='font-Montserrat-Bold text-sm cursor-pointer ' >Go back</p>
                <div className='w-full flex flex-1' />
                <div onClick={()=> props.close(false)} style={{backgroundColor: '#FAFAFA', borderRadius: '4px'}} className='w-auto h-auto cursor-pointer' >
                    <IoIosClose size='30px' />
                </div>
            </div> 
            <p className=' font-Montserrat-Bold text-base' >Add Money 💰</p>
            <p style={{color: '#4F4F4F'}} className=' font-Montserrat-Regular mt-2 text-sm' >Please select your preferred card.</p>
            <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2' > 
                {!isLoading ?
                    <>
                        {data.length > 0 ? 
                            <>
                                {data.map((item: any, index: any)=> {
                                    return(
                                        <div onClick={()=> setSelect(index+1)} style={select === index+1 ? {border: '1px solid #002343', color: '#002343'}: {border: '1px solid #CCD3D9', color: '#828282'}} className='w-full h-40 relative p-3 rounded-lg cursor-pointer' >
                                            <p className=' font-Montserrat-Bold text-base' >{item.name}</p>
                                            <p style={{color: '#828282'}} className=' font-Montserrat-Bold text-sm mt-4' >.... .... .... {item.last}</p>
                                            <div className='w-full flex mt-4' >
                                                <p className=' font-Montserrat-Regular text-sm ' >{item.expire}</p>
                                                <div className='w-full flex h-full flex-1' />
                                                <img src='/assets/images/mastercard.png' className='w-10 absolute bottom-4 right-4' />
                                            </div>
                                        </div> 
                                    )
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
                <div onClick={()=> props.next(2)} style={{border: '1px solid #CCD3D9', color: '#828282'}} className='w-full h-full p-3 flex cursor-pointer justify-center items-center rounded-lg' >
                    <IoIosAdd size='50px' />
                </div>
            </div>
            <button onClick={()=> props.next(4)} style={select !== 0 ? {backgroundColor: '#002343', color: 'white'}: {backgroundColor: '#CCD3D9', color: '#667B8E'}} className='w-full text-white font-Montserrat-Medium text-sm h-10 rounded  mt-10' >PROCEED  🔒</button>
        </div>
    )
}
