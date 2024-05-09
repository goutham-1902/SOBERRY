import {useState} from 'react'
import logo from "../../public/ihhlogo.png"
import '../index.css'
import '../App.css'
import Login from './Login'
import { Link } from 'react-router-dom'

const getCookie = (name) => {
  const cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
};

const deleteCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};


const Headmenu = () => {
    const username=getCookie('Name');

    const Lineco = () => {
      const [isHovered, setIsHovered] = useState(false);
      const handleMouseEnter = () => {
        setIsHovered(true);
      };
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
      return (
        <>
      {isHovered ? (
        <span onMouseLeave={handleMouseLeave} onClick={()=>{
          deleteCookie('userID');
          deleteCookie('Name');
          window.location.reload();
        }}>Logout</span>
      ):(
        <span
          onMouseEnter={handleMouseEnter}
          className="whitespace-nowrap"
        >
          {"Hey, " + username}
        </span>
      )}
    </>
      )
    }
    
  return (
    <>
    <div className="headmenu-logo">
      <h1 className='pl-2.5'>SOBERRY</h1>
    </div>
    <div className="center-menu">
      
    </div>
    <div className="logo-menu w-auto">
    <span className='whitespace-nowrap'>
           {(username)?<Lineco/>:<Link to="/login">Login</Link>}
        </span>
    </div>
    </>
  )
}

export default Headmenu