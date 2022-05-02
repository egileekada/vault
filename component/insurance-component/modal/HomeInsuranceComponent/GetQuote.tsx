import React from 'react'

export default function GetQuote(props: any) {
    return (
        <div className='w-full h-full' > 
            <p className='font-Montserrat-Medium text-sm mb-6' >Get a quote</p>
                <div className='w-full flex items-center bg-vaultgray py-5 px-5 rounded-lg ' >
                    <div className='w-8 h-8 rounded-full bg-errorRed flex justify-center items-center cursor-pointer'>
                        <div className='w-4 h-4 bg-white rounded-full' />
                    </div>
                    <p className='font-Montserrat-Medium text-sm ml-3' >Get a new quote</p>
                </div>
                <div className='w-full flex items-center bg-vaultgray mt-3 rounded-lg py-5 px-5' >
                    <div className='w-8 h-8 rounded-full bg-errorRed flex justify-center items-center cursor-pointer'>
                        <div className='w-4 h-4 bg-white rounded-full' />
                    </div>
                    <p className='font-Montserrat-Medium text-sm ml-3' >I want to retrieve my saved quotes</p>
                </div> 
                <button onClick={()=> props.next(1)} className='w-full py-3 text-sm mt-10 rounded-lg ' style={{ color: '#667B8E', backgroundColor: '#CCD3D9'}} >PROCEED</button>
        </div>
    )
}
