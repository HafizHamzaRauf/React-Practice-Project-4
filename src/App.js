import "./App.css";
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./store/TaskProvider";
const App = () => {
  return (
    <TaskProvider>
      <NewTask></NewTask>
      <TaskList></TaskList>
    </TaskProvider>
  );
};
export default App;
