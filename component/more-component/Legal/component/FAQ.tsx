import React from 'react'
import { IoIosArrowBack, IoMdAdd, IoMdRemove } from 'react-icons/io'

export default function FAQ(props: any) {

    const [dropDown, setDropDown] = React.useState(false)

    return (
        <div className='w-full ' > 
            <div className='w-full flex items-center  ' > 
                <div onClick={()=> props.close(-1)} style={{backgroundColor: '#F9F9F9'}} className='rounded-full mr-12 lg:hidden cursor-pointer p-2'>
                    <IoIosArrowBack size='20px' />
                </div>   
                <p className='font-Montserrat-Bold text-base ' >FAQ</p> 
            </div> 
            <div onClick={()=> setDropDown(prev => !prev)} className='w-full flex items-center my-6 cursor-pointer' >
                <IoMdAdd size='25px' className='mr-6' /> 
                <p className='font-Montserrat-Medium text-base ' >About Vaultafrica</p> 
            </div>
            {dropDown ? 
                <span className='font-Montserrat-Medium text-base ' >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac varius turpis est vitae in. Vitae aliquet adipiscing faucibus maecenas arcu. Ac ultricies enim scelerisque molestie nisl, gravida hendrerit. Eget malesuada molestie blandit nulla id blandit pharetra massa vestibulum Read more.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac varius turpis est vitae in. Vitae aliquet adipiscing faucibus maecenas arcu. Ac ultricies enim scelerisque molestie nisl, gravida hendrerit. Eget malesuada molestie blandit nulla id blandit pharetra massa vestibulum Read more.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac varius turpis est vitae in. Vitae aliquet adipiscing faucibus maecenas arcu. Ac ultricies enim scelerisque molestie nisl, gravida hendrerit. Eget malesuada molestie blandit nulla id blandit pharetra massa vestibulum Read more.
                </span>
            :null}
            <div className='w-full flex items-center my-6 cursor-pointer' > 
                <IoMdAdd size='25px' className='mr-6' /> 
                <p className='font-Montserrat-Medium text-base ' >About Vaultafrica</p> 
            </div>
            <div className='w-full flex items-center my-6 cursor-pointer' > 
                <IoMdAdd size='25px' className='mr-6' /> 
                <p className='font-Montserrat-Medium text-base ' >About Vaultafrica</p> 
            </div>
            <div className='w-full flex items-center my-6 cursor-pointer' > 
                <IoMdAdd size='25px' className='mr-6' /> 
                <p className='font-Montserrat-Medium text-base ' >About Vaultafrica</p> 
            </div>
        </div>
    )
}
