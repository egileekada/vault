import React from 'react'
import Icons from './MenuIcons'

export default function Menu(props: any) {

    const Array = [ 
        {
            name: 'Home', 
            index: 0
        }, 
        {
            name: 'Savings', 
            index: 1
        }, 
        {
            name: 'Loan', 
            index: 2
        }, 
        {
            name: 'Investment', 
            index: 3
        }, 
        {
            name: 'Insurance', 
            index: 4
        }, 
        {
            name: 'More', 
            index: 5
        }
    ]

    const [active, setActive] = React.useState(0)  

    const ClickHandler =(index: any)=> {
        setActive(index);
        props.tab(index);
        props.close();
    } 

    React.useEffect(() => {
        setActive(props.index)
    },)

    return (
        <div className='w-full h-screen pt-8 flex flex-col items-center overflow-y-auto' >
            {props.mobile === false ? 
                    <>
                        <div className='w-full h-auto flex flex-col items-center' > 
                        <img src='/assets/images/Vault-logo.png'  className='' />
                        <div className='w-12 h-12 flex bg-yellow-200 mt-8' style={{borderRadius: '9px'}} >

                        </div>
                        </div>
                        <p style={{color:'#828282'}} className='font-Montserrat-Regular text-white text-sm mt-4' >Hey, Brightmac</p>
                        <p style={{color:'#1D1D1D'}} className='font-Montserrat-Bold text-white text-base mt-1' >Welcome back!</p>
                    </>
                :
                <div className='w-full flex pt-10 pb-8' >
                    <div className='w-full flex flex-1' />
                    <p onClick={()=> props.close()} className='font-Inter-Bold text-base cursor-pointer mr-8' style={{color:'#EB5757'}} >Close</p>
                </div>
            }
            <div className='w-full mt-8' style={{backgroundColor: '#FCFCFC'}} >
                {Array.map((item: any, index: any) => {
                    return( 
                        <div onClick={()=> ClickHandler(index)} style={index === active ? {backgroundColor: '#130F26', paddingLeft: '3px', paddingRight: '3px', height: '24px'} : {backgroundColor: '#002343', paddingLeft: '0px', paddingRight: '0px', height: '24px'}} key={index} className='w-full cursor-pointer my-4' > 
                            <div style={{backgroundColor: '#FCFCFC'}} className='w-full h-full flex flex-row items-center ' > 
                                <div className='w-16 flex justify-center items-center' >
                                    <Icons icons={item.name} index={active} />
                                </div>
                                <p style={index === active ? {color: '#002343'} : {color: '#667B8E'}} className=' font-Montserrat-Medium lg:text-sm' >{item.name}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='w-full h-full flex items-end ' >  
                <div style={{backgroundColor: '#FCFCFC'}} className='w-full h-auto flex pb-4 cursor-pointer flex-row items-center ' > 
                    <div className='w-16 flex justify-center items-center' >
                        <Icons icons='logout' />
                    </div>
                    <p style={{color: '#667B8E'}} className=' font-Montserrat-Regular text-sm' >Sign Out</p>
                </div>
            </div>
        </div>
    )
}
