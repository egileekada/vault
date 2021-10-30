import React from 'react' 
import ReactCssTransitionGroup from 'react-transition-group'

export default function Carousel() { 

    const [count, setCount] = React.useState(0)

    const arr = [
        {
            img: '/assets/images/savings.png', 
            header: 'Invest your cash for the future',
            body: 'Get to invest your cash in our investment platforms of your choice. 95% risk free.',
        },
        {
            img: '/assets/images/businessman.png', 
            header: 'Your satisfaction our, greatest priority',
            body: 'Our packages and everything we do here at myvault are mainly too ensure you’re statisfied. Enjoy!',
        },
        {
            img: '/assets/images/financial.png', 
            header: 'Grow your finances without worries',
            body: 'Your finance is safe and secured and our proceess are as transaparent as possible. we’ve got you covered. cheers!'
        }, 
    ]; 

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 0.5
          }
        }
      }      

    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (count === arr.length - 1) {
                
                setCount(0)
                
                return;
            } else { 
                setCount(count+1) 
            }
        }, 3000);

        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
    }); 
    
    return (
        <div style={{backgroundColor: '#117ACA'}} className='w-full h-screen relative' >
            <img style={{width :'300px'}} className='absolute top-0 right-0 ' src='/assets/images/top.png' alt='login'  />
            <img style={{width :'430px'}} className=' absolute z-10 bottom-0 left-0' src='/assets/images/bottom.png' alt='login'  />
            <div className='w-full h-full flex flex-col justify-center z-20 items-center' >
                <div style={{ height: '300px'}} className='' >
                    <img className='h-full' src={arr[count].img} />
                </div>

                <p className='z-30 w-80 text-sm text-center mt-4 font-Inter-Bold text-white' >{arr[count].header}</p>
                <p style={{width: '350px'}} className='z-30 text-xs text-center mt-2 font-Inter-Regular text-white' >{arr[count].body}</p>
            
                <div className='w-full mt-14 flex justify-center items-center' >
                    {arr.map((item:any, index: any) => {
                        return(
                            <div key={item} style={{width: '6px', height: '6px'}} className={index === count ? 'z-30 rounded-full bg-white mx-1' : 'z-30 rounded-full bg-inactive mx-1' } /> 
                        )
                    })}
                </div>
            </div>

        </div>
    )
}
