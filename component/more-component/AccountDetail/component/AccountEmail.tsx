import { Input } from '@chakra-ui/react'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import SuccessModal from './SucessModal'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik'; 

export default function AccountEmail(props: any) {
 
    const [showModal, setShowModal] =   React.useState(false)
    const [closeTab, setCloseTab] =   React.useState(false) 

    React.useEffect(() => {
        {closeTab ?
            props.tab(-1)
        :null}
    },)

    const infoSchema = yup.object({ 
        email: yup.string().required('Required'),
        otp: yup.string().required('Required'),  
    }) 

    // formik
    const formik = useFormik({
        initialValues: {email: '', otp: '', lastname: ''},
        validationSchema: infoSchema,
        onSubmit: () => {},
    });  


    return (
        <div className='w-full h-full py-6 lg:py-10 lg:px-14'> 
            <div className='w-full flex items-center ' > 
                <div onClick={()=> props.close(false)} style={{backgroundColor: '#F9F9F9'}} className='rounded-full mr-12 cursor-pointer p-2'>
                    <IoIosArrowBack size='20px' />
                </div>   
            <p className='font-Montserrat-Bold text-base' >Email Address</p>
            </div> 
            <div className=' w-full lg:w-560px' >
                <p className='font-Montserrat-Medium text-sm mt-6' >A one time password has been sent to your emai address number. please check and enter the 6 digit code.</p>
                <p className='font-Montserrat-Medium text-sm mt-8 mb-1' >Email</p>
                    <Input 
                        name="email"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("email", true, true)
                        }  
                        backgroundColor='#fff' fontSize='sm' />
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
                <p className='font-Montserrat-Medium text-sm mt-4 mb-1' >OTP</p>
                    <Input
                        name="otp"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("otp", true, true)
                        }  
                        backgroundColor='#fff' fontSize='sm' /> 
                    <div className="w-full h-auto pt-2">
                        {formik.touched.otp && formik.errors.otp && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Inter-Regular text-errorRed"
                            >
                                {formik.errors.otp}
                            </motion.p>
                        )}
                    </div>
                    <div className='w-full flex flex-col items-center justify-center' > 
                        <p className='font-Montserrat-Medium text-xs mt-12 ' >Didn’t get the OTP? <span className='cursor-pointer' style={{color: '#03C8DB'}} >Resend Now </span></p>
                        <p className='font-Montserrat-Medium text-xs mt-6 ' >Resend in 50 seconds</p>
                    </div>
                <button onClick={()=> setShowModal(true)} style={{backgroundColor: '#002343'}} className='w-full rounded text-white py-3 mt-12 text-sm font-Montserrat-Medium ' >Submit</button>
            </div>
            {showModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <SuccessModal image={true} header='SUCCESS' body='You new email address has been updated.' close={setCloseTab} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
        </div>
    )
}
