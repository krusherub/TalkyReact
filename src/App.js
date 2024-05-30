import searchImg from './menu/searchImg.png'
import chatImg from './menu/chatImg.png'
import avatar from './profile/avatar.png'
import logo from './profile/logoGroup.png'
import './App.css';
import './OtherProfile/OtherProfile.css';
import './OtherProfile/TGAccount.css';
import {Fragment, useEffect, useState} from "react";
import Footer from "./Footer/Footer.js";
import { ReactComponent as AddressSvg } from './profile/address.svg';
import logoX from "./profile/logoX.png";
import OtherProfile from "./OtherProfile/OtherProfile.js";
import Profile from "./profile/Profile.js";
import Search from "./Search/Search";
import Chat from "./Chat/Chat";
const tg = window.Telegram.WebApp;
function App() {
    useEffect(() => {
        tg.ready()
    }, []);

    const [activeWindow, setActiveWindow] = useState('profile');

    const renderActiveWindow = () => {
        switch (activeWindow) {
            case 'profile':
                return <Profile />;
            case 'chat':
                return <Chat />;
            case 'search':
                return <Search />;
            default:
                return <Profile />;
        }
    };

  return (
      <div className="App">

          {renderActiveWindow()}



          {/*<Search/>*/}
          {/*<Profile/>*/}
          <Footer activeWindow={activeWindow} setActiveWindow={setActiveWindow} />
      </div>
  );
}

export default App;
