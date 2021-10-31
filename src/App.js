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
import ManagePackages from './Pages/ManagePackages/ManagePackages';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import About from './Pages/About/About';
import MyOrder from './Pages/MyOrder/MyOrder';
import ManageOrders from './Pages/ManageOrders/ManageOrders';

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
            <PrivateRoute path="/addPackage">
              <AddPackage></AddPackage>
            </PrivateRoute>
            <PrivateRoute path="/managePackages">
              <ManagePackages></ManagePackages>
            </PrivateRoute>
            <Route path="/packages">
              <Packages></Packages>
            </Route>
            <PrivateRoute path="/booking/:packageId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/myOrder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/manageOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>
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
