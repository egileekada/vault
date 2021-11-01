import React from 'react'
import { Input, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik';  
import Carousel from '../component/Carousel';

export default function forgotpassword() {

    const [showpassword, setShowpass] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleShowpassword = () => {
        setShowpass(prev => !prev);
    } 


    const loginSchema = yup.object({ 
        email: yup.string().email('This email is not valid').required('Your email is required'), 
    }) 

    // formik
    const formik = useFormik({
        initialValues: {email: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    }); 

    return ( 
        <div className='w-full h-screen flex relative flex-row bg-white' > 
            <div className='w-full h-full flex justify-center items-center  ' > 
                <div className='bg-white w-full h-full flex justify-center flex-col py-24  py-14 px-6 lg:px-40 rounded-lg' >
                    <img src='/assets/images/Vault-logo.png' alt='login' style={{width: '143px'}} className=' h-auto  ' />
                    <p style={{color: '#002343'}} className='font-Inter-ExtraBold text-2xl flex mt-10'>Get a new Password</p> 
                    <p style={{color: '#5788AD'}} className='font-Inter-Regular my-2 text-xs' >Please enter the email address you used in creating  your vault account..</p>
                    <div className='w-full flex flex-col mt-4 py-4' >  
                        <div className='relative w-full flex font-Inter-Regular flex-col py-2 ' > 
                            <p className='font-Inter-Medium text-xs' >Email Address</p>
                            <Input 
                                name="email"
                                onChange={formik.handleChange} 
                                onFocus={() =>
                                    formik.setFieldTouched("email", true, true)
                                }  
                                placeholder="user@hotmail.com" size="lg" className=' bg-gray_bg border-gray_bg text-primary '  bg="#F6F6F6" focusBorderColor='white' fontSize='xs' borderColor="#F6F6F6" color="#200E32"/>
                        
                            <div className="w-full h-auto pt-2">
                                {formik.touched.email && formik.errors.email && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-Regular text-errorRed"
                                    >
                                        {formik.errors.email}
                                    </motion.p>
                                )}
                            </div>
                        </div> 

                    </div>  
                    
                    <button style={formik.values.email !== '' ? {backgroundColor: '#002343', color: 'white'}: {backgroundColor: '#CCD3D9', color: '#667B8E'}} className='w-full py-3 flex justify-center items-center text-white font-Inter-Bold text-xs mr-2 mt-4 rounded-md' >
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
                        <p className='font-Inter-Medium text-xs ' > <Link style={{ textDecoration: 'none' }} href='/login'><span className='cursor-pointer ml-1 font-Inter-SemiBold text-xs' style={{color:'#03C8DB'}} >Go Back</span></Link></p>
                    </div>
                </div>
            </div> 
            <div className='w-full h-screen relative hidden lg:flex' > 
                <Carousel />
            </div>
        </div>  
    )
}
