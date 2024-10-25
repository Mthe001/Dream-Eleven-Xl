
import { MdSportsCricket } from "react-icons/md";
import { FaFlag } from "react-icons/fa";
import PropTypes from 'prop-types'

const Player = ({ player, handleAddToSelectedPlayer }) => {
    const { name, role, country, image, battingType, bowlingType, biddingPrice } = player;


    return (
        <div className='border-2 border-gray-300 rounded-lg p-6 m-4'>
            <div className="h-[250px]">
                <img className="h-full w-full object-cover rounded-xl" src={image} alt="player" />
            </div>

            <div className="py-2">
                <h2 className='text-xl flex items-center gap-1 font-semibold'><MdSportsCricket />{name} </h2>
                <div className="flex justify-between">
                    <h2 className="text-gray-300 flex items-center gap-2"><FaFlag />{country}</h2>
                    <h3 className="text-gray-400 font-semibold py-1 px-3 bg-slate-300 rounded-lg">{role.type}</h3>
                </div>
                <br />
                <hr />
            </div>

            <div>
                <div>
                    <h3 className="text-gray-950 text-lg font-bold">Rating</h3>
                </div>


                <div>
                    <div className="flex items-center justify-between py-2">
                        <h2 className="text-gray-600 font-semibold">{battingType}</h2>
                        <h2 className="text-gray-600 font-semibold">{bowlingType}</h2>
                    </div>

                    <div className="flex items-center justify-between">
                        {biddingPrice}
                        {/* function change would be here! */}
                        <button
                            onClick={() => handleAddToSelectedPlayer(player)}
                            className="bg-slate-50 border-2  border-gray-100 text-gray-600">Choose Player</button>
                    </div>
                </div>
            </div>



        </div>
    )
}

Player.propTypes = {
    player: PropTypes.object.isRequired,
    handleAddToSelectedPlayer: PropTypes.func.isRequired
}



export default Player