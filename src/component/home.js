//import Card from "@material-ui/core/Card";
//import CardContent from "@material-ui/core/CardContent";
import './home_modules.css';
//import   './login.module.css';



const Home =(props)=>{
    return(
       <div className="home">
       
       <div className="welcome">
       <h1 >Welcome </h1> 
          <h2>{props.current}</h2>
          <h3>Account Balance:{props.balance}</h3>
       </div>
       <div className='tokens'>
        <button>Token</button>

       </div>
        
         
          
         
        </div>
       
    )
}
export default Home;