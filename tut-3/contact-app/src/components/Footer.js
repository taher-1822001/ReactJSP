import React from 'react'

class Footer extends React.Component{
    render(){
        const d = new Date();
        let year = d.getFullYear();
        return(
           
            <>
<footer className=" text-center text-light bg-secondary bg-opacity-50 bg-gradient" style={{position:"absolute", left:"0", bottom:"0", right: "0"}}>

  <div className="container p-2 pb-0">
 
    <section className="mb-2">
      <a className="btn btn-outline-light btn-floating m-1 p-1" href="https://www.linkedin.com/in/taher1822001" role="button" target="_blank"
        ><img src={`${process.env.PUBLIC_URL}/images/logos/linkedin.png`} className='img-fluid m-0 p-0' style={{width:"35px"}} /></a>
        
      <a className="btn btn-outline-light btn-floating m-1 p-1" href="https://www.instagram.com/taher1822001" role="button" target="_blank"
        ><img src={`${process.env.PUBLIC_URL}/images/logos/instagram.png`} className='img-fluid m-0 p-0' style={{width:"35px"}} /></a>

      <a className="btn btn-outline-light btn-floating m-1 p-1" href="https://www.facebook.com/taher1822001" role="button"
        ><img src={`${process.env.PUBLIC_URL}/images/logos/facebook.png`} className='img-fluid m-0 p-0' style={{width:"35px"}} /></a>


      <a className="btn btn-outline-light btn-floating m-1 p-1" href="https://github.com/taher-1822001" role="button" target="_blank"
        ><img src={`${process.env.PUBLIC_URL}/images/logos/github.png`} className='img-fluid m-0 p-0' style={{width:"35px"}} /></a>
    

      <a className="btn btn-outline-light btn-floating m-1 p-1" href="taher1822001@gmail.com" role="button" target="_blank"
        ><img src={`${process.env.PUBLIC_URL}/images/logos/google.png`} className='img-fluid m-0 p-0' style={{width:"35px"}} /></a>

      

    

    
    </section>
 
  </div>
  
  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © {year} Designed and Developed by Taher Ahmed
   
  </div>

</footer>
            </>
        )
    }
}

export default Footer;