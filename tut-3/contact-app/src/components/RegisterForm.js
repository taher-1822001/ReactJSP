import React from 'react';
import "./App.css";
import LoginForm from './LoginForm';
class RegisterForm extends React.Component{
    constructor(props)
    {
        super(props);

        this.state = {
            LoginFormState:false,
            RegisterFormState:true,
        }
    }
    LoginFormSateFunction = () =>{
        
            if(this.state.LoginFormState===false, this.state.RegisterFormState===true)
            {
                this.setState({LoginFormState:true, RegisterFormState:false})
            }
        
    }
    render()
    {
        const deviceHeight = window.innerHeight;
        const deviceWidth = window.deviceWidth;
        const divStyle = {
            overflowY: 'scroll',
            maxHeight: deviceHeight > 680 ? '700px' : '382px', // Set maxHeight based on the condition
            position: 'relative',
        };
        if(this.state.RegisterFormState===true){
            return(
                <>
                <div className='container align-items-center mt-5  register-form' style={divStyle}>
                <h2 className="text-center">Registration Form</h2>
                <form>
                    <div className="form-group row justify-content-center">
                        <hr className='mt-2 mb-2'/>
                        <div className='col-lg-6'>
                        <label for="firstName">First Name<span className='text-danger'>*</span></label>
                        <input type="text" className="form-control" id="firstName" aria-describedby="fnHelp" placeholder="Enter First Name" required />
                        
    
                        </div>
                        <div className='col-lg-6'>
                        <label for="lastName">Last Name<span className='text-danger'>*</span></label>
                        <input type="text" className="form-control" id="lastName" aria-describedby="lnHelp" placeholder="Enter Last Name" required />
                        
                        </div>
                        <div className='col-lg-6'>
                        <label for="email">Email<span className='text-danger'>*</span></label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email" required />
                        
                        </div>
                        <div className='col-lg-6'>
                            
                        <label for="phone">Phone<span className='text-danger'>*</span></label>
                        <input type="text" className="form-control" id="phone" aria-describedby="phHelp" placeholder="Enter Phone Number" required />
                        
                        </div>
                        <div className='col-lg-6'>
                        <label for="password1">Password<span className='text-danger'>*</span></label>
                        <input type="password" className="form-control" id="password1" aria-describedby="psHelp" placeholder="Enter Password" required />
                        
                        </div>
                        <div className='col-lg-6'>
                        <label for="password2">Repeat Password<span className='text-danger'>*</span></label>
                        <input type="password" className="form-control" id="password2" aria-describedby="psHelp" placeholder="Enter Password Again" required />
                        </div>
    
                        <div className='col-lg-6 mt-3 mb-2'>
                        <button type="submit" className="btn btn-primary w-100 mt-2 mb-2">Register</button>
                        </div>
                        
                        <hr />
                    </div>
                    </form>
              
                    <div className="container mb-3">
                        <div className='row justify-content-center'>
                            <div className='col-lg-6'>
                            <button className="btn btn-outline-warning w-100 mt-2 mb-2" onClick={this.LoginFormSateFunction}>Back</button>
                            </div>
                        </div>
                    </div>
               
                </div>
                </>
            );
        }
        else{
            return(
                <LoginForm />
            );
        }
    }
}

export default RegisterForm;