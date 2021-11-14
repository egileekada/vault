import React from 'react'
import Menu from '../component/Menu'
import Home from '../component/Screens/Home'
import Investment from '../component/Screens/Investment'
import Loan from '../component/Screens/Loan'
import Savings from '../component/Screens/Savings'

export default function dashboard() {

    const [tab, setTab] = React.useState(0)

    return (
        <div className='w-screen h-screen overflow-hidden flex flex-row' >
            <div style={{width: '300px', backgroundColor: '#FCFCFC', borderTopRightRadius: '40px'}} >
                <Menu tab={setTab} />
            </div>
            <div className='w-full h-full bg-white overflow-y-auto' >
                {tab === 0 ?
                        <Home />
                    :tab === 1 ?
                        <Savings />
                        :tab === 2 ?
                            <Loan />
                            :tab === 3 ?
                                <Investment />
                    :null
                }
            </div> 
        </div>
    )
}
