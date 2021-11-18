import { Input } from '@chakra-ui/react'
import { Select } from '@chakra-ui/select'
import React from 'react'
import { IoIosClose } from 'react-icons/io'
import Account from '../../investmen-component/Account'
import LinkedCards from '../../investmen-component/LinkedCards'
// import Account from '../Account'
// import LinkedCards from '../LinkedCards'
// import LinkCard from './LinkCard'

export default function Payment(props: any) {

    const [selected, setSelected] = React.useState('') 

    const[addCard, setAddCard] = React.useState(0)

    React.useEffect(() => {
        {addCard === 1 ?
            props.close(5)
        :null}
    },)

    return (
        <div className=' w-560px bg-white h-screen px-8 pb-10 overflow-y-auto font-Montserrat-Regular '  >
            <div className='w-full flex flex-row items-center py-10' > 
                <p onClick={()=> props.close(-1)} style={{color:'#03C8DB'}} className='font-Montserrat-Bold text-sm cursor-pointer ' >Go back</p>
                <div className='w-full flex flex-1' />
                <div onClick={()=> props.close(-1)} style={{backgroundColor: '#FAFAFA', borderRadius: '4px'}} className='w-auto h-auto cursor-pointer' >
                    <IoIosClose size='30px' />
                </div>
            </div> 
            <div className='w-full ' >
                <p className=' font-Montserrat-Bold text-sm text-center' >Pay Back</p> 
            </div> 
            <div style={{backgroundColor: '#002343'}} className='w-full flex justify-center my-10 items-center rounded-2xl h-48' >
                <p style={{color: '#CCD3D9'}} className='font-Montserrat-Bold text-5xl' >N10,000.00</p> 
            </div>
            <div className='w-full flex justify-center items-center' >
                <div className='w-auto' >
                    <p style={{color: '#828282'}} className='font-Montserrat-Medium text-sm' >New Balance</p>
                    <p style={{color: '#03C8DB'}} className='font-Montserrat-Bold text-xl mt-2 ' >-₦40,000.00</p>
                </div> 
            </div>
            <p style={{color: '#828282'}} className='font-Montserrat-Medium mb-2 text-sm mt-12' >Charge me via</p>
            <Select placeholder='Select Payment Option' fontSize='sm' onChange={(e)=> setSelected(e.target.value)} backgroundColor='#F6F6F6' >
                <option value='card' >Card Payment</option>
                <option value='saving' >Savings account</option>
            </Select>
            <div className='mt-10' >
                {selected === 'card' ? 
                    <LinkedCards next={setAddCard} />:
                    selected === 'saving' ? 
                        <Account /> 
                :null}
            </div>
            {selected !== '' ?
                <>
                    <p style={{color: '#828282'}} className='text-xs font-Montserrat-Bold mt-12 text-center' >Enter Transaction Pin </p>
                    <div className='w-full flex items-center justify-center mt-2' >
                        <div className='w-40'>
                            <Input backgroundColor="#F6F6F6" />
                        </div>
                    </div>
                    <button onClick={()=> props.close(7)} style={{backgroundColor: '#002343', borderRadius: '2px'}}  className=' w-full mt-10 text-white font-Montserrat-Bold text-sm h-12 items-center justify-center' >PROCEED</button>
                </>
            :null}
        </div>
    )
}
