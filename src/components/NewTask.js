import { useContext, useState } from "react";
import { TaskContext } from "../store/TaskProvider";
import classes from "./NewTask.module.css";

const NewTask = (props) => {
  const taskContext = useContext(TaskContext);
  const [taskText, setTaskText] = useState("");
  const inputTextHandler = (e) => {
    setTaskText(e.target.value);
  };
  const formHandler = (e) => {
    e.preventDefault();
    const obj = {text:taskText}
    taskContext.addTask(obj);

    setTaskText("");
  };
  return (
    <form onSubmit={formHandler} className={classes.form}>
      <input value={taskText} onChange={inputTextHandler} type={"text"}></input>
      <button type="submit">Add Task</button>
    </form>
  );
};
export default NewTask;
