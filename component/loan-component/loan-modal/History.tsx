import React from 'react'
import { IoIosClose } from 'react-icons/io'

export default function History(props: any) {
    return (
        <div className=' w-full lg:w-560px bg-white px-6 lg:px-8  h-screen'  >
            <div className='w-full flex flex-row items-center py-10' > 
                <p onClick={()=> props.close(-1)} style={{color:'#03C8DB'}} className='font-Montserrat-Bold text-sm cursor-pointer ' >Go back</p>
                <div className='w-full flex flex-1' />
                <div onClick={()=> props.close(-1)} style={{backgroundColor: '#FAFAFA', borderRadius: '4px'}} className='w-auto h-auto cursor-pointer' >
                    <IoIosClose size='30px' />
                </div>
            </div>
            <p className='text-center font-Inter-Medium text-base' >History</p>
            <div className='w-full flex items-center' >
                <div className='p-3 rounded-xl mr-2' style={{backgroundColor: '#EAFFF0'}}  > 
                    <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.13982 13.9202V3.71696C6.14069 3.64555 6.16944 3.57729 6.21994 3.52679C6.27043 3.47629 6.33867 3.44754 6.41008 3.44668H8.87914C8.74712 3.12988 8.68345 2.78879 8.69229 2.4457C8.68451 2.29452 8.70838 2.14339 8.76236 2.00195H6.41008C5.95816 2.00283 5.525 2.18276 5.20544 2.50232C4.88589 2.82187 4.70596 3.25502 4.70508 3.70694V13.9035L6.13982 13.9202Z" fill="#03C8DB"/>
                        <path d="M22.2323 2.01953H19.8433C19.921 2.2543 19.9507 2.50229 19.9306 2.74876C19.9106 2.99522 19.8412 3.23512 19.7266 3.45423H22.2323C22.3037 3.4551 22.372 3.48385 22.4225 3.53435C22.473 3.58485 22.5017 3.65311 22.5026 3.72452V17.7948C22.5026 17.8665 22.4741 17.9352 22.4234 17.9859C22.3728 18.0366 22.304 18.0651 22.2323 18.0651H20.564V19.4999H22.2323C22.6843 19.499 23.1174 19.319 23.437 18.9994C23.7565 18.6799 23.9364 18.2467 23.9373 17.7948V3.71784C23.9338 3.26735 23.7528 2.8364 23.4337 2.51847C23.1145 2.20054 22.6828 2.02127 22.2323 2.01953Z" fill="#03C8DB"/>
                        <path d="M18.0849 14.598C17.9846 14.4195 17.8446 14.2665 17.6756 14.1508C17.5067 14.0351 17.3134 13.9597 17.1106 13.9307C16.3432 13.7972 15.6125 14.3411 15.0253 14.7749C14.6916 15.0051 14.3847 15.252 14.0811 15.5022C13.9519 15.6108 13.8666 15.7626 13.8408 15.9293C13.8267 16.0123 13.8301 16.0973 13.8508 16.1789C13.8715 16.2605 13.909 16.3369 13.9609 16.4031C14.0676 16.5329 14.2192 16.6176 14.3855 16.6405C14.5519 16.6634 14.7208 16.6227 14.8585 16.5266L15.2522 16.2163C15.4457 16.0628 15.6259 15.9193 15.7894 15.8059L15.9896 15.669C16.3466 15.4288 16.7503 15.1552 16.9905 15.1719C16.9905 15.1719 17.0439 15.192 17.104 15.2887C17.3976 15.6591 17.0306 16.1596 17.0339 16.1596C16.8237 16.3564 12.8332 20.7573 12.1191 21.6215C11.6554 22.2721 10.6244 22.3322 10.6143 22.3322L2.42306 22.6358L1.4688 19.4895L10.0905 16.8769C10.6477 16.7101 11.0314 16.7201 11.0915 16.9036C11.1317 17.0353 11.1302 17.1762 11.0872 17.3071C11.0442 17.4379 10.9618 17.5522 10.8513 17.6343L7.68482 18.8155C7.53457 18.8881 7.41696 19.0143 7.3552 19.1693C7.29344 19.3243 7.292 19.4969 7.35117 19.6529C7.42736 19.7974 7.55231 19.9102 7.7038 19.9713C7.8553 20.0324 8.02354 20.0378 8.17865 19.9866L11.3584 18.692L11.4585 18.662H11.4852C11.8377 18.4388 12.1071 18.106 12.2518 17.7147C12.3965 17.3234 12.4085 16.8954 12.286 16.4966C12.1792 16.1395 11.6754 15.0251 9.70681 15.6224L0.517868 18.3984C0.436295 18.4195 0.35998 18.4573 0.293733 18.5094C0.227486 18.5615 0.172736 18.6267 0.132932 18.701C0.093129 18.7753 0.0691499 18.8571 0.0624701 18.9411C0.0557902 19.0251 0.0665522 19.1096 0.094117 19.1892L1.37871 23.4266C1.41365 23.5627 1.49301 23.6832 1.60423 23.769C1.71545 23.8548 1.85214 23.9011 1.99263 23.9004L10.6978 23.5667C10.956 23.5566 11.2123 23.5174 11.4618 23.4499L11.5653 23.4199C12.1586 23.2863 12.6843 22.9441 13.0467 22.4556C13.5038 21.8684 15.6025 19.5595 16.8571 18.1782C17.818 17.1172 17.8914 17.0337 17.8948 17.0237C18.3752 16.4498 18.7122 15.4589 18.0849 14.598Z" fill="#03C8DB"/>
                        <path d="M19.6893 5.26826H8.95558C8.6774 5.27093 8.4095 5.1632 8.21061 4.96869C8.01172 4.77418 7.89805 4.50876 7.89453 4.23059V1.04748C7.89805 0.769313 8.01172 0.503892 8.21061 0.309381C8.4095 0.11487 8.6774 0.00714244 8.95558 0.00981416H19.686C19.8236 0.00849337 19.9601 0.0342999 20.0877 0.0857343C20.2153 0.137169 20.3315 0.213226 20.4298 0.309585C20.528 0.405943 20.6063 0.520704 20.6601 0.647315C20.714 0.773926 20.7424 0.909898 20.7437 1.04748V4.23393C20.7462 4.36869 20.7216 4.50255 20.6711 4.62754C20.6206 4.75253 20.5455 4.86605 20.4501 4.96128C20.3497 5.05993 20.2308 5.13784 20.1003 5.19051C19.9697 5.24318 19.8301 5.26959 19.6893 5.26826ZM9.24586 3.93363H19.3957V1.3611H9.24586V3.93363Z" fill="#03C8DB"/>
                        <path d="M17.2297 9.4458H16.6759V7.31055H15.8024V9.4458H14.2523L12.7736 7.31055H11.9572V9.4458H11.4062V10.0167H11.9572V10.679H11.4062V11.2499H11.9572V13.1568H12.8393V11.2499H14.5435L15.8652 13.1568H16.6759V11.2499H17.2297V10.679H16.6759V10.0167H17.2297V9.4458ZM13.6899 10.0167L14.1467 10.679H12.8393V10.0167H13.6899ZM15.8024 10.0167V10.679H15.1087L14.6491 10.0167H15.8024ZM12.8393 9.4458V8.86917H12.8935L13.2932 9.4458H12.8393ZM15.5026 11.2499H15.8024V11.6039H15.7481L15.5026 11.2499Z" fill="#03C8DB"/>
                    </svg> 
                </div>
                <div className='w-auto' > 
                    <p className=' font-Inter-Medium text-base' >Withdrawal</p>
                    <p style={{color: '#BDBDBD'}} className=' font-Inter-Medium mt-1 text-xs' >12 May 2021</p>
                </div>
                <div className='w-full flex flex-1' />
                <p style={{color: '#27AE60'}} className=' font-Inter-Medium text-base' >+₦10,000.00</p>
            </div>            
        </div>
    )
}