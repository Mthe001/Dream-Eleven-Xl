import { IoMenuSharp } from "react-icons/io5";

// coin function added should be there
const Navbar = () => {
    return (

        <div className="flex justify-between p-4">
            <div>
                <img className="w-14" src="/images/logo.png" alt="logo of this website" />
            </div>
            <ul className="flex items-center justify-center gap-4 text-gray-500 font-semibold">
                <div className="md:hidden text-2xl">
                    <IoMenuSharp />
                </div>
                <div className="max-[768px]:hidden flex justify-center font-bold items-center gap-3 cursor-pointer">
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </div>

                {/* coin function */}
                <div>
                    <button className="font-bold text-xl bg-gray-100 border-2 border-gray-600">0 Coin</button>
                </div>
            </ul>


        </div>
    );
};

export default Navbar;