import React, { Component } from 'react';
import bg from './images/img1.png'
import '../css/Styles.css'

class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8"> 
                        <img   className="bg-img" src={bg}></img>
                    </div>
                    <div className="col-md-4" id='log-in'> 
                        <br></br>
                        <br></br>
                        <br></br>
                        <h2 className='sign-up'><b>Log In</b></h2>
                        <hr></hr> 
                        <br></br>
                        <div className="form">
                            <div className='input-container'>
                                <input   className="input-field" type="email" name="email" placeholder='Enter Email Id' required ></input>
                            </div>
                            <br></br>
                            <div className='input-container'>
                                 
                                <input  className="input-field" type="password" name="password" placeholder='Enter Password' required ></input>
                            </div>
                            <br></br>
                            
                            <br></br>
                            <div className='button-container'>
                                <input className="rounded-pill" id="log-in-submit" type="submit"></input>
                            </div>
                            <br></br>
                            <div className='parent'>
                            <div className='child'>Not a member yet? &nbsp;</div>
                            <div className='child'><b><a href="#"><u className="Log">SIGN</u> UP</a></b></div>
                            </div>
                                                    
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;