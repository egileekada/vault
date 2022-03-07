import React from 'react'
import { IoIosAdd, IoIosClose } from 'react-icons/io'
import { useQuery } from 'react-query'
import Router from 'next/router';
import { addMonths } from "date-fns";
import * as axios from 'axios'   

export default function AddMoney(props: any) {

    const [select, setSelect] = React.useState(0)
    const [cardId, setCardId] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const [value, setValue] = React.useState({} as any) 
    const startDate = new Date()
    let endDate = addMonths(startDate, props.month).toJSON()


    console.log(props.value.groupName) 

    const { isLoading, data } = useQuery('cards', () =>
        fetch(`https://api.vaultafrica.co/cards`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )

    React.useEffect(() => {
        setValue(props.value)
    }, [])

    console.log(value)  

    const Submit =async()=> { 
 
        setLoading(true)
        if(cardId === '' ){
            alert('Select Card') 
        } else {  
            if(props.deposit) { 
                try {

                    let formData = new FormData()   
                    formData.append('name', props.value.name) 
                    formData.append('start', startDate.toJSON()) 
                    formData.append('end', endDate) 
                    formData.append('amount', props.value.amount) 
                    formData.append('duration', props.value.duration)  
                    formData.append('avatar', props.value.avatar)  
        
                    // make request to server
                    const request = await axios.default.post(`https://api.vaultafrica.co/fixed-deposit/`, formData, {
                        headers: { 'content-type': 'application/json',
                            Authorization : `Bearer ${localStorage.getItem('token')}`
                        }
                    })   
        
                // const json = await request.json();
        
                console.log('Status '+request.status)
        
                if (request.status === 201) {    
                    // console.log(json)  
                    const t1 = setTimeout(() => { 
                        // setShowModal(false)
                        props.next(4)
                        // Router.reload()
                        clearTimeout(t1);
                    }, 1000); 
                }else {
                    // alert(json.message);
                    // console.log(json)
                    // setLoading(false);
                }
                        
                } catch (error) {
                    console.log(error)
                }
            } else if(props.joint) { 
                try { 

                    let formData = new FormData()   
                    formData.append('groupName', props.value.groupName) 
                    formData.append('savingsName', props.value.savingsName) 
                    formData.append('amount', props.value.amount) 
                    formData.append('start', props.value.start) 
                    formData.append('end', props.value.end)  
                    formData.append('pattern', props.value.pattern) 
                    formData.append('friends', props.value.friends) 
                    formData.append('avatar', props.value.avatar) 
                    formData.append('card', cardId) 
        
                    // make request to server
                    const request = await axios.default.post(`https://api.vaultafrica.co/joint-savings`, formData, {
                        headers: { 'content-type': 'application/json',
                            Authorization : `Bearer ${localStorage.getItem('token')}`
                        }
                    })   
        
                // const json = await request.json();
        
                console.log('Status '+request.status)
        
                if (request.status === 201) {    
                    // console.log(json)  
                    const t1 = setTimeout(() => { 
                        // setShowModal(false)
                        props.next(4)
                        // Router.reload()
                        clearTimeout(t1);
                    }, 1000); 
                }else {
                    // alert(json.message);
                    // console.log(json)
                    // setLoading(false);
                }
                        
                } catch (error) {
                    console.log(error)
                }
            } else { 
                try {

                    let formData = new FormData()   
                    formData.append('name', props.value.title) 
                    formData.append('start', props.value.start) 
                    formData.append('end', props.value.end) 
                    formData.append('amount', props.value.amount) 
                    formData.append('occurrence', props.value.occurrence) 
                    formData.append('avatar', props.value.avatar) 
                    formData.append('card', cardId) 
        
                    // make request to server
                    const request = await axios.default.post(`https://api.vaultafrica.co/fixed-savings/`, formData, {
                        headers: { 'content-type': 'application/json',
                            Authorization : `Bearer ${localStorage.getItem('token')}`
                        }
                    })   
        
                // const json = await request.json();
        
                console.log('Status '+request.status)
        
                if (request.status === 201) {    
                    // console.log(json)  
                    const t1 = setTimeout(() => { 
                        // setShowModal(false)
                        props.next(4)
                        // Router.reload()
                        clearTimeout(t1);
                    }, 1000); 
                }else {
                    // alert(json.message);
                    // console.log(json)
                    // setLoading(false);
                }
                        
                } catch (error) {
                    console.log(error)
                }
            }
        }
        setLoading(false)
    }

    const ClickHandler =(index: any, item: any)=> {
        setSelect(index+1)
        setCardId(item)
    }

    return (
        <div  className=' w-full lg:w-560px bg-white pb-8 px-8 h-screen overflow-y-auto'  >
            <div className='w-full flex flex-row items-center py-10' > 
                <p onClick={()=> props.close(false)} style={{color:'#03C8DB'}} className='font-Montserrat-Bold text-sm cursor-pointer ' >Go back</p>
                <div className='w-full flex flex-1' />
                <div onClick={()=> props.close(false)} style={{backgroundColor: '#FAFAFA', borderRadius: '4px'}} className='w-auto h-auto cursor-pointer' >
                    <IoIosClose size='30px' />
                </div>
            </div> 
            <p className=' font-Montserrat-Bold text-base' >Add Money 💰</p>
            <p style={{color: '#4F4F4F'}} className=' font-Montserrat-Regular mt-2 text-sm' >Please select your preferred card.</p>
            <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2' > 
                {!isLoading ?
                    <>
                        {data.length > 0 ? 
                            <>
                                {data.map((item: any, index: any)=> {
                                    return(
                                        <div onClick={()=> ClickHandler(index, item.id)} style={select === index+1 ? {border: '1px solid #002343', color: '#002343'}: {border: '1px solid #CCD3D9', color: '#828282'}} className='w-full h-40 relative p-3 rounded-lg cursor-pointer' >
                                            <p className=' font-Montserrat-Bold text-base' >{item.name}</p>
                                            <p style={{color: '#828282'}} className=' font-Montserrat-Bold text-sm mt-4' >.... .... .... {item.last}</p>
                                            <div className='w-full flex mt-4' >
                                                <p className=' font-Montserrat-Regular text-sm ' >{item.expire}</p>
                                                <div className='w-full flex h-full flex-1' />
                                                <img src='/assets/images/mastercard.png' className='w-10 absolute bottom-4 right-4' />
                                            </div>
                                        </div> 
                                    )
                                })} 
                            </>
                        : 
                            <div className='w-full h-full flex justify-center items-center flex-col'> 
                                <p className='font-Montserrat-Medium w-80 text-sm text-center' >You have no Debit Card.</p>
                            </div>
                        }
                    </>
                : 
                    <div className='w-full h-full flex justify-center items-center ' >
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-vault"></div>
                    </div>
                }  
                <div onClick={()=> props.next(2)} style={{border: '1px solid #CCD3D9', color: '#828282'}} className='w-full h-full p-3 flex cursor-pointer justify-center items-center rounded-lg' >
                    <IoIosAdd size='50px' />
                </div>
            </div>
            <button onClick={()=> Submit()} style={select !== 0 ? {backgroundColor: '#002343', color: 'white'}: {backgroundColor: '#CCD3D9', color: '#667B8E'}} className='w-full text-white font-Montserrat-Medium text-sm h-10 rounded  mt-10' >{loading ?
                <div className='flex justify-center mx-auto items-center ' >
                    <div className="animate-spin rounded-full h-7 w-7  border-t-2 border-b-2 border-white mr-3"></div>Loading
               </div>
            :
            'PROCEED  🔒'
            }</button>
        </div>
    )
}
