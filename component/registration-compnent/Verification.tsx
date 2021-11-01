import React from 'react'
import { Input, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik';  
import Router from 'next/router';

export default function Verification() {

    const [showpassword, setShowpass] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleShowpassword = () => {
        setShowpass(prev => !prev);
    } 


    const loginSchema = yup.object({ 
        email: yup.string().email('This email is not valid').required('Your email is required'),
        password: yup.string().required('Your password is required').min(8, 'A minimium of 8 characters')
    }) 

    // formik
    const formik = useFormik({
        initialValues: {code: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    }); 

    return (
        <div className='bg-white w-full h-full flex justify-center flex-col py-24  py-14 px-6 lg:px-40 rounded-lg' >
            <img src='/assets/images/logo.png' alt='login' style={{width: '150px'}} className=' h-auto  ' />
            <p style={{color: '#002343'}} className='font-Inter-ExtraBold text-2xl flex mt-10'>Enter code sent to</p> 
            <p style={{color: '#5788AD'}} className='font-Inter-Regular my-2 text-xs' >mbaright200000@gmail.com</p>
            <div className='w-full flex flex-col mt-4 py-4' >  
                <div className='relative w-full flex font-Inter-Regular flex-col py-2 ' > 
                    {/* <p className='font-Inter-Medium text-xs' >Email Address</p> */}
                    <Input 
                        name="code"
                        onChange={formik.handleChange}
                        type='number'
                        onFocus={() =>
                            formik.setFieldTouched("code", true, true)
                        }  
                        placeholder="0000000" size="lg" className=' bg-gray_bg border-gray_bg text-primary '  bg="#F6F6F6" focusBorderColor='white' fontSize='xs' borderColor="#F6F6F6" color="#200E32"/>
                
                    {/* <div className="w-full h-auto pt-2">
                        {formik.touched.email && formik.errors.email && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Inter-Regular text-errorRed"
                            >
                                {formik.errors.email}
                            </motion.p>
                        )}
                    </div> */}
                </div> 

            </div>  
            
            <button  onClick={()=> Router.push('/dashboard')} style={formik.values.code !== '' ? {backgroundColor: '#002343', color: 'white'}: {backgroundColor: '#CCD3D9', color: '#667B8E'}} className='w-full py-3 flex justify-center items-center text-white font-Inter-Bold text-xs mr-2 mt-4 rounded-md' >
                {!loading ? 
                    <div className='py-1' >
                        NEXT
                    </div>:
                    <>
                        <div className="animate-spin rounded-full h-6 w-6 mr-4 border-t-2 border-b-2 border-white"></div>
                        LOADING
                    </>
                } 
            </button>
            
            <div className='w-full mt-8' >
                <p className='font-Inter-Medium text-xs ' >Wrong email? <Link style={{ textDecoration: 'none' }} href='/signup'><span className='cursor-pointer ml-1 font-Inter-SemiBold text-xs' style={{color:'#03C8DB'}} >Enter a new one</span></Link></p>
            </div>
        </div>
    )
}
