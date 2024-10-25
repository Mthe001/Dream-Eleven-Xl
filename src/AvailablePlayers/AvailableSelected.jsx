import Players from "@/Components/Players/Players";
import SelectedPlayers from "@/Components/SelectedPlayers/SelectedPlayers";
import { useState } from "react";

const AvailableSelected = () => {

    const [selectedPlayers, setselectedPlayers] = useState([]);


    const handleAddToSelectedPlayer = (player) => {
        const newSelectedPlayers = [...selectedPlayers, player]
        setselectedPlayers(newSelectedPlayers);
    }


    const [showSelectedSection, setShowSelectedSection] = useState(false);


    const showAvailableSection = () => {
        setShowSelectedSection(false);
    };


    const showSelectedSectionFunction = () => {
        setShowSelectedSection(true);
    };

    return (
        <div className="flex flex-col p-4 justify-between">

            <div className="flex items-center flex-col md:flex-row lg:flex-row gap-5 justify-between p-4 ">

                <h1 className="text-2xl text-gray-900 font-semibold ">
                    {showSelectedSection ? "Player Selection" : "Available Players"}
                </h1>

                <div className="gap-1 flex">

                    {/* Button to show Available Players */}
                    <button
                        onClick={showAvailableSection}
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

                    {/* Button to show Selected Players */}
                    <button
                        onClick={showSelectedSectionFunction}
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


            {/* Conditionally rendering the Players component or Available Section */}
            <div className="w-full">
                {showSelectedSection ? (
                    <div >

                        {/* Render the Players component for selected players */}
                        <SelectedPlayers selectedPlayers={selectedPlayers}></SelectedPlayers>

                    </div>
                ) : (
                    <div>
                        <h2 className="text-xl font-bold mb-2 ml-4">Available Player Card:</h2>
                        {/* players section */}
                        <Players handleAddToSelectedPlayer={handleAddToSelectedPlayer}></Players>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AvailableSelected;
