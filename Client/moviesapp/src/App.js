import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Landing } from './Components/layout/Landing';
import { Fragment } from 'react';
import { Navbar } from './Components/layout/Navbar';
import { MainPage } from './Components/MainPage';
import { Register } from './Components/auth/Register';
import { Login } from './Components/auth/Login';
import { Members } from './Components/Members';
import AddMember from './Components/AddMember';
import UpdateMember from './Components/UpdateMember';
import AddMovie from './Components/AddMovie';
import UpdateMovie from './Components/UpdateMovie';



function App()
{
  return (
    <div>
      <Router>
        <Fragment>
          <Navbar/>
          <Route exact path="/" component={Landing}/>
          <section className='container'>
            <Switch>
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
              <Route path='/members' component={Members} />
              <Route path='/movies/:movieId' component={MainPage} />
              <Route exact path='/movies' component={MainPage} />
              <Route path='/addmovie' component={AddMovie} />
              <Route path='/updatemovie/:id' component={UpdateMovie} />
              <Route path='/updatemember/:id' component={UpdateMember} />
              <Route path='/addmember' component={AddMember} />
            </Switch>
            </section>
            </Fragment>
        </Router>
    </div>
  );
}

export default App;
