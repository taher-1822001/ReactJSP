import React from 'react'

class LoginForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            passwordState:"",
            forgotPasswordState:"",
            newUserState:false,
            title:"Login",
            loginFormState:true,
            showPasswordState:"",
        };
    }
    // forgotPasswordStateFunction = () => {
    //     this.setState({loginFormState:false, newUserState:true})
    // }
    newUserStateFunction = () =>{
        if(this.state.newUserState===false && this.state.loginFormState===true)
        {
            this.setState({newUserState:true, loginFormState:false});
        }
    }
    render(){
        if(this.state.newUserState===false && this.state.loginFormState===true)
        {
            return(
                <>
            <div className='container align-items-center mt-5 login text-light'>
            <h2 className="text-center">{this.state.title}</h2>
          
                <form>
                <div className="form-group row justify-content-center">
                    <div className='col-md-4 '>
                    <hr className='mt-2 mb-2'/>
                    <label for="Email">Email<span className='text-danger'>*</span></label>
                    <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter Email" required />
                    
                    </div>
                </div>
                <div className="form-group row justify-content-center">
                    <div className='col-md-4'>
                    <label for="pswd">Password<span className='text-danger'>*</span></label>
                    <input type="password" data-toggle="password" className="form-control " id="pswd" aria-describedby="emailHelp" placeholder="Enter password" required/>
                    <small id="Register" className="form-text text-primary mb-2" style={{float:"right"}}><a href='#'>Forgot password?</a></small>
    
                    </div>
                </div>
               
                
                <div className="form-group row justify-content-center mb-2">
                    <div className="col-md-4">
                    <button type="submit" className="btn btn-primary w-100 mt-2 mb-2">Login</button>
                    <hr className='mt-2 mb-2'/>
                    </div>
                </div>
    
                <div className='form-group row justify-content-center mt-1'>
                    <div className='col-md-4 align-items-center'>
                      
                    </div>
                </div>
    
            </form>
            <center>
                    <small id="Register" className="form-text text-muted" >New user? <span className='text-primary text-bold pe-auto'><small onClick={this.newUserStateFunction} style={{cursor:"pointer"}}>Click Here</small></span> to register</small>
                    </center>
            </div>
            </>
            );
        }
        else{
            return(
                <h1>Registration Page</h1>
            );
        }
    }
}

export default LoginForm;