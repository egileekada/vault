import React from 'react'
import { IoIosAdd } from 'react-icons/io'
import { useQuery } from 'react-query'

export default function LinkedCards(props: any) { 
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

    console.log(props.amount)
    console.log(props.data)

    // "body": {
    //     "mode": "raw",
    //     "raw": "{\r\n    \"investmentId\": \"{{randomInvestmentId}}\",\r\n    \"unit\": {{$randomInt}},\r\n    \"amount\": 500,\r\n    \"pin\": {{transactionPin}},\r\n    \"paymentMethod\": \"Savings Account\",\r\n    \"savingsId\": \"{{randomSavingsId}}\",\r\n    \"interest\": 5000,\r\n    \"card\": {}\r\n}",
    //     "options": {
    //         "raw": {
    //             "language": "json"
    //         }
    //     }
    // },

    return (
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2' > 
            {!isLoading ?
                <>
                    {data.length > 0 ? 
                        <>
                            {data.map((item: any, index: any)=> {
                                return(
                                    <div onClick={()=> setSelect(index)} style={select === index ? {border: '1px solid #002343', color: '#002343'}: {border: '1px solid #CCD3D9', color: '#828282'}} className='w-full h-40 p-3 rounded-lg cursor-pointer' >
                                        <p className=' w-28 font-Montserrat-Bold text-base' >{item.name}</p>
                                        <p style={{color: '#828282'}} className=' font-Montserrat-Bold text-sm mt-4' >.... .... .... {item.last}</p>
                                        <div className='w-full flex mt-4' >
                                            <p className=' font-Montserrat-Regular text-sm ' >{item.expire}</p>
                                            <div className='w-full flex flex-1' />
                                            <img src='/assets/images/mastercard.png' className='w-10' />
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
        <div onClick={()=> props.next(1)} style={{border: '1px solid #CCD3D9', color: '#828282'}} className='w-full h-40 p-3 flex cursor-pointer justify-center items-center rounded-lg' >
                <IoIosAdd size='50px' />
        </div>
    </div>
    )
}
