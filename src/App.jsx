
import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'

import AvailableSelected from './AvailablePlayers/AvailableSelected';
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers';

function App() {

  const handleAddCoin = () => {

    console.log('here is my coin')
  }

  return (
    <main>
      <div className='w-10/12 mx-auto'>

        <Navbar></Navbar>
        <Header handleAddCoin={handleAddCoin}></Header>
        <AvailableSelected></AvailableSelected>


      </div>


    </main>
  )
}

export default App
