import searchImg from './menu/searchImg.png'
import chatImg from './menu/chatImg.png'
import avatar from './profile/avatar.png'
import logo from './profile/logoGroup.png'
import './App.css';
import './Profile.css';
import {useEffect} from "react";
import Footer from "./Footer";
import XAccount from "./XAccount";

const tg = window.Telegram.WebApp;
function App() {
    useEffect(() => {
        tg.ready()
    }, []);
  return (
    <div className="App">

        <div className="user-info-container">
            <img src={avatar}  id="profile-image"/>
            <text id="name"> spaisyxa </text>
            <text id="username">@sdsd121212</text>
            <div className="address-container">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M15.5333 11.2917C15.1833 11.6333 14.9833 12.125 15.0333 12.65C15.1083 13.55 15.9333 14.2083 16.8333 14.2083H18.4167V15.2C18.4167 16.925 17.0083 18.3333 15.2833 18.3333H5.71666C3.99166 18.3333 2.58333 16.925 2.58333 15.2V9.59168C2.58333 7.86669 3.99166 6.45834 5.71666 6.45834H15.2833C17.0083 6.45834 18.4167 7.86669 18.4167 9.59168V10.7917H16.7333C16.2667 10.7917 15.8417 10.975 15.5333 11.2917Z" fill="#8A8882"/>
                    <path d="M12.875 3.29168V6.45833H5.71666C3.99166 6.45833 2.58333 7.86668 2.58333 9.59168V6.53336C2.58333 5.54169 3.19166 4.65832 4.11666 4.30832L10.7333 1.80832C11.7667 1.42499 12.875 2.18334 12.875 3.29168Z" fill="#8A8882"/>
                    <path d="M19.3 11.6417V13.3584C19.3 13.8167 18.9333 14.1917 18.4667 14.2083H16.8333C15.9333 14.2083 15.1083 13.55 15.0333 12.65C14.9833 12.125 15.1833 11.6333 15.5333 11.2917C15.8417 10.975 16.2667 10.7917 16.7333 10.7917H18.4667C18.9333 10.8084 19.3 11.1833 19.3 11.6417Z" fill="#8A8882"/>
                    <path d="M12.1667 10.625H6.33333C5.99166 10.625 5.70833 10.3417 5.70833 10C5.70833 9.65833 5.99166 9.375 6.33333 9.375H12.1667C12.5083 9.375 12.7917 9.65833 12.7917 10C12.7917 10.3417 12.5083 10.625 12.1667 10.625Z" fill="#8A8882"/>
                </svg>
                <text id="address">Ffd2f...dsfE</text>
            </div>
        </div>

        <div className="private-group-container">
            <text id="group-text">Private group</text>
            <div className="private-group">
                <img src={logo} id="private-group-logo"/>
                <text id="private-group-name">Degens</text>
                <a id="add-group" href="#">Add</a>
            </div>
        </div>

        <div className="x-accounts-container">
            <XAccount/>
            <XAccount/>
        </div>
        <div className="X-add-account-container">
            <text id="text-add-account"> Add account</text>
            <svg id="x-svg" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.24156 11.1577L0 0.916687H6.5279L11.6153 7.24636L17.0505 0.945186H20.6457L13.3537 9.40913L22 20.1667H15.4916L9.98292 13.3215L4.10186 20.1477H0.487157L8.24156 11.1577ZM16.4402 18.2692L4.00269 2.81417H5.57852L18.0004 18.2692H16.4402Z" fill="#8A8882"/>
            </svg>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
