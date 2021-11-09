import React from 'react'

export default function Reminder(props: any) {
    return (
        <div style={{borderRadius: '16px'}} className='w-auto h-auto flex flex-col justify-center items-center bg-white pt-8 pb-6 px-12' >
            <img style={{width: '81.17px'}} src='/assets/images/Reminder.png' />
            <p className=' font-Montserrat-Bold text-sm mt-4' >Reminder!</p>
            <p className=' font-Montserrat-Regular text-xs text-center w-72' >We will send every participant a message for their signature before this plan becomes approved.</p>
            <div className='w-full flex mt-10' >
                <button style={{border: '1px solid #002343', color: '#002343', borderRadius: '2px'}}  className=' w-full mr-4 text-white font-Montserrat-Medium text-sm h-10 items-center justify-center' >Cancel</button>
                {/* <div className='w-full flex flex-1' /> */}
                <button onClick={()=> props.close(5)} style={{backgroundColor: '#002343', borderRadius: '2px'}}  className=' ml-4 w-full text-white font-Montserrat-Medium text-sm h-10 items-center justify-center' >I Agree</button>
            </div>
        </div>
    )
}
