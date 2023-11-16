import React from 'react';
import Header from './Header'
// import AddContact from './AddContact';
// import ContactList from './ContactList';
import LoginForm from './LoginForm';
import Footer from './Footer';
// import RegisterForm from './RegisterForm'
// import PopupNotification from './PopupNotification';
import ToggleBar from './ToggleBar/ToggleBar';

class App extends React.Component {
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
  };

  componentDidMount() {
    // Set the initial theme when the component mounts
    this.updateBodyClass();
  }

  componentDidUpdate() {
    // Update the theme when it changes
    this.updateBodyClass();
  }

  updateBodyClass() {
    // Add or remove 'dark-theme' class to the body based on the theme state
    document.body.classList.toggle('dark-theme', this.state.isDarkTheme);
  }
  render()
  {
    const { isDarkTheme } = this.state;
    
  return (
    <div className="app">
      <Header />
      {/* <AddContact />
      <ContactList contacts={contacts}/> */}
      <ToggleBar toggleTheme={this.toggleTheme} />
      <LoginForm />
      {/* <RegisterForm /> */}
      {/* < PopupNotification /> */}
    
      <Footer />

    </div>
  );
}
}

export default App;
