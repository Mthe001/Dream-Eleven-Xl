import PropTypes from "prop-types";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const SelectedPlayers = ({ selectedPlayers, onDeletePlayer, onAddMore }) => {
    return (
        <div>
            <h2 className="text-gray-900 font-semibold text-2xl">Selected Players: {selectedPlayers.length}</h2>
            {selectedPlayers.map(selectedPlayer => (
                <SelectedPlayer
                    key={selectedPlayer.playerId}
                    selectedPlayer={selectedPlayer}
                    onDeletePlayer={onDeletePlayer}
                />
            ))}

            <button onClick={onAddMore} className="bg-lime-300 text-gray-400 mt-5">
                Add More Player
            </button>
        </div>
    );
};

SelectedPlayers.propTypes = {
    selectedPlayers: PropTypes.array.isRequired,
    onDeletePlayer: PropTypes.func.isRequired,
    onAddMore: PropTypes.func.isRequired
};

export default SelectedPlayers;
