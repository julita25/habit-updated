import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  Button,
  AppBar,
  Input,
  Avatar,
  Typography,
  IconButton,
} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {makeStyles} from "@material-ui/core/styles"
import { useDispatch } from "react-redux";
import {Sidebar} from "./Sidebar"
import "./header.css"



function Header() {
  
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));


  //to open the drawer
  const [sidebar, setSideBar] = useState(false);
  const showSideBar = () => {
    setSideBar(true)
  }
  const hideSideBar = () => {
    setSideBar(false)
  }

  console.log(user);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    setUser(null);
    history.push("/");
  };

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  console.log("user", user);


  
  return (
    <div className='navbar'>
    <AppBar position="fixed" style= {{ background: '#C38D9E'}}  >
      <Toolbar  position= "fixed" >
        <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={showSideBar}
              edge="start"
              
            >
              <MenuIcon />
        </IconButton>
        
        {user ? <h3>{user.name}</h3> : ""}
        {user ? (
        <Button onClick={logout}>LogOut</Button>
        ) : (
          
        <Button 
          variant = "outlined"  
          className= "btn-sign"
          component={Link} to="/auth">
            Log-out
        </Button> 
        )}
      <IconButton>
        <AccountCircleIcon  variant= "outlined"/>
      </IconButton>


      </Toolbar>
      
    </AppBar>

    <nav className= {sidebar? 'menu-active' : 'menu'}>
          <ul className='menu-items'>
            <li className = 'navbar-toggle'>
              <CloseIcon onClick= {hideSideBar}/>
            </li>
            {Sidebar.map((item, index) => {
              return (
                <li key = {index} className={item.cName}>
                  <Link to = {item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        </div>
   
  
   

  );
}

export default Header;
