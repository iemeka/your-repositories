import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./TodoList.css";
import { addToList, removeFromList } from "../redux/action";

export default function TodoList() {
  const allTasks = useSelector((state) => state.listOp);
  const toggleTodo = useSelector((state) => state.todoDisplay);
  const [done, setDone] = useState({});
  const [toogleAdd, setToogleAdd] = useState({});
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.name === "add" && newItem.trim().length > 0) {
      dispatch(addToList(newItem));
    }
  };
  const style = () => {
    if (toggleTodo) {
      return { visibility: "visible", opacity: "1" };
    }
    return { visibility: "hidden", opacity: "0" };
  };

  return (
    <div className="todo-wrap" style={style()}>
      <div className="display-board">
        {allTasks.map((item, index) => (
          <div
            className="task-row"
            key={index}
            style={{ textDecoration: index in done ? "line-through" : null }}
          >
            <div className="text">
              <span>{item}</span>
            </div>
            <div className="task-btn">
              <button
                onClick={() => {
                  dispatch(removeFromList(index));
                  delete done[index];
                }}
              >
                delete
              </button>
              <button
                onClick={() => {
                  setDone({ ...done, [index]: "done" });
                  console.log(done);
                }}
              >
                done
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        className="add-task-form"
        style={{ display: toogleAdd ? "none" : null }}
      >
        <form>
          <input  type="text" onChange={(e) => setNewItem(e.target.value)} />
          <input type="submit" onClick={handleSubmit} name="add" value="add" />
        </form>
      </div>
      <div >
        <button className="add-btn" onClick={() => setToogleAdd(!toogleAdd)}>
          {toogleAdd ? "ADD TASK" : "CANCEL"}
        </button>
      </div>
    </div>
  );
}
