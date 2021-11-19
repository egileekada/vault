import React from 'react'
import { IoIosClose } from 'react-icons/io'

export default function InvestmentOption(props: any) {

    const [more, setMore] = React.useState(false) 

    return (
        <div className=' w-full lg:w-560px bg-white h-screen overflow-y-auto'  >
            <div className='w-full px-8 flex flex-row items-center py-10' > 
                <p onClick={()=> props.close(-1)} style={{color:'#03C8DB'}} className='font-Montserrat-Bold text-sm cursor-pointer ' >Go back</p>
                <div className='w-full flex flex-1' />
                <div onClick={()=> props.close(-1)} style={{backgroundColor: '#FAFAFA', borderRadius: '4px'}} className='w-auto h-auto cursor-pointer' >
                    <IoIosClose size='30px' />
                </div>
            </div> 
            <div className='w-full  relative ' >
                <p className=' font-Montserrat-Bold text-sm text-center' >Investment</p>
                <svg className='absolute right-8 -top-2'  width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0003 4.66699C9.75099 4.66699 4.66699 9.75099 4.66699 16.0003C4.66699 22.2497 9.75099 27.3337 16.0003 27.3337C22.2497 27.3337 27.3337 22.2497 27.3337 16.0003C27.3337 9.75099 22.2497 4.66699 16.0003 4.66699ZM16.0003 29.3337C8.64832 29.3337 2.66699 23.3523 2.66699 16.0003C2.66699 8.64832 8.64832 2.66699 16.0003 2.66699C23.3523 2.66699 29.3337 8.64832 29.3337 16.0003C29.3337 23.3523 23.3523 29.3337 16.0003 29.3337Z" fill="#002343"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9922 17.8305C15.4402 17.8305 14.9922 17.3825 14.9922 16.8305V10.9385C14.9922 10.3865 15.4402 9.93848 15.9922 9.93848C16.5442 9.93848 16.9922 10.3865 16.9922 10.9385V16.8305C16.9922 17.3825 16.5442 17.8305 15.9922 17.8305Z" fill="#002343"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.005 22.3942C15.2677 22.3942 14.665 21.7982 14.665 21.0609C14.665 20.3235 15.2557 19.7275 15.9917 19.7275H16.005C16.7424 19.7275 17.3384 20.3235 17.3384 21.0609C17.3384 21.7982 16.7424 22.3942 16.005 22.3942Z" fill="#002343"/>
                </svg>
            </div>

            <div className='w-full bg-yellow-400 h-44 my-14 relative' > 
                {more ? 
                        <div className='w-full h-full flex items-center justify-center' >
                            <div onClick={()=> setMore(false)} style={{backgroundColor: 'rgba(255, 255, 255, 0.16)', border: ' 1px solid #FFFFFF', color:'white'}} className=' w-28 cursor-pointer justify-center flex h-8 rounded items-center ' >
                                <IoIosClose size='30px' />
                                <p className='font-Montserrat text-sm' >Closed</p>
                            </div>
                        </div>
                    : 
                        <div className='rounded-tl-2xl py-1 flex justify-center items-center absolute right-0 top-20 bg-white w-16 rounded-bl-2xl' >
                            <p style={{color: '#27AE60'}} className='text-xs font-Montserrat-Medium' >Active</p>
                        </div>
                }
            </div>
            <div className='w-full px-8 pb-8' >
                <div className='w-full flex' > 
                    <div className='w-full' >
                        <p className='text-sm font-Montserrat-Bold' >Rice farm Investment</p>
                        <p style={{color: '#828282'}} className='text-xs font-Montserrat-Medium mt-1' >By GBG Farms, Kano.</p>
                    </div>
                    <div className='w-full flex flex-1' />
                    <div style={{border: '1px solid #03C8DB'}} className=' w-20 cursor-pointer rounded-lg flex justify-center h-8 items-center ' >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.15631 1.19275C8.24031 0.507412 9.68031 0.318079 10.9243 0.716745C13.6303 1.58941 14.4703 4.53941 13.719 6.88675C12.5596 10.5734 7.60831 13.3234 7.39831 13.4387C7.32365 13.4801 7.24098 13.5007 7.15831 13.5007C7.07565 13.5007 6.99365 13.4807 6.91898 13.4401C6.71031 13.3261 1.79498 10.6167 0.596979 6.88741C0.596312 6.88741 0.596312 6.88675 0.596312 6.88675C-0.155688 4.53875 0.681646 1.58808 3.38498 0.716745C4.65431 0.306079 6.03765 0.486745 7.15631 1.19275ZM3.69165 1.66875C1.50431 2.37408 0.954979 4.72675 1.54898 6.58208C2.48365 9.49008 6.17631 11.8414 7.15765 12.4234C8.14231 11.8354 11.8616 9.45808 12.7663 6.58475C13.3603 4.72741 12.809 2.37475 10.6183 1.66875C9.55698 1.32808 8.31898 1.53541 7.46431 2.19675C7.28565 2.33408 7.03765 2.33675 6.85765 2.20075C5.95231 1.52008 4.76965 1.32075 3.69165 1.66875ZM9.97831 2.99268C10.887 3.28668 11.5236 4.09135 11.6016 5.04268C11.6236 5.31801 11.419 5.55935 11.1436 5.58135C11.1296 5.58268 11.1163 5.58335 11.1023 5.58335C10.8443 5.58335 10.6256 5.38535 10.6043 5.12401C10.5603 4.57601 10.1936 4.11335 9.67165 3.94468C9.40831 3.85935 9.26431 3.57735 9.34898 3.31535C9.43498 3.05268 9.71431 2.91001 9.97831 2.99268Z" fill="#03C8DB"/>
                        </svg> 
                        <p style={{color: '#03C8DB'}} className='text-xs font-Montserrat-Medium ml-2' >Save</p>
                    </div>
                </div>
                <div className='w-full flex py-8' >  
                    <p style={{color: '#03C8DB'}} className='text-sm font-Montserrat-Medium' >20%  <span style={{color: '#000'}}>ROI</span></p> 
                    <div className='w-full flex flex-1' /> 
                    <p  className='text-sm font-Montserrat-Medium ml-2' >N 5000  <span style={{color: '#03C8DB'}} className='text-xs' >/unit</span></p> 
                </div>
                {more ? 
                        <p className='text-xs font-Montserrat-Medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium semper libero, velit neque consectetur. Blandit dignissim scelerisque orci amet amet mattis natoque tristique sed. Magna in ultrices massa dictum ut pharetra. A et urna sed erat eleifend quam a tortor.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium semper libero, velit neque consectetur. Blandit dignissim scelerisque orci amet amet mattis natoque tristique sed. Magna in ultrices massa dictum ut pharetra. A et urna sed erat eleifend quam a tortor.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium semper libero, velit neque consectetur. Blandit dignissim scelerisque orci amet amet mattis natoque tristique sed. Magna in ultrices massa dictum ut pharetra. A et urna sed erat eleifend quam a tortor.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium semper libero, velit neque consectetur. Blandit dignissim scelerisque orci amet amet mattis natoque tristique sed. Magna in ultrices massa dictum ut pharetra. A et urna sed erat eleifend quam a tortor.</p>
                    : 
                        <div className='w-full' > 
                            <div className='w-full grid grid-cols-3 lg:grid-cols-4 gap-y-8' >
                                <div className='w-full' >
                                    <p className='text-xs font-Montserrat-Medium' >Duration</p>
                                    <p style={{color: '#03C8DB'}} className='text-base font-Montserrat-Bold mt-4' >1 yr</p>
                                </div>
                                <div className='w-full' >
                                    <p className='text-xs font-Montserrat-Medium' >Insurance</p>
                                    <p style={{color: '#03C8DB'}} className='text-base font-Montserrat-Bold mt-4' >Yes</p>
                                </div>
                                <div className='w-full' >
                                    <p className='text-xs font-Montserrat-Medium' >Avail units</p>
                                    <p style={{color: '#03C8DB'}} className='text-base font-Montserrat-Bold mt-4' >239</p>
                                </div>
                                <div className='w-full' >
                                    <p className='text-xs font-Montserrat-Medium' >Sector Level</p>
                                    <p style={{color: '#03C8DB'}} className='text-base font-Montserrat-Bold mt-4' >Agric</p>
                                </div>
                                <div className='w-full' >
                                    <p className='text-xs font-Montserrat-Medium' >Start date</p>
                                    <p style={{color: '#03C8DB'}} className='text-base font-Montserrat-Bold mt-4' >1st Jul 21</p>
                                </div>
                                <div className='w-full' >
                                    <p className='text-xs font-Montserrat-Medium' >Maturity date</p>
                                    <p style={{color: '#03C8DB'}} className='text-base font-Montserrat-Bold mt-4' >30th Jun 22</p>
                                </div>
                                <div className='w-full' >
                                    <p className='text-xs font-Montserrat-Medium' >Risk Level</p>
                                    <p style={{color: '#03C8DB'}} className='text-base font-Montserrat-Bold mt-4' >None</p>
                                </div>
                            </div>

                                {props.withdraw  ? 
                                    <div className='w-full bg-gray-300 h-1 mt-8 rounded-xl'>
                                        <div style={{width: '40%', backgroundColor: '#03C8DB'}} className='h-full rounded-tl-xl rounded-bl-xl' />
                                        <p style={{marginLeft: '35%', color: '#03C8DB'}} className='mt-2 text-sm font-Montserrat-Medium' >80 Days left</p>
                                    </div>
                                :null}

                            <div className='w-full flex mb-6 flex-col mt-16' >
                                <button onClick={()=> setMore(true)} style={{border: '1px solid #002343', color: '#002343', borderRadius: '2px'}}  className=' w-full text-white font-Montserrat-Medium text-sm h-12 items-center justify-center' >More about this Investment</button>
                                
                                <button onClick={()=> {props.withdraw ? props.close(6): props.close(2)}} style={{backgroundColor: '#002343', borderRadius: '2px'}}  className=' w-full mt-6 text-white font-Montserrat-Medium text-sm h-12 items-center justify-center' >{props.withdraw ? 'Withdraw': 'Get Started'}</button>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}
