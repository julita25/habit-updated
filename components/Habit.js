import { DriveEtaRounded } from "@material-ui/icons";
import React from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from "@material-ui/core/IconButton"
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import { useDispatch } from "react-redux";
import { deleteHabit } from "../actions/habits";
import {makeStyles} from "@material-ui/core/styles"
import "./habit.css"
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles({
    root: {
      minWidth: 200,
      maxHeight: 400,
      marginLeft: 30,
      justifyContent: "center",
      alignItems: "center",
      
    
    }
});

function Habit({ habit, setCurrentId }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
   // <div >
   <div className = "habit-container">
      <Card className= {classes.root}>
         
        
        <CardContent>

        {habit.habit} 
        </CardContent>
        <CardContent>
          <div class='container'>
            <svg width='350' height='250' class='chart-container'>
              <circle cx='100' cy='100' r='70' class='back' fill='none'   class='back'/>
              <circle cx='98' cy='109' r='70' class='front' fill='none'/>
              <g class='text'>
                <text x='100' y='100' alignment-baseline="central" text-anchor="middle" id='percentage'>70%</text>
              </g>
            </svg>
          </div>
          
        </CardContent>
        <CardActions className= "btn-wrap">
          
          <IconButton className= "check-btn" >
            <CheckCircleOutlinedIcon />
          </IconButton>
          <IconButton className = "notif-btn">
            <NotificationsNoneOutlinedIcon />
          </IconButton>
          <IconButton className = "del-btn">
            <CreateOutlinedIcon  onClick={() => setCurrentId(habit._id)} onClick= {classes.ButtonChange}/>
          </IconButton>
          <IconButton className = "del-btn">
            <DeleteOutlineOutlinedIcon  onClick= {() => dispatch(deleteHabit(habit._id))} {...classes.ButtonChange}/>
          </IconButton>  
        </CardActions>
       
        
      </Card>
      </div>
     

    
  );
}

export default Habit;
