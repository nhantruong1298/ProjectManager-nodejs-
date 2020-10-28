import React from 'react';
import './App.css';
import NavBar from './components/layout/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import DashBoard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';



function App() {
  return (
    <BrowserRouter>
    <div >
      <NavBar/>
      <Switch>
        <Route path='/project/:id' component={ProjectDetails}/>
        <Route exact path='/'  component={DashBoard}  />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/createproject' component={CreateProject} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}


export default App;
