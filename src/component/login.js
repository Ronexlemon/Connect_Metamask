
import { useState } from "react";
import   './login_module.css';

const Login =(props)=>{
const [isconnecting,setisconnecting]=useState(false);
    const detectWindow =()=>{
        let provider;
        if(window.ethereum){
            provider = window.ethereum;
        }
        else if(window.web3){
            provider = window.web3.currentProvider;
        }
        else{
            alert("no web3 browser detected check out metamask");

        }
        return provider;
    }
    const onloginhandler =async()=>{
        const provider = detectWindow();
        if(provider){
            if(provider !== window.ethereum){
                alert("not ethereum wallet")
            }
            setisconnecting(true);
           await  provider.request({method:'eth_requestAccounts',})
          // await provider.request({method:"eth_getBalance",});
           setisconnecting(false);
        }
       
       

        props.onlogin(provider);
    }
    
    return(
       <div className="login">
       
       <div className="card">
        <h2>Ethereum Token  Tracker</h2>
       <button  type="button" onClick={onloginhandler} id="btnconnect"> {!isconnecting && 'connect to wallet '}
         {isconnecting && 'loading ...'}</button>
       </div>
        
         
        
        
          
        </div>
       
    )
}
export default Login;