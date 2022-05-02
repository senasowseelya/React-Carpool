import React, { Component } from 'react';
import bg from '../images/img1.png'
import '../css/Styles.css'
import {Link} from 'react-router-dom'

 

class Login extends Component {
    constructor(props)
    {
        super(props);
        this.state=
        {
            message:''
        }
        
       
    }
    HandleChange=(event)=>
    {
        this.setState(
        {
        [event.target.name]:event.target.value
        }
        )
        event.preventDefault()

    }
    HandleSubmit=(event)=>
    {
        
        
        let flag=0;
        event.preventDefault();
        Object.entries(this.props.Data).map(([key,value]) =>{
            
            if((value.email===this.state.email)&&(value.password===this.state.password))
            {
                flag=1
            }
        })
        
        if(flag==1)
        {
            this.setState(
                {
                message:'Login Succesful'
                }

            )
        }
        else
        {
            this.setState(
                {
                message:'Invalid Credentials'
                }

            )

        }
        event.preventDefault();
    }
   
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
                        <div className='success-message'>{this.state.message}</div>
                        <br></br>
                        
                        <h2 className='sign-up'><b>Log In</b></h2>
                        <hr></hr> 
                        <br></br>
                        
                        <br></br>
                        <form className="form" onSubmit={this.HandleSubmit}>
                            <div className='input-container'>
                                <input type="text" className="inputText"  onChange={this.HandleChange} name="email" required/>
                                <span className="floating-label">Enter Email Id</span>
                            </div>
                            <br></br>
                            <div className='input-container'>
                                <input type="password" className="inputText"  onChange={this.HandleChange} name="password" required/>
                                <span className="floating-label">Enter password</span>
                                

                            </div>
                            <br></br>
                            <div className='button-container'>
                                <input className="rounded-pill" id="log-in-submit" type="submit"></input>
                            </div>
                            <br></br>
                            <div className='parent'>
                                <div className='child'>Not a member yet? &nbsp;</div>
                                <div className='child'>
                                    <Link to='/'><b><u className="Log">SIGN</u> UP</b></Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;