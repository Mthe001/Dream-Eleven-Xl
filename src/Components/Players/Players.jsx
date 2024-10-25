import { useEffect, useState } from "react";
import Player from "../Player/Player";
import PropTypes from "prop-types";


const Players = ({ handleAddToSelectedPlayer }) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
            .then(err => console.log(err))
    }, [])

    return (
        <div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {
                    players.map(player => <Player
                        player={player}
                        key={player.playerId}
                        handleAddToSelectedPlayer={handleAddToSelectedPlayer}

                    ></Player>)

                }
            </div>


        </div>
    );
};

Players.propTypes = {
    handleAddToSelectedPlayer: PropTypes.func.isRequired
};

export default Players;