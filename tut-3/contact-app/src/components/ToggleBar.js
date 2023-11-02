import React from 'react';

class ToggleBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDarkTheme: false,
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => ({
      isDarkTheme: !prevState.isDarkTheme,
    }));

    if (this.state.isDarkTheme) {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        
      } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
      }
  };

  render() {
    return (
      <div className="toggle-bar container-fluid bg-gradient bg-primary">
        <div className='row justify-content-end'>
            <div className='col-2'>
            <button onClick={this.toggleTheme} className='btn btn-secondary mt-2 mb-2'>
          dark mode
        </button>
            </div>
        </div>
        
      </div>
    );
  }
}

export default ToggleBar;
