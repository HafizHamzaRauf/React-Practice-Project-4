import React, { useEffect, useState } from "react";
export const TaskContext = React.createContext({
  tasklists: [],
  addTask: (task) => {},
});

export const TaskProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      "https://react-complete-guide-9e243-default-rtdb.firebaseio.com/tasks.json"
    );
    const data = await response.json();
    const arr = [];
    for (const item in data) {
      const obj = { id: item, text: data[item].text };
      arr.push(obj);
    }
    setTasks(arr);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const addTask = (task) => {
    const sendData = async () => {
      await fetch(
        "https://react-complete-guide-9e243-default-rtdb.firebaseio.com/tasks.json",
        {
          method: "POST",
          body: JSON.stringify(task),
        }
      );
      fetchData();
    };
    sendData();
  };
  return (
    <TaskContext.Provider value={{ tasklists: tasks, addTask: addTask }}>
      {props.children}
    </TaskContext.Provider>
  );
};
