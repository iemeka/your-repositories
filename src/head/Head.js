import "./Head.css";
import { useIdentityContext } from "react-netlify-identity-gotrue";
import { useDispatch } from "react-redux";
import { setContent, todoDisplay } from "../redux/action";
import LogIn from "../content/form/LogIn";
import SignUp from "../content/form/SignUp";

export default function Head() {
  const dispatch = useDispatch();
  const setSection = (page) => {
    dispatch(setContent(page));
  };
  const identity = useIdentityContext();
  const logOut = <button onClick={identity.logout}>Logout</button>;
  const logIn = <button onClick={() => setSection(<LogIn />)}>login</button>;
  const signUp = <button onClick={() => setSection(<SignUp />)}>signup</button>;
  const todoList = <button onClick={() => dispatch(todoDisplay())}>todo list</button>;
  return (
    <div className="head-wrap">
      <div className="head-one">
        <h2>Your repositories</h2>
        {identity.user ? (
          logOut
        ) : (
          <div>
            {" "}
            {signUp} {logIn}
          </div>
        )}
      </div>
      <div className="head-two">{identity.user ? todoList : null}</div>
    </div>
  );
}
