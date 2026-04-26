import React, {useState} from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import "../index.css";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3002/getUser", {withCredentials : true})
      .then((res) =>{
        setUsername(res.data.user.username);
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
      });
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  }

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  }

  const handleLogout = async() =>{
    try{
      await axios.post("http://localhost:3002/logout",{}, {withCredentials : true});
      window.location.href = "http://localhost:3000";
    }catch(err){
      console.error("Logout failed:", err);
    }
  }

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return ( 
    <div className='menu-container'>
      <img src='logo.png' alt='logo' style={{width : "50px"}}/>
      <div className='menus'>
        <ul>
          <li>
            <Link className='remove-underline' to="/" onClick={()=>handleMenuClick(0)} >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass} >Dashboard</p>
            </Link>
          </li>
          <li>
            <Link className='remove-underline' to="/orders" onClick={()=>handleMenuClick(1)} >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass} >Orders</p>
            </Link>
          </li>
          <li>
            <Link className='remove-underline' to="/holdings" onClick={()=>handleMenuClick(2)} >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass} >Holdings</p>
            </Link>
          </li>
          <li>
            <Link className='remove-underline' to="/positions" onClick={()=>handleMenuClick(3)} >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass} >Postitions</p>
            </Link>
          </li>
          <li>
            <Link className='remove-underline' to="/funds" onClick={()=>handleMenuClick(4)} >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass} >Funds</p>
            </Link>
          </li>
          <li>
            <Link className='remove-underline' to="/apps" onClick={()=>handleMenuClick(5)} >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass} >Apps</p>
            </Link>
          </li>
        </ul>
        <div className='profile' onClick={handleProfileClick}> 
              <div className='avatar'>
                {username ? username.slice(0,2).toUpperCase() : "ZU"}
              </div>
              <p className='username'>{username || "USERID"}</p>

              {isProfileDropdownOpen && (
                <div className='profile-dropdown'>
                  <p className='logout-btn' onClick={handleLogout}>Logout</p>
                </div>
              )}
        </div>
      </div>
    </div>
   );
}

export default Menu;