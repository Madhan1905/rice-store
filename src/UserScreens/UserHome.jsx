import React from 'react';
import { faPhone, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Styles.css';

const UserHome = () => {
    return(
        <div>
            <div className = "header">
                <div className = "contact-container">
                    <div className = "phone-container">
                        <FontAwesomeIcon icon = {faPhone} className = "header-icon"/>
                        <span>(91) 9876 543 210</span>
                    </div>
                    <div className = "mail-container">
                        <FontAwesomeIcon icon = {faEnvelope} className = "header-icon"/>
                        <span>info@thinkershut.com</span>
                    </div>
                </div>
                <div className = "login-container">
                    <FontAwesomeIcon icon = {faLock} className = "header-icon"/>
                    <span>Sign In</span>
                </div>
            </div>
        </div>
    )
}

export default UserHome