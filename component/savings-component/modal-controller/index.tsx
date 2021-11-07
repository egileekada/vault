import React from 'react'
import LinkCard from '../../savings-component/modal-controller/FixedSavingModal/LinkCard'
import SuccessModal from '../../reusable-modal/SucessModal'
import AddMoney from './FixedSavingModal/AddMoney'
import Goals from './FixedSavingModal/Goals'

export default function index(props: any) {

    const [showModal, setShowModal] = React.useState(0)
    const [endModal, setEndModal] = React.useState(true)

    const ClickHandler =()=> {
        setShowModal(0)
        props.close(false) 
        setEndModal(true)
    }

    React.useEffect(() => { 
        {endModal === false ? 
            ClickHandler() 
            :null
        }
    },)


    return (
        <div> 
            {showModal === 0 ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <Goals close={setShowModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
            {showModal === 1 ? 
                (
                    <>
                        <div className="h-auto flex justify-end items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <AddMoney close={setEndModal} next={setShowModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
            {showModal === 2 ? 
                (
                    <>
                        <div className="h-auto flex justify-end items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <LinkCard header='Add Money 💰' close={setEndModal} next={setShowModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
            {showModal === 3 ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <SuccessModal header='Card has been added successfully' body='You have successfully added this card ... 7687.' close={setEndModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
            {showModal === 4 ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <SuccessModal header='Goal is set!' body='You have successfully set your savings plan 👍.' close={setEndModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
        </div>
    )
}
