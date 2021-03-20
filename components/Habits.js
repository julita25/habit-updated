import React from "react";
import Habit from "./Habit";
import { useSelector } from "react-redux";
import "./habit.css"
import Grid from "@material-ui/core/Grid"


function Habits({ setCurrentId }) {
  
  const habits = useSelector((state) => state.habits);

  return (
    <div>
    <br/>
    <br/>
        
    <div>
      <Grid container>
      {habits.map((habit) => (
        <Grid>
          <div  key={habit._id}>
            <Habit habit={habit} setCurrentId={setCurrentId} />
          </div>
        </Grid>
      
      ))}
     
      </Grid>
      

    </div>
    </div>
  );
}

export default Habits;
