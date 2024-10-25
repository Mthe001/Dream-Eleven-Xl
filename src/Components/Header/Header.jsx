// Header.js
import './Header.css';
import PropTypes from 'prop-types';
function Header({ handleAddCoin }) {
    return (
        <div className='header-container lg:h-[550px] md:h-[450px] h-[400px]'>
            <div className='logo-of-banner-container'>
                <img className='p-4 md:w-max w-[150px] mx-auto' src="/images/banner-main.png" alt="banner-of-this website" />
            </div>
            <div>
                <h2 className='text-white text-center p-2 font-semibold text-l md:text-2xl lg:text-4xl'>
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h2>
                <h4 className='text-gray-400 text-center p-2 font-semibold text-l md:text-2xl lg:text-3xl'>
                    Beyond Boundaries Beyond Limits
                </h4>
            </div>
            <div className='mx-auto flex items-center justify-center p-4'>
                <button
                    onClick={handleAddCoin}
                    className='bg-lime-400 font-semibold text-xl text-gray-700 p-3 rounded-lg transition-all hover:bg-lime-500 hover:text-gray-800'
                >
                    Claim Free Credit
                </button>
            </div>
        </div>
    );
}

Header.propTypes = {
    handleAddCoin: PropTypes.func.isRequired
}
export default Header;
