import React from 'react'
import Goals from './SavingsTabModals/Goals'
import SuccessModal from '../../reusable-modal/SucessModal'
import AddMoney from './SavingsTabModals/AddMoney'
import LinkCard from './SavingsTabModals/LinkCard'
import LinkCardSucess from './SavingsTabModals/LinkCardSucess'

export default function FixedDepositController(props: any) {

    const [showModal, setShowModal] = React.useState(0)
    const [closeModal, setCloseModal] = React.useState(true)
    const [closeTab, setCloseTab] = React.useState(true)

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
    },) 

    return (
        <div> 
            {showModal === 0 ? 
                (
                    <>
                        <div className=" h-full lg:h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <Goals close={setShowModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
            {showModal === 1 ? 
                (
                    <>
                        <div className="h-auto flex justify-end items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <AddMoney close={setCloseModal} next={setShowModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
            {showModal === 2 ? 
                (
                    <>
                        <div className="h-auto flex justify-end items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <LinkCard header='Add Money 💰' close={setCloseModal} next={setShowModal} />
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
                            <SuccessModal header='Goal is set!' body='You have successfully set your savings plan. kudos.' close={setCloseTab} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
        </div>
    )
}
