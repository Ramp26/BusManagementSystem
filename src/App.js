
import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reg from './components/Reg';
import {BrowserRouter as Router,Route,Switch }from 'react-router-dom'
import Login from './components/Login';
import Search from './components/Search';
import HomeOwner from './components/owner/HomeOwner';

import { useState } from 'react';
import AddBus from './components/owner/AddBus';
import OwnerTableData from './components/owner/OwnerTableData';
import EditBus from './components/owner/EditBus';


function App() {

  const [loginobj, setloginobj] = useState({
    userName:'',
    password:''
  })
  return (

    <div className="App">
      {/* <Reg/> */}
 
          {/* <Router>
          <Route path="/reg" component={Reg}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/home" component={Home}></Route>
  
  </Router> */}

<Router>
      <Home/>
  
      <Switch>
      <Route path="/reg" component={Reg}></Route>
      <Route
          path={"/login"}
          render={(props) => {
            return (
              <Login
                loginObj={loginobj}
                setLoginObj={setloginobj}
                {...props}
              />
            );
          }}
        />
          <Route path="/search" component={Search}></Route>
          <Route path="/homeowner" component={HomeOwner}></Route>
          <Route path="/ownertabledata" component={OwnerTableData}></Route>
         
          <Route path="/addbus" component={AddBus}></Route>
          <Route path="/editbus" component={EditBus}/>
      </Switch>
    
    </Router>
    </div>
   
  );
}

export default App;
