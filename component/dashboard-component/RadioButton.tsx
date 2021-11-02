import React from "react"
 
export default function RadioButton(props: any) { 

    const Array = ['Last week','Last Month','Last (2) Months']
    const [active, setActive] = React.useState(-1)

    const ClickHandler =(index: any) =>{
        {active === index ?
            setActive(-1):
            setActive(index)
        }
    }

    return(
        <div className='w-auto' >
            {Array.map((item:any, index: any) => {
                return(
                    <div onClick={()=> ClickHandler(index) } className='flex py-1 items-center cursor-pointer' >
                        <div style={active === index ? {width:'20px', height: '20px', backgroundColor: '#03C8DB', borderRadius: '6px'} : {width:'20px', height: '20px', backgroundColor: '#E0E0E0', borderRadius: '6px'}} />
                        <p className='font-Montserrat-Regular text-xs ml-4' >{item}</p>
                    </div>
                )
            })}
        </div>
    )
} 