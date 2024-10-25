import './Header.css'

function Header({ handleAddCoin, coin }) {

    return (

        <div className='header-container lg:h-[550px] md:h-[450px] h-[400px]'>
            <div className='logo-of-banner-container'>

                <img className=' p-4 md:w-max w-[150px]  mx-auto' src="/images/banner-main.png" alt="banner-of-this website" />

            </div>
            {/* text-container */}
            <div>
                <h2 className='text-white text-center p-2 font-semibold text-l md:text-2xl  lg:text-4xl'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <h4 className='text-gray-400 text-center p-2 font-semibold text-l md:text-2xl  lg:text-3xl'>Beyond Boundaries Beyond Limits</h4>
            </div>
            {/* creadit-button func would be increase coin number */}
            <div className='mx-auto flex items-center justify-center p-4'>

                <button onClick={() => handleAddCoin(coin)} className='bg-lime-400 font-semibold text-xl text-gray-700'> Claim Free Credit</button>
            </div>


        </div>
    )
}

export default Header

