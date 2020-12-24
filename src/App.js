import React from 'react';
import { Box, Paper } from '@material-ui/core';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './common/Footer';
import Header from './common/Header/Index';
import { Dashboard } from './pages/Dashboard/Index';
import { Student } from './pages/Student/Index';
import { Teacher } from './pages/Teacher/Index';

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      <Header />
      <Paper elevation={3}>
        <Box m={2}>
          <Switch>
            <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
            <Route exact path="/" component={Dashboard} />
            <Route path="/student" component={Student} />
            <Route path="/teacher" component={Teacher} />
            <Redirect from="*" to="/" />
          </Switch>
        </Box>
      </Paper>
      <Footer />
    </div>
  );
}

export default App;
