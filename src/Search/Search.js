import './Search.css';
import seacrhInput from './searchInput.svg'
import logoX from "../profile/logoX.png";
import XAccount from "../profile/XAccount";
import Ranking from "./Ranking";
import {useState} from "react";
import Recent from "./Recent";
import History from "./History";
function Search() {
    const [activeTab, setActiveTab] = useState('ranking');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'ranking':
                return <Ranking/>
            case 'recent':
                return <Recent/>
            case 'history':
                return <History/>
            default:
                return null;
        }
    };
    return (
        <div className="Search">


            <div className="search-container">
                <img src={seacrhInput} alt="searchInput" id="search-icon"/>
                <input type="text" placeholder="Find friends or clubs..." id="search-input"/>
            </div>

            <div className="ranking-recent-history-container">
                <div className={`ranking-button ${activeTab === 'ranking' ? 'active' : ''}`} id="search-ranking"  onClick={() => handleTabClick('ranking')} >Ranking</div>
                <div className={`ranking-button ${activeTab === 'recent' ? 'active' : ''}`} id="search-recent"  onClick={() => handleTabClick('recent')}>Recent</div>
                <div className={`ranking-button ${activeTab === 'history' ? 'active' : ''}`} id="search-history"   onClick={() => handleTabClick('history')}>History</div>
            </div>

            {renderTabContent()}


        </div>
    );
}

export default Search;
