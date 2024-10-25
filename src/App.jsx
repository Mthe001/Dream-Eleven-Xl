import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import AvailableSelected from './AvailablePlayers/AvailableSelected';
import Footer from './Components/Footer/Footer';

function App() {
  const [coins, setCoins] = useState(0);
  const [alert, setAlert] = useState({ message: '', visible: false });

  const handleAddCoin = () => {
    setCoins(prevCoins => prevCoins + 600000);
    setAlert({ message: '600000 coins added to your account!', visible: true });
  };

  const handleAlertClose = () => {
    setAlert({ message: '', visible: false });
  };

  return (
    <main className="flex flex-col min-h-screen">
      <div className='w-10/12 mx-auto'>
        <Navbar coins={coins} />
        <Header handleAddCoin={handleAddCoin} />



        <AvailableSelected coins={coins} setCoins={setCoins} />

        <Footer />

        {/* Alert Display */}
        {alert.visible && (
          <div className="fixed top-16 left-10 bg-green-500 text-white p-3 rounded-lg shadow-lg flex items-center">
            <span>{alert.message}</span>
            <button onClick={handleAlertClose} className="ml-3 font-bold">X</button>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
