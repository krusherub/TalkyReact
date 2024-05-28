import searchImg from '../menu/searchImg.png'
import chatImg from '../menu/chatImg.png'
import avatar from './avatar.png'
import logoX from './logoX.png'
import '../App.css';
import './Profile.css';
import './XAccount.css';
import {useEffect} from "react";
import Footer from "../Footer/Footer";

function XAccount() {
    return (
        <div className="XAccount">
            <div className="XAccount-profile">
                <img src={logoX} id="logoX"/>
                <div className="XAccount-name">
                    <text id="XAccount-name">Top Dog</text>
                    <text id="XAccount-username">@top_dog_on_btc</text>
                </div>
            </div>
            <button id="button-unlink">Unlink</button>

        </div>
    );
}

export default XAccount;
