import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";

const tg = window.Telegram.WebApp;
function App() {
    useEffect(() => {
        tg.ready()
    }, []);
  return (
    <div className="App">
        <header className="App-header">
            <script src="https://telegram.org/js/telegram-web-app.js"></script>


        </header>
    </div>
  );
}

export default App;
