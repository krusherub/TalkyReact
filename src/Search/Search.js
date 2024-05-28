import './Search.css';
import seacrhInput from './searchInput.svg'
function Search() {
    return (
        <div className="Search">


            <div className="search-container">
                <img src={seacrhInput} alt="searchInput" id="search-icon"/>
                <input type="text" placeholder="Find friends or clubs..." id="search-input"/>
            </div>

            <div className="ranking-recent-history-container">
                <div className="ranking-button" id="search-ranking">Ranking</div>
                <div className="ranking-button" id="search-recent">Recent</div>
                <div className="ranking-button" id="search-history">History</div>
            </div>

        </div>
    );
}

export default Search;
