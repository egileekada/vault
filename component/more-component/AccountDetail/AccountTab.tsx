import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { IUser, UserContext } from '../../../context/UserContext'
import AccountAddress from './component/AccountAddress'
import AccountContact from './component/AccountContact'
import AccountEmail from './component/AccountEmail'
import AcountIdentification from './component/AccountIdentification'
import AccountName from './component/AccountName'
import Router from 'next/router';
import * as axios from 'axios'   

export default function AccountTab(props: any) {
     
    const userContext: IUser = React.useContext(UserContext); 
    const [showModal, setShowModal] =   React.useState(false) 
    React.useEffect(() => {
        fetch(`https://www.universal-tutorial.com/api/getaccesstoken`, {
            method: 'GET', // or 'PUT'
            headers: {
                "Accept": "application/json",
                "api-token": "V1mhwD-iZGLntVICiPhQfxRIhGpJ1xcokq0xZiMbq9YfK2VcXy0EikVGhfxI6RH-RLE",
                "user-email": "egileoniso.ekada@gmail.com"
            }
        })
        .then(response => response.json())
        .then(data => {   
            localStorage.setItem('country-token', data.auth_token)
        })
        .catch((error) => {
            console.error('Error:', error); 
        });  
    }, [])

    const CheckValues =(index: any)=> {
        if(index === null){
            return 'Not Available'
        } else {
            return(userContext.userData.street)
        }
    }
 
    const tabArray =[
        {
            name: userContext.userData.firstname+ ' '+userContext.userData.lastname,
            detail: 'Account Name'
        },
        {
            name: CheckValues(userContext.userData.street),
            detail: 'Address'
        },
        {
            name: userContext.userData.phoneNumber,
            detail: 'Contact Details'
        },
        {
            name: userContext.userData.email,
            detail: 'Email Address'
        },
        {
            name: 'NIN',
            detail: 'Identification'
        }
    ]

    const [tab, setTab] = React.useState(-1)
    const [mobile, setMobile] = React.useState(true) 

    const CloseHandler =()=> { 
        props.tab(false)
        setTab(-1)
        setMobile(true)
    }

    React.useEffect(() => {
        {!mobile ?
            CloseHandler()
        :null}
    },)

    const [image, SetImage] = React.useState('');
    const [imageFile, SetImageFile] = React.useState({} as any);    
    const [loading, setLoading] = React.useState(false); 

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

        const t1 = setTimeout(() => { 
            setShowModal(true)
            clearTimeout(t1);
        }, 1000); 
    } 

    const Submit =async()=> {

        setLoading(true);  

        try {

            let formData = new FormData()

            formData.append('avatar', imageFile)   

            // make request to server
            const request = await axios.default.patch(`https://api.vaultafrica.co/profile/avatar`, formData, {
                headers: { 'content-type': 'application/json',
                    Authorization : `Bearer ${localStorage.getItem('token')}`}
            })   

        // const json = await request.json();

        console.log('Status '+request.status)

        if (request.status === 200) {    
            // console.log(json)  
            const t1 = setTimeout(() => { 
                setShowModal(false)
                Router.reload()
                clearTimeout(t1);
            }, 1000); 
        }else {
            // alert(json.message);
            // console.log(json)
            setLoading(false);
        }
                
        } catch (error) {
            console.log(error)
        }

    }

    const ClickHandler =()=> {
        // SetImage('')
        setShowModal(false)
    }

    return (
        <div className='w-full h-auto justify-center items-center flex flex-col py-6 lg:py-10 lg:px-14' >
            {tab === -1 ?
                <>  
                    <div className='w-full flex lg:hidden items-center mb-8 ' > 
                        <div onClick={()=> setMobile(false)} style={{backgroundColor: '#F9F9F9'}} className='rounded-full mr-12 lg:hidden cursor-pointer p-2'>
                            <IoIosArrowBack size='20px' />
                        </div>   
                        <p className='font-Montserrat-Bold text-base' >Account Name</p>
                    </div> 
                    <div className='w-16 rounded-2xl flex relative justify-center cursor-pointer items-center h-16 bg-yellow-300' >
                        <label>
                            <input style={{display:'none'}} type="file" accept="image/*" id="input" onChange={handleImageChange} />
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 49.2 38.249"><defs></defs><path className='text-white fill-current' d="M45.614,39.315H32.591L29.961,34.9a1.426,1.426,0,0,0-1.225-.7H20.464a1.426,1.426,0,0,0-1.225.7l-2.63,4.418H12.336v-.974a1.426,1.426,0,0,0-1.426-1.426H5.633a1.426,1.426,0,0,0-1.426,1.426v.974H3.586A3.586,3.586,0,0,0,0,42.9V68.863a3.586,3.586,0,0,0,3.586,3.586H45.614A3.586,3.586,0,0,0,49.2,68.863V42.9A3.586,3.586,0,0,0,45.614,39.315ZM24.6,66.089A10.207,10.207,0,1,1,34.807,55.882,10.207,10.207,0,0,1,24.6,66.089ZM43.377,46.707H38.908a1.426,1.426,0,0,1,0-2.852h4.468a1.426,1.426,0,1,1,0,2.852Z" transform="translate(0 -34.2)"/><circle className='text-white fill-current' cx="7.131" cy="7.131" r="7.131" transform="translate(17.469 14.551)"/></svg>
                        </label> 
                        {image !== '' ?
                            <label className='absolute cursor-pointer' >
                                <input style={{display:'none'}} type="file" accept="image/*" id="input" onChange={handleImageChange} />
                                <img src={image} alt='' className=' w-16 h-16 object-cover rounded-2xl' />
                            </label>
                        :
                            <label className='absolute cursor-pointer' >
                                <input style={{display:'none'}} type="file" accept="image/*" id="input" onChange={handleImageChange} />
                                <img src={`data:image/png;base64, ${userContext.userData.avatar}`} alt='' className='w-16 h-16 object-cover rounded-2xl' />
                            </label>
                        }
                    </div>
                    <p className='font-Montserrat-Bold text-base mb-10' >{userContext.userData.firstname+ ' '+userContext.userData.lastname}</p>
                    {tabArray.map((item: any, index: any)=> {
                        return(
                            <div key={index} onClick={()=> setTab(index)} style={{background: 'rgba(224, 224, 224, 0.2)', opacity:'0.8'}} className='w-full rounded-lg cursor-pointer flex items-center my-2 p-3' >
                                <div className=' w-auto mx-2' >
                                    <p className='font-Montserrat-Bold text-base' >{item.name}</p>
                                    <p style={{color:'#667B8E'}} className='w-40 font-Montserrat-Medium text-xs' >{item.detail}</p>
                                </div>
                                <div className='w-full flex flex-1' />
                                <IoIosArrowForward size='20px' />
                            </div> 
                        )
                    })} 
                </> 
                : tab === 0 ?
                    <AccountName tab={setTab} close={setMobile} />
                    : tab === 1 ?
                        <AccountAddress tab={setTab} close={setMobile} />
                        : tab === 2 ?
                            <AccountContact tab={setTab} close={setMobile} />
                            : tab === 3 ?
                                <AccountEmail tab={setTab} close={setMobile} />
                                : tab === 4 ?
                                    <AcountIdentification tab={setTab} close={setMobile} />
            :null}

            {showModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">  
                            <div style={{borderRadius: '16px'}} className='w-auto h-auto flex flex-col justify-center items-center bg-white pt-8 pb-6 px-12' >
                                
                                <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M44.883 12.1738C62.8466 12.1738 77.4085 26.7365 77.4085 44.6994C77.4085 62.663 62.8466 77.2249 44.883 77.2249C26.9201 77.2249 12.3574 62.663 12.3574 44.6994C12.3574 26.7365 26.9201 12.1738 44.883 12.1738Z" fill="#002343"/>
                                    <path d="M44.9099 54.8281C42.6717 54.8281 40.8496 56.6502 40.8496 58.89C40.8496 61.1265 42.6717 62.9471 44.9099 62.9471C47.1472 62.9471 48.967 61.1265 48.967 58.89C48.967 56.6502 47.1472 54.8281 44.9099 54.8281Z" fill="white"/>
                                    <path d="M45.3044 26.7988C42.9746 26.7988 41.2109 28.0146 41.2109 29.978V47.9899C41.2109 49.9557 42.9746 51.1667 45.3044 51.1667C47.5765 51.1667 49.3962 49.9051 49.3962 47.9899V29.978C49.3962 28.0612 47.5765 26.7988 45.3044 26.7988Z" fill="white"/>
                                    <g opacity="0.176307">
                                    <path d="M44.8839 88.7507C20.5935 88.7507 0.832031 68.9884 0.832031 44.7003C0.832031 20.4091 20.5935 0.648438 44.8839 0.648438C69.1728 0.648438 88.9343 20.4091 88.9343 44.7003C88.9343 68.9884 69.1728 88.7507 44.8839 88.7507ZM44.8839 4.6533C22.8012 4.6533 4.83611 22.6176 4.83611 44.7003C4.83611 66.7831 22.8012 84.7458 44.8839 84.7458C66.9666 84.7458 84.9302 66.7831 84.9302 44.7003C84.9302 22.6176 66.9666 4.6533 44.8839 4.6533Z" fill="#002343"/>
                                    </g>
                                    <g opacity="0.823693">
                                    <path d="M44.8833 84.9488C22.689 84.9488 4.63281 66.892 4.63281 44.6997C4.63281 22.5047 22.689 4.44922 44.8833 4.44922C67.0762 4.44922 85.1324 22.5047 85.1324 44.6997C85.1324 66.892 67.0762 84.9488 44.8833 84.9488ZM44.8833 8.10848C24.7062 8.10848 8.29137 24.5226 8.29137 44.6997C8.29137 64.8769 24.7062 81.2896 44.8833 81.2896C65.0604 81.2896 81.4739 64.8769 81.4739 44.6997C81.4739 24.5226 65.0604 8.10848 44.8833 8.10848Z" fill="#002343"/>
                                    </g>
                                </svg> 
                                <p className=' font-Montserrat-Bold text-sm mt-4' >Upload Profile</p>
                                <p className=' font-Montserrat-Regular text-xs text-center w-64' >Do You Want to Update Your Profile Picture</p>
                                <div className='flex' >
                                    <button onClick={()=> ClickHandler()} style={{backgroundColor: '#FFF', color: '#002343', border: '1px solid #002343'}} className=' w-20 rounded mr-2 py-1 mt-4 font-Montserrat-Bold text-sm text-center' >NO</button>
                                    <button onClick={()=> Submit()} style={{backgroundColor: '#002343'}} className=' w-20 text-white rounded py-1 ml-2 mt-4 font-Montserrat-Bold text-sm text-center' >
                                        {!loading ? 
                                            <div className='py-1' >
                                                YES
                                            </div>:
                                            <>
                                                <div className="animate-spin rounded-full h-6 w-6 mx-auto border-t-2 border-b-2 border-white"></div> 
                                            </>
                                        } 
                                    </button>
                                </div>
                            </div>
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
        </div>
    )
}
