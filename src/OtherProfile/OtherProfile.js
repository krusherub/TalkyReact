import searchImg from '../menu/searchImg.png'
import chatImg from '../menu/chatImg.png'
import avatar from '../profile/avatar.png'
import logo from '../profile/logoGroup.png'
import '../App.css';
import './OtherProfile.css';
import './TGAccount.css';
import {Fragment, useEffect} from "react";
import Footer from "../Footer/Footer";
import { ReactComponent as AddressSvg } from '../profile/address.svg';
import logoX from "../profile/logoX.png";
const tg = window.Telegram.WebApp;
function OtherProfile() {
    return (
        <Fragment>
            <div className="other-user-info-container">
                <img src={avatar} id="other-profile-image"/>
                <div className="other-info-container">
                    <span id="other-name"> spaisyxa </span>
                    <span id="other-username">@sdsd121212</span>
                    <div className="other-address-container">
                        <AddressSvg/>
                        <span id="other-address">Ffd2f...dsfE</span>
                    </div>
                </div>
            </div>

            <div className="buy-container">
                <div className="price-container">
                    <svg id="image-ton" width="32" height="32" viewBox="0 0 32 32" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="16" fill="#F6F6F6"/>
                        <path
                            d="M15.9989 5.71429L15.8574 6.18309V19.7854L15.9989 19.9231L22.4722 16.1909L15.9989 5.71429Z"
                            fill="#343434"/>
                        <path d="M15.9973 5.71429L9.5238 16.1909L15.9973 19.9231V13.3209V5.71429Z" fill="#8C8C8C"/>
                        <path
                            d="M15.9989 21.1185L15.9191 21.2133V26.0587L15.9989 26.2857L22.4762 17.3882L15.9989 21.1185Z"
                            fill="#3C3C3B"/>
                        <path d="M15.9973 26.2857V21.1185L9.5238 17.3882L15.9973 26.2857Z" fill="#8C8C8C"/>
                        <path d="M15.9964 19.9229L22.4698 16.1907L15.9964 13.3207V19.9229Z" fill="#141414"/>
                        <path d="M9.5238 16.1907L15.9973 19.9229V13.3207L9.5238 16.1907Z" fill="#393939"/>
                    </svg>
                    <span id="price">0.007</span>
                </div>
                <button id="buy-sell">Buy/Sell</button>
            </div>

            <div className="info-container">
                <div className="holders-container">
                    <span>Holders</span>
                    <span>10</span>
                </div>
                <div className="holding-container">
                    <span>Holding</span>
                    <span>5</span>
                </div>
            </div>
        </Fragment>

    );
}

export default OtherProfile;
