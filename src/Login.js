import React, { Component } from "react";    
import './App.css'    
    
class Admission extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
            studName: '',    
            emailId: '',    
            dob: '',    
            gender: 'select',    
            phoneNumber: '',    
            password: '', 
            confirm_password: '',
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const { studName, emailId, dob, gender, phoneNumber, password, confirm_password } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
        //Student name     
        if (!studName) {    
            formIsValid = false;    
            formErrors["studNameErr"] = "Name is required.";    
        }    
    
        //Email    
        if (!emailId) {    
            formIsValid = false;    
            formErrors["emailIdErr"] = "Email id is required.";    
        }    
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId))) {    
    
            formIsValid = false;    
            formErrors["emailIdErr"] = "Invalid email id.";    
        }    
    
        //DOB    
        if (!dob) {    
            formIsValid = false;    
            formErrors["dobErr"] = "Date of birth is required.";    
        }    
        else {    
            var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;    
            if (!pattern.test(dob)) {    
                formIsValid = false;    
                formErrors["dobErr"] = "Invalid date of birth";    
            }    
        }    
    
        //Gender    
        if (gender === '' || gender === "select") {    
            formIsValid = false;    
            formErrors["genderErr"] = "Select gender.";    
        }    
    
        //Phone number    
        if (!phoneNumber) {    
            formIsValid = false;    
            formErrors["phoneNumberErr"] = "Phone number is required.";    
        }    
        else {    
            var mobPattern = /^[0-9]{10}$/;    
            if (!mobPattern.test(phoneNumber)) {    
                formIsValid = false;    
                formErrors["phoneNumberErr"] = "Invalid phone number.";    
            }    
        }    
    
        //password    
        if (!password) {    
            formIsValid = false;    
            formErrors["passwordErr"] = "Set Password";    
        }    
        else {    
            var passPattern = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;    
            if (!passPattern.test(password)) {    
                formIsValid = false;    
                formErrors["passwordErr"] = "Invalid password";    
            }   
        } 
    
        //confirm_password    
        if (confirm_password === '' || confirm_password !== password) {    
            formIsValid = false;    
            formErrors["confirm_passwordErr"] = "Confirm_password";    
        }    
         
        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }    
    
   handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }    
    
    v = (e) => {    
        e.preventDefault();    
    
        if (this.handleFormValidation()) {    
            alert('You have been successfully registered.')    
            this.setState(this.initialState)    
        }    
    }    
    
    render() {    
    
        const { studNameErr, emailIdErr, dobErr, genderErr, phoneNumberErr, passwordErr, confirm_passwordErr} = this.state.formErrors;    
    
        return (    
            <div className="formDiv">    
                <h3 style={{ textAlign: "center" }} >Student Admission Form </ h3>    
                <div>    
                    <form onSubmit={this.handleSubmit}>    
                        <div>    
                            <label htmlFor="studName">Name</label>    
                            <input type="text" name="studName"    
                                value={this.state.studName}    
                                onChange={this.handleChange}    
                                placeholder="Your name.."    
                                className={studNameErr ? ' showError' : ''} />    
                            {studNameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{studNameErr}</div>    
                            }    
    
                        </div>    
                        <div>    
                            <label htmlFor="emailId">Email Id</label>    
                            <input type="text" name="emailId"    
                                value={this.state.emailId}    
                                onChange={this.handleChange}    
                                placeholder="Your email id.."    
                                className={emailIdErr ? ' showError' : ''} />    
                            {emailIdErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{emailIdErr}</div>    
                            }    
    
                        </div>    
                        <div>    
                            <label htmlFor="text">Birth Date</label>    
                            <input type="text" name="dob"    
                                value={this.state.dob}    
                                onChange={this.handleChange}    
                                placeholder="DD/MM/YYYY.."    
                                className={dobErr ? ' showError' : ''} />    
                            {dobErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{dobErr}</div>    
                            }    
                        </div>    
                        <div>    
                            <label htmlFor="gender">Gender</label>    
                            <select name="gender" onChange={this.handleChange}    
                                className={genderErr ? ' showError' : ''}    
                                value={this.state.gender} >    
                                <option value="select">--Select--</option>    
                                <option value="male">Male</option>    
                                <option value="female">Female</option>    
                                <option value="female">Other</option>    
                            </select>    
                            {genderErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>    
                            }    
                        </div>    
                        <div>    
                            <label htmlFor="phoneNumber">Phone Number</label>    
                            <input type="text" name="phoneNumber"    
                                onChange={this.handleChange}    
                                value={this.state.phoneNumber}    
                                placeholder="Your phone number.."    
                                className={phoneNumberErr ? ' showError' : ''} />    
                            {phoneNumberErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{phoneNumberErr}</div>    
                            }    
                        </div>    
                        <div>    
                            <label htmlFor="password">Password</label>    
                            <input type="text" name="password"    
                                onChange={this.handleChange}    
                                value={this.state.password}    
                                placeholder="Set Password.."    
                                className={passwordErr ? ' showError' : ''} />    
                            {passwordErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{passwordErr}</div>    
                            }    
                        </div>    
                        <div>    
                        <label htmlFor="confirm_password">Confirm Password</label>    
                            <input type="text" name="confirm_password"    
                                onChange={this.handleChange}    
                                value={this.state.confirm_password}    
                                placeholder="Confirm Password.."    
                                className={confirm_passwordErr ? ' showError' : ''} />    
                            {confirm_passwordErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{confirm_passwordErr}</div>    
                            }    
                        </div>    
                        <input type="submit" value="Submit" />    
                    </form>    
                </div>    
            </div >    
        )    
    }    
}  


