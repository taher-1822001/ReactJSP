import React from 'react'
import Header from './Header'
import AddContact from './AddContact';
import ContactList from './ContactList';
import LoginForm from './LoginForm';
import Footer from './Footer';
import RegisterForm from './RegisterForm'
class App extends React.Component {
  
  render()
  {
    let contacts = [
      {
        id: '1',
        name: 'Taher Ahmed',
        email:'taher1822001@gmail.com',
        phone:'7995918360',
  
      },
      {
        id: '2',
        name: 'Alex Mercer',
        email:'alexmercer@gmail.com',
        phone:'7514436121',
  
      },
      {
        id: '3',
        name: 'Optimus Prime',
        email:'optimus@gmail.com',
        phone:'4597126513',
  
      },
    ]

    
  return (
    <div className="App">
      <Header />
      {/* <AddContact />
      <ContactList contacts={contacts}/> */}
      <LoginForm />
    
      {/* <RegisterForm /> */}
    
      <Footer />
    </div>
  );
}
}

export default App;
