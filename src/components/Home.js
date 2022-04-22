import React, { Component } from 'react';
import bg from './images/img1.png'
import '../css/Styles.css'


class  Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8"> 
                        <img   className="bg-img" src={bg}></img>
                    </div>
                    <div className="col-md-4"> 
                        <br></br>
                        <br></br>
                        <br></br>
                        <h3 className='sign-up'>Sign Up</h3>
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
                            <div className='input-container'>
                                <input  className="input-field" type="password" name="password" placeholder='Confirm Password' required ></input>
                            </div>
                            <br></br>
                            <div className='button-container'>
                                <input className="rounded-pill" type="submit"></input>
                            </div>
                            <br></br>
                            <div className='parent'>
                            <div className='child'>Already a member? &nbsp;</div>
                            <div className='child'><b><a href="#"><u className="Log">LOG</u> IN</a></b></div>
                            </div>
                                                    
                        </div>
                    </div>
                </div>
            </div>
                     

                
        );
    }
}

export default Home;