import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import CallIcon from '@material-ui/icons/Call';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


export const Sidebar= [

    {
        title: 'My Habits',
        path: '/',
        icon: <HomeIcon/>,
        cName: 'nav-text',
    },

    
    {
        title: 'My streaks',
        path: '/streaks',
        icon: <WhatshotSharpIcon/>,
        cName: 'nav-text',
    },
    
    
    {
        title: 'Review',
        path: '/review',
        icon: <FindInPageOutlinedIcon/>,
        cName: 'nav-text',
    },
    
    
    {
        title: 'Settings',
        path: '/settings',
        icon: <SettingsOutlinedIcon/>,
        cName: 'nav-text',
    },
    
    {
        title: 'Any help? Contact us',
        path: '/contact-us',
        icon: <CallIcon/>,
        cName: 'nav-text',
    },
    
    



]

  
