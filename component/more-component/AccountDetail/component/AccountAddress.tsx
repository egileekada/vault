import { Input, Select } from '@chakra-ui/react'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import SuccessModal from './SucessModal'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import { IUser, UserContext } from '../../../../context/UserContext'

export default function AccountAddress(props: any) {
 
    const [showModal, setShowModal] =   React.useState(false)
    const [closeTab, setCloseTab] =   React.useState(false) 
    const [country, setCountry] = React.useState([''] as any)
    const [selectedcountry, setSelectedCountry] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const [countryloading, setCountryLoading] = React.useState(true)
    const [state, setState] = React.useState([] as any)
    const userContext: IUser = React.useContext(UserContext);  

    React.useEffect(() => {
        {closeTab ?
            props.tab(-1)
        :null}
    },)

    const infoSchema = yup.object({ 
        city: yup.string().required('Required'),
        street: yup.string().required('Required'),
        state: yup.string().required('Required'),  
    }) 

    // formik

    // "raw": "{\r\n    \"city\": \"Port Harcourt\",\r\n    \"street\": \"Road 1\",\r\n    \"state\": \"Rivers\",\r\n    \"country\": \"Nigeria\"\r\n}",
    const formik = useFormik({
        initialValues: {city: '', street: '', state: ''},
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
            const request = await fetch(`https://api.vaultafrica.co/profile/address`, {
                method: 'PATCH',
                headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    city: formik.values.city, street: formik.values.street, state: formik.values.state, country: selectedcountry
                }),
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
 
    React.useEffect(() => { 
        fetch(`https://www.universal-tutorial.com/api/countries/`, {
            method: 'GET', // or 'PUT'
            headers: { 
                Authorization : `Bearer ${localStorage.getItem('country-token')}`,
                "Accept": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {    
            setCountry(data)
        })
        .catch((error) => {
            console.error('Error:', error); 
        });  

        fetch(`https://www.universal-tutorial.com/api/states/${selectedcountry}`, {
            method: 'GET', // or 'PUT'
            headers: { 
                Authorization : `Bearer ${localStorage.getItem('country-token')}`,
                "Accept": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {   
            setState(data) 
            if(data.length !== 0){
                setCountryLoading(false)
            }
        })
        .catch((error) => {
            console.error('Error:', error); 
        });  
    }, [selectedcountry])
    
    const CountryHandler =(e: any)=> {
        setSelectedCountry(e.target.value)
        formik.handleChange
    } 

    return (
        <div className='w-full h-full py-6 lg:py-10 lg:px-14'> 
            <div className='w-full flex items-center ' > 
                <div onClick={()=> props.close(false)} style={{backgroundColor: '#F9F9F9'}} className='rounded-full mr-12 cursor-pointer p-2'>
                    <IoIosArrowBack size='20px' />
                </div>   
                <p className='font-Montserrat-Bold text-base' >Address</p>
            </div> 
            <div className=' w-full lg:w-560px' >
                <p className='font-Montserrat-Medium text-sm mt-6' >You full legal names as it apperas on all your document</p>
                <p className='font-Montserrat-Medium text-sm mt-8 mb-1' >Country</p>
                <Select size='lg' onChange={(e)=> CountryHandler(e)} placeholder={userContext.userData.country} backgroundColor='#fff' fontSize='sm'>
                    {country.map((item: any)=> {
                        return(
                            <option key={item.country_name} >{item.country_name}</option>
                        )
                    })}
                </Select> 
                <p className='font-Montserrat-Medium text-sm mt-4 mb-1' >Street Name</p>
                    <Input 
                        name="street"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("street", true, true)
                        }  
                        size='lg'
                        placeholder={userContext.userData.street}
                            backgroundColor='#fff' fontSize='sm' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.street && formik.errors.street && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Inter-Regular text-errorRed"
                            >
                                {formik.errors.street}
                            </motion.p>
                        )}
                    </div>
                <div className='w-full flex flex-col lg:flex-row '>
                    <div className='w-full lg:r-2' > 
                        <p className='font-Montserrat-Medium text-sm mt-4 mb-1' >State</p> 
                        <Select
                            name="state"
                            onChange={formik.handleChange}
                    
                            onFocus={() =>
                                formik.setFieldTouched("state", true, true)
                            }  
                                size='lg' fontSize='sm' placeholder={userContext.userData.state}>
                            {!countryloading ?
                                <> 
                                    {state.map((item: any)=> {
                                        return(
                                            <option key={item.state_name} >{item.state_name}</option>
                                        )
                                    })}
                                </>
                            :
                                <>
                                    <option>loading...</option>
                                </>
                            }
                        </Select>
                        <div className="w-full h-auto pt-2">
                            {formik.touched.state && formik.errors.state && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Inter-Regular text-errorRed"
                                >
                                    {formik.errors.state}
                                </motion.p>
                            )}
                        </div>
                            {/* <Input backgroundColor='#fff' fontSize='sm' /> */}
                    </div> 
                    <div className='w-full lg:ml-2' > 
                        <p className='font-Montserrat-Medium text-sm mt-4 mb-1' >City</p>
                            <Input 
                                name="city"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("city", true, true)
                                }  
                                size='lg' placeholder={userContext.userData.city}
                                backgroundColor='#fff' fontSize='sm' /> 
                            <div className="w-full h-auto pt-2">
                                {formik.touched.city && formik.errors.city && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-Regular text-errorRed"
                                    >
                                        {formik.errors.city}
                                    </motion.p>
                                )}
                            </div>
                    </div> 
                </div>


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
                {/* <button onClick={()=> setShowModal(true)} style={{backgroundColor: '#002343'}} className='w-full rounded text-white py-3 mt-12 text-sm font-Montserrat-Medium ' >Submit</button> */}
            </div>
            {showModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <SuccessModal image={true} header='SUCCESS' body='You address has been updated' close={setCloseTab} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
        </div>
    )
}
