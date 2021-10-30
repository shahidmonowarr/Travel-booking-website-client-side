import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import AddPackage from './Pages/AddPackage/AddPackage';
import Packages from './Pages/Home/Packages/Packages';
import Booking from './Pages/Booking/Booking';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/addPackage">
              <AddPackage></AddPackage>
            </Route>
            <Route path="/packages">
              <Packages></Packages>
            </Route>
            <Route path="/booking/:packageId">
              <Booking></Booking>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
