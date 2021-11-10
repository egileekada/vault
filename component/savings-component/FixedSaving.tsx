import React from 'react'

export default function FixedSaving(props: any) {

    const Array = [
        {
            title: 'Abeg keep the money',
            time: '2/3 months',
            amount: '₦ 200,000.00'
        },
        {
            title: 'Abeg keep the money',
            time: '2/3 months',
            amount: '₦ 200,000.00'
        },
        {
            title: 'Abeg keep the money',
            time: '2/3 months',
            amount: '₦ 200,000.00'
        },
    ]

    const Signature =()=> {
        props.click(1)
        props.sign(true)
    }


    const ClickHandler =()=> {
        {props.joint === 'true' ?
                Signature()
            :
                props.click(1)
        }
    }

    return (
        <div className='w-full mt-8'>
            {Array.map((item: any, index: any) => {
                return(
                    <div onClick={()=> ClickHandler()} key={index} style={{backgroundColor: '#F4F4F4', borderRadius:'8px'}} className='w-full flex items-center cursor-pointer px-8 py-4 my-2' >
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.2057 10.1631H16.791V11.5778H18.2057V10.1631Z" fill="#002343"/>
                            <path d="M18.2728 10.0962H16.7246V11.6477H18.2728V10.0962ZM18.2394 11.6143H16.758V10.1295H18.2394V11.6143Z" fill="#E2E2E2"/>
                            <path d="M16.7578 11.6142H18.2393V10.1294H16.7578V11.6142ZM16.7912 10.1628H18.1959V11.5808H16.7812L16.7912 10.1628Z" fill="#E2E2E2"/>
                            <path d="M10.4614 8.6148C11.5134 8.58457 12.5121 8.14544 13.2455 7.39067C13.9789 6.63589 14.3892 5.62494 14.3892 4.57254C14.3892 3.52013 13.9789 2.50918 13.2455 1.75441C12.5121 0.999631 11.5134 0.5605 10.4614 0.530273C9.92894 0.531664 9.40189 0.63705 8.90986 0.840553C8.04567 1.19811 7.33228 1.84439 6.89134 2.66916C6.4504 3.49392 6.30922 4.44612 6.49188 5.36335C6.67454 6.28058 7.16972 7.10606 7.89299 7.69899C8.61625 8.29192 9.5228 8.61558 10.458 8.6148H10.4614ZM10.4614 1.94164C10.9807 1.94164 11.4884 2.09563 11.9202 2.38417C12.3521 2.67271 12.6886 3.08282 12.8874 3.56264C13.0861 4.04246 13.1381 4.57045 13.0368 5.07983C12.9355 5.5892 12.6854 6.05708 12.3182 6.42431C11.9509 6.79155 11.483 7.04163 10.9737 7.14295C10.4643 7.24427 9.93632 7.1923 9.4565 6.99355C8.97668 6.79481 8.56656 6.45821 8.27802 6.02639C7.98949 5.59456 7.8355 5.08688 7.8355 4.56753C7.83814 3.87253 8.11585 3.20685 8.60791 2.71603C9.09998 2.22522 9.76638 1.9492 10.4614 1.94832V1.94164Z" fill="#002343"/>
                            <path d="M5.61661 6.823C5.61289 6.69834 5.57629 6.57685 5.51049 6.4709C5.44469 6.36494 5.35203 6.27828 5.24194 6.21967C5.13184 6.16107 5.00822 6.13261 4.88357 6.1372C4.75893 6.14178 4.63771 6.17925 4.53222 6.24578C3.27696 7.01988 2.24265 8.10474 1.5293 9.3955L2.70378 10.2063C3.29854 9.07262 4.18703 8.1196 5.27629 7.44694C5.3835 7.38274 5.47158 7.29105 5.53142 7.18134C5.59126 7.07164 5.62068 6.9479 5.61661 6.823Z" fill="#002343"/>
                            <path d="M2.74366 10.2694C3.33503 9.13263 4.22274 8.17693 5.31283 7.5034C5.42741 7.43414 5.52187 7.33609 5.58684 7.21902C5.65181 7.10196 5.68503 6.96995 5.68318 6.83608C5.6803 6.69936 5.64111 6.56588 5.56961 6.44931C5.49811 6.33275 5.39686 6.23728 5.27629 6.17276C5.15573 6.10823 5.02017 6.07693 4.88352 6.08209C4.74687 6.08725 4.61406 6.12869 4.4987 6.20212C3.22354 6.98653 2.17567 8.09076 1.45908 9.40523L1.44238 9.43191L2.72698 10.3161L2.74366 10.2694ZM1.48576 9.40857C2.19946 8.0979 3.244 6.99703 4.51538 6.21548C4.62601 6.14575 4.75313 6.10653 4.88382 6.10185C5.01451 6.09716 5.14409 6.12714 5.25943 6.18876C5.37442 6.25119 5.47119 6.34248 5.54022 6.45363C5.60925 6.56478 5.64816 6.69198 5.65315 6.82272C5.65913 6.95577 5.62914 7.08798 5.56631 7.20542C5.50348 7.32286 5.41016 7.42118 5.29615 7.49004C4.1982 8.16292 3.30604 9.1243 2.71696 10.2694L1.48576 9.40857Z" fill="#E2E2E2"/>
                            <path d="M5.29672 7.47656C5.41072 7.4077 5.50405 7.30938 5.56688 7.19194C5.62971 7.0745 5.6597 6.9423 5.65371 6.80924C5.64873 6.6785 5.60982 6.5513 5.54079 6.44015C5.47176 6.329 5.37499 6.23776 5.26 6.17532C5.14466 6.1137 5.01508 6.08368 4.88439 6.08837C4.7537 6.09305 4.62658 6.13227 4.51595 6.202C3.24456 6.98355 2.20003 8.08442 1.48633 9.39509L2.71753 10.2426C3.3086 9.10241 4.20058 8.1458 5.29672 7.47656ZM2.70419 10.2059L1.52971 9.39509C2.24306 8.10434 3.27736 7.01948 4.53263 6.24538C4.6115 6.1909 4.70064 6.153 4.7946 6.13402C4.88856 6.11504 4.9854 6.11537 5.07924 6.13496C5.17308 6.15456 5.26195 6.19303 5.34046 6.24803C5.41898 6.30302 5.4855 6.3734 5.53598 6.45489C5.58646 6.53639 5.61985 6.62729 5.63412 6.72208C5.64839 6.81687 5.64324 6.91359 5.61899 7.00633C5.59474 7.09908 5.5519 7.18591 5.49306 7.26159C5.43421 7.33726 5.36061 7.40019 5.2767 7.44654C4.18744 8.1192 3.29894 9.07222 2.70419 10.2059Z" fill="#E2E2E2"/>
                            <path d="M23.4274 11.6476H22.0927V11.6176C21.6656 9.32869 20.7347 7.82056 19.1599 6.8663H19.1365V6.83962L20.3744 3.7833C20.4144 3.68375 20.4313 3.57639 20.4237 3.46936C20.4161 3.36232 20.3842 3.25842 20.3305 3.16551C20.2769 3.07261 20.2027 2.9931 20.1138 2.93307C20.0249 2.87304 19.9234 2.83406 19.8172 2.81903C19.4568 2.76898 16.2437 2.40862 15.3528 4.73088C15.3089 4.84688 15.2962 4.97233 15.3158 5.0948C15.3354 5.21727 15.3867 5.3325 15.4646 5.42899C15.5426 5.52547 15.6444 5.59987 15.76 5.64481C15.8756 5.68976 16.0009 5.70365 16.1236 5.68514C16.2463 5.66503 16.3617 5.61318 16.4583 5.53476C16.5549 5.45634 16.6292 5.35407 16.6741 5.23805C16.9677 4.47397 17.8986 4.23708 18.626 4.20037H18.6794L18.6594 4.25043L17.5817 6.9197C17.5712 6.9556 17.5645 6.99249 17.5616 7.02979C17.5456 7.0796 17.5356 7.1311 17.5316 7.18326C17.5353 7.22264 17.542 7.26171 17.5516 7.30007C17.5574 7.34977 17.5675 7.39887 17.5817 7.44686C17.6284 7.52471 17.6784 7.60148 17.7318 7.67711C17.7626 7.70388 17.7962 7.72735 17.8319 7.74716C17.8673 7.77816 17.9052 7.80607 17.9454 7.83058C19.5703 8.57463 20.4211 9.96266 20.7848 12.4718C20.8108 12.6395 20.8955 12.7926 21.0238 12.9038C21.1521 13.015 21.3157 13.0771 21.4855 13.079H22.7133V16.0819H20.8148C20.6384 16.0804 20.4678 16.1456 20.3373 16.2644C20.2068 16.3831 20.1259 16.5468 20.1108 16.7226C20.0088 17.4584 19.6874 18.1464 19.1887 18.6969C18.6899 19.2474 18.0369 19.6349 17.3147 19.8089C17.2923 19.8174 17.271 19.8286 17.2513 19.8423C17.1954 19.8596 17.1426 19.8855 17.0945 19.919C17.0633 19.9418 17.0342 19.9675 17.0078 19.9957C16.9727 20.0299 16.9404 20.0667 16.911 20.1059C16.8864 20.147 16.8662 20.1906 16.8509 20.236C16.8331 20.2642 16.8186 20.2945 16.8076 20.3261L16.1936 22.7551H14.2918V22.7318L13.7179 21.0167C13.6716 20.8762 13.5822 20.7538 13.4625 20.667C13.3427 20.5801 13.1986 20.5332 13.0506 20.5329H10.0877C9.93975 20.5332 9.79564 20.5801 9.67585 20.667C9.55606 20.7538 9.46668 20.8762 9.42039 21.0167L8.85317 22.7551H6.95132V22.7284L6.3474 20.3294C6.34863 20.3205 6.34863 20.3116 6.3474 20.3027C6.32999 20.2517 6.30763 20.2025 6.28066 20.1559C6.26284 20.1202 6.24278 20.0856 6.22061 20.0525L6.12719 19.9691C6.08826 19.9361 6.047 19.906 6.00374 19.879C4.62009 19.21 3.48703 18.1156 2.77059 16.7559L1.5127 17.3999C2.3084 18.9267 3.54861 20.1763 5.06948 20.9833L5.7368 23.6526C5.77484 23.8061 5.86321 23.9424 5.98779 24.0398C6.11238 24.1372 6.26601 24.19 6.42413 24.1898H9.38702C9.53485 24.189 9.67873 24.1419 9.79843 24.0551C9.91812 23.9684 10.0076 23.8463 10.0543 23.706L10.6349 21.9677H12.5768V21.991L13.1507 23.706C13.197 23.8465 13.2864 23.9689 13.4061 24.0558C13.5259 24.1426 13.67 24.1896 13.818 24.1898H16.7809C16.939 24.19 17.0926 24.1372 17.2172 24.0398C17.3418 23.9424 17.4302 23.8061 17.4682 23.6526L18.1155 21.0568C18.9116 20.7921 19.6289 20.3326 20.2023 19.7202C20.7757 19.1078 21.1869 18.3618 21.3987 17.55V17.5267H23.4274C23.5198 17.5267 23.6113 17.5084 23.6966 17.4729C23.7819 17.4374 23.8594 17.3854 23.9245 17.3198C24.058 17.1873 24.1336 17.0074 24.1347 16.8193V12.3717C24.133 12.1849 24.0578 12.0063 23.9254 11.8746C23.793 11.7428 23.6141 11.6685 23.4274 11.6676V11.6476Z" fill="#002343"/>
                            <path d="M1.15877 12.2417C1.01689 12.2417 0.878204 12.2838 0.760233 12.3626C0.642263 12.4414 0.550315 12.5535 0.49602 12.6846C0.441724 12.8156 0.427508 12.9599 0.455188 13.099C0.482868 13.2382 0.551201 13.366 0.651526 13.4663C0.751851 13.5666 0.879671 13.635 1.01883 13.6626C1.15798 13.6903 1.30221 13.6761 1.43329 13.6218C1.56437 13.5675 1.67642 13.4756 1.75524 13.3576C1.83407 13.2396 1.87615 13.101 1.87615 12.9591C1.87615 12.7688 1.80055 12.5864 1.66602 12.4518C1.53149 12.3173 1.34903 12.2417 1.15877 12.2417Z" fill="#002343"/>
                            <path d="M1.94318 12.9588C1.94384 12.8036 1.89841 12.6517 1.81266 12.5223C1.7269 12.3929 1.60468 12.2919 1.46146 12.232C1.31825 12.1722 1.16048 12.1562 1.00816 12.186C0.855844 12.2159 0.715827 12.2903 0.605835 12.3998C0.495843 12.5094 0.420839 12.6491 0.390313 12.8013C0.359787 12.9535 0.375116 13.1113 0.434363 13.2548C0.49361 13.3982 0.594101 13.5209 0.723116 13.6072C0.852131 13.6935 1.00387 13.7396 1.15909 13.7396C1.36647 13.7396 1.56541 13.6574 1.71236 13.5111C1.85931 13.3648 1.94229 13.1662 1.94318 12.9588ZM1.15909 13.7062C1.01047 13.7062 0.865176 13.6621 0.741648 13.5795C0.61812 13.4968 0.521917 13.3794 0.465195 13.242C0.408473 13.1046 0.393801 12.9535 0.42304 12.8078C0.452278 12.6621 0.524112 12.5283 0.629438 12.4235C0.734763 12.3186 0.868833 12.2473 1.01468 12.2188C1.16053 12.1902 1.31158 12.2055 1.4487 12.2629C1.58581 12.3202 1.70283 12.4169 1.78492 12.5408C1.86701 12.6647 1.91048 12.8102 1.90982 12.9588C1.90982 13.0572 1.89038 13.1547 1.85261 13.2456C1.81484 13.3365 1.75949 13.419 1.68973 13.4885C1.61998 13.5579 1.53719 13.6129 1.44613 13.6503C1.35507 13.6876 1.25752 13.7066 1.15909 13.7062Z" fill="#E2E2E2"/>
                            <path d="M1.15894 12.2075C1.01046 12.2075 0.865304 12.2515 0.741847 12.334C0.61839 12.4165 0.522174 12.5338 0.465353 12.6709C0.408532 12.8081 0.39366 12.9591 0.422627 13.1047C0.451594 13.2503 0.523097 13.3841 0.628089 13.4891C0.73308 13.5941 0.866848 13.6656 1.01248 13.6946C1.1581 13.7235 1.30905 13.7087 1.44623 13.6518C1.5834 13.595 1.70065 13.4988 1.78314 13.3753C1.86563 13.2519 1.90967 13.1067 1.90967 12.9583C1.90967 12.7591 1.83058 12.5682 1.68979 12.4274C1.549 12.2866 1.35805 12.2075 1.15894 12.2075ZM1.15894 13.6723C1.01692 13.6723 0.878094 13.6301 0.760053 13.5512C0.642012 13.4722 0.550056 13.3599 0.495859 13.2287C0.441663 13.0974 0.427667 12.953 0.455618 12.8137C0.48357 12.6745 0.552213 12.5467 0.652873 12.4465C0.753532 12.3463 0.881675 12.2782 1.02105 12.2509C1.16042 12.2236 1.30476 12.2383 1.43578 12.2931C1.5668 12.3479 1.67861 12.4404 1.75704 12.5588C1.83546 12.6772 1.87697 12.8162 1.87631 12.9583C1.87631 13.0523 1.85772 13.1454 1.82163 13.2323C1.78554 13.3191 1.73264 13.398 1.66598 13.4643C1.59933 13.5307 1.52023 13.5832 1.43321 13.6189C1.3462 13.6546 1.25299 13.6727 1.15894 13.6723Z" fill="#E2E2E2"/>
                        </svg>
                        <div className='w-auto ml-4' >
                            <p className='font-Montserrat-Bold text-sm' >{item.title}</p>
                            <p className='font-Montserrat-Regular text-xs ' >{item.time}</p>
                        </div>
                        <div className='w-full flex flex-1' />
                        <p className='font-Montserrat-Regular w-auto text-sm' >{item.amount}</p>
                    </div>
                )
            })}
        </div>
    )
}
