import React from 'react'
import LinkCard from './SavingsTabModals/LinkCard'
import SuccessModal from '../../reusable-modal/SucessModal'
import AddMoney from './SavingsTabModals/AddMoney'
import Goals from './SavingsTabModals/Goals'
import LinkCardSucess from './SavingsTabModals/LinkCardSucess'
// import Withdrawal from './SavingsModal/Withdrawal'
// import Transaction from './SavingsModal/Transaction'

export default function Controller(props: any) {

    const [showModal, setShowModal] = React.useState(0)
    const [closeModal, setCloseModal] = React.useState(true)
    const [closeTab, setCloseTab] = React.useState(true)
    const [value, setValue] = React.useState({} as any)

    const CloseModal =()=> {
        props.close(false) 
        setShowModal(0)
        setCloseModal(true)
    }

    const CloseTab =()=> {
        props.end(false) 
        setCloseTab(true) 
    }

    React.useEffect(() => { 
        {closeModal === false ? 
            CloseModal() 
            :null
        }
        {closeTab === false ? 
            CloseTab() 
            :null
        }
        setValue(props.value)
    },) 

    return (
        <div> 
            {showModal === 0 ? 
                (
                    <>
                        <div className=" h-full lg:h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <Goals image={props.image} value={value} day={props.day} close={setShowModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
            {showModal === 1 ? 
                (
                    <>
                        <div className="h-auto flex justify-end items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <AddMoney value={value} close={setCloseModal} next={setShowModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
            {showModal === 2 ? 
                (
                    <>
                        <div className="h-auto flex justify-end items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <LinkCard header='Add Money ????' close={setCloseModal} next={setShowModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
            {showModal === 3 ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <LinkCardSucess header='Card has been added successfully' body='You have successfully added this card ... 7687.' back={setShowModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
            {showModal === 4 ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <SuccessModal header='Goal is set!' body='You have successfully set your savings plan ????.' close={setCloseTab} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
        </div>
    )
}
