import React from 'react'
import TabMenu from './TabMenu'

export default function TabScreen(props: any) {

    const [tab, setTab] = React.useState(-1) 

    React.useEffect(() => {
        props.check(tab)
    },)

    return (
        <div className='w-full flex mt-8'  >
            <div style={{width: '260px'}} >
                <TabMenu check={setTab} tab={setTab} />
            </div>
        </div>
    )
}
