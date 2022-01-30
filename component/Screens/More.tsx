import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IUser, UserContext } from '../../context/UserContext';
import Header from '../dashboard-component/Header';
import AccountTab from '../more-component/AccountDetail/AccountTab';
import AccountLimit from '../more-component/AccountLimit';
import LegalTab from '../more-component/Legal/LegalTab';
import SecurityTab from '../more-component/Security/SecurityTab';
import TabIcons from '../more-component/TabIcons';

export default function More(props: any) {


    const userContext: IUser = React.useContext(UserContext);  
    const tabArray = [
        {
            icon: 'Chat',
            title: 'Chat with us',
            detail: 'Get support and send feedbacks'
        },
        {
            icon: 'Security',
            title: 'Security',
            detail: 'Enhance your secruity'
        },
        {
            icon: 'Account',
            title: 'Account Limits',
            detail: 'How much you can Deposit & withdraw'
        },,
        {
            icon: 'Legal',
            title: 'Legals',
            detail: 'Term os use and others'
        },
    ]

    // console.log(userContext.userData)

    const [tab, setTab] = React.useState(-1)
    const [mobile, setMobile] = React.useState(false)

    const ClickHandler =(index: any, item: any)=>{
        setTab(index);
        setMobile(item)
    }

  return (
        <div className='w-full py-8 lg:py-20  ' >
            <p style={{color: '#828282'}} className='px-8 hidden lg:flex font-Montserrat-Regular text-xs' >Balance</p>
            <p style={{color: '#1D1D1D'}} className='px-8 hidden lg:flex font-Montserrat-Bold text-base mt-1' >₦ 0.00</p>
            <div className='w-full hidden lg:flex ' >
                <Header />
            </div>
            <div className='w-full flex px-6 lg:px-8' >
                <div className={mobile ? ' w-full lg:w-400px hidden lg:flex lg:mx-8 ': ' w-full lg:w-400px lg:mx-8'} >
                    {/* <div className='w-full' >
                        <div style={{backgroundColor: '#F9F9F9'}} className='rounded-full hidden lg:flex   cursor-pointer p-2'>
                            <IoIosArrowBack size='20px' />
                        </div>
                    </div> */}

                    <div className='w-full h-full mt-20' >
                        <div onClick={()=> ClickHandler(-1, true)} style={tab === -1 ?  {background: 'rgba(224, 224, 224, 0.2)', opacity:'0.8', borderColor:'#002343' }:{background: 'rgba(224, 224, 224, 0.2)', opacity:'0.8'}} className='w-full mb-10 flex rounded-lg lg:border-2 cursor-pointer items-center p-3' >
                                <div className='w-16 rounded-2xl h-16 bg-yellow-300 relative' > 
                                    <img src='/assets/images/avatar.png' alt='' className='absolute w-full h-full object-cover rounded-2xl' />
                                    {userContext.userData.avatar !== null ?
                                        <img src={`data:image/png;base64, ${userContext.userData.avatar}`} alt='' className='absolute w-full h-full object-cover rounded-2xl' />
                                    :null}
                                </div>
                                <div className=' w-auto mx-2' >
                                    <p className='font-Montserrat-Bold text-base' >{(userContext.userData.firstname+ ' '+userContext.userData.lastname).substring(0, 16)}</p>
                                    <p style={{color:'#667B8E'}} className='font-Montserrat-Medium text-sm' >Account Details</p>
                                </div>
                                <div className='w-full flex flex-1' />
                                <IoIosArrowForward size='20px' />
                        </div> 
                        {tabArray.map((item: any, index: any) => {
                            return( 
                                <div key={index} onClick={()=> ClickHandler(index, true)} style={tab === index ?  {background: 'rgba(224, 224, 224, 0.2)', opacity:'0.8',  borderColor:'#002343'}:{background: 'rgba(224, 224, 224, 0.2)', opacity:'0.8'}} className='w-full lg:border-2 rounded-lg cursor-pointer flex items-center my-2 p-3' >
                                        <div style={{border:'1px solid #000000', borderRadius: '12px'}} className='w-auto p-2 mr-2 rounded-2xl' >
                                            <TabIcons icons={item.icon} />
                                        </div>
                                        <div className=' w-auto mx-2' >
                                            <p className='font-Montserrat-Bold text-base' >{item.title}</p>
                                            <p style={{color:'#667B8E'}} className='w-40 font-Montserrat-Medium text-xs' >{item.detail}</p>
                                        </div>
                                        <div className='w-full flex flex-1' />
                                        <IoIosArrowForward size='20px' />
                                </div> 
                            )
                        })}
                    </div>
                </div>
                <div className={mobile ? ' w-full lg:bg-morebg rounded-xl ' : ' w-full h-full lg:bg-morebg hidden lg:flex rounded-xl' }>
                        {tab === -1 ? 
                            <AccountTab tab={setMobile} /> 
                            :tab === 0 ? 
                                <div>
                                    
                                </div>
                            :tab === 1 ? 
                                <SecurityTab tab={setMobile} /> 
                                :tab === 2 ? 
                                    <AccountLimit tab={setMobile} />  
                                        
                        :<LegalTab tab={setMobile} />}
                </div>
            </div>
        </div>
    );
}
