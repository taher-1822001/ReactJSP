import React from 'react';
import "./App.css"
class RegisterForm extends React.Component{
    constructor(props)
    {
        super(props);

        this.state = {

        }
    }
    render()
    {
        const divStyle = {
            overflowY: 'scroll',
            maxHeight: '400px', // Set a fixed height for the scrollable container
            position: 'relative',
        };
        return(
            <>
            <div className='container align-items-center mt-5 text-light register-form' style={divStyle}>
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
                    <input type="password" className="form-control" id="password2" aria-describedby="psHelp" placeholder="Repeat Password" required />
                    </div>

                    <div className='col-lg-6 mt-3 mb-2'>
                    <button type="submit" className="btn btn-primary w-100 mt-2 mb-2">Register</button>
                    </div>
                    
                    <hr />
                </div>
                </form>
          
                <div className="container">
                    <div className='row justify-content-center'>
                        <div className='col-lg-6'>
                        <button className="btn btn-outline-warning w-100 mt-2 mb-2">Back</button>
                        </div>
                    </div>
                </div>
           
            </div>
            </>
        );
    }
}

export default RegisterForm;