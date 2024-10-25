import './SubscribeCard.css'

function SubscribeCard() {
    return (
        <div className='subscribe-container p-4 border-2 border-red-400 w-[60%]'>

            <div className='md:p-4 lg:p-4 p-1 m-1 md:m-4  lg:m-4 text-start lg:text-center md:text-center '>
                <h2 className='text-gray-950 font-semibold  lg:text-4xl md:text-3xl text-l'>Subscribe to our Newsletter</h2>
                <h3 className='text-gray-950 font-semibold lg:text-2xl md:text-xl text-l'>Get the latest updates and news right in your inbox!</h3>
            </div>
            <div className='flex flex-col md:flex-row lg:flex-row lg:items-center lg:justify-center gap-2  md:items-center md:justify-center p-4'>
                <input className='text-gray-400 bg-slate-100  font-semibold border-2 px-5 lg:px-28 md:px-28 py-3 border-gray-200 rounded-xl' type="text" placeholder='Enter your email' />
                <button className='btn-container text-slate-800 py-3'>Subscribe</button>
            </div>
        </div>
    )
}

export default SubscribeCard