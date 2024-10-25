import PropTypes from "prop-types";
import { FaDeleteLeft } from "react-icons/fa6";

const SelectedPlayer = ({ selectedPlayer, onDeletePlayer }) => {
    const { name, role, image, playerId } = selectedPlayer;

    return (
        <div className="border-2 border-gray-300 rounded-xl p-4 my-6 flex items-center justify-between">
            <div className="flex items-center flex-col justify-center gap-2 lg:flex-row md:flex-row">
                <img className="rounded-xl w-[100px] h-[70px]" src={image} alt={name} />

                <div>
                    <h2 className="text-gray-900 font-semibold text-xl md:text-2xl lg:text-3xl">{name}</h2>
                    <h3 className="text-gray-500 font-semibold">{role.type} </h3>
                </div>
            </div>

            <div className="text-3xl text-red-500 cursor-pointer" onClick={() => onDeletePlayer(playerId)}>
                <FaDeleteLeft />
            </div>
        </div>
    );
};

SelectedPlayer.propTypes = {
    selectedPlayer: PropTypes.object.isRequired,
    onDeletePlayer: PropTypes.func.isRequired
};

export default SelectedPlayer;
