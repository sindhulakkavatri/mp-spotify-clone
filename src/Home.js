import React,{ component }from "react";
import "./Home.css";
import Sign from "./Sign";
import App from './App'
//import Login from './Components/login.component'
//import SignUp from './Components/signUp.component'
import { BrowserRouter as Router, Routes, Route,Link, NavLink } from 'react-router-dom'

function Home() 
{

  return (
    <div className="home">
      
    <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      {/*<a href="C:\Users\sriva\sindhuuuuu\spot\src\App.js">click here</a>
       {/*<button onclick={App}>LOGIN WITIH SPOTIFY</button>*/}
       <div>
        <a href="/app-in">Login with Spotify</a>
       <Router>
        <div className="container">
        <Link className="navbar-brand" to={'/app-in'}></Link>
        </div>
        {/*<NavLink to="C:\Users\sriva\sindhuuuuu\spot\src\Sign.js">Login with spotify</NavLink>*/}
       <Routes>
       <Route path="/app-in" component={<App />} />
      </Routes>
      
       </Router>
       </div>
      
   
      
      
    </div>
    
  );
}

export default Home;