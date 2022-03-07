import React from 'react'
import Router from 'next/router';

export default function NavBar(props: any) {

    const [tab, setTab] = React.useState(props.tab) 
    const [mobile, setMobile] = React.useState(false)

    const ClickHandler =(props: any)=> {
        setTab(props)
        Router.push('/'+props)
        setMobile(false)
    }

    return (
        <div style={{height: '120px'}} className=' lg:px-20 px-6 w-full flex items-center ' > 
            <img src='/assets/images/Vault-logo.png' alt='login' className='lg:w-183px w-40 h-auto  ' />
            <div className='ml-auto hidden lg:flex items-center ' >
                <p onClick={()=> ClickHandler('')} style={tab === '' ? {color: '#002343'}: {color: '#7F8B95'}} className=' font-CircularStd-Medium cursor-pointer mx-4' >Home</p>
                <p onClick={()=> ClickHandler('faq')} style={tab === 'faq' ? {color: '#002343'}: {color: '#7F8B95'}} className=' font-CircularStd-Medium cursor-pointer mx-4' >FAQs</p>
                <p onClick={()=> ClickHandler('contactus')} style={tab === 'contactus' ? {color: '#002343'}: {color: '#7F8B95'}} className=' font-CircularStd-Medium cursor-pointer mx-4' >Contact us</p>
            </div>
            <div className='ml-14 hidden lg:flex ' >
                <button onClick={()=> Router.push('/login')} style={{color: '#002343', border: '1px solid #002343'}} className='px-8 py-3 font-CircularStd-Black text-sm rounded-md' >Sign in</button>
                <button onClick={()=> Router.push('/signup')} style={{color: '#FFFFFF', backgroundColor: '#002343'}} className='px-5 py-3 font-CircularStd-Black text-sm rounded-md ml-4' >Create account</button>
            </div>

            {!mobile ?
                <svg onClick={()=> setMobile((prev)=> !prev)} className='lg:hidden ml-auto cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 15H22" stroke="#262F56" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 9H22" stroke="#262F56" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                :
                <svg onClick={()=> setMobile((prev)=> !prev)} className='lg:hidden ml-auto cursor-pointer' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 8L1 15M1 1L8 8L1 1ZM8 8L15 15L8 8ZM8 8L15 1L8 8Z" stroke="#262F56" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            }
            {mobile ?
                <div className='w-full absolute top-24 z-30 left-0 bg-white lg:hidden flex flex-col justify-center items-center px-6' >
                    <p onClick={()=> ClickHandler('')} style={tab === '' ? {color: '#002343'}: {color: '#7F8B95'}} className=' font-CircularStd-Medium cursor-pointer my-3 ' >Home</p>
                    <p onClick={()=> ClickHandler('faq')} style={tab === 'faq' ? {color: '#002343'}: {color: '#7F8B95'}} className=' font-CircularStd-Medium cursor-pointer my-3 ' >FAQs</p>
                    <p onClick={()=> ClickHandler('contactus')} style={tab === 'contactus' ? {color: '#002343'}: {color: '#7F8B95'}} className=' font-CircularStd-Medium cursor-pointer my-3 ' >Contact us</p>
                    <button onClick={()=> Router.push('/login')} style={{color: '#002343', border: '1px solid #002343'}} className='w-full py-3 font-CircularStd-Black text-sm rounded-md my-3' >Sign in</button>
                    <button onClick={()=> Router.push('/signup')} style={{color: '#FFFFFF', backgroundColor: '#002343'}} className='w-full py-3 font-CircularStd-Black text-sm rounded-md my-3' >Create account</button>
                </div>
            :null}
        </div>
    )
}
