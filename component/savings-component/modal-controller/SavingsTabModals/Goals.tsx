import React from 'react'

export default function Goals(props: any) { 

    console.log(props.start)
    return (
        <div  className=' w-full h-full lg:h-auto lg:w-400px flex justify-center flex-col items-center px-10 py-8 bg-white lg:rounded-2xl'>
            <p className=' font-Montserrat-Bold text-base text-center' >Goal Summary</p>
            <p style={{color: '#4f4f4f'}} className=' font-Montserrat-Bold text-sm mt-4 text-center' >{props.value.title} {props.value.name}</p>
            <p style={{color: '#828282'}} className=' font-Montserrat-Bold text-sm mt-2 mb-8 text-center' >{props.value.amount}</p>
            {!props.joint ? 
                <img src='/assets/images/pic.png' className='w-72 rounded' />
            :null}
            {props.deposit ? 
                <>
                    <div style={{backgroundColor: '#F3F3F3'}} className='w-full flex p-1 mt-8 flex-row' >
                        <p className=' font-Montserrat-Medium text-xs' >Fixed</p>
                        <div className='w-full flex flex-1' />
                        <p className=' font-Montserrat-Medium text-xs' >Yes</p>
                    </div>
                    <div className='w-full flex p-1 flex-row' >
                        <p className=' font-Montserrat-Medium text-xs' >Interest Rate</p>
                        <div className='w-full flex flex-1' />
                        <p className=' font-Montserrat-Medium text-xs' >5.0% p.a</p>
                    </div>
                    <div style={{backgroundColor: '#F3F3F3'}} className='w-full flex p-1 flex-row' >
                        <p className=' font-Montserrat-Medium text-xs' >Duration</p>
                        <div className='w-full flex flex-1' />
                        <p className=' font-Montserrat-Medium text-xs' >{props.value.duration}</p>
                    </div>
                </>
            :
                <> 
                    <div style={{backgroundColor: '#F3F3F3'}} className='w-full flex p-1 mt-8 flex-row' >
                        <p className=' font-Montserrat-Medium text-xs' >Pattern</p>
                        <div className='w-full flex flex-1' />
                        <p className=' font-Montserrat-Medium text-xs' >{props.value.amount} / {props.day}</p>
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
                    {props.joint ? 
                        <div className='w-full flex p-1 flex-row' >
                            <p className=' font-Montserrat-Medium text-xs' >Participants</p>
                            <div className='w-full flex flex-1' />
                            <p className=' font-Montserrat-Medium text-xs' >6</p>
                        </div>
                    :null}
                    <div style={props.joint ? {backgroundColor: '#F3F3F3'} : {}} className='w-full flex p-1 flex-row' >
                        <p className=' font-Montserrat-Medium text-xs' >Start Date</p>
                        <div className='w-full flex flex-1' />
                        <p className=' font-Montserrat-Medium text-xs' >{props.value.start}</p>
                    </div>
                    <div style={!props.joint ? {backgroundColor: '#F3F3F3'} : {}} className='w-full flex p-1 flex-row' >
                        <p className=' font-Montserrat-Medium text-xs' >End Date</p>
                        <div className='w-full flex flex-1' />
                        <p className=' font-Montserrat-Medium text-xs' >{props.value.end}</p>
                    </div>
                </>
            }
            <div className='w-full flex mt-10' >
                <button style={{border: '1px solid #002343', color: '#002343', borderRadius: '2px'}}  className=' w-full mr-4 text-white font-Montserrat-Medium text-sm h-10 items-center justify-center' >Restart</button>
                {/* <div className='w-full flex flex-1' /> */}
                <button onClick={()=> props.close(1)} style={{backgroundColor: '#002343', borderRadius: '2px'}}  className=' ml-4 w-full text-white font-Montserrat-Medium text-sm h-10 items-center justify-center' >Start Plan</button>
            </div>
        </div>
    )
}
