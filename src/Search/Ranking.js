import './Search.css';
import seacrhInput from './searchInput.svg'
import logoX from "../profile/logoX.png";
import XAccount from "../profile/XAccount";
import {Fragment} from "react";
function Ranking() {
    return (
        <Fragment>

            <div className="ranking-container">

                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].map(number => (
                <div className="friends-clubs-account">
                    <div className="friends-clubs-profile">
                        <span className="friends-clubs-number">{number}</span>
                        <img src={logoX} id="friends-clubs-logoX"/>
                        <div className="friends-clubs-name">
                            <span id="friends-clubs-name">Top Dog</span>
                            <span id="friends-clubs-username">@top_dog_on_btc</span>
                        </div>
                    </div>
                </div>

                ))}
            </div>


        </Fragment>
    );
}

export default Ranking;
