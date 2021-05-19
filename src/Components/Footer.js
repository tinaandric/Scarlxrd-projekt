import "../App.css";
import twitter from '../imgs/twitter.png';
import sc from '../imgs/soundcloud.png';
import apple from "../imgs/apple.png";
import facebook from "../imgs/facebook.png";
import ig from '../imgs/instagram.png';
import spotify from '../imgs/spotify.png';

function Footer(){
    return(
        <div className="social">
            
        <a href="https://www.instagram.com/scarlxrd/"><img src={ig} className="icons"/></a>
        <a href="https://twitter.com/scarlxrd"><img src={twitter} className="icons"/></a>
        <a href="https://open.spotify.com/artist/6rYogEVj60BCIsLukpAnwr"><img src={spotify} className="icons"/></a>
        <a href="https://soundcloud.com/scarlxrd"><img src={sc} className="soundcloud"/></a>
        <a href="https://www.facebook.com/scarlxrd"><img src={facebook} className="icons"/></a>
        <a href="https://itunes.apple.com/gb/artist/scarlxrd/1123771392"><img src={apple} className="icons"/></a>
        <br/>Copyright © 2021. Tina Andric All Rights Reserved
        </div>
    );
}
export default Footer;