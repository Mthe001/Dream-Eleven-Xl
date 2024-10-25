import PropTypes from "prop-types"
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer"

const SelectedPlayers = ({ selectedPlayers }) => {
    return (
        <div>
            <h2 className="text-gray-900 font-semibold text-2xl">Selected Players:{selectedPlayers.length} </h2>
            {
                selectedPlayers.map(selectedPlayer => <SelectedPlayer key={selectedPlayer.playerId} selectedPlayer={selectedPlayer}></SelectedPlayer>)
            }
        </div>
    )
}

SelectedPlayers.propTypes = {
    selectedPlayers: PropTypes.array.isRequired
}
export default SelectedPlayers