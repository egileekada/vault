import React from "react"
 
export default function RadioButton(props: any) { 

    const Array = props.array;
    const size = props.size;
    const font = props.font;
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
                        <div style={active === index ? {width: size, height: size, backgroundColor: '#03C8DB', borderRadius: '6px'} : {width: size, height: size, backgroundColor: '#E0E0E0', borderRadius: '6px'}} />
                        <p style={{ fontSize : font}} className='font-Montserrat-Regular ml-4' >{item}</p>
                    </div>
                )
            })}
        </div>
    )
} 