import React from 'react';

export default function SuccessModal(props: any) { 

    return (
        <div style={{borderRadius: '16px'}} className='w-auto h-auto flex flex-col justify-center items-center bg-white pt-8 pb-6 px-12' >
            {props.image === 'dollar' ? 
                <img style={{width: '81.17px'}} src='/assets/images/DollarCredited.png' />
                : 
                <img style={{width: '81.17px'}} src='/assets/images/success.png' />
            }
            <p className=' font-Montserrat-Bold text-sm mt-4' >{props.header}</p>
            <p className=' font-Montserrat-Regular text-xs text-center w-60' >{props.body}</p>
            <button onClick={()=>  props.close(false)} style={{backgroundColor: '#002343'}} className=' w-full text-white rounded py-3 mt-4 font-Montserrat-Bold text-xs text-center' >Continue</button>
        </div>
    );
}
