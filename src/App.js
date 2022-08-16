//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './component/login';
import Home from './component/home';
import Web3 from 'web3';

function App() {
  const [currentAccount,setcurrentaccount] = useState(100);
  const [isconnect,setisconnect] = useState(false);
  const [balance,setBalance] = useState(0);
 
  const onLogin = async (provider)=>{
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
  

    if(accounts.length === 0){
      console.log("not connected to metamasks")
    }
    else if(accounts[0] !== currentAccount){
      const accountbalance = await web3.eth.getBalance(accounts[0]);
    
      setcurrentaccount(accounts[0]);

     setBalance(accountbalance);
     
      
    
      setisconnect(true);
    }
   
  }
  const onLogout =()=>{
    setisconnect(false);
  }
  return (
    <div className="App">
      <div  className="main-header">
      <header >
        <h1 id="title">React &amp; Web3 </h1>
        
       <nav className='nav'>
        <l>
          
        </l>
       </nav>
      </header>
      </div>
      
      
     <main>
    {!isconnect && <Login onlogin={onLogin} onlogout={onLogout}/> }
    {isconnect &&  <Home current={currentAccount} balance={balance} /> }
    
    
    
     </main>
      
    
    </div>
  );
}

export default App;
