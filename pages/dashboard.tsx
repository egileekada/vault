import React from 'react'
import Menu from '../component/Menu'
import Home from '../component/Screens/Home'
import Investment from '../component/Screens/Investment'
import Loan from '../component/Screens/Loan'
import Savings from '../component/Screens/Savings'
import { Drawer, DrawerContent, DrawerCloseButton, useDisclosure } from '@chakra-ui/react';
import More from '../component/Screens/More'

export default function dashboard() {

    const [tab, setTab] = React.useState(0)
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div className='w-screen h-screen overflow-x-hidden lg:overflow-y-hidden overflow-y-auto' > 
            <div style={{backgroundColor:'#F2F2F2'}} className='w-full lg:hidden flex item-center px-8 py-4 mt-14 mb-4' > 
                <img src='/assets/images/Vault-logo.png'  className='' />
                <div className='w-full flex flex-1' />
                <svg onClick={()=> onOpen()} className='cursor-pointer'  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 15H22" stroke="#262F56" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 9H22" stroke="#262F56" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div> 
            <div className=' overflow-hidden flex flex-row' >
                <div className='lg:flex hidden' style={{width: '300px', backgroundColor: '#FCFCFC', borderTopRightRadius: '40px'}} >
                    <Menu index={tab} close={onClose} mobile={false} tab={setTab} />
                </div>
                <div className='lg:hidden flex' >
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
                <div className='w-screen overflow-x-hidden h-screen lg:w-full bg-white overflow-y-auto' >
                    {tab === 0 ?
                            <Home tab={setTab} />
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
        </div>
    )
}
