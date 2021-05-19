import "../App.css";
import React, { Component } from 'react';

export class Login extends Component{
    state = {
        name:"",
        surname:"",
        email:"",
        password:"",
    }
    onSubmit=e=>{e.preventDefault(); document.getElementById("poruka").innerHTML="Welcxme "+this.state.name+" "+this.state.surname+"! Yxu are lxgged in from "+this.state.email;window.alert("I hacked you lol. Your password is: "+this.state.password );}
    render(){
        return(
            <div className="Form">
                <h1 className="naslovi">LogIn </h1>
                <form onSubmit>
                    <input placeholder= 'Name:' value={this.state.name} onChange={e=>this.setState({name: e.target.value})} className="polje"/>
                    <br/>
                    <input placeholder= 'Surname: ' value={this.state.surname} onChange={e=>this.setState({surname: e.target.value})} className="polje"/>
                    <br/>
                    <input placeholder= 'E-mail:' value={this.state.email} onChange={e=>this.setState({email: e.target.value})} className="polje"/>
                    <br/>
                    <input type="password" placeholder= 'Password:' value={this.state.password} onChange={e=>this.setState({password: e.target.value})} className="polje"/>
                    <br/>
                    <button onClick = {e=>this.onSubmit(e)} className="botun">Sign in</button>
                </form>
                <p id="poruka">  </p>
            </div>
        );
    }
}
export default Login;