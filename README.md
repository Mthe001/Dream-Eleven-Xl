# 🏏 BPL-Dream-11

Welcome to **Cricket Fantasy Team Builder**! This project allows users to assemble their dream 11 cricket team, manage their budget with virtual coins, and subscribe for the latest updates about cricket matches. The app is intuitive, responsive, and built with modern web technologies to enhance the user experience. 


---

## 🎯 Features

- **Header & Navbar**: Displays the app title, and user coins, and provides navigation.
- **Player Selection**: Users can choose players based on their budget (coins). Each player has specific stats, price, and details.
- **Coin Management**: Users can earn 600,000 coins for free and use them to select players for their team.
- **Alert System**: Receive alerts when you claim coins or when players are selected.
- **Subscribe Card**: Stay updated by subscribing to the newsletter.
- **Footer**: Useful links and info at the bottom of the page.

## 💻 Technologies Used

- **React.js**: Core framework used to build the interactive UI.
- **Tailwind CSS**: For fast and responsive styling.
- **React Icons**: Used for adding icons to buttons, headers, and other UI components.
- **Custom Hooks**: Used for managing the state of player selection and coin balance.
- **JSON Fetching**: Players data is fetched dynamically from a JSON file.
- **CSS Animations**: To create interactive elements like alert popups.
- **Responsive Design**: Works perfectly on all device sizes, from mobile to desktop.

## 📂 Project Structure

```bash
.
├── public/
│   ├── images/               # Static images for the app
│   └── index.html            # Main HTML file
├── src/
│   ├── Components/           # Reusable components
│   │   ├── Header/           # Header section with Claim Coins
│   │   ├── Navbar/           # Navigation bar with coins display
│   │   ├── AvailablePlayers/  # Player selection and coins management
│   │   ├── Subscribe-Card/   # Subscription form for newsletter
│   │   └── Footer/           # Footer section with useful links
│   ├── App.js                # Main App Component
│   ├── App.css               # Global styling
│   └── index.js              # Entry point for the app
├── players.json              # Data for the available players
├── README.md                 # This readme file
└── package.json              # Project dependencies and scripts

 
- **Important--
- **Onething-made-mistake**:Available players component are outside of components folder ! 
- **For notice-later**: as im new that's why i can't change the path again..