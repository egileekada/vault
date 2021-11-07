import React from 'react'

export default function DollarSafeTab() {

    const [tab, setTab] = React.useState(0)

    return (
        <div className='w-full mb-10 px-4' >
            <p className='font-Montserrat-Bold text-base' >Dollar Safe</p>
            <div className='w-full mx-3 flex flex-col justify-center items-center py-10'> 
                <p style={{color: '#99A7B4'}} className='font-Montserrat-Bold text-4xl items-center flex' >100<span style={{color: '#304D67'}} className='text-xs ml-1 ' >USD</span></p>
                <p style={{color: '#828282'}} className='font-Montserrat-Regular text-xs mt-3' >Dollar safe Balance</p>
            </div>
            <div className='w-full pl-12' >
                <div style={{backgroundColor: '#CCD3D9'}} className='w-full flex p-1 rounded' > 
                        <p onClick={()=> setTab(0)} style={tab === 0 ? {backgroundColor: '#002343', color: '#ffffff'} : {backgroundColor: '#CCD3D9', color: '#667B8E'}} className=' font-Montserrat-Bold py-3 w-full flex justify-center text-xs rounded cursor-pointer  ' >About Dollar safe</p> 
                        <p onClick={()=> setTab(1)} style={tab === 1 ? {backgroundColor: '#002343', color: '#ffffff'} : {backgroundColor: '#CCD3D9', color: '#667B8E'}} className=' font-Montserrat-Bold py-3 w-full flex justify-center text-xs rounded cursor-pointer ' >Save in Dollar</p> 
                        <p onClick={()=> setTab(2)} style={tab === 2 ? {backgroundColor: '#002343', color: '#ffffff'} : {backgroundColor: '#CCD3D9', color: '#667B8E'}} className=' font-Montserrat-Bold py-3 w-full flex justify-center text-xs rounded cursor-pointer ' >Convert to Naira</p> 
                        <p onClick={()=> setTab(3)} style={tab === 3 ? {backgroundColor: '#002343', color: '#ffffff'} : {backgroundColor: '#CCD3D9', color: '#667B8E'}} className=' font-Montserrat-Bold py-3 w-full flex justify-center text-xs rounded cursor-pointer ' >Share Dollar</p> 
                </div>
            </div>
        </div>
    )
}
