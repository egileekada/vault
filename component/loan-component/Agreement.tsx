import React from 'react'

export default function Agreement(props: any) {
    return (
        <div className='w-full h-full flex items-center flex-col'>
            <img src='/assets/images/Agreement.png' className='my-10'  />
            <p className='font-Montserrat-Medium w-full text-sm' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium semper libero, velit neque consectetur. Blandit dignissim scelerisque orci amet amet mattis natoque tristique sed. Magna in ultrices massa dictum ut pharetra. A et urna sed erat eleifend quam a tortor.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium semper libero, velit neque consectetur. Blandit dignissim scelerisque orci amet amet mattis natoque tristique sed. Magna in ultrices massa dictum ut pharetra. A et urna sed erat eleifend quam a tortor.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium semper libero, velit neque consectetur. Blandit dignissim scelerisque orci amet amet mattis natoque tristique sed. Magna in ultrices massa dictum ut pharetra. A et urna sed erat eleifend quam a tortor.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium semper libero, velit neque consectetur. Blandit dignissim scelerisque orci amet amet mattis natoque tristique sed. Magna in ultrices massa dictum ut pharetra. A et urna sed erat eleifend quam a tortor.</p>
        
            <div className='w-full flex mb-6 flex-col mt-16' >
                <button onClick={()=> props.click(3)} style={{backgroundColor: '#002343', borderRadius: '2px'}}  className=' w-full  text-white font-Montserrat-Medium text-sm h-12 items-center justify-center' >I AGREE, BORROW</button>
                <button onClick={()=> props.click(1)} style={{border: '1px solid #002343', color: '#002343', borderRadius: '2px'}}  className=' w-full text-white mt-6 font-Montserrat-Medium text-sm h-12 items-center justify-center' >I DONT’T AGREE</button>
            </div>
        </div>
    )
}
