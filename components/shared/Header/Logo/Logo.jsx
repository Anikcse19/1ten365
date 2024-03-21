import Image from 'next/image'
import logo from '../../../../public/images/1ten365logo.png'


const Logo = () => {
  return (
    <div className=' w-full mx-auto m-3'>
        <Image width={300} height={300} className='w-[30%] mx-auto' src={logo} alt=''/>
    </div>
  )
}

export default Logo
