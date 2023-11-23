import React , {useState} from 'react';
import {BsCart2} from "react-icons/bs";
import {HiOutlineBars3} from "react-icons/hi2";
import {
    Box,
    Drawer,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
}from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
const Navbar = () => {
    const[openMenu,setOpenMenu]=useState(false)
    const menuOptions =[
        {
            text:"Home",
            icon:<HomeIcon/>
        },
        {
            text:"About",
            icon:<InfoIcon/>
        },
        {
            text:"Testimonials",
            icon:<CommentRoundedIcon/>

        },
        {
            text:"Login/Signup",
            icon:<PhoneRoundedIcon/>
        },
        {
            text:"Cart",
            icon:<ShoppingCartRoundedIcon/>
        },
    ]
  return (
    <nav>
        <p className='q'>UPHaAR ^_^</p>
        <div className='navbar-links-container'>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Reviews</a>
            <a href="/login">Login/Signup</a>
            <a href="">
            <BsCart2 className='navbar-cart-icon'/>
            </a>
            <button className='primary-button'>
                Order Now
            </button>
        </div>
        <div className='navbar-menu-container'>
            <HiOutlineBars3 onClick={ () => setOpenMenu(true)}/>
        </div>
        <Drawer open={openMenu} onclose={() => setOpenMenu(false)} anchor="right">
            <Box sx={{width:250}}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
            >
                <list>
                    {menuOptions.map((item) => (
                        <ListItem key={item.text} disablePadding >
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text}/>
                            </ListItemButton>
                        </ListItem>

                    ))}
                </list>
            </Box>
        </Drawer>
    </nav>
      
  )
}

export default Navbar
