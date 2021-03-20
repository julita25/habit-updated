import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home"
import Form from "./components/Form";
import { useDispatch } from "react-redux";
import Habits from "./components/Habits";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./components/auth/Auth";
import { getHabits } from "./actions/habits";
import { Divider, Grid, Paper } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft:'100px',
  }
});



function App() {
  const classes = useStyles()
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  useEffect(() => {
    dispatch(getHabits());
  }, [dispatch, currentId]);

  return (
    <div >
        <Router>
        
          <Header />
          <Home/>
          <Grid container direction= "column">
            <Grid item>
               <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>

            <Grid item container spacing = {3} justify= "space-between" className="contain">

                <Grid  >
                  
                  <Habits setCurrentId={setCurrentId} />
                </Grid>
                       
            </Grid>
            
            <Switch>
              <Route path="/auth" exact component={Auth} />
            </Switch>
          </Grid>
         
        </Router>
    </div>
     
  );
}

export default App;
