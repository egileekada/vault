import React from 'react'
import Router from 'next/router';

export default function NavBar(props: any) {

    const [tab, setTab] = React.useState(props.tab) 

    const ClickHandler =(props: any)=> {
        setTab(props)
        Router.push('/'+props)
    }

    return (
        <div style={{height: '120px'}} className=' px-20 w-full flex items-center ' > 
            <img src='/assets/images/Vault-logo.png' alt='login' style={{width: '183px'}} className=' h-auto  ' />
            <div className='ml-auto flex items-center ' >
                <p onClick={()=> ClickHandler('')} style={tab === '' ? {color: '#002343'}: {color: '#7F8B95'}} className=' font-CircularStd-Medium cursor-pointer mx-4' >Home</p>
                <p onClick={()=> ClickHandler('faq')} style={tab === 'faq' ? {color: '#002343'}: {color: '#7F8B95'}} className=' font-CircularStd-Medium cursor-pointer mx-4' >FAQs</p>
                <p onClick={()=> ClickHandler('contactus')} style={tab === 'contactus' ? {color: '#002343'}: {color: '#7F8B95'}} className=' font-CircularStd-Medium cursor-pointer mx-4' >Contact us</p>
            </div>
            <div className='ml-14' >
                <button onClick={()=> Router.push('/login')} style={{color: '#002343', border: '1px solid #002343'}} className='px-8 py-3 font-CircularStd-Black text-sm rounded-md' >Sign in</button>
                <button onClick={()=> Router.push('/signup')} style={{color: '#FFFFFF', backgroundColor: '#002343'}} className='px-5 py-3 font-CircularStd-Black text-sm rounded-md ml-4' >Create account</button>
            </div>
        </div>
    )
}
