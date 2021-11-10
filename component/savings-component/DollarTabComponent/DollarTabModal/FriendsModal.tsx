import { Input } from '@chakra-ui/input'
import React from 'react'

export default function FriendsModal(props: any) {

    const friends = [
        {
            name: 'Bright Joseph',
            number: '09012323930'
        },
        {
            name: 'Emmanuella James',
            number: '07018623930'
        },
        {
            name: 'Bright Joseph',
            number: '08118690730'
        },
        {
            name: 'Emmanuella James',
            number: '08018690730'
        },
    ]

    const [select, setSelect] = React.useState(props.check as any)

    const ClickHandler =(value: any)=> { 
        setSelect(value)
    }

    const SelectedFriends =()=>{
        props.close(-1);
        props.friends(select)
    }

    return (
        <div className='w-auto px-10 py-8 bg-white rounded-2xl'>
            <p className=' font-Montserrat-Bold text-base text-center' >Goal Summary</p>
            <div  className='w-80 relative my-6  ' >
                <svg className='absolute top-2 left-2 z-10' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_80:2010" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20">
                        <path d="M2 2H21.4768V21.477H2V2Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_80:2010)">
                        <path d="M11.739 3.5C7.196 3.5 3.5 7.195 3.5 11.738C3.5 16.281 7.196 19.977 11.739 19.977C16.281 19.977 19.977 16.281 19.977 11.738C19.977 7.195 16.281 3.5 11.739 3.5ZM11.739 21.477C6.369 21.477 2 17.108 2 11.738C2 6.368 6.369 2 11.739 2C17.109 2 21.477 6.368 21.477 11.738C21.477 17.108 17.109 21.477 11.739 21.477Z" fill="#828282"/>
                    </g>
                    <mask id="mask1_80:2010" maskUnits="userSpaceOnUse" x="17" y="17" width="6" height="6">
                        <path d="M17.2402 17.707H22.2642V22.7218H17.2402V17.707Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask1_80:2010)">
                        <path d="M21.5145 22.7218C21.3235 22.7218 21.1315 22.6488 20.9845 22.5028L17.4605 18.9888C17.1675 18.6958 17.1665 18.2208 17.4595 17.9278C17.7515 17.6328 18.2265 17.6348 18.5205 17.9258L22.0445 21.4408C22.3375 21.7338 22.3385 22.2078 22.0455 22.5008C21.8995 22.6488 21.7065 22.7218 21.5145 22.7218Z" fill="#828282"/>
                    </g>
                </svg>
                <Input fontSize='sm' backgroundColor='#f9f9f9' className='text-black' paddingLeft='40px' placeholder='Search by name' />
            </div>
            {friends.map((item: any, index: any) => {
                return(
                    <div onClick={()=> ClickHandler(item)} key={index} className='w-full flex items-center my-3 cursor-pointer' >
                        <div className='w-10 h-10 rounded-lg bg-yellow-300' />
                        <div className='w-auto ml-4' >
                            <p className='font-Montserrat-Bold text-xs' >{item.name}</p>
                            <p style={{color: '#828282'}} className='font-Montserrat-Medium mt-1 text-xs' >{item.number}</p>
                        </div>
                        <div className='w-full flex flex-1' />
                        <svg  style={select.number === item.number ? {fill: "#002343"} : {fill: "transparent"}} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.7499 1.5C9.6589 1.5 9.4349 1.525 9.3159 1.763L7.48992 5.414C7.20092 5.991 6.64392 6.392 5.99992 6.484L1.91192 7.073C1.64192 7.112 1.54992 7.312 1.52192 7.396C1.49692 7.477 1.45692 7.683 1.64292 7.861L4.59892 10.701C5.06992 11.154 5.28392 11.807 5.17192 12.446L4.47592 16.456C4.43292 16.707 4.58992 16.853 4.65992 16.903C4.73392 16.959 4.93192 17.07 5.17692 16.942L8.8319 15.047C9.4079 14.75 10.0939 14.75 10.6679 15.047L14.3219 16.941C14.5679 17.068 14.7659 16.957 14.8409 16.903C14.9109 16.853 15.0679 16.707 15.0249 16.456L14.3269 12.446C14.2149 11.807 14.4289 11.154 14.8999 10.701L17.8559 7.861C18.0429 7.683 18.0029 7.476 17.9769 7.396C17.9499 7.312 17.8579 7.112 17.5879 7.073L13.4999 6.484C12.8569 6.392 12.2999 5.991 12.0109 5.413L10.1829 1.763C10.0649 1.525 9.8409 1.5 9.7499 1.5ZM4.94692 18.5C4.53392 18.5 4.12392 18.37 3.77292 18.114C3.16692 17.67 2.86992 16.937 2.99892 16.199L3.69492 12.189C3.72092 12.04 3.66992 11.889 3.55992 11.783L0.603916 8.943C0.0599161 8.422 -0.135084 7.652 0.0949161 6.937C0.326916 6.214 0.940916 5.697 1.69792 5.589L5.78592 5C5.94392 4.978 6.07992 4.881 6.14792 4.743L7.97492 1.091C8.3119 0.418 8.9919 0 9.7499 0C10.5079 0 11.1879 0.418 11.5249 1.091L13.3529 4.742C13.4219 4.881 13.5569 4.978 13.7139 5L17.8019 5.589C18.5589 5.697 19.1729 6.214 19.4049 6.937C19.6349 7.652 19.4389 8.422 18.8949 8.943L15.9389 11.783C15.8289 11.889 15.7789 12.04 15.8049 12.188L16.5019 16.199C16.6299 16.938 16.3329 17.671 15.7259 18.114C15.1109 18.565 14.3099 18.626 13.6309 18.272L9.9779 16.379C9.8349 16.305 9.6639 16.305 9.5209 16.379L5.86792 18.273C5.57592 18.425 5.26092 18.5 4.94692 18.5Z"/>
                        </svg> 
                    </div>
                )
            })}
            <div className='w-full flex mt-10' >
                <button onClick={()=> props.close(-1)} style={{border: '1px solid #002343', color: '#002343', borderRadius: '2px'}}  className=' w-full mr-4 text-white font-Montserrat-Medium text-sm h-10 items-center justify-center' >Cancel</button>
                <div className='w-full flex flex-1' />
                <button onClick={()=> SelectedFriends()} style={{backgroundColor: '#002343', borderRadius: '2px'}}  className=' w-full ml-4 text-white font-Montserrat-Medium text-sm h-10 items-center justify-center' >Continue</button>
            </div>
        </div>
    )
}
