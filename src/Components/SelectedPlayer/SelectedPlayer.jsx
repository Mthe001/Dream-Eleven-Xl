import PropTypes from "prop-types";

const SelectedPlayer = ({ selectedPlayer }) => {

    const { name } = selectedPlayer;

    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

SelectedPlayer.propTypes = {
    selectedPlayer: PropTypes.object.isRequired
}
export default SelectedPlayer;