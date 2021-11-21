import React from 'react';

export default function AccountID(props: any) {
    return (
        <div className='w-full' >
            <p className='font-Montserrat-Medium text-sm mt-6' >Sumbit a documet that confims your change in name, it must be one that is accepted by the nigerian governement.</p>
                <div className='w-16 rounded-2xl h-16 my-10 bg-yellow-300' >

                </div> 
                <button onClick={()=> props.close(2)} style={{backgroundColor: '#002343'}} className='w-full rounded text-white py-3  text-sm font-Montserrat-Medium ' >Submit</button>
        </div>
    );
}
