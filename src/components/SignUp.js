import React, { Component } from 'react';
import bg from '../images/img1.png'
import '../css/Styles.css'
import {Link} from 'react-router-dom'
import data from './Constants'

window.Data=[
    {
        email:'sena@gmail.com',
        password:'Sena@123'
    },
    {
        email:'mohith@gmail.com',
        password:'mohith@123'
    }
]
class SignUp extends Component {
    constructor()
    {
        super();
        this.state=
        {
            email:'',
            password:'',
            confirmPassword:'',
            formErrors:{email:'',password:'',confirmPassword:''},
            emailValid:false,
            passwordValid:false,
            formValid:false,
            message:''
        }
        
    }
    HandleChange=(event)=>
    {
        
        this.setState(
            {
                [event.target.name]:event.target.value
            },()=>{this.validateField(event.target.name,event.target.value)});
        event.preventDefault()
        
    }
    HandleSubmit=(event)=>
    {
        if(this.state.formErrors.email=='' &&this.state.formErrors.password==''&& this.state.formErrors.confirmPassword==''){
        this.setState(
            {
            message:'Successfully Signed Up .You can Login Now :)'
            }
        );
        }
        event.preventDefault();
        window.Data.push({'email':this.state.email,'password':this.state.password})
        console.log(window.Data);
        event.preventDefault();
        
    }
    validateField=(fieldName,value)=>
    {
            let fieldValidationErrors = this.state.formErrors;
            let emailValid = this.state.emailValid;
            let passwordValid = this.state.passwordValid;
            let confirmPassword =this.state.confirmPassword;
            switch(fieldName)
            {
                case 'email':
                    if(this.state.email=='')
                    fieldValidationErrors.email='Email should not be empty!!';
                    else{
                    emailValid=value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                    fieldValidationErrors.email = emailValid ? '' : ' Email format is invalid!!';
                    }
                    break;
                case 'password':
                    if(this.state.password=='')
                    fieldValidationErrors.password='Password should not be empty!!'
                    else{
                    passwordValid = value.length >= 6;
                    fieldValidationErrors.password = passwordValid ? '': 'Password  is too short!!';
                    }
                    break;
                case 'confirmPassword':
                    if(this.state.confirmPassword=='')
                    fieldValidationErrors.confirmPassword='Confirm Password should not be empty!!'
                    else{
                    confirmPassword = (this.state.confirmPassword===this.state.password);
                    fieldValidationErrors.confirmPassword = confirmPassword ? '': 'Confirm Password not matched!!';
                    }
                default:
                    break;
            }
            this.setState(
                {formErrors: fieldValidationErrors,
                emailValid: emailValid,
                passwordValid: passwordValid
              }, this.validateForm);
        }
        validateForm() {
            this.setState({formValid: this.state.emailValid && this.state.passwordValid});
            
          }
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
                        <h2 className='sign-up'><b>Sign Up</b></h2>
                        <hr></hr> 
                        <br></br>
                        <div className='success-message'>{this.state.message}</div>
                        <br></br>
                        <form className="form" onSubmit={this.HandleSubmit}>
                            <div className='input-container'>
                                <input type="text" className="inputText" onChange={this.HandleChange}  name="email" value={this.state.email} required/>
                                <span className="floating-label">Enter Email Id</span>
                                <p className='Error'>{this.state.formErrors.email}</p>
                            </div>
                            <br></br>
                            <div className='input-container'>
                                <input type="password" className="inputText" onChange={this.HandleChange} name="password"  value={this.state.password} required/>
                                <span className="floating-label">Enter password</span>
                                <p className='Error'>{this.state.formErrors.password}</p>
                            </div>
                            <br></br>
                            <div className='input-container'>
                                <input type="password" className="inputText"onChange={this.HandleChange}  name="confirmPassword"   value={this.state.confirmPassword} required/>
                                <span className="floating-label">Confirm Password</span>
                                <p className='Error'>{this.state.formErrors.confirmPassword}</p>
                            </div>
                            
                            <br></br>
                            <div className='button-container'>
                                <input className="rounded-pill" type="submit"  ></input>
                            </div>
                            <br></br>
                            <div className='parent'>
                                <div className='child'>Already a member? &nbsp;</div>
                                <div className='child'>
                                    <Link to='/Login'><b><u className="Log">LOG</u> </b>IN</Link>
                                </div>
                            </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
        
        );
    }
}
export default SignUp;