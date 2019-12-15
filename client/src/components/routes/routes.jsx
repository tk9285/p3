import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../screens/Home";
import Landing from "../screens/Landing";
import SignIn from "../screens/SignIn";
import SignOut from "../screens/SignOut";
import SignUp from "../screens/SignUp";
import UserPage from "../screens/UserPage";
import Game from "../screens/Game";
import Games from "../screens/Games";
import Categories from "../screens/Categories";
import ItemEdit from "../screens/ItemEdit";
import AuthenticatedRoute from "./AuthenticatedRoute";
import Category from "./../screens/Category";
// import ChangePassword from "./../screens/ChangePassword"
const Routes = ({
  user,
  setUser,
  clearUser,
  addItem,
  getItems
  //   changePassword
}) => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => (user ? <Home /> : <Landing {...props} />)}
    />
    <Route
      path="/sign-in"
      render={props => <SignIn {...props} setUser={setUser} />}
    />
    <Route
      path="/sign-up"
      render={props => <SignUp {...props} setUser={setUser} />}
    />
    <Route
      exact
      path="/sign-out"
      render={props => <SignOut {...props} clearUser={clearUser} user={user} />}
    />
    <Route
      exact
      path="/games"
      user={user}
      render={props => <Games {...props} user={user} />}
    />
    <Route
      exact
      path="/games/:id"
      user={user}
      getItems={getItems}
      render={props => <Game {...props} />}
    />
    <Route
      exact
      user={user}
      path="/games/:id/edit"
      getItems={getItems}
      render={props => <ItemEdit {...props} />}
    />

    <Route
      user={user}
      path="/user-page"
      render={props => <UserPage {...props} />}
    />
    <Route
      path="/categories"
      render={props => <Categories {...props} />}
    />

              <Route
      exact
      user={user}
      path="/category/:id"
      render={props => <Category {...props} />}
    />
  </Switch>
);

export default Routes;

{
  /* <AuthenticatedRoute
exact
path="/items"
user={user}
render={props => <Games {...props} user={user} />}
/>
<AuthenticatedRoute
exact
path="/Games/:id"
user={user}
getItems={getItems}
render={props => <Item {...props} />}
/>
<AuthenticatedRoute
exact
user={user}
path="/Games/:id/edit"
getItems={getItems}
render={props => <ItemEdit {...props} />}
/>
<AuthenticatedRoute
user={user}
path="/create"
render={props => <ItemCreate {...props} addItem={addItem} />}
/>
<AuthenticatedRoute
user={user}
path="/user-page"
render={props => <UserPage {...props} />}
/> */
}
