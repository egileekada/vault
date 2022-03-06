import React from 'react'

export default function Goals(props: any) { 
 
    const DateFormat =(item: any)=>{ 
        var date = new Date(item);
        let string = date+''
        console.log(); 
        return( 
            <p className=' font-Montserrat-Medium text-xs' >{string.substr(4, 11)}</p>
        )
    }

    console.log(props.value)
  
    return (
        <div  className=' w-full h-full lg:h-auto lg:w-400px flex justify-center flex-col items-center px-10 py-8 bg-white lg:rounded-2xl'>
            <p className=' font-Montserrat-Bold text-base text-center' >Goal Summary</p>
            <p style={{color: '#4f4f4f'}} className=' font-Montserrat-Bold text-sm mt-4 text-center' >{props.value.title} {props.value.name} {props.value.savingsName}</p>
            <p style={{color: '#828282'}} className=' font-Montserrat-Bold text-sm mt-2 mb-8 text-center' >{props.value.amount}</p>
            {!props.joint ? 
                <img src={props.image} className='w-72 h-36 object-cover rounded' />
            :null}
            {props.deposit === true ? 
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
                        <p className=' font-Montserrat-Medium text-xs' >{props.value.amount} / {props.day}{props.value.pattern}</p>
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
                        {DateFormat(props.value.start)}
                        {/* <p className=' font-Montserrat-Medium text-xs' >{props.value.start}</p> */}
                    </div>
                    <div style={!props.joint ? {backgroundColor: '#F3F3F3'} : {}} className='w-full flex p-1 flex-row' >
                        <p className=' font-Montserrat-Medium text-xs' >End Date</p>
                        <div className='w-full flex flex-1' /> 
                        {DateFormat(props.value.end)}
                        {/* <p className=' font-Montserrat-Medium text-xs' >{props.value.end}</p> */}
                    </div>
                </>
            }
            <div className='w-full flex mt-10' >
                <button onClick={()=> props.back(false)} style={{border: '1px solid #002343', color: '#002343', borderRadius: '2px'}}  className=' w-full mr-4 text-white font-Montserrat-Medium text-sm h-10 items-center justify-center' >Restart</button>
                {/* <div className='w-full flex flex-1' /> */}
                <button onClick={()=> props.close(1)} style={{backgroundColor: '#002343', borderRadius: '2px'}}  className=' ml-4 w-full text-white font-Montserrat-Medium text-sm h-10 items-center justify-center' >Start Plan</button>
            </div>
        </div>
    )
}
