import { Select, Input } from '@chakra-ui/react'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik';  
import SuccessModal from './SucessModal'
import { IUser, UserContext } from '../../../../context/UserContext'

export default function AccountContact(props: any) {
 
    const [showModal, setShowModal] =   React.useState(false)
    const [closeTab, setCloseTab] =   React.useState(false) 
    const [loading, setLoading] = React.useState(false);
    const userContext: IUser = React.useContext(UserContext);  

    React.useEffect(() => {
        {closeTab ?
            props.tab(-1)
        :null}
    },)
 
    const infoSchema = yup.object({ 
        phoneNumber: yup.string().required('Required'), 
    }) 

    // formik
    const formik = useFormik({
        initialValues: {phoneNumber: ''},
        validationSchema: infoSchema,
        onSubmit: () => {},
    });  

    const submit = async () => {

        if (!formik.dirty) {
          alert('You have to fill in th form to continue');
          return;
        }else if (!formik.isValid) {
          alert('You have to fill in the form correctly to continue');
          return;
        }else {
            setLoading(true);
            const request = await fetch(`https://api.vaultafrica.co/profile/contact`, {
                method: 'PATCH',
                headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(formik.values),
            });
    
            const json = await request.json();

            console.log('Status '+request.status)
    
            if (request.status === 200) {    
                console.log(json)  
                const t1 = setTimeout(() => { 
                    setShowModal(true)
                    clearTimeout(t1);
                }, 1000); 
            }else {
                alert(json.message);
                console.log(json)
                setLoading(false);
            }
        }
    }  

    return (
        <div className='w-full h-full py-6 lg:py-10 lg:px-14'> 
            <div className='w-full flex items-center ' > 
                <div onClick={()=> props.close(false)} style={{backgroundColor: '#F9F9F9'}} className='rounded-full mr-12 cursor-pointer p-2'>
                    <IoIosArrowBack size='20px' />
                </div>   
                <p className='font-Montserrat-Bold text-base' >Contact Address</p>
            </div> 
            <div className=' w-full lg:w-560px' >
                {/* <p className='font-Montserrat-Medium text-sm mt-6' >A one time password hasbeen sent to your new number. please check and enter the 6 digit code..</p> */}
                <p className='font-Montserrat-Medium text-sm mt-8 mb-1' >Phone Number</p>
                    <Input 
                        name="phoneNumber"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("phoneNumber", true, true)
                        }  
                        placeholder={userContext.userData.phoneNumber}
                        size='lg'backgroundColor='#fff' fontSize='sm' /> 
                    <div className="w-full h-auto pt-2">
                        {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Inter-Regular text-errorRed"
                            >
                                {formik.errors.phoneNumber}
                            </motion.p>
                        )}
                    </div>
                    {/* <p className='font-Montserrat-Medium text-sm mt-4 mb-1' >OTP</p>
                    <Input backgroundColor='#fff' fontSize='sm' /> 
                    <div className='w-full flex flex-col items-center justify-center' > 
                        <p className='font-Montserrat-Medium text-xs mt-12 ' >Didn’t get the OTP? <span className='cursor-pointer' style={{color: '#03C8DB'}} >Resend Now </span></p>
                        <p className='font-Montserrat-Medium text-xs mt-6 ' >Resend in 50 seconds</p>
                    </div> */}

                    <button onClick={()=> submit()} style={{backgroundColor: '#002343', color: 'white'}} className='w-full py-3 flex justify-center items-center text-white font-Inter-Bold text-sm mt-12 rounded-md' >
                        {!loading ? 
                            <div className='py-1' >
                                Submit
                            </div>:
                            <>
                                <div className="animate-spin rounded-full h-6 w-6 mr-4 border-t-2 border-b-2 border-white"></div>
                                LOADING
                            </>
                        } 
                    </button>
                {/* <button onClick={()=> submit()} style={{backgroundColor: '#002343'}} className='w-full rounded text-white py-3 mt-12 text-sm font-Montserrat-Medium ' >Submit</button> */}
            </div>
            {showModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <SuccessModal image={true} header='SUCCESS' body='You new Phone number has been updated.' close={setCloseTab} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
        </div>
    )
}