export default Admission;


// import React from 'react'

// export default function Login() {

//     const handleUserInput = (e)=> {
//         const name = e.target.name;
//         const value = e.target.value;
//         this.setState({[name]: value}, 
//                       () => { this.validateField(name, value) });
//       }
//    const handleFormValidation= (fieldName, value) => {
//         let fieldValidationErrors = this.state.formErrors;
//         let emailValid = this.state.emailValid;
//         let passwordValid = this.state.passwordValid;
      
//         switch(fieldName) {
//           case 'email':
//             emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
//             fieldValidationErrors.email = emailValid ? '' : ' is invalid';
//             break;
//           case 'password':
//             passwordValid = value.length >= 6;
//             fieldValidationErrors.password = passwordValid ? '': ' is too short';
//             break;
//           default:
//             break;
//         }
//         this.setState({formErrors: fieldValidationErrors,
//                         emailValid: emailValid,
//                         passwordValid: passwordValid
//                       }, this.validateForm);
//       }
//     const  handleChange = (e) => {    
//         const { name, value } = e.target;    
//         this.setState({ [name]: value });    
//     }    
    
//     const handleSubmit = (e) => {    
//         e.preventDefault();    
    
//         if (handleFormValidation()) {    
//             alert('You have been successfully registered.')    
//             this.setState(this.initialState)    
//         }    
//     }  
//     const  validateForm= ()=> {
//         this.setState({formValid: this.state.emailValid && this.state.passwordValid});
//       }


//   return (
//     <div className='container my-3'>
//     <div className="dropdown-menu d-flex align-items-center p-3 rounded-3 shadow-lg"  id="dropdownMega">
//     <form onChange={validateForm}>
//     <h1 className="h1 mb-6 fw-normal" style={{color: "#152c5b"}}>sign in</h1>

//     <div className="form my-3" >
//      First Name: <input type="text" className="form-control" onChange={handleChange} id="floatingInput" 
//  placeholder="Write Your First Name" />
//     </div> <div className="form my-3">
//      Last Name: <input type="text" className="form-control" onChange={handleChange} id="floatingInput" 
//  placeholder="Write Your Last Name" />
//     </div>
//     <div className="form my-3">
//      Email: <input type="email" className="form-control" onChange={handleChange} id="floatingInput" 
//  placeholder="name@example.com" />
//     </div>
//     <div className="form my-3">
//      Phone No.: <input type="phone" className="form-control" onChange={handleChange} id="floatingInput" 
//  placeholder="Mobile Number" />
//     </div>
//     <div className="form my-3">
//      Password: <input type="password" className="form-control" onChange={handleChange} id="floatingPassword" placeholder="Password" />
//     </div>
//     <button className="w-100 btn btn-lg btn-primary" style={{backgroundColor: 'blue'}} type="submit">Sign in</button>
    
//   </form>
//   </div>
//   </div>
//   )
// }
