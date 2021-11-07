import React from 'react'

export default function Goals(props: any) {
    return (
        <div  className='w-auto px-20 py-8 bg-white rounded-2xl'>
            <p className=' font-Montserrat-Bold text-base text-center' >Goal Summary</p>
            <p style={{color: '#4f4f4f'}} className=' font-Montserrat-Bold text-sm mt-4 text-center' >Kid’s tutuition Fees</p>
            <p style={{color: '#828282'}} className=' font-Montserrat-Bold text-sm mt-2 text-center' >₦ 100,000.00</p>
            <img src='/assets/images/pic.png' className='w-72 rounded my-8' />
            <div style={{backgroundColor: '#F3F3F3'}} className='w-full flex p-1 flex-row' >
                <p className=' font-Montserrat-Medium text-xs' >Pattern</p>
                <div className='w-full flex flex-1' />
                <p className=' font-Montserrat-Medium text-xs' >₦10,000.00 / Daily</p>
            </div>
            <div className='w-full flex p-1 flex-row' >
                <p className=' font-Montserrat-Medium text-xs' >Interest Rate</p>
                <div className='w-full flex flex-1' />
                <p className=' font-Montserrat-Medium text-xs' >5.0% p.a</p>
            </div>
            <div style={{backgroundColor: '#F3F3F3'}} className='w-full flex p-1 flex-row' >
                <p className=' font-Montserrat-Medium text-xs' >Fixed</p>
                <div className='w-full flex flex-1' />
                <p className=' font-Montserrat-Medium text-xs' >Yes</p>
            </div>
            <div className='w-full flex p-1 flex-row' >
                <p className=' font-Montserrat-Medium text-xs' >Start Date</p>
                <div className='w-full flex flex-1' />
                <p className=' font-Montserrat-Medium text-xs' >12 May 2021</p>
            </div>
            <div style={{backgroundColor: '#F3F3F3'}} className='w-full flex p-1 flex-row' >
                <p className=' font-Montserrat-Medium text-xs' >End Date</p>
                <div className='w-full flex flex-1' />
                <p className=' font-Montserrat-Medium text-xs' >12 June 2023</p>
            </div>
            <div className='w-full flex mt-10' >
                <button style={{border: '1px solid #002343', color: '#002343', borderRadius: '2px'}}  className=' w-28 text-white font-Montserrat-Medium text-sm h-10 items-center justify-center' >Restart</button>
                <div className='w-full flex flex-1' />
                <button onClick={()=> props.close(1)} style={{backgroundColor: '#002343', borderRadius: '2px'}}  className=' w-28 text-white font-Montserrat-Medium text-sm h-10 items-center justify-center' >Start Plan</button>
            </div>
        </div>
    )
}
