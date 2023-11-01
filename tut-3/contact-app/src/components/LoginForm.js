import React from 'react'
import RegisterForm from './RegisterForm'
class LoginForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            passwordState:true,
            newUserState:true,
            title:"Login",
            loginFormState:true,
            showPasswordState:"",
            backButtonState:false,
            buttonText:"Login",
            passwordViewState:"password",
        };
    }
    LoginLinkFunction = () =>{
        if(this.state.passwordState===true && this.state.newUserState===true)
        {
            this.setState({passwordState: false, newUserState: false, title:"Forgot Password", backButtonState: true, buttonText: "Send Login Link"});
        }
    }
    forgotPasswordStateFunction = () => {
        this.setState({loginFormState:false, newUserState:true})
    }
    newUserStateFunction = () =>{
        if(this.state.loginFormState===true)
        {
            this.setState({loginFormState:false});
        }
    }

    backStateFunction = () =>{
        this.setState({passwordState: true, newUserState: true, title:"Login", backButtonState: false, buttonText:"Login"});
    }

    passwordViewStateFunction = () =>{
        if(this.state.passwordViewState==="password")
        {
            this.setState({passwordViewState:"text"})
        }
        else{
            this.setState({passwordViewState:"password"})
        }
    }
    render(){
        if(this.state.loginFormState===true)
        {
            return(
                <>
            <div className='container align-items-center mt-5 login text-dark'>
            <h2 className="text-center">{this.state.title}</h2>
          
                <form>
                <div className="form-group row justify-content-center">
                    <div className='col-md-4 '>
                    <hr className='mt-2 mb-2'/>
                    <label for="Email">Email<span className='text-danger'>*</span></label>
                    <input type="email" className="form-control border-2" id="Email" aria-describedby="emailHelp" placeholder="Enter Email"/>
                    
                    </div>
                </div>

               {this.state.passwordState ===true && 
                 <div className="form-group row justify-content-center">
                 <div className='col-md-4'>
                 <label for="pswd">Password<span className='text-danger'>*</span></label>
                 <input type={this.state.passwordViewState} data-toggle="password" className="form-control border" id="pswd" aria-describedby="emailHelp" placeholder="Enter Password" />
                 <span><input type='checkbox' value='Show Password'className='border-primary pt-2'onClick={this.passwordViewStateFunction}/><label><small> Show Password</small></label></span>
                 {/* <input type='checkbox' className='form-control w-0' style={{float:"left"}} value="show password" /> */}
                 <small id="Register" className="form-text text-primary mb-2" style={{float:"right"}}><a href='#' onClick={this.LoginLinkFunction}>Forgot password?</a></small>
 
                 </div>
             </div>
               }
               
                
                <div className="form-group row justify-content-center mb-2">
                    <div className="col-md-4">
                    <button type="submit" className="btn btn-primary w-100 mt-2 mb-2">{this.state.buttonText}</button>
                    <hr className='mt-2 mb-2'/>
                    </div>
                </div> 

                {this.state.backButtonState === true &&
                    <div className="form-group row justify-content-center mb-2">
                        <div className="col-md-4">
                            <button type="submit" className="btn btn-outline-warning w-100 mt-2 mb-2" onClick={this.backStateFunction}>Back</button>
                            
                            </div>
                    </div> 
                
                }
    
                {/* <div className='form-group row justify-content-center mt-1'>
                    <div className='col-md-4 align-items-center'>
                      
                    </div>
                </div> */}
    
            </form>
           { this.state.newUserState ===true && 
             <center>
             <small id="Register" className="form-text text-dark" >New user? <span className='text-primary text-bold pe-auto text-decoration-underline' onClick={this.newUserStateFunction} style={{cursor:"pointer"}}>Click Here</span> to register</small>
             </center>
           }
            </div>
            </>
            );
        }
        else{
            return(
                <RegisterForm />
            );
        }
    }
}

export default LoginForm;