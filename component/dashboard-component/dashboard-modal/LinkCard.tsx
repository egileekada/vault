import { Input } from '@chakra-ui/input';
import React from 'react';
import { IoIosClose } from 'react-icons/io';
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik'; 

export default function LinkCard(props: any) {

    const [loading, setLoading] = React.useState(false);
    const Next =()=> {
        props.close(false)
        props.next(true)
    } 
 
    const loginSchema = yup.object({  
        name: yup.string().required('Required'), 
        number: yup.string().required('Required').min(15, 'A minimium of 15 characters'), 
        expiryDate: yup.string().required('Required'), 
        cvv: yup.string().required('Required'), 
        pin: yup.string().required('Required'), 
    }) 

    // formikraw": "{\r\n    \"name\": \"Charles Allison\",\r\n    \"number\": 23340988982234312,\r\n    \"expiryDate\": \"12/21\",\r\n    \"cvv\": 322,\r\n    \"pin\": 3342\r\n}",
    const formik = useFormik({
        initialValues: {name: '', number: '', expiryDate: '', cvv: '', pin: 0},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });  


    const submit = async () => {
        setLoading(true)
        if (!formik.dirty) {
          alert('You have to fill in th form to continue');
          setLoading(false)
          return;
        }else if (!formik.isValid) {
          alert('You have to fill in the form correctly to continue');
          setLoading(false)
          return;
        }else { 
            const request = await fetch(`https://api.vaultafrica.co/cards`, {
                method: 'POST',
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
  
                props.close(false)
                props.next(true)
                // const t1 = setTimeout(() => { 
                //     // Router.push('/dashboard'); 
                //     clearTimeout(t1);
                // }, 3000);  
            }else {
                alert(json.message);
                console.log(json) 
            }
        }
    } 


    return (
        <div className=' w-full lg:w-560px  bg-white px-8 h-screen'  >
            <div className='w-full flex flex-row items-center py-10' > 
                <p onClick={()=> props.close(false)} style={{color:'#03C8DB'}} className='font-Montserrat-Bold text-sm cursor-pointer ' >Go back</p>
                <div className='w-full flex flex-1' />
                <div onClick={()=> props.close(false)} style={{backgroundColor: '#FAFAFA', borderRadius: '4px'}} className='w-auto h-auto cursor-pointer' >
                    <IoIosClose size='30px' />
                </div>
            </div>
            <p className='font-Inter-Medium text-base' >{props.header}</p>
            <p style={{color: '#828282'}} className='font-Montserrat-Regular text-xs mt-1' >Add your card details to link your card.</p>
            <div className='mt-10' >
                <p className=' font-Montserrat-Regular text-xs mb-2' >Card details</p>
                <Input
                    name="name"
                    onChange={formik.handleChange}
                    onFocus={() =>
                        formik.setFieldTouched("name", true, true)
                    }  
                     backgroundColor='#E0E0E0' fontSize='sm' className=' font-Montserrat-Regular' /> 

                <div className="w-full h-auto pt-2">
                    {formik.touched.name && formik.errors.name && (
                        <motion.p
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-xs font-Inter-Regular text-errorRed"
                        >
                            {formik.errors.name}
                        </motion.p>
                    )}
                </div>
                <p className=' font-Montserrat-Regular text-xs mt-4 mb-2' >Card Number</p>
                <Input
                    name="number"
                    onChange={formik.handleChange}
                    onFocus={() =>
                        formik.setFieldTouched("number", true, true)
                    }  
                    type='number'
                    backgroundColor='#E0E0E0' fontSize='sm' className=' font-Montserrat-Regular' />

                     <div className="w-full h-auto pt-2">
                         {formik.touched.number && formik.errors.number && (
                             <motion.p
                                 initial={{ y: -100, opacity: 0 }}
                                 animate={{ y: 0, opacity: 1 }}
                                 className="text-xs font-Inter-Regular text-errorRed"
                             >
                                 {formik.errors.number}
                             </motion.p>
                         )}
                     </div>
                <div className='w-full flex flex-row mt-4' >
                    <div className='w-full mr-2' >
                        <p className=' font-Montserrat-Regular text-xs mb-2' >Expiry Date</p>
                        <Input
                            name="expiryDate"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("expiryDate", true, true)
                            }  
                            type='text'
                            backgroundColor='#E0E0E0' fontSize='sm' className=' font-Montserrat-Regular'/>

                            <div className="w-full h-auto pt-2">
                                {formik.touched.expiryDate && formik.errors.expiryDate && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-Regular text-errorRed"
                                    >
                                        {formik.errors.expiryDate}
                                    </motion.p>
                                )}
                            </div>
                    </div>
                    <div className='w-full ml-2' >
                        <p className=' font-Montserrat-Regular text-xs mb-2' >CVV</p>
                        <Input 
                            name="cvv"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("cvv", true, true)
                            }  
                            type='number'
                            backgroundColor='#E0E0E0' fontSize='sm' className=' font-Montserrat-Regular' />

                            <div className="w-full h-auto pt-2">
                                {formik.touched.cvv && formik.errors.cvv && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-Regular text-errorRed"
                                    >
                                        {formik.errors.cvv}
                                    </motion.p>
                                )}
                            </div>
                    </div>
                </div>

                <p className=' font-Montserrat-Regular text-xs mt-4  mb-2' >PIN</p>
                <Input
                    name="pin"
                    onChange={formik.handleChange}
                    onFocus={() =>
                        formik.setFieldTouched("pin", true, true)
                    }  
                    type='password'
                    backgroundColor='#E0E0E0' fontSize='sm' className=' font-Montserrat-Regular' />

                     <div className="w-full h-auto pt-2">
                         {formik.touched.pin && formik.errors.pin && (
                             <motion.p
                                 initial={{ y: -100, opacity: 0 }}
                                 animate={{ y: 0, opacity: 1 }}
                                 className="text-xs font-Inter-Regular text-errorRed"
                             >
                                 {formik.errors.pin}
                             </motion.p>
                         )}
                     </div>
                <button onClick={()=> submit()} style={{backgroundColor: '#002343'}} className='w-full rounded text-white flex justify-center items-center py-3 mt-14 text-sm font-Montserrat-Medium ' >
                    {!loading ? 
                        <div className='py-1' >
                            PROCEED TO LINK CARD 🔒
                        </div>:
                        <>
                            <div className="animate-spin rounded-full h-6 w-6 mr-4 border-t-2 border-b-2 border-white"></div>
                            LOADING
                        </>
                    }
                </button>
            </div>
        </div>
    );
}
