import React from 'react';
import Header from './components/Header/Header'
import Registration from "./components/Registration/Registration"
import Login from "./components/Login/Login"
import HomePage from "./components/HomePage/HomePage"
import router from "./router"
import Navbar from "./components/Navbar/Navbar"
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
    this.updateUser = this.updateUser.bind(this)
  }

updateUser(user) {
  this.setState({
    user,
  })
}

  render() {
    const { user } = this.state;
    return (
      <div className="App">
          <Header user={user}/>
          {router}
      </div>
    );
  }
}

export default App;
