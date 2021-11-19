import React from 'react'
import About from '../DollarTabComponent/About'
import ConvertToNaira from '../DollarTabComponent/ConvertToNaira'
import SaveInDollar from '../DollarTabComponent/SaveInDollar'
import ShareDollar from '../DollarTabComponent/ShareDollar'

export default function DollarSafeTab(props: any) {

    const [tab, setTab] = React.useState(0)
    const [endModal, setEndModal] = React.useState(true)

    const ClickHandler =()=> {
        props.close(-1)  
        setEndModal(true)
    }

    React.useEffect(() => { 
        {endModal === false ? 
            ClickHandler() 
            :null
        }
    },) 

    return (
        <div className='w-full mb-10 lg:px-4' > 
            <div className='flex justify-center lg:justify-start mb-10 relative'>
                <p onClick={()=> props.close(-1)} style={{color:'#03C8DB'}} className=' lg:hidden font-Montserrat-Bold text-base cursor-pointer absolute left-0 ' >Go back</p>
                <p className='font-Montserrat-Bold text-base ' >Dollar Safe</p>
            </div> 
            <div className='w-full mx-3 flex flex-col justify-center items-center py-10'> 
                <p style={{color: '#99A7B4'}} className='font-Montserrat-Bold text-4xl items-center flex' >100<span style={{color: '#304D67'}} className='text-xs ml-1 ' >USD</span></p>
                <p style={{color: '#828282'}} className='font-Montserrat-Regular text-xs mt-3' >Dollar safe Balance</p>
            </div>
            <div className='w-full lg:pl-12' >
                <div style={{backgroundColor: '#CCD3D9'}} className='lg:w-full w-auto dashboardslide flex overflow-x-auto p-1 rounded' > 
                    <div className='lg:w-full w-auto flex'  >
                        <p onClick={()=> setTab(0)} style={tab === 0 ? {backgroundColor: '#002343', color: '#ffffff'} : {backgroundColor: '#CCD3D9', color: '#667B8E'}} className=' font-Montserrat-Bold py-3 w-32 lg:w-full flex justify-center text-xs rounded cursor-pointer  ' >About Dollar safe</p> 
                        <p onClick={()=> setTab(1)} style={tab === 1 ? {backgroundColor: '#002343', color: '#ffffff'} : {backgroundColor: '#CCD3D9', color: '#667B8E'}} className=' font-Montserrat-Bold py-3 w-32 lg:w-full flex justify-center text-xs rounded cursor-pointer ' >Save in Dollar</p> 
                        <p onClick={()=> setTab(2)} style={tab === 2 ? {backgroundColor: '#002343', color: '#ffffff'} : {backgroundColor: '#CCD3D9', color: '#667B8E'}} className=' font-Montserrat-Bold py-3 w-32 lg:w-full flex justify-center text-xs rounded cursor-pointer ' >Convert to Naira</p> 
                        <p onClick={()=> setTab(3)} style={tab === 3 ? {backgroundColor: '#002343', color: '#ffffff'} : {backgroundColor: '#CCD3D9', color: '#667B8E'}} className=' font-Montserrat-Bold py-3 w-32 lg:w-full flex justify-center text-xs rounded cursor-pointer ' >Share Dollar</p> 
                    </div>
                </div>
                <div className='w-full mt-6' > 
                    {tab === 0 ? 
                            <About />
                        :tab === 1 ? 
                            <SaveInDollar end={setEndModal} />
                            :tab === 2 ? 
                                <ConvertToNaira end={setEndModal} />
                                :tab === 3 ? 
                                    <ShareDollar end={setEndModal} />
                    :null}
                </div>
            </div>
        </div>
    )
}
