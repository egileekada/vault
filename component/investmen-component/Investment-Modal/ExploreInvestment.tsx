import { Input } from '@chakra-ui/input';
import React from 'react';
import { IoIosClose } from 'react-icons/io';

export default function ExportInvestment(props: any) {

    const sort = ['All', 'Agriculture', 'Finance', 'Real Estate']
    const Investments = [
        {
            status: 'Active',
            title: 'Rice Farm Inv...',
            profit: '10%',
            amount: '₦4000'
        },
        {
            status: 'Active',
            title: 'Cocoa Business',
            profit: '15%',
            amount: '₦4000'
        },
        {
            status: 'Active',
            title: 'Cocoa Business',
            profit: '15%',
            amount: '₦4000'
        },
        {
            status: 'Closed',
            title: 'Passive income',
            profit: '19%',
            amount: '₦10000'
        },
        {
            status: 'Active',
            title: 'Real Estate Inv...',
            profit: '20%',
            amount: '₦5000'
        },
        {
            status: 'Active',
            title: 'Real Estate Inv...',
            profit: '20%',
            amount: '₦5000'
        },
        {
            status: 'Active',
            title: 'Rice Farm Inv...',
            profit: '10%',
            amount: '₦4000'
        },
        {
            status: 'Active',
            title: 'Rice Farm Inv...',
            profit: '10%',
            amount: '₦4000'
        },
        {
            status: 'Active',
            title: 'Rice Farm Inv...',
            profit: '10%',
            amount: '₦4000'
        },
    ]
    const [selected, setSelected] = React.useState([] as any) 

    const ClickHandler =(value: any)=> {

        let index = selected.findIndex((item: any) => item === value)  
        let newarr = [...selected]

        {selected.some((code : any) => code === value) ? 
                newarr.splice(index, 1)
            :
                newarr.push(value)
        }  
        setSelected(newarr)
    }

    return (
        <div style={{width : '560px'}} className='bg-white px-8 h-screen overflow-y-auto'  >
            <div className='w-full flex flex-row items-center py-10' > 
                <p onClick={()=> props.close(-1)} style={{color:'#03C8DB'}} className='font-Montserrat-Bold text-sm cursor-pointer ' >Go back</p>
                <div className='w-full flex flex-1' />
                <div onClick={()=> props.close(-1)} style={{backgroundColor: '#FAFAFA', borderRadius: '4px'}} className='w-auto h-auto cursor-pointer' >
                    <IoIosClose size='30px' />
                </div>
            </div> 
            <p className=' font-Montserrat-Bold text-sm text-center' >Explore Investment</p>


            <div className='w-full relative pr-6 pt-12 pb-10' >
                <div className='absolute w-full flex pt-2 pl-3 pr-8 ' >
                    <svg className='z-10' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.7659 20.755C16.7301 20.755 20.7545 16.7306 20.7545 11.7664C20.7545 6.80215 16.7301 2.77783 11.7659 2.77783C6.80166 2.77783 2.77734 6.80215 2.77734 11.7664C2.77734 16.7306 6.80166 20.755 11.7659 20.755Z" stroke="#1D1D1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.0176 18.4849L21.5416 21.9998" stroke="#1D1D1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div className='w-full flex flex-1' />
                    <svg className='z-10' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.9996 8.39961C19.4967 8.39961 19.8996 7.99667 19.8996 7.49961C19.8996 7.00255 19.4967 6.59961 18.9996 6.59961V8.39961ZM9.99961 6.59961C9.50255 6.59961 9.09961 7.00255 9.09961 7.49961C9.09961 7.99667 9.50255 8.39961 9.99961 8.39961V6.59961ZM18.9996 6.59961H9.99961V8.39961H18.9996V6.59961Z" fill="#03C8DB"/>
                        <path d="M5.5 12C7.98528 12 10 9.98528 10 7.5C10 5.01472 7.98528 3 5.5 3C3.01472 3 1 5.01472 1 7.5C1 9.98528 3.01472 12 5.5 12Z" fill="#03C8DB"/>
                        <path d="M13.9996 17.3996C14.4967 17.3996 14.8996 16.9967 14.8996 16.4996C14.8996 16.0025 14.4967 15.5996 13.9996 15.5996V17.3996ZM4.99961 15.5996C4.50255 15.5996 4.09961 16.0025 4.09961 16.4996C4.09961 16.9967 4.50255 17.3996 4.99961 17.3996V15.5996ZM13.9996 15.5996H4.99961V17.3996H13.9996V15.5996Z" fill="#03C8DB"/>
                        <path d="M18.5 21C20.9853 21 23 18.9853 23 16.5C23 14.0147 20.9853 12 18.5 12C16.0147 12 14 14.0147 14 16.5C14 18.9853 16.0147 21 18.5 21Z" fill="#03C8DB"/>
                    </svg>
                </div> 
                <Input placeholder='Search' backgroundColor='#F6F6F6' paddingLeft='12' fontSize='sm' />
            </div> 
            <div className='w-full grid grid-cols-4' >
                {sort.map((item: any) => {
                    return(
                        <p onClick={()=> ClickHandler(item)} className='py-1 px-4 rounded-2xl text-sm text-center font-Montserrat-Medium cursor-pointer mx-1' style={selected.some((code : any) => code  === item ) ? {backgroundColor: '#68DEE9', color: '#FFF', border: '0.5px solid transparent'}:{border: '0.5px solid #68DEE9', color: '#68DEE9'}} key={item} >{item}</p>
                    )
                })} 
            </div>
            <div onClick={()=> props.close(1)} className='w-full grid grid-cols-3 mt-4' >
                {Investments.map((items:any)=> {
                    return(
                        <div className='w-full px-2 my-2 cursor-pointer' >
                            <div className='w-full h-36 bg-yellow-400 rounded-xl relative' >
                                <div className='rounded-tl-2xl py-1 flex justify-center items-center absolute right-0 top-10 bg-white w-16 rounded-bl-2xl' >
                                    <p style={items.status === 'Active' ? {color: '#27AE60'}:{color: '#EB5757'}} className='text-xs font-Montserrat-Medium' >{items.status}</p>
                                </div>
                            </div>
                            <p className='font-Montserrat-Bold text-sm mt-2' >{items.title}</p>
                            <p style={{color: '#03C8DB'}} className='font-Montserrat-Medium text-xs mt-1' >{items.profit}<span style={{color: '#828282'}} className='ml-1'>ROI/Annum</span></p>
                            <p  style={{color: '#03C8DB'}} className='font-Montserrat-Medium text-xs mt-1' >{items.amount}<span style={{color: '#828282'}}>/unit</span></p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
