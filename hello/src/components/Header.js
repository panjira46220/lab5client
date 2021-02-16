import React from 'react';
const w3_close=() => {mySideder}

export const Header = () => {
    return(
    <div>
        <div className="w3-container w3-teal">
            <header>
                <span className="w3-button w3-xxlarge w3-white w3-right" onclick="w3_open()"><i className="fa fa-bars"></i></span>
                <h1><b>Kuroshigionna</b></h1>
            </header>
        </div>
        <div className="w3-sidebar w3-black w3-animate-top w3-xxlarge" id="mySidebar">
            <a href="javascript:void(0)" onclick="w3_close()" className="w3-button w3-black w3-xxlarge w3-padding w3-display-topright" >
                <i className="fa fa-remove"></i>
            </a>
            <div className="w3-bar-block w3-center">
                <a href="#" className="w3-bar-item w3-button w3-text-grey w3-hover-black">About</a>
                <a href="#" className="w3-bar-item w3-button w3-text-grey w3-hover-black">Photos</a>
                <a href="#" className="w3-bar-item w3-button w3-text-grey w3-hover-black">Shop</a>
                <a href="#" className="w3-bar-item w3-button w3-text-grey w3-hover-black">Contact</a>
            </div>
        </div>
    </div>
    );
}
export default Header