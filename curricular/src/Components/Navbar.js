import React from "react";
import './Navbar.css';
import { Link,  useNavigate } from 'react-router-dom';


const Navbar=()=>{
    const navigate = useNavigate();

    const navigateToSignIn = () => {
        console.log('Navigating to signup page');
      navigate('/signup');
      console.log('Navigate 3');
      
    };


    return(
        <div className="nav-div">
            <div className="nav-img">
                <div className="image">
                <img src="https://tse3.mm.bing.net/th?id=OIP.tCAmlzIs6X4Sm1CZ9NhP9wAAAA&pid=Api&P=0&h=180"></img>
                </div>
                <div className="nav-data">
                <ul className="list">
                    <li><a>home</a></li>
                    <li><a>contact</a></li>
                    <li><a>address</a></li>
                    <li><a>programs</a></li>
                </ul>
                </div>
                
            </div>

            <div className="admin-login">
        {/* Use onClick to trigger the navigateToSignIn function */}
        {/* <button onClick={navigateToSignIn}>Login</button> */}
      </div>
      

            {/* <div className="route">
                <span><h3><a href="/blank">workshop</a></h3></span>
                <span><h3>< a href="./blank">pre placement talks</a></h3></span>
                <span><h3><a href="./blank">tech talks</a></h3></span>
            </div> */}
             
         

        </div>
    )

}
export default Navbar;