import { useContext } from "react";
import { TaskContext } from "../store/TaskProvider";
import classes from "./TaskList.module.css";
const TaskList = (props) => {
  const taskContext = useContext(TaskContext);
  const content = taskContext.tasklists.map((element) => (
    <li key={element.id}>{element.text}</li>
  ));

  return (
    <>
      <h1 className={classes.primaryHeading}>Available Tasks</h1>
      <ul className={classes.list}>{content}</ul>
    </>
  );
};

export default TaskList;
