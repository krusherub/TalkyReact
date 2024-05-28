import avatar from './avatar.png'
import logo from './logoGroup.png'
import '../App.css';
import './Profile.css';
import {Fragment, useEffect} from "react";
import XAccount from "./XAccount.js";
import { ReactComponent as AddressSvg } from './address.svg';
import { ReactComponent as XSvg } from './X.svg';
function Profile() {

    return (
        <Fragment>
            <div className="user-info-container">
                <img src={avatar} id="profile-image"/>
                <span id="name"> spaisyxa </span>
                <span id="username">@sdsd121212</span>
                <div className="address-container">
                    <AddressSvg/>
                    <span id="address">Ffd2f...dsfE</span>
                </div>
            </div>

            <div className="private-group-container">
                <span id="group-text">Private group</span>
                <div className="private-group">
                    <img src={logo} id="private-group-logo"/>
                    <span id="private-group-name">Degens</span>
                    <a id="add-group" href="#">Add</a>
                </div>
            </div>

            <div className="x-accounts-container">
                <XAccount/>
                <XAccount/>
            </div>
            <div className="X-add-account-container">
                <span id="text-add-account"> Add account</span>
                <XSvg/>
            </div>

        </Fragment>
    );
}

export default Profile;
