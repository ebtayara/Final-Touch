import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import Splash from "./components/Splash";
import Home from "./components/Home";
import CarDetailing from "./components/CarDetailing";
import Appointment from "./components/Appointment";
import EditApp from "./components/EditApp";
import Appointments from "./components/Appointments";
import Review from "./components/Review";
import Reviews from "./components/Reviews";
import NotFound from "./components/NotFound";
import CustomServiceOption from "./components/CustomService"
import { authenticate } from "./store/session";
import { Layout } from "./Layout";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/login" exact={true}>
            <LoginForm />
          </Route>
          <Route path="/sign-up" exact={true}>
            <SignUpForm />
          </Route>
          <Route path="/car-detailing" exact={true}>
            <CarDetailing />
          </Route>
          <Route path="/custom-service" exact={true}>
            <CustomService />
          </Route>
          <Route path="/appointments/:id" exact={true}>
            <Appointment />
          </Route>
          <Route path="/reviews/appointments/:id" exact={true}>
            <Review />
          </Route>
          <Route path="/edit/:id" exact={true}>
            <EditApp />
          </Route>
          <ProtectedRoute path="/appointments" exact={true}>
            <Appointments />
          </ProtectedRoute>
          <ProtectedRoute path="/reviews" exact={true}>
            <Reviews />
          </ProtectedRoute>
          <ProtectedRoute path="/users" exact={true}>
            <UsersList />
          </ProtectedRoute>
          <ProtectedRoute path="/users/:userId" exact={true}>
            <User />
          </ProtectedRoute>
          <Route path="/" exact={true}>
            <Splash />
          </Route>
          <Route path="/home" exact={true}>
            <Home />
          </Route>
          <Route exact={true}>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
