import { useState } from "react";
import Players from "@/Components/Players/Players";
import SelectedPlayers from "@/Components/SelectedPlayers/SelectedPlayers";
import CustomAlert from "@/Components/CustomAlert/CustomAlert";
import PropTypes from "prop-types";

const AvailableSelected = ({ coins, setCoins }) => {
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [showSelectedSection, setShowSelectedSection] = useState(false);
    const [alert, setAlert] = useState({ message: '', type: '', visible: false });

    const handleAddToSelectedPlayer = (player) => {
        const isPlayerAlreadySelected = selectedPlayers.some(
            (selectedPlayer) => selectedPlayer.playerId === player.playerId
        );

        if (coins < player.biddingPrice) {
            setAlert({ message: `Not enough coins to buy ${player.name}!`, type: 'error', visible: true });
            return;
        }

        if (selectedPlayers.length >= 6) {
            setAlert({ message: `You can only select a maximum of 6 players!`, type: 'error', visible: true });
            return;
        }

        if (isPlayerAlreadySelected) {
            setAlert({ message: `${player.name} has already been selected!`, type: 'error', visible: true });
        } else {
            setSelectedPlayers([...selectedPlayers, player]);
            setCoins(coins - player.biddingPrice);
            setAlert({ message: `${player.name} added to the selected players!`, type: 'success', visible: true });
        }
    };

    const handleDeletePlayer = (playerId) => {
        const updatedSelectedPlayers = selectedPlayers.filter(player => player.playerId !== playerId);
        const playerToRemove = selectedPlayers.find(player => player.playerId === playerId);

        if (playerToRemove) {
            setCoins(coins + playerToRemove.biddingPrice);
            setSelectedPlayers(updatedSelectedPlayers);
            setAlert({ message: `${playerToRemove.name} removed from selected players!`, type: 'success', visible: true });
        }
    };

    return (
        <div className="flex flex-col p-4 justify-between">
            <div className="flex items-center flex-col md:flex-row lg:flex-row gap-5 justify-between p-4 ">
                <h1 className="text-2xl text-gray-900 font-semibold ">
                    {showSelectedSection ? `Selected Players (${selectedPlayers.length}/6)` : "Available Players"}
                </h1>
                <div className="gap-1 flex">
                    <button
                        onClick={() => setShowSelectedSection(false)}
                        style={{
                            backgroundColor: !showSelectedSection ? "limegreen" : "gray",
                            color: "white",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                    >
                        Available Players
                    </button>
                    <button
                        onClick={() => setShowSelectedSection(true)}
                        style={{
                            backgroundColor: showSelectedSection ? "limegreen" : "gray",
                            color: "white",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                    >
                        Selected Players
                    </button>
                </div>
            </div>

            <div className="w-full">
                {showSelectedSection ? (
                    <SelectedPlayers
                        selectedPlayers={selectedPlayers}
                        onDeletePlayer={handleDeletePlayer}
                        onAddMore={() => setShowSelectedSection(false)}
                    />
                ) : (
                    <Players handleAddToSelectedPlayer={handleAddToSelectedPlayer} />
                )}
            </div>

            {alert.visible && (
                <CustomAlert
                    message={alert.message}
                    type={alert.type}
                    onClose={() => setAlert({ ...alert, visible: false })}
                />
            )}
        </div>

    );
};

AvailableSelected.propTypes = {
    coins: PropTypes.number.isRequired,
    setCoins: PropTypes.number.isRequired
}
export default AvailableSelected;
