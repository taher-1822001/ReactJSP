import React from 'react'
class AddContact extends React.Component
{
    render()
    {
    return(
        <>
        <div className='container align-items-center mt-5'>
        <h2 className="text-center">Add Contact</h2>
        <hr />
        <form>
        <div className="form-group row justify-content-center">
            <div className='col-md-4 '>
            <label for="Name">Name<span className='text-danger'>*</span></label>
            <input type="text" className="form-control" id="Name" aria-describedby="emailHelp" placeholder="Enter Name" required />
            
            </div>
        </div>
        <div className="form-group row justify-content-center">
            <div className='col-md-4'>
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
        </div>
        <div className="form-group row justify-content-center">
            <div className='col-md-4'>
            <label for="InputPhone">Phone<span className='text-danger'>*</span></label>
            <input type="text" className="form-control" id="InputPhone" aria-describedby="emailHelp" placeholder="Enter phone number" required />
            <small id="emailHelp" className="form-text text-muted">We'll never share your phone number with anyone else.</small>
            </div>
        </div>
        
        <div className="form-group row justify-content-center">
            <div className="col-md-4">
            <button type="submit" className="btn btn-primary w-100 mt-2">Add</button>
            </div>
        </div>
    </form>
        

        </div>
        </>
    )
}
}

export default AddContact;