import React from 'react'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik';   
import { Input, Link } from '@chakra-ui/react'
import Router from 'next/router'

export default function StepOne(props: any) {
    

    const [showpassword, setShowpass] = React.useState(false);
    const [showconfirmpassword, setShowconfirmpass] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleShowpassword = () => {
        setShowpass(prev => !prev);
    }  

    const handleShowconfirmpassword = () => {
        setShowconfirmpass(prev => !prev);
    } 

    const loginSchema = yup.object({ 
        email: yup.string().email('This email is not valid').required('Your email is required'),
        password: yup.string().required('Your password is required').matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, And At Least An Uppercase And A Lowercase Letter, A Number and A Special Case Character"
          ),
    }) 

    // formik
    const formik = useFormik({
        initialValues: {email: '', password: '', confirmpassword: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    }); 


    const submit = async () => {

        setLoading(true);
        if (!formik.dirty) {
          alert('You have to fill in th form to continue');
          return;
        }else if (!formik.isValid) {
          alert('You have to fill in the form correctly to continue');
          return;
        }else { 
            const t1 = setTimeout(() => { 
                setLoading(false);
                props.value(formik.values)
                props.click(true)
                clearTimeout(t1);
            }, 3000); 
        }
    } 

    return (
        <div className='bg-white w-full h-auto flex justify-center flex-col py-12 px-6 lg:px-40 rounded-lg' >
            <img src='/assets/images/Vault-logo.png' alt='login' style={{width: '143px'}} className=' h-auto  ' />
            <p style={{color: '#002343'}} className='font-Inter-ExtraBold text-2xl flex mt-10'>Create new account</p> 
            <p style={{color: '#5788AD', width: '300px'}} className='font-Inter-Regular mt-2 text-xs' >Create a new vault account in less than 2mins. <br/>Your password should contain 8 characters, <br/>number and UPPERCASE.</p>
            <p style={{color: '#5788AD'}} className='font-Inter-Regular text-xs' ></p>
            <div className='w-full flex flex-col mt-4 py-4' >  
                <div className='relative w-full flex font-Inter-Regular flex-col py-2 ' > 
                    <p className='font-Inter-Medium text-xs' >Email Address</p>
                    <Input 
                        name="email"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("email", true, true)
                        }  
                        placeholder="John@gmail.com" size="lg" className=' mt-2 bg-gray_bg border-gray_bg text-primary '  bg="#F6F6F6" focusBorderColor='white' fontSize='sm' borderColor="#F6F6F6" color="#200E32"/>
                
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
                <div className=' relative w-full flex font-Inter-Regular flex-col py-2 ' > 
                    <p className='font-Inter-Medium text-xs' >Password</p>
                    <Input
                        name="password"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("password", true, true)
                        } 
                        type={showpassword ? "text" : "password"} placeholder="Password" size="lg" className=' mt-2 bg-gray_bg  border-gray_bg text-primary'  bg="#F6F6F6" focusBorderColor='white' fontSize='sm' borderColor="#F6F6F6" color="#200E32"/>
                    <div onClick={()=> handleShowpassword()} style={{color: '#00191AA6', marginTop: '36px'}} className=' font-Inter-Medium cursor-pointer z-10 absolute lg:ml-70 right-4 text-sm ' >
                        {showpassword ?
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9998 9.64136C10.6698 9.64136 9.58887 10.7234 9.58887 12.0534C9.58887 13.3824 10.6698 14.4634 11.9998 14.4634C13.3298 14.4634 14.4118 13.3824 14.4118 12.0534C14.4118 10.7234 13.3298 9.64136 11.9998 9.64136ZM11.9998 15.9634C9.84287 15.9634 8.08887 14.2094 8.08887 12.0534C8.08887 9.89636 9.84287 8.14136 11.9998 8.14136C14.1568 8.14136 15.9118 9.89636 15.9118 12.0534C15.9118 14.2094 14.1568 15.9634 11.9998 15.9634Z" fill="#1D1D1D"/>
                                <mask id="mask0_145:918"  maskUnits="userSpaceOnUse" x="2" y="4" width="20" height="17">
                                    <path d="M2 4.00024H21.9999V20.1052H2V4.00024Z" fill="white"/>
                                </mask>
                                <g mask="url(#mask0_145:918)">
                                    <path d="M3.56975 12.0525C5.42975 16.1615 8.56275 18.6045 11.9998 18.6055C15.4368 18.6045 18.5698 16.1615 20.4298 12.0525C18.5698 7.9445 15.4368 5.50151 11.9998 5.50051C8.56375 5.50151 5.42975 7.9445 3.56975 12.0525ZM12.0018 20.1055H11.9978H11.9968C7.86075 20.1025 4.14675 17.2035 2.06075 12.3485C1.97975 12.1595 1.97975 11.9455 2.06075 11.7565C4.14675 6.90251 7.86175 4.00351 11.9968 4.00051C11.9988 3.99951 11.9988 3.99951 11.9998 4.00051C12.0018 3.99951 12.0018 3.99951 12.0028 4.00051C16.1388 4.00351 19.8528 6.90251 21.9388 11.7565C22.0208 11.9455 22.0208 12.1595 21.9388 12.3485C19.8538 17.2035 16.1388 20.1025 12.0028 20.1055H12.0018Z" fill="#1D1D1D"/>
                                </g>
                            </svg>:
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.76094 15.6172C9.56894 15.6172 9.37694 15.5442 9.23094 15.3972C8.49294 14.6602 8.08594 13.6802 8.08594 12.6382C8.08594 10.4782 9.84194 8.72119 11.9999 8.72119C13.0379 8.72119 14.0459 9.14019 14.7649 9.87119C15.0549 10.1672 15.0519 10.6412 14.7559 10.9312C14.4609 11.2232 13.9869 11.2182 13.6959 10.9242C13.2569 10.4772 12.6389 10.2212 11.9999 10.2212C10.6689 10.2212 9.58594 11.3052 9.58594 12.6382C9.58594 13.2792 9.83694 13.8832 10.2909 14.3372C10.5839 14.6302 10.5839 15.1042 10.2919 15.3972C10.1449 15.5442 9.95294 15.6172 9.76094 15.6172Z" fill="#333333"/>
                                <path d="M12.5676 16.4912C12.2126 16.4912 11.8966 16.2372 11.8306 15.8752C11.7566 15.4682 12.0266 15.0772 12.4346 15.0032C13.4146 14.8252 14.1906 14.0472 14.3666 13.0662C14.4406 12.6592 14.8306 12.3912 15.2376 12.4612C15.6456 12.5342 15.9166 12.9242 15.8436 13.3322C15.5566 14.9252 14.2946 16.1892 12.7026 16.4792C12.6576 16.4872 12.6116 16.4912 12.5676 16.4912Z" fill="#333333"/>
                                <mask id="mask0_145:1018" maskUnits="userSpaceOnUse" x="2" y="4" width="17" height="15">
                                    <path d="M2 4.62439H18.0862V18.7225H2V4.62439Z" fill="white"/>
                                </mask>
                                <g mask="url(#mask0_145:1018)">
                                    <path d="M6.6545 18.7225C6.4925 18.7225 6.3295 18.6695 6.1915 18.5625C4.5005 17.2345 3.0715 15.2875 2.0615 12.9335C1.9795 12.7435 1.9795 12.5295 2.0615 12.3405C3.0825 9.97652 4.5205 8.01952 6.2205 6.68252C9.6865 3.93952 14.3005 3.93052 17.8015 6.70252C18.1265 6.95952 18.1815 7.43152 17.9245 7.75652C17.6665 8.07952 17.1965 8.13652 16.8705 7.87852C13.9045 5.53052 10.0835 5.53852 7.1495 7.86052C5.7135 8.99052 4.4805 10.6365 3.5705 12.6385C4.4715 14.6285 5.6935 16.2645 7.1185 17.3825C7.4445 17.6385 7.5005 18.1105 7.2445 18.4355C7.0965 18.6235 6.8765 18.7225 6.6545 18.7225Z" fill="#333333"/>
                                </g>
                                <mask id="mask1_145:1018" maskUnits="userSpaceOnUse" x="8" y="8" width="14" height="13">
                                    <path d="M8.71777 8.74121H22.0003V20.6894H8.71777V8.74121Z" fill="white"/>
                                </mask>
                                <g mask="url(#mask1_145:1018)">
                                    <path d="M12.0004 20.6894C11.0634 20.6894 10.1314 20.5374 9.23141 20.2384C8.83841 20.1074 8.62541 19.6824 8.75641 19.2894C8.88741 18.8954 9.31041 18.6864 9.70541 18.8144C10.4524 19.0634 11.2244 19.1894 12.0004 19.1894C15.4284 19.1894 18.5614 16.7474 20.4304 12.6364C19.9744 11.6374 19.4434 10.7324 18.8494 9.94242C18.6004 9.61142 18.6664 9.14042 18.9974 8.89142C19.3274 8.64242 19.7984 8.71042 20.0474 9.04042C20.7714 10.0014 21.4074 11.1124 21.9384 12.3384C22.0214 12.5284 22.0214 12.7444 21.9384 12.9334C19.8424 17.7904 16.1274 20.6894 12.0004 20.6894Z" fill="#333333"/>
                                </g>
                                <mask id="mask2_145:1018" maskUnits="userSpaceOnUse" x="3" y="4" width="18" height="18">
                                    <path d="M3.36328 4.00037H20.6368V21.2734H3.36328V4.00037Z" fill="white"/>
                                </mask>
                                <g mask="url(#mask2_145:1018)">
                                    <path d="M4.11303 21.2734C3.92103 21.2734 3.72903 21.2004 3.58303 21.0534C3.29003 20.7604 3.29003 20.2864 3.58303 19.9934L19.3571 4.21938C19.6501 3.92638 20.1241 3.92638 20.4171 4.21938C20.7101 4.51238 20.7101 4.98738 20.4171 5.28038L4.64303 21.0534C4.49703 21.2004 4.30503 21.2734 4.11303 21.2734Z" fill="#333333"/>
                                </g>
                                </svg>

                        }
                    </div>
                    
                    <div className="w-full h-auto pt-2">
                        {formik.touched.password && formik.errors.password && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Inter-Regular text-errorRed"
                            >
                                {formik.errors.password}
                            </motion.p>
                        )}
                    </div>
                </div>  

                <div className=' relative w-full flex font-Inter-Regular flex-col py-2 ' > 
                    <p className='font-Inter-Medium text-xs' >Confirm Password</p>
                    <Input
                        name="confirmpassword"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("confirmpassword", true, true)
                        } 
                        type={showconfirmpassword ? "text" : "password"} placeholder="Confirm Password" size="lg" className=' mt-2 bg-gray_bg  border-gray_bg text-primary'  bg="#F6F6F6" focusBorderColor='white' fontSize='sm' borderColor="#F6F6F6" color="#200E32"/>
                    <div onClick={()=> handleShowconfirmpassword()} style={{color: '#00191AA6', marginTop: '36px'}} className=' font-Inter-Medium cursor-pointer z-10 absolute lg:ml-70 right-4 text-sm ' >
                        {showconfirmpassword ?
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9998 9.64136C10.6698 9.64136 9.58887 10.7234 9.58887 12.0534C9.58887 13.3824 10.6698 14.4634 11.9998 14.4634C13.3298 14.4634 14.4118 13.3824 14.4118 12.0534C14.4118 10.7234 13.3298 9.64136 11.9998 9.64136ZM11.9998 15.9634C9.84287 15.9634 8.08887 14.2094 8.08887 12.0534C8.08887 9.89636 9.84287 8.14136 11.9998 8.14136C14.1568 8.14136 15.9118 9.89636 15.9118 12.0534C15.9118 14.2094 14.1568 15.9634 11.9998 15.9634Z" fill="#1D1D1D"/>
                                <mask id="mask0_145:918"  maskUnits="userSpaceOnUse" x="2" y="4" width="20" height="17">
                                    <path d="M2 4.00024H21.9999V20.1052H2V4.00024Z" fill="white"/>
                                </mask>
                                <g mask="url(#mask0_145:918)">
                                    <path d="M3.56975 12.0525C5.42975 16.1615 8.56275 18.6045 11.9998 18.6055C15.4368 18.6045 18.5698 16.1615 20.4298 12.0525C18.5698 7.9445 15.4368 5.50151 11.9998 5.50051C8.56375 5.50151 5.42975 7.9445 3.56975 12.0525ZM12.0018 20.1055H11.9978H11.9968C7.86075 20.1025 4.14675 17.2035 2.06075 12.3485C1.97975 12.1595 1.97975 11.9455 2.06075 11.7565C4.14675 6.90251 7.86175 4.00351 11.9968 4.00051C11.9988 3.99951 11.9988 3.99951 11.9998 4.00051C12.0018 3.99951 12.0018 3.99951 12.0028 4.00051C16.1388 4.00351 19.8528 6.90251 21.9388 11.7565C22.0208 11.9455 22.0208 12.1595 21.9388 12.3485C19.8538 17.2035 16.1388 20.1025 12.0028 20.1055H12.0018Z" fill="#1D1D1D"/>
                                </g>
                            </svg>:
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.76094 15.6172C9.56894 15.6172 9.37694 15.5442 9.23094 15.3972C8.49294 14.6602 8.08594 13.6802 8.08594 12.6382C8.08594 10.4782 9.84194 8.72119 11.9999 8.72119C13.0379 8.72119 14.0459 9.14019 14.7649 9.87119C15.0549 10.1672 15.0519 10.6412 14.7559 10.9312C14.4609 11.2232 13.9869 11.2182 13.6959 10.9242C13.2569 10.4772 12.6389 10.2212 11.9999 10.2212C10.6689 10.2212 9.58594 11.3052 9.58594 12.6382C9.58594 13.2792 9.83694 13.8832 10.2909 14.3372C10.5839 14.6302 10.5839 15.1042 10.2919 15.3972C10.1449 15.5442 9.95294 15.6172 9.76094 15.6172Z" fill="#333333"/>
                                <path d="M12.5676 16.4912C12.2126 16.4912 11.8966 16.2372 11.8306 15.8752C11.7566 15.4682 12.0266 15.0772 12.4346 15.0032C13.4146 14.8252 14.1906 14.0472 14.3666 13.0662C14.4406 12.6592 14.8306 12.3912 15.2376 12.4612C15.6456 12.5342 15.9166 12.9242 15.8436 13.3322C15.5566 14.9252 14.2946 16.1892 12.7026 16.4792C12.6576 16.4872 12.6116 16.4912 12.5676 16.4912Z" fill="#333333"/>
                                <mask id="mask0_145:1018" maskUnits="userSpaceOnUse" x="2" y="4" width="17" height="15">
                                    <path d="M2 4.62439H18.0862V18.7225H2V4.62439Z" fill="white"/>
                                </mask>
                                <g mask="url(#mask0_145:1018)">
                                    <path d="M6.6545 18.7225C6.4925 18.7225 6.3295 18.6695 6.1915 18.5625C4.5005 17.2345 3.0715 15.2875 2.0615 12.9335C1.9795 12.7435 1.9795 12.5295 2.0615 12.3405C3.0825 9.97652 4.5205 8.01952 6.2205 6.68252C9.6865 3.93952 14.3005 3.93052 17.8015 6.70252C18.1265 6.95952 18.1815 7.43152 17.9245 7.75652C17.6665 8.07952 17.1965 8.13652 16.8705 7.87852C13.9045 5.53052 10.0835 5.53852 7.1495 7.86052C5.7135 8.99052 4.4805 10.6365 3.5705 12.6385C4.4715 14.6285 5.6935 16.2645 7.1185 17.3825C7.4445 17.6385 7.5005 18.1105 7.2445 18.4355C7.0965 18.6235 6.8765 18.7225 6.6545 18.7225Z" fill="#333333"/>
                                </g>
                                <mask id="mask1_145:1018" maskUnits="userSpaceOnUse" x="8" y="8" width="14" height="13">
                                    <path d="M8.71777 8.74121H22.0003V20.6894H8.71777V8.74121Z" fill="white"/>
                                </mask>
                                <g mask="url(#mask1_145:1018)">
                                    <path d="M12.0004 20.6894C11.0634 20.6894 10.1314 20.5374 9.23141 20.2384C8.83841 20.1074 8.62541 19.6824 8.75641 19.2894C8.88741 18.8954 9.31041 18.6864 9.70541 18.8144C10.4524 19.0634 11.2244 19.1894 12.0004 19.1894C15.4284 19.1894 18.5614 16.7474 20.4304 12.6364C19.9744 11.6374 19.4434 10.7324 18.8494 9.94242C18.6004 9.61142 18.6664 9.14042 18.9974 8.89142C19.3274 8.64242 19.7984 8.71042 20.0474 9.04042C20.7714 10.0014 21.4074 11.1124 21.9384 12.3384C22.0214 12.5284 22.0214 12.7444 21.9384 12.9334C19.8424 17.7904 16.1274 20.6894 12.0004 20.6894Z" fill="#333333"/>
                                </g>
                                <mask id="mask2_145:1018" maskUnits="userSpaceOnUse" x="3" y="4" width="18" height="18">
                                    <path d="M3.36328 4.00037H20.6368V21.2734H3.36328V4.00037Z" fill="white"/>
                                </mask>
                                <g mask="url(#mask2_145:1018)">
                                    <path d="M4.11303 21.2734C3.92103 21.2734 3.72903 21.2004 3.58303 21.0534C3.29003 20.7604 3.29003 20.2864 3.58303 19.9934L19.3571 4.21938C19.6501 3.92638 20.1241 3.92638 20.4171 4.21938C20.7101 4.51238 20.7101 4.98738 20.4171 5.28038L4.64303 21.0534C4.49703 21.2004 4.30503 21.2734 4.11303 21.2734Z" fill="#333333"/>
                                </g>
                                </svg>

                        }
                    </div>
                    
                    <div className="w-full h-auto pt-2">
                        {formik.touched.confirmpassword && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Inter-Regular text-errorRed"
                            >
                                {formik.values.password === formik.values.confirmpassword ? '': 'Password not valid'}
                            </motion.p>
                        )}
                    </div>
                    
                </div>   
            </div>  
            
            <button onClick={()=> submit()} style={formik.values.email.length >= 3 && formik.values.password.length >= 8 && formik.values.password === formik.values.confirmpassword ? {backgroundColor: '#002343', color: 'white'}: {backgroundColor: '#CCD3D9', color: '#667B8E'}} className='w-full py-3 flex justify-center items-center text-white font-Inter-Bold text-xs mr-2 mt-4 rounded-md' >
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
                <p className='font-Inter-Medium text-xs ' >Already have an account?  <Link style={{ textDecoration: 'none' }} href='/login'><span className='cursor-pointer ml-1 font-Inter-SemiBold text-xs' style={{color:'#03C8DB'}} >Sign in</span></Link></p>
            </div>
        </div>
    )
}
