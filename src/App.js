

import logo from "./imgs/Unknown.png";
import React from 'react';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import './App.css';
import index from './Components/Naslovna.js';
import login from './Components/Login.js';
import Cart from './Components/Cart.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Shop from './Components/Shop.js';
import Songs from './Components/Songs.js';
import Bio from './Components/Bio.js';
import bio from './imgs/biography.png';
import shop from './imgs/shop.png';
import song from './imgs/song.png';
import log from './imgs/login.png';


function App() {
  return (
    <div className="App">
      <Header>
      </Header>
      <Router>
      <div className="navigacija">
        
        <Link to="/"><img src={logo} className="logo"/></Link>
        <div className="menubar">
                <table>
                <tr>
                  <Link to='/login'>
                    <td className="dd">
                          <img src={log} className="linknav" alt="login"/><b>LXGIN</b>
                    </td>
                    </Link>
                  <Link to='/biography'>
                    <td className="dd">
                          <img src={bio} className="linknav" alt="biography"/><b>BIXGRAPHY</b>
                    </td>
                    </Link>
                    <Link to='/shop'>
                    <td className="dd">
                          <img src={shop} className="linknav" alt="merch shop"/><b>MERCH</b>
                    </td>
                    </Link>
                    <Link to='/songs'>
                    <td className="dd">
                          <img src={song} className="linknav" alt="songs and albums"/><b>SXNGS</b>
                    </td>
                    </Link>
                </tr>
            </table>
        </div>
    </div>
            <div className="izbor">
            <Route exact path="/" component={index}></Route>
            <Route path="/login" component={login}></Route>
            <Route path="/biography" component={Bio}></Route>
            <Route path="/shop" component={Shop}></Route>
            <Route path="/songs"  component={Songs}></Route>
            </div>
        </Router>
    <Footer></Footer>
    
    
    
</div>



  );
}

export default App;
