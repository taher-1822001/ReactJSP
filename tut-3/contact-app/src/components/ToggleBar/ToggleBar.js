import React from 'react';
import darkMode from './darkMode.png'
import lightMode from './lightMode.png'
class ToggleBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDarkTheme: false,
      imageSrc:"./darkMode.png"
    };
  }
  imageChange = () => {
    if(this.state.isDarkTheme===false)
    {
      this.setState({imageSrc:darkMode})
    }
    else{
      this.setState({imageSrc:"./darkMode.png"})
    }

    this.imageChange();
  }
  toggleTheme = () => {

    this.setState((prevState) => ({
      isDarkTheme: !prevState.isDarkTheme, 
      
    }));
    const inputElements = document.body.querySelectorAll('input');
    inputElements.forEach((inputElement) => {
      if(this.state.isDarkTheme)
      {
        inputElement.style.color ="black";
      }
      else
      {
        inputElement.style.color ="white";
      }
      
    });
    if (this.state.isDarkTheme) {
        document.body.style.backgroundColor = '#f1f1f6';
        document.body.style.color = 'black';
  
        
      } else {
        document.body.style.backgroundColor = '#282d35';
        document.body.style.color = 'white';
        // inputElement.style.backgroundColor = '#333'; 
      }
  };

  render() {
    return (
      <div className="toggle-bar container-fluid bg-secondary bg-opacity-50 bg-gradient" >
        <div className='row justify-content-end'>
            <div className='col-2 '>
            <button onClick={this.toggleTheme} className='btn btn-light mt-2 mb-2 ' style={{float:"right"}} title='Theme'>
          <img src={this.state.isDarkTheme?lightMode: darkMode} />
        </button>
            </div>
        </div>
        
      </div>
    );
  }
}

export default ToggleBar;
