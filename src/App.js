import React from "react";
import './App.css';
import Header from './components/header/header';
import Footer from "./components/footer/footer";
import Swap from './pages/Swap/swap';

function App() {
    return (
        <div className="container">
            <Header/>
            <Swap/>
            <Footer/>
        </div>
    );
}

export default App;
