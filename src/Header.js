import React from 'react'
import "./header.css";
import MenuIcon from '@material-ui/icons/Menu';
import {IconButton} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';

export default function Header() {
    return (
        <div className="header">
            <div className="header__left">
               <IconButton>
               <MenuIcon />
               </IconButton>
               <img src="https://images.macrumors.com/t/tTg1lZtIqMWB84FvO6idlYZXMvg=/800x0/filters:quality(90)/article-new/2020/10/newgmaillogo.0.jpg?lossy" alt=""/>
            
            </div>
            <div className="header__middle">
                <SearchIcon/>
                <input placehoder="search mail" text="text"/>
                <ArrowDropDownIcon className="header__inputCaret"/>
            </div>
            <div className="header__right">
                <IconButton>
                <AppsIcon />
                </IconButton>    
                <IconButton>
                <NotificationsIcon />
                </IconButton>  
                <Avatar/>  
            </div>

        </div>
    )
}
