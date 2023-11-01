import React from 'react'
import Header from './Header'
import AddContact from './AddContact';
import ContactList from './ContactList';
import LoginForm from './LoginForm';
import Footer from './Footer';
import RegisterForm from './RegisterForm'
import PopupNotification from './PopupNotification';
import ToggleBar from './ToggleBar';
class App extends React.Component {
  
  render()
  {
    
    
  return (
    <div className="App">
      <Header />
      {/* <AddContact />
      <ContactList contacts={contacts}/> */}
      
      <ToggleBar />
      {/* <RegisterForm /> */}
      {/* < PopupNotification /> */}
    
      <Footer />
    </div>
  );
}
}

export default App;
