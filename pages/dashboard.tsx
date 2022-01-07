import React from 'react'
import Menu from '../component/Menu'
import Home from '../component/Screens/Home'
import Investment from '../component/Screens/Investment'
import Loan from '../component/Screens/Loan'
import Savings from '../component/Screens/Savings'
import { Drawer, DrawerContent, DrawerCloseButton, useDisclosure } from '@chakra-ui/react';
import More from '../component/Screens/More'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { IUser, UserContext } from '../context/UserContext';
import Router from 'next/router' 

export default function dashboard() {

    const [tab, setTab] = React.useState(0)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const userContext: IUser = React.useContext(UserContext);  
    // const token = localStorage.getItem('token')

    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch(`https://api.vaultafrica.co/profile`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )

    // console.log(userContext.userData)

    React.useEffect(() => { 
        const token = localStorage.getItem('token')  

        if(!isLoading){
            userContext.setUserData(data)  
            if(data.message === "Unauthorized"){
                localStorage.clear()  
            }
        } 

        if(!token ){
            Router.push('/login')
        }
    });   

    return (
        <div className='w-screen h-screen overflow-x-hidden overflow-y-hidden' > 
        {isLoading ? 
            <div className='w-full h-full flex justify-center items-center ' >
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-vault"></div>
            </div>
        :
            <>
                <div className='w-full absolute z-50 lg:hidden pt-14 bg-white' > 
                    <div style={{backgroundColor:'#F2F2F2'}} className='w-full flex item-center px-8 py-4'> 
                        <img src='/assets/images/Vault-logo.png'  className='' />
                        <div className='w-full flex flex-1' />
                        <svg onClick={()=> onOpen()} className='cursor-pointer'  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 15H22" stroke="#262F56" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 9H22" stroke="#262F56" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div> 
                <div className=' overflow-hidden flex flex-row' >
                    <div className='lg:flex hidden' style={{width: '300px', backgroundColor: '#FCFCFC', borderTopRightRadius: '40px'}} >
                        <Menu data={data} index={tab} close={onClose} mobile={false} tab={setTab} />
                    </div>
                    <div className=' lg:hidden flex' >
                        <Drawer 
                            size='xs'
                            isOpen={isOpen}
                            placement="left"
                            onClose={onClose}  > 
                            <DrawerContent>
                                {/* <DrawerCloseButton  /> */}
                                <Menu index={tab} close={onClose} mobile={true} tab={setTab} />
                            </DrawerContent>
                        </Drawer>
                    </div>
                    <div className='w-screen pt-32 lg:pt-0 overflow-x-hidden h-screen lg:w-full bg-white overflow-y-auto  ' >
                        {tab === 0 ?
                                <Home data={data} tab={setTab} />
                                :tab === 1 ?
                                    <Savings />
                                    :tab === 2 ?
                                        <Loan />
                                        :tab === 3 ?
                                            <Investment />
                                            :tab === 5 ?
                                                <More />
                            :null
                        }
                    </div> 
                </div>
            </>
        }
        </div>
    )
}
