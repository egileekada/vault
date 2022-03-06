import { Input } from '@chakra-ui/react'
import React from 'react'
import { IoIosArrowRoundForward, IoIosClose } from 'react-icons/io'
import RadioButton from '../../reusable-modal/RadioButton'
import JointSavingsController from '../modal-controller/JointSavingsController'
import FriendsModal from '../modal-controller/SavingsTabModals/FriendsModal'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers'

export default function JointSavingTab(props: any) { 

    const [showModal, setShowModal] = React.useState(false)
    const [friendsModal, setFriendsModal] = React.useState(false)
    const [endModal, setEndModal] = React.useState(true)
    const [friends, setFriends] = React.useState([] as any)
    const [catergory, setCatergory] = React.useState('');
    const [startDate, setStartDate] = React.useState(new Date());
    const [endDate, setEndDate] = React.useState(new Date()); 
    const [intialstartDate, setIntialStartDate] = React.useState('');
    const [intialendDate, setIntialEndDate] = React.useState('');  
    const [start, setStart] = React.useState(false);
    const [value, setValue] = React.useState({} as any);
    const [end, setEnd] = React.useState(false);
    const [image, SetImage] = React.useState('');
    const [imageFile, SetImageFile] = React.useState({} as any);   


    const handleImageChange = (e: any ) => {

        const selected = e.target.files[0]; 
        const TYPES = ["image/png", "image/jpg", "image/jpeg" ];        
        if (selected && TYPES.includes(selected.type)) {
            // SetImage(selected)
            const reader: any = new FileReader();
            reader.onloadend= () => {  
                SetImage(reader.result)
            }
            reader.readAsDataURL(selected)
        } else {
            console.log('Error')
        }   
        SetImageFile(selected) 
    }   

    const ClickHandler =()=> {
        props.close(-1)  
        setEndModal(true)
    }


    function pad(n: any) {
        return (n < 10) ? ("0" + n) : n;
    }

    React.useEffect(() => { 
        {endModal === false ? 
            ClickHandler() 
            :null
        }

        formik.setFieldValue('pattern', catergory ) 
    },[endModal]) 

    

    // const NextClick =()=> {
    //     setShowModal(true);
    //     setFriendsModal(false)
    // }

    const handleStartChange = (date: any) => { 
        setStartDate(date);
        setStart(false);
        setIntialStartDate('active')
    };


    const handleEndChange = (date: any) => { 
        setEndDate(date);
        setEnd(false);
        setIntialEndDate('active')
    };

    const renderStart = (props: any) => {
        return(
            <div style={{backgroundColor: '#E0E0E0'}} className='w-full relative h-12 cursor-pointer flex flex-row items-center justify-center text-primary text-xs font-Rubik-regular rounded-md' onClick={() => setStart(isOpen => !isOpen)}>
                <svg className='absolute right-4'  width="25" height="25" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.21283 0.583344C9.45434 0.583344 9.65034 0.779343 9.65034 1.02084L9.6506 1.5154C10.5023 1.57379 11.2097 1.86554 11.7104 2.36723C12.257 2.91615 12.5445 3.7054 12.5416 4.65215V9.9739C12.5416 11.9176 11.3073 13.1251 9.32104 13.1251H4.38721C2.40096 13.1251 1.16663 11.9007 1.16663 9.92957V4.65098C1.16663 2.81768 2.26741 1.64089 4.06269 1.5156L4.06305 1.02084C4.06305 0.779343 4.25905 0.583344 4.50055 0.583344C4.74205 0.583344 4.93805 0.779343 4.93805 1.02084L4.93788 1.50443H8.77504L8.77533 1.02084C8.77533 0.779343 8.97133 0.583344 9.21283 0.583344ZM11.6666 5.77734H2.04163V9.92957C2.04163 11.4264 2.87463 12.2501 4.38721 12.2501H9.32104C10.8336 12.2501 11.6666 11.4416 11.6666 9.9739L11.6666 5.77734ZM9.45066 9.44785C9.69216 9.44785 9.88816 9.64385 9.88816 9.88535C9.88816 10.1269 9.69216 10.3229 9.45066 10.3229C9.20916 10.3229 9.01083 10.1269 9.01083 9.88535C9.01083 9.64385 9.20391 9.44785 9.44541 9.44785H9.45066ZM6.86212 9.44785C7.10362 9.44785 7.29962 9.64385 7.29962 9.88535C7.29962 10.1269 7.10362 10.3229 6.86212 10.3229C6.62062 10.3229 6.42228 10.1269 6.42228 9.88535C6.42228 9.64385 6.61537 9.44785 6.85687 9.44785H6.86212ZM4.26815 9.44785C4.50965 9.44785 4.70565 9.64385 4.70565 9.88535C4.70565 10.1269 4.50965 10.3229 4.26815 10.3229C4.02665 10.3229 3.82773 10.1269 3.82773 9.88535C3.82773 9.64385 4.0214 9.44785 4.2629 9.44785H4.26815ZM9.45066 7.18061C9.69216 7.18061 9.88816 7.37661 9.88816 7.61811C9.88816 7.85961 9.69216 8.05561 9.45066 8.05561C9.20916 8.05561 9.01083 7.85961 9.01083 7.61811C9.01083 7.37661 9.20391 7.18061 9.44541 7.18061H9.45066ZM6.86212 7.18061C7.10362 7.18061 7.29962 7.37661 7.29962 7.61811C7.29962 7.85961 7.10362 8.05561 6.86212 8.05561C6.62062 8.05561 6.42228 7.85961 6.42228 7.61811C6.42228 7.37661 6.61537 7.18061 6.85687 7.18061H6.86212ZM4.26815 7.18061C4.50965 7.18061 4.70565 7.37661 4.70565 7.61811C4.70565 7.85961 4.50965 8.05561 4.26815 8.05561C4.02665 8.05561 3.82773 7.85961 3.82773 7.61811C3.82773 7.37661 4.0214 7.18061 4.2629 7.18061H4.26815ZM8.77504 2.37943H4.93788L4.93805 2.94059C4.93805 3.18209 4.74205 3.37809 4.50055 3.37809C4.25905 3.37809 4.06305 3.18209 4.06305 2.94059L4.06274 2.39267C2.75594 2.50245 2.04163 3.29459 2.04163 4.65098V4.90234H11.6666L11.6666 4.65098C11.669 3.93057 11.4753 3.37057 11.0909 2.98557C10.7534 2.64712 10.2601 2.44499 9.65083 2.39295L9.65034 2.94059C9.65034 3.18209 9.45434 3.37809 9.21283 3.37809C8.97133 3.37809 8.77533 3.18209 8.77533 2.94059L8.77504 2.37943Z" fill="black"/>
                </svg> 
                <p>{props.value}</p>
            </div>
        )
    }

    const renderEnd = (props: any) => {
        return(
            <div style={{backgroundColor: '#E0E0E0'}} className='w-full relative h-12 cursor-pointer flex flex-row items-center justify-center text-primary text-xs font-Rubik-regular rounded-md' onClick={() => setEnd(isOpen => !isOpen)}>
                <svg className='absolute right-4'  width="25" height="25" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.21283 0.583344C9.45434 0.583344 9.65034 0.779343 9.65034 1.02084L9.6506 1.5154C10.5023 1.57379 11.2097 1.86554 11.7104 2.36723C12.257 2.91615 12.5445 3.7054 12.5416 4.65215V9.9739C12.5416 11.9176 11.3073 13.1251 9.32104 13.1251H4.38721C2.40096 13.1251 1.16663 11.9007 1.16663 9.92957V4.65098C1.16663 2.81768 2.26741 1.64089 4.06269 1.5156L4.06305 1.02084C4.06305 0.779343 4.25905 0.583344 4.50055 0.583344C4.74205 0.583344 4.93805 0.779343 4.93805 1.02084L4.93788 1.50443H8.77504L8.77533 1.02084C8.77533 0.779343 8.97133 0.583344 9.21283 0.583344ZM11.6666 5.77734H2.04163V9.92957C2.04163 11.4264 2.87463 12.2501 4.38721 12.2501H9.32104C10.8336 12.2501 11.6666 11.4416 11.6666 9.9739L11.6666 5.77734ZM9.45066 9.44785C9.69216 9.44785 9.88816 9.64385 9.88816 9.88535C9.88816 10.1269 9.69216 10.3229 9.45066 10.3229C9.20916 10.3229 9.01083 10.1269 9.01083 9.88535C9.01083 9.64385 9.20391 9.44785 9.44541 9.44785H9.45066ZM6.86212 9.44785C7.10362 9.44785 7.29962 9.64385 7.29962 9.88535C7.29962 10.1269 7.10362 10.3229 6.86212 10.3229C6.62062 10.3229 6.42228 10.1269 6.42228 9.88535C6.42228 9.64385 6.61537 9.44785 6.85687 9.44785H6.86212ZM4.26815 9.44785C4.50965 9.44785 4.70565 9.64385 4.70565 9.88535C4.70565 10.1269 4.50965 10.3229 4.26815 10.3229C4.02665 10.3229 3.82773 10.1269 3.82773 9.88535C3.82773 9.64385 4.0214 9.44785 4.2629 9.44785H4.26815ZM9.45066 7.18061C9.69216 7.18061 9.88816 7.37661 9.88816 7.61811C9.88816 7.85961 9.69216 8.05561 9.45066 8.05561C9.20916 8.05561 9.01083 7.85961 9.01083 7.61811C9.01083 7.37661 9.20391 7.18061 9.44541 7.18061H9.45066ZM6.86212 7.18061C7.10362 7.18061 7.29962 7.37661 7.29962 7.61811C7.29962 7.85961 7.10362 8.05561 6.86212 8.05561C6.62062 8.05561 6.42228 7.85961 6.42228 7.61811C6.42228 7.37661 6.61537 7.18061 6.85687 7.18061H6.86212ZM4.26815 7.18061C4.50965 7.18061 4.70565 7.37661 4.70565 7.61811C4.70565 7.85961 4.50965 8.05561 4.26815 8.05561C4.02665 8.05561 3.82773 7.85961 3.82773 7.61811C3.82773 7.37661 4.0214 7.18061 4.2629 7.18061H4.26815ZM8.77504 2.37943H4.93788L4.93805 2.94059C4.93805 3.18209 4.74205 3.37809 4.50055 3.37809C4.25905 3.37809 4.06305 3.18209 4.06305 2.94059L4.06274 2.39267C2.75594 2.50245 2.04163 3.29459 2.04163 4.65098V4.90234H11.6666L11.6666 4.65098C11.669 3.93057 11.4753 3.37057 11.0909 2.98557C10.7534 2.64712 10.2601 2.44499 9.65083 2.39295L9.65034 2.94059C9.65034 3.18209 9.45434 3.37809 9.21283 3.37809C8.97133 3.37809 8.77533 3.18209 8.77533 2.94059L8.77504 2.37943Z" fill="black"/>
                </svg> 
                <p>{props.value}</p>
            </div>
        )
    }

    const DeleteHandler =(value: any)=> {

        let index = friends.findIndex((item: any) => item.number === value.number)  
        let newarr = [...friends] 
        newarr.splice(index, 1) 
        setFriends(newarr)
    }
 
    const loginSchema = yup.object({  
        groupName: yup.string().required('Required'),  
        savingsName: yup.string().required('Required'), 
        amount: yup.string().required('Required'), 
        // pattern: yup.string().required('Required'), 
    }) 
 
    const formik = useFormik({
        initialValues: {groupName: '', savingsName: '', amount: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });  



    const submit = async () => {

        if (!formik.dirty) {
          alert('You have to fill in th form to continue');
          return;
        }else if (!formik.isValid) {
          alert('You have to fill in the form correctly to continue');
          return;
        }else if (image === '') {
            alert('You have to Add an Avatar to continue');
            return;
        }else if (intialstartDate === '') {
            alert('You have to set a Starting Date to continue');
            return;
        }else if (intialendDate === '') {
            alert('You have to set a Ending Date to continue');
            return;
        }else {
            setShowModal(true);
            setFriendsModal(false)  
            setValue({
                groupName: formik.values.groupName, 
                savingsName: formik.values.savingsName, 
                start: startDate.toJSON(), 
                end: endDate.toJSON(), 
                amount: Number(formik.values.amount), 
                pattern: catergory,
                avatar: imageFile
            }) 
        }
    }  

    // "body": "{\n    \"id\": \"e674d508-76e9-4320-a43c-f825af905179\",\n    \"groupName\": \"Runte - Ortiz\",\n    \"savingsName\": \"Jacques_Thompson\",\n    \"amount\": 790,\n    \"balance\": 0,\n    \"start\": \"2022-02-12T20:26:27.000Z\",\n    \"end\": \"2022-10-07T13:24:18.000Z\",\n    \"pattern\": \"Daily\",\n    \"isActive\": true,\n    \"avatar\": null\n}"
    return (
        <div className='w-full flex-col lg:flex-row flex mb-10' >
            <div className='w-full lg:mx-3'>
                <div className='flex justify-center lg:justify-start mb-10 relative'>
                    <p onClick={()=> props.close(-1)} style={{color:'#03C8DB'}} className=' lg:hidden font-Montserrat-Bold text-base cursor-pointer absolute left-0 ' >Go back</p>
                    <p className='font-Montserrat-Bold text-base ' >Joint Savings</p>
                </div>
                {/* <p className='font-Montserrat-Bold text-base' >Joint Savings</p> */}
                <p className='font-Montserrat-Medium text-sm mt-6 mb-2' >What is tthe name of your group?</p>
                <Input
                    name="groupName"
                    onChange={formik.handleChange}
                    onFocus={() =>
                        formik.setFieldTouched("groupName", true, true)
                    }  
                    backgroundColor='#E0E0E0' placeholder='Name your group' fontSize='sm' /> 
                <div className="w-full h-auto pt-2">
                    {formik.touched.groupName && formik.errors.groupName && (
                        <motion.p
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-xs font-Inter-Regular text-errorRed"
                        >
                            {formik.errors.groupName}
                        </motion.p>
                    )}
                </div>
                <p className='font-Montserrat-Medium text-sm mt-4 mb-2' >What are you saving for?</p>
                <Input 
                    name="savingsName"
                    onChange={formik.handleChange}
                    onFocus={() =>
                        formik.setFieldTouched("savingsName", true, true)
                    }  
                    backgroundColor='#E0E0E0' placeholder='Name your savings plan' fontSize='sm' /> 
                <div className="w-full h-auto pt-2">
                    {formik.touched.savingsName && formik.errors.savingsName && (
                        <motion.p
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-xs font-Inter-Regular text-errorRed"
                        >
                            {formik.errors.savingsName}
                        </motion.p>
                    )}
                </div>
                <p className='font-Montserrat-Medium text-sm mt-4 mb-2' >Amount<span style={{color: '#828282'}}>(₦)</span></p>
                <Input
                    name="amount"
                    onChange={formik.handleChange}
                    onFocus={() =>
                        formik.setFieldTouched("amount", true, true)
                    }
                    backgroundColor='#E0E0E0' placeholder='Amount you wanat to save' fontSize='sm' /> 
                <div className="w-full h-auto pt-2">
                    {formik.touched.amount && formik.errors.amount && (
                        <motion.p
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-xs font-Inter-Regular text-errorRed"
                        >
                            {formik.errors.amount}
                        </motion.p>
                    )}
                </div>
                <p className='font-Montserrat-Medium text-sm mt-6 mb-2' >Start Date</p>
                <MuiPickersUtilsProvider  utils={DateFnsUtils}>
                    <DatePicker
                        disablePast
                        open={start}
                        onOpen={() => setStart(true)}
                        onClose={() => setStart(false)}
                        format="dd/MM/yyyy"
                        name='StartTime'
                        value={startDate} 
                        onChange={handleStartChange}
                        TextFieldComponent={renderStart}  /> 
                </MuiPickersUtilsProvider> 
                <p className='font-Montserrat-Medium text-sm mt-4 mb-2' >End Date</p>
                <MuiPickersUtilsProvider  utils={DateFnsUtils}>
                    <DatePicker
                        disablePast
                        open={end}
                        onOpen={() => setStart(true)}
                        onClose={() => setStart(false)}
                        format="dd/MM/yyyy"
                        name='StartTime'
                        value={endDate} 
                        onChange={handleEndChange}
                        TextFieldComponent={renderEnd}  /> 
                </MuiPickersUtilsProvider> 
                <p className='font-Montserrat-Bold text-base mt-8 mb-4' >How would you like to save?</p>
                <RadioButton value={setCatergory} array={['Daily','Weekly','Monthly']} size='32px' font='14px' />
            </div>
            <div className='w-full lg:mx-3 mt-8 lg:mt-0'>
                <p className='font-Montserrat-Bold text-base' >Add Participants</p>
                <div style={{backgroundColor:'#E0E0E0'}} className='w-full flex items-center rounded px-4 py-3 mt-8' >
                    <p className='font-Montserrat-Regular text-sm' >Find friends using vault</p>
                    <div className='w-full flex flex-1' />
                    <IoIosArrowRoundForward onClick={()=> setFriendsModal(true)} size='25px' className='cursor-pointer' />
                </div>
                {friends.length > 0 ?  
                    <div className='w-full mt-6 mb-12' >  
                        <p className='font-Montserrat-Bold text-sm mb-4' style={{color: '#828282'}} >Participants</p>
                        <div className=' grid-cols-3 lg:grid-cols-5 gap-6 w-full grid ' >
                            {friends.map((item: any)=> {
                                return(
                                    <div key={item} className='w-16 h-16 bg-yellow-300 rounded-lg relative'> 
                                        <IoIosClose onClick={()=> DeleteHandler(item)} size='20px' className=' w-auto rounded-full absolute -right-1 -top-2 cursor-pointer' color='#EB5757' style={{backgroundColor: '#FBDDDD'}}  />
                                    </div>
                                )
                            })}
                        </div> 
                    </div>
                    :
                    <div className='w-full flex flex-col py-14' > 
                        <p className='font-Montserrat-Bold text-sm text-center' >No Participant added yet</p>
                        <p className='font-Montserrat-Regular text-xs text-center' >You have to add at least one<br/> participant to proceed</p>
                    </div>
                }

                <p className='font-Montserrat-Bold text-base mt-8' >Personalize goal</p>
                <label>
                    <input style={{display:'none'}} type="file" accept="image/*" id="input" onChange={handleImageChange} />
                    <div style={{backgroundColor: '#CDF4F8', height: '160px', borderRadius: '8px'}} className='w-full flex justify-center cursor-pointer items-center my-8' >
                        {image === '' ?
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.88777 27.1228C15.2009 27.1228 19.508 22.7708 19.508 17.4023C19.508 12.0337 15.2009 7.68164 9.88777 7.68164C4.57468 7.68164 0.267578 12.0337 0.267578 17.4023C0.267578 22.7708 4.57468 27.1228 9.88777 27.1228Z" fill="url(#paint0_linear_62:574)"/>
                                <path d="M23.5289 12.8828H21.6621V14.7691H23.5289V12.8828Z" fill="#03C8DB"/>
                                <path d="M23.6171 12.7944H21.5742V14.8631H23.6171V12.7944ZM23.5731 14.8186H21.6182V12.8389H23.5731V14.8186Z" fill="#E2E2E2"/>
                                <path d="M21.6172 14.8176H23.572V12.8379H21.6172V14.8176ZM21.6612 12.8824H23.5148V14.7731H21.648L21.6612 12.8824Z" fill="#E2E2E2"/>
                                <path d="M13.3095 10.8184C14.6976 10.7781 16.0155 10.1926 16.9833 9.18626C17.9511 8.17989 18.4924 6.83196 18.4924 5.42875C18.4924 4.02554 17.9511 2.67761 16.9833 1.67124C16.0155 0.664873 14.6976 0.0793644 13.3095 0.0390625C12.6069 0.0409165 11.9114 0.181431 11.2621 0.452768C10.1218 0.929516 9.1804 1.79121 8.59855 2.89091C8.0167 3.9906 7.83041 5.26019 8.07144 6.48316C8.31247 7.70613 8.96589 8.80679 9.92029 9.59736C10.8747 10.3879 12.0709 10.8195 13.3051 10.8184H13.3095ZM13.3095 1.92089C13.9948 1.92089 14.6647 2.12621 15.2345 2.51092C15.8043 2.89564 16.2485 3.44247 16.5107 4.08222C16.773 4.72198 16.8416 5.42597 16.7079 6.10513C16.5742 6.7843 16.2442 7.40814 15.7596 7.89779C15.275 8.38743 14.6576 8.72087 13.9854 8.85597C13.3133 8.99106 12.6166 8.92177 11.9834 8.65677C11.3503 8.39177 10.8091 7.94298 10.4284 7.36721C10.0476 6.79145 9.84443 6.11454 9.84443 5.42207C9.84792 4.4954 10.2144 3.60784 10.8637 2.95341C11.513 2.29899 12.3924 1.93096 13.3095 1.92979V1.92089Z" fill="#03C8DB"/>
                                <path d="M6.91692 8.43067C6.91201 8.26445 6.86371 8.10247 6.77688 7.96119C6.69006 7.81992 6.56779 7.70437 6.42251 7.62623C6.27723 7.54809 6.1141 7.51015 5.94963 7.51626C5.78516 7.52238 5.6252 7.57233 5.48599 7.66104C3.82959 8.69318 2.46475 10.1397 1.52344 11.8607L3.07325 12.9417C3.85807 11.4302 5.03049 10.1595 6.46785 9.26259C6.60932 9.17699 6.72554 9.05474 6.80451 8.90846C6.88347 8.76218 6.92228 8.59721 6.91692 8.43067Z" fill="#03C8DB"/>
                                <path d="M3.12532 13.0272C3.90567 11.5115 5.07707 10.2372 6.51551 9.33917C6.66671 9.24682 6.79135 9.11608 6.87709 8.96C6.96282 8.80391 7.00665 8.62791 7.00422 8.44941C7.00042 8.26712 6.9487 8.08914 6.85435 7.93372C6.76 7.7783 6.6264 7.65101 6.4673 7.56498C6.30821 7.47894 6.12933 7.43721 5.94901 7.44409C5.76869 7.45097 5.59344 7.50622 5.44122 7.60413C3.75855 8.65001 2.37582 10.1223 1.43024 11.8749L1.4082 11.9105L3.10331 13.0895L3.12532 13.0272ZM1.46544 11.8794C2.40722 10.1318 3.78555 8.664 5.46323 7.62194C5.60921 7.52897 5.77696 7.47668 5.94941 7.47043C6.12186 7.46418 6.29285 7.50415 6.44505 7.58632C6.59679 7.66956 6.72449 7.79127 6.81558 7.93947C6.90666 8.08767 6.958 8.25727 6.96459 8.4316C6.97248 8.609 6.93291 8.78528 6.85 8.94186C6.76709 9.09844 6.64394 9.22954 6.49351 9.32135C5.04469 10.2185 3.86743 11.5004 3.09009 13.0272L1.46544 11.8794Z" fill="#E2E2E2"/>
                                <path d="M6.49486 9.30126C6.6453 9.20945 6.76845 9.07835 6.85135 8.92177C6.93426 8.76519 6.97383 8.58891 6.96594 8.41151C6.95936 8.23718 6.90802 8.06758 6.81693 7.91939C6.72584 7.77119 6.59814 7.64953 6.44641 7.56629C6.29421 7.48412 6.12322 7.44409 5.95077 7.45034C5.77832 7.45659 5.61056 7.50888 5.46458 7.60186C3.78691 8.64391 2.40858 10.1117 1.4668 11.8593L3.09145 12.9893C3.8714 11.4691 5.04844 10.1936 6.49486 9.30126ZM3.07384 12.9404L1.52404 11.8593C2.46535 10.1383 3.83019 8.69183 5.48659 7.65969C5.59067 7.58705 5.70829 7.53653 5.83228 7.51122C5.95627 7.48591 6.08406 7.48634 6.20788 7.51247C6.33171 7.53859 6.44898 7.58989 6.55258 7.66322C6.65619 7.73655 6.74398 7.83039 6.81059 7.93904C6.8772 8.0477 6.92126 8.1689 6.94009 8.29529C6.95892 8.42168 6.95212 8.55064 6.92012 8.6743C6.88812 8.79796 6.83159 8.91373 6.75394 9.01463C6.67629 9.11554 6.57917 9.19943 6.46844 9.26124C5.03109 10.1581 3.85866 11.4288 3.07384 12.9404Z" fill="#E2E2E2"/>
                                <path d="M30.4198 14.8623H28.6587V14.8223C28.0951 11.7704 26.8667 9.75961 24.7886 8.48726H24.7578V8.45169L26.3912 4.3766C26.444 4.24385 26.4663 4.10072 26.4563 3.958C26.4462 3.81529 26.4042 3.67676 26.3334 3.55288C26.2625 3.429 26.1647 3.32299 26.0474 3.24295C25.93 3.16292 25.7961 3.11094 25.6559 3.0909C25.1804 3.02416 20.9405 2.54369 19.7649 5.64003C19.707 5.7947 19.6902 5.96197 19.716 6.12526C19.7419 6.28855 19.8097 6.4422 19.9125 6.57084C20.0153 6.69949 20.1497 6.79869 20.3022 6.85861C20.4548 6.91854 20.6202 6.93705 20.782 6.91238C20.944 6.88556 21.0962 6.81644 21.2237 6.71188C21.3511 6.60731 21.4493 6.47095 21.5085 6.31626C21.8959 5.29749 23.1243 4.98163 24.0841 4.93269H24.1546L24.1282 4.99944L22.706 8.55845C22.6922 8.60633 22.6833 8.65551 22.6796 8.70524C22.6585 8.77165 22.6452 8.84032 22.64 8.90987C22.6449 8.96238 22.6537 9.01447 22.6664 9.06562C22.6741 9.13189 22.6873 9.19735 22.706 9.26134C22.7677 9.36515 22.8337 9.4675 22.9042 9.56833C22.9448 9.60403 22.9891 9.63533 23.0362 9.66174C23.0829 9.70308 23.133 9.74029 23.1859 9.77296C25.3301 10.765 26.4529 12.6157 26.9328 15.9612C26.9671 16.1849 27.0789 16.389 27.2482 16.5372C27.4175 16.6855 27.6333 16.7683 27.8574 16.7709H29.4776V20.7748H26.9724C26.7395 20.7728 26.5145 20.8597 26.3423 21.018C26.1701 21.1764 26.0633 21.3945 26.0434 21.629C25.9087 22.61 25.4847 23.5274 24.8266 24.2614C24.1685 24.9954 23.3068 25.5121 22.3538 25.7441C22.3242 25.7553 22.2961 25.7703 22.2701 25.7885C22.1964 25.8117 22.1266 25.8462 22.0632 25.8909C22.022 25.9213 21.9837 25.9555 21.9487 25.9932C21.9025 26.0387 21.8598 26.0878 21.8211 26.14C21.7886 26.1948 21.762 26.2529 21.7418 26.3135C21.7183 26.3512 21.6991 26.3915 21.6846 26.4336L20.8745 29.6723H18.3648V29.6412L17.6076 27.3545C17.5465 27.1671 17.4285 27.0039 17.2705 26.8881C17.1124 26.7723 16.9222 26.7098 16.727 26.7094H12.8173C12.622 26.7098 12.4319 26.7723 12.2738 26.8881C12.1157 27.0039 11.9978 27.1671 11.9367 27.3545L11.1882 29.6723H8.67858V29.6367L7.88167 26.438C7.88329 26.4262 7.88329 26.4143 7.88167 26.4025C7.85869 26.3345 7.82919 26.2689 7.7936 26.2067C7.77009 26.1591 7.74362 26.1131 7.71435 26.0688L7.59109 25.9576C7.53972 25.9137 7.48527 25.8735 7.42819 25.8375C5.60237 24.9456 4.10723 23.4863 3.16183 21.6734L1.50195 22.532C2.55194 24.5678 4.18848 26.2339 6.19537 27.31L7.07594 30.869C7.12613 31.0737 7.24274 31.2554 7.40715 31.3852C7.57155 31.5151 7.77426 31.5855 7.98292 31.5853H11.8926C12.0877 31.5843 12.2776 31.5214 12.4355 31.4057C12.5935 31.29 12.7116 31.1272 12.7732 30.9402L13.5393 28.6224H16.1018V28.6535L16.8591 30.9402C16.9201 31.1276 17.0381 31.2908 17.1962 31.4066C17.3542 31.5224 17.5444 31.5849 17.7396 31.5853H21.6494C21.858 31.5855 22.0607 31.5151 22.2251 31.3852C22.3895 31.2554 22.5061 31.0737 22.5563 30.869L23.4105 27.4079C24.461 27.055 25.4075 26.4423 26.1642 25.6258C26.9208 24.8092 27.4634 23.8146 27.7429 22.7322V22.7011H30.4198C30.5418 22.7011 30.6625 22.6767 30.7751 22.6294C30.8877 22.582 30.9899 22.5127 31.0758 22.4252C31.252 22.2487 31.3518 22.0087 31.3532 21.7579V15.8277C31.3509 15.5787 31.2517 15.3406 31.077 15.165C30.9023 14.9893 30.6662 14.8902 30.4198 14.8891V14.8623Z" fill="#03C8DB"/>
                                <path d="M1.03451 15.6553C0.847283 15.6553 0.664274 15.7114 0.508604 15.8165C0.352935 15.9216 0.231603 16.071 0.159957 16.2457C0.08831 16.4205 0.0695515 16.6128 0.106077 16.7984C0.142602 16.9839 0.232772 17.1543 0.365157 17.2881C0.497543 17.4219 0.666211 17.513 0.849835 17.5499C1.03346 17.5868 1.22378 17.5678 1.39675 17.4954C1.56972 17.423 1.71757 17.3005 1.82158 17.1432C1.9256 16.9859 1.98113 16.8009 1.98113 16.6118C1.98113 16.3581 1.88138 16.1148 1.70385 15.9354C1.52633 15.7561 1.28556 15.6553 1.03451 15.6553Z" fill="#03C8DB"/>
                                <path d="M2.06931 16.6114C2.07018 16.4045 2.01024 16.2019 1.89708 16.0294C1.78392 15.8569 1.62265 15.7222 1.43366 15.6424C1.24468 15.5626 1.0365 15.5412 0.835501 15.5811C0.634506 15.6209 0.449744 15.7201 0.304602 15.8661C0.15946 16.0122 0.0604881 16.1985 0.0202071 16.4014C-0.0200739 16.6043 0.000152485 16.8147 0.078333 17.006C0.156513 17.1973 0.289118 17.3609 0.459362 17.4759C0.629607 17.591 0.829831 17.6524 1.03466 17.6524C1.30831 17.6524 1.57082 17.5429 1.76474 17.3478C1.95865 17.1527 2.06815 16.8879 2.06931 16.6114ZM1.03466 17.6079C0.838539 17.6079 0.646821 17.5491 0.483817 17.4389C0.320813 17.3288 0.193866 17.1722 0.119018 16.989C0.0441704 16.8059 0.0248095 16.6043 0.0633917 16.4101C0.101974 16.2158 0.196763 16.0374 0.335748 15.8976C0.474732 15.7578 0.651646 15.6628 0.8441 15.6247C1.03655 15.5866 1.23588 15.6071 1.41681 15.6835C1.59775 15.7599 1.75216 15.8889 1.86048 16.0541C1.96881 16.2193 2.02617 16.4133 2.02529 16.6114C2.0253 16.7427 1.99965 16.8726 1.94981 16.9938C1.89997 17.115 1.82693 17.225 1.73488 17.3176C1.64283 17.4102 1.53359 17.4836 1.41343 17.5334C1.29326 17.5832 1.16454 17.6085 1.03466 17.6079Z" fill="#E2E2E2"/>
                                <path d="M1.03557 15.6104C0.839639 15.6104 0.648097 15.669 0.485187 15.779C0.322277 15.889 0.195314 16.0453 0.120335 16.2282C0.0453556 16.4112 0.0257316 16.6124 0.0639556 16.8066C0.10218 17.0008 0.196532 17.1791 0.335075 17.3191C0.473619 17.4591 0.650134 17.5545 0.8423 17.5931C1.03446 17.6317 1.23365 17.6119 1.41466 17.5361C1.59568 17.4603 1.75039 17.332 1.85925 17.1674C1.9681 17.0028 2.02621 16.8093 2.02621 16.6113C2.02621 16.3459 1.92184 16.0912 1.73606 15.9035C1.55028 15.7158 1.2983 15.6104 1.03557 15.6104ZM1.03557 17.5634C0.84816 17.5634 0.664974 17.5072 0.509211 17.4019C0.353448 17.2966 0.232106 17.1469 0.16059 16.9719C0.0890747 16.7968 0.0706061 16.6043 0.10749 16.4186C0.144373 16.233 0.234953 16.0626 0.36778 15.929C0.500606 15.7954 0.669699 15.7046 0.853613 15.6682C1.03753 15.6318 1.22799 15.6514 1.40088 15.7244C1.57377 15.7975 1.72131 15.9209 1.8248 16.0787C1.92828 16.2366 1.98306 16.422 1.98219 16.6113C1.98219 16.7367 1.95766 16.8609 1.91004 16.9767C1.86241 17.0925 1.79261 17.1976 1.70465 17.2861C1.61669 17.3745 1.51231 17.4446 1.39749 17.4922C1.28267 17.5398 1.15967 17.564 1.03557 17.5634Z" fill="#E2E2E2"/>
                                <defs>
                                <linearGradient id="paint0_linear_62:574" x1="9.88779" y1="7.68164" x2="9.88779" y2="27.1228" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#73C209"/>
                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                </linearGradient>
                                </defs>
                            </svg>   
                        :
                            <img style={{borderRadius: '8px'}} src={image} className='w-full h-full object-cover' /> 
                        }
                    </div>
                </label>
                <button onClick={()=> submit()} style={{backgroundColor: '#002343'}} className='w-full font-Montserrat-Bold py-3 text-white rounded text-sm font-Montserrat-Bold' >PROCEED</button>
            </div>
            {showModal ?  
                <JointSavingsController friends={setFriends} value={value} close={setShowModal} end={setEndModal} />
            :null}
            {friendsModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <FriendsModal check={friends} friends={setFriends} close={setFriendsModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
        </div>
    )
}
