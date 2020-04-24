import React,{useState} from 'react';
import ReactDOM from 'react-dom';

import LogIn from './Login';
import HomePage from './HomePage';

const App = () =>{
  const [userData,changeUserData] = useState({loged:false,userName:"earl",password:"1234"});

  

  return (<div className="content text-align m-auto">
    {!userData.loged && <LogIn userData={userData} changeUserData={changeUserData} />}
    {userData.loged && <HomePage />}
  </div>)
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);