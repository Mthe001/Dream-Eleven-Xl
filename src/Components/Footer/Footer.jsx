import SubscribeCard from '../Subscribe-Card/SubscribeCard'
import './Footer.css'


const Footer = () => {
    return (

        <div className='bg-slate-900 w-full flex items-center  flex-col gap-2 lg:h-[550px] h-[900px]  md:h-[600px]  mt-40'>

            <SubscribeCard></SubscribeCard>
            <div className='flex  items-center justify-center mt-40'>

                <img className='w-[150px] mx-auto' src="/images/logo-footer.png" alt="footer iamge" />
            </div>

            <div className='flex justify-between md:flex-row lg:flex-row flex-col  lg:gap-32 md:gap-1 items-center p-5'>

                <div className='text-white flex flex-col p-5'>
                    <h3>
                        About Us
                    </h3>
                    <p className='w-52 text-gray-300'>
                        We are a passionate team dedicated to providing the best services to our customers.
                    </p>
                </div>

                <div className='text-white md:p-5 lg:p-5 '>
                    <h3>Quick Links</h3>
                    <ul className='text-gray-600'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className='flex flex-col lg:p-4 md:p-4'>
                    <h2 className='text-white'>
                        Subscribe
                    </h2>
                    <p className='text-gray-400 md:w-[100%] lg:w-[100%] w-[80%]'> Subscribe to our newsletter for the latest updates.</p>

                    <div className='flex md:flex-row lg:flex-row flex-col gap-1 p-5'>
                        <input type="text" placeholder='Enter your email' className='bg-slate-50 p-2 rounded-lg' />
                        <button className='btn-container'>Subscribe</button>
                    </div>

                </div>

            </div>
            <div className='w-full text-center'>
                <hr />
                <h3 className='text-gray-300'>@2024 Your Company All Rights Reserved.</h3>
            </div>

        </div>

    )
}

export default Footer