import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import React from 'react'  
import Router from 'next/router'
import { Input, Link } from '@chakra-ui/react'

export default function StepTwo() { 

    const [showpassword, setShowpass] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleShowpassword = () => {
        setShowpass(prev => !prev);
    } 


    const loginSchema = yup.object({ 
        firstname: yup.string().required('Your first name is required').min(2, 'A minimium of 2 characters'), 
        lastname: yup.string().required('Your last name is required').min(2, 'A minimium of 2 characters'), 
        phonenumber: yup.string().required('Your phone number is required').min(11, 'A minimium of 11 characters'), 
    }) 

    // formik
    const formik = useFormik({
        initialValues: {firstname: '', lastname: '', phonenumber: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    }); 

    return (
        <div className='  bg-white w-full h-auto flex justify-center flex-col pt-12 pb-8 px-6 lg:px-40 rounded-lg' >
            <img src='/assets/images/Vault-logo.png' alt='login' style={{width: '33px'}} className=' h-auto  ' />
            <p style={{color: '#002343'}} className='font-Inter-ExtraBold text-2xl flex mt-10'>Let’s get to know you</p>  
            <div className='w-full flex flex-col mt-4 py-4' >  
                <div className='relative w-full flex font-Inter-Regular flex-col py-2 ' > 
                    <p className='font-Inter-Medium text-xs' >First Name</p>
                    <Input 
                        name="firstname"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("firstname", true, true)
                        }  
                        placeholder="Enter your first name" size="lg" className=' mt-2 bg-gray_bg border-gray_bg text-primary '  bg="#F6F6F6" focusBorderColor='white' fontSize='xs' borderColor="#F6F6F6" color="#200E32"/>
                
                    <div className="w-full h-auto pt-2">
                        {formik.touched.firstname && formik.errors.firstname && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Inter-Regular text-errorRed"
                            >
                                {formik.errors.firstname}
                            </motion.p>
                        )}
                    </div>
                </div> 
                <div className='relative w-full flex font-Inter-Regular flex-col py-2 ' > 
                    <p className='font-Inter-Medium text-xs' >Last Name</p>
                     <Input 
                        name="lastname"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("lastname", true, true)
                        }  
                        placeholder="Enter your last name" size="lg" className=' mt-2 bg-gray_bg border-gray_bg text-primary '  bg="#F6F6F6" focusBorderColor='white' fontSize='xs' borderColor="#F6F6F6" color="#200E32"/>
                
                    <div className="w-full h-auto pt-2">
                        {formik.touched.lastname && formik.errors.lastname && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Inter-Regular text-errorRed"
                            >
                                {formik.errors.lastname}
                            </motion.p>
                        )}
                    </div>
                </div> 
                <div className='relative w-full flex font-Inter-Regular flex-col py-2 ' > 
                    <p className='font-Inter-Medium text-xs' >Phone Number</p>
                     <Input 
                        name="phonenumber"
                        onChange={formik.handleChange}
                        type='number'
                        onFocus={() =>
                            formik.setFieldTouched("phonenumber", true, true)
                        }  
                        placeholder="Enter your Phone Number" size="lg" className=' mt-2 bg-gray_bg border-gray_bg text-primary '  bg="#F6F6F6" focusBorderColor='white' fontSize='xs' borderColor="#F6F6F6" color="#200E32"/>
                
                    <div className="w-full h-auto pt-2">
                        {formik.touched.phonenumber && formik.errors.phonenumber && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Inter-Regular text-errorRed"
                            >
                                {formik.errors.phonenumber}
                            </motion.p>
                        )}
                    </div>
                </div> 


                {/* <p className='font-Inter-Medium text-xs text-right cursor-pointer' >Forgot Password?<Link style={{ textDecoration: 'none' }} href='/register'><span className='cursor-pointer ml-1 font-Inter-SemiBold text-xs' style={{color:'#03C8DB'}} > Get a new one</span></Link></p>  */}
            </div>  
             
            <button onClick={()=> Router.push('/verify')} style={formik.values.firstname !== '' && formik.values.lastname !== '' && formik.values.phonenumber !== ''? {backgroundColor: '#002343', color: 'white'}: {backgroundColor: '#CCD3D9', color: '#667B8E'}} className='w-full py-3 flex justify-center items-center text-white font-Inter-Bold text-xs mr-2 mt-4 rounded-md' >
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
        </div>
    )
}
