import { Input } from '@chakra-ui/react'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { IUser, UserContext } from '../../../../context/UserContext'
import SuccessModal from './SucessModal'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik'; 

export default function AccountName(props: any) {

    const [next, setNext] = React.useState(false)
    const userContext: IUser = React.useContext(UserContext);  
    const [showModal, setShowModal] =   React.useState(false)
    const [closeTab, setCloseTab] =   React.useState(false) 
    const [firstName, setFirstName] =   React.useState(userContext.userData.firstname) 
    const [lastName, setLastName] =   React.useState(userContext.userData.lastname) 
    const [otherName, setOtherName] =   React.useState(userContext.userData.othername) 
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        {closeTab ?
            props.tab(-1)
        :null}
    },) 

    // formik
	// "raw": "{\r\n    \"firstname\": \"John\",\r\n    \"othernames\": \"Franklin\",\r\n    \"lastname\": \"Doe\"\r\n}",
    const formik = useFormik({
        initialValues: {firstname: userContext.userData.firstname, othername: userContext.userData.othername, lastname: userContext.userData.lastname}, 
        onSubmit: () => {},
    });  

    const submit = async () => {

        // if (!formik.dirty) {
        //   alert('You have to fill in th form to continue');
        //   return;
        // }else if (!formik.isValid) {
        //   alert('You have to fill in the form correctly to continue');
        //   return;
        // }else {
            setLoading(true); 

            const request = await fetch(`https://api.vaultafrica.co/profile/account/name`, {
                method: 'PATCH',
                headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    firstname: firstName,
                    lastname: lastName,
                    othernames: otherName,
                }),
            });
    
            const json = await request.json();

            console.log('Status '+request.status)
    
            if (request.status === 200) {    
                console.log(json)  
                const t1 = setTimeout(() => { 
                    // setShowModal(true)
                    clearTimeout(t1);
                }, 1000); 
            }else {
                alert(json.message);
                console.log(json)
                setLoading(false);
            }
        // }
    }   

    return (
        <div className='w-full h-full py-6 lg:py-10 lg:px-14'> 
            <div className='w-full flex items-center ' > 
                <div onClick={()=> props.close(false)} style={{backgroundColor: '#F9F9F9'}} className='rounded-full mr-12 cursor-pointer p-2'>
                    <IoIosArrowBack size='20px' />
                </div>   
                <p className='font-Montserrat-Bold text-base' >Account Name</p>
            </div> 
            {!next ?
                <div className=' w-full lg:w-560px' >
                    <p className='font-Montserrat-Medium text-sm mt-6' >You full legal names as it apperas on all your document</p>
                    <p className='font-Montserrat-Medium text-sm mt-8 mb-1' >First Name</p>
                        <Input 
                            onChange={(e)=> setFirstName(e.target.value)}
                            placeholder={userContext.userData.firstname} backgroundColor='#fff' size='lg' fontSize='sm'  />
                       
                    <p className='font-Montserrat-Medium text-sm mt-4 mb-1' >Other Names</p>
                        <Input
                            onChange={(e)=> setOtherName(e.target.value)}
                            placeholder={userContext.userData.otherNames}  backgroundColor='#fff' size='lg' fontSize='sm' />
                        
                    <p className='font-Montserrat-Medium text-sm mt-4 mb-1' >Last Name</p>
                        <Input  
                            onChange={(e)=> setLastName(e.target.value)}
                            placeholder={userContext.userData.lastname} backgroundColor='#fff' size='lg' fontSize='sm' />
                         
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
                    {/* <button onClick={()=> setNext(true)} style={{backgroundColor: '#002343'}} className='w-full rounded text-white py-3 mt-12 text-sm font-Montserrat-Medium ' >Submit</button> */}
                </div>:
                <div className=' w-full lg:w-560px' >
                    <p className='font-Montserrat-Medium text-sm mt-6' >Sumbit a documet that confims your change in name, it must be one that is accepted by the nigerian governement.</p>
                    <div className='w-16 rounded-2xl h-16 my-10 bg-yellow-300' >

                    </div> 
                    <button onClick={()=> setShowModal(true)} style={{backgroundColor: '#002343'}} className='w-full rounded text-white py-3  text-sm font-Montserrat-Medium ' >Submit</button>
                </div>
            }
            {showModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <SuccessModal header='DOCUMENT UPLOADED' body='An email will be sent to you immediately we review this document.' close={setCloseTab} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
        </div>
    )
}
