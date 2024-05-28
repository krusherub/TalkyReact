import searchImg from './menu/searchImg.png'
import chatImg from './menu/chatImg.png'
import avatar from './profile/avatar.png'
import logo from './profile/logoGroup.png'
import './App.css';
import './OtherProfile/OtherProfile.css';
import './OtherProfile/TGAccount.css';
import {Fragment, useEffect} from "react";
import Footer from "./Footer/Footer.js";
import { ReactComponent as AddressSvg } from './profile/address.svg';
import logoX from "./profile/logoX.png";
import OtherProfile from "./OtherProfile/OtherProfile.js";
import Profile from "./profile/Profile.js";
import Search from "./Search/Search";
const tg = window.Telegram.WebApp;
function App() {
    useEffect(() => {
        tg.ready()
    }, []);
  return (
      <div className="App">


          <Search/>
          {/*<Profile/>*/}
          <Footer/>
      </div>
  );
}

export default App;
