import React from 'react'

class Footer extends React.Component{
    render(){
        const d = new Date();
        let year = d.getFullYear();
        return(
           
            <>
<footer className="bg-dark bg-gradient text-center text-light" style={{position:"absolute", left:"0", bottom:"0", right: "0"}}>

  <div className="container p-3 pb-0">
 
    <section className="mb-3">
      <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/taher1822001" role="button" target="_blank"
        ><i className="fab fa-linkedin-in"></i
      ></a>
      <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/taher1822001" role="button" target="_blank"
        ><i className="fab fa-instagram"></i
      ></a>
      <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/taher1822001" role="button"
        ><i className="fab fa-facebook-f"></i
      ></a>
      <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/taher-1822001" role="button" target="_blank"
        ><i className="fab fa-github"></i
      ></a>
    

      <a class="btn btn-outline-light btn-floating m-1" href="taher1822001@gmail.com" role="button" target="_blank"
        ><i class="fab fa-google"></i
      ></a>

      

    

    
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