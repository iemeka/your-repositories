import "./Content.css";
import Repositories from "./repo/Repositories";
import { useIdentityContext } from "react-netlify-identity-gotrue";
import About from "./about/About";
import { useSelector } from "react-redux";
import TodoList from "../todoList/TodoList";
import LogIn from "./form/LogIn";

export default function Content() {
  const identity = useIdentityContext();
  const content = useSelector((state) => state.pageContent);
  return (
    <div className="content-wrap">
      {identity.user == null ? (
        content || <LogIn />
      ) : (
        <>
          <TodoList />
          <About />
          <Repositories />
        </>
      )}
    </div>
  );
}
