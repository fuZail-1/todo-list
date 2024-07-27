import React, { useState } from "react";
import { toast } from "react-toastify";
import { INITIAL_TASK_VALUE } from "../config/app-constant";
import { getUpdatedTodoList } from "../config/helper";
import TodoItem from "./TodoItem";
import TodoActions from "./TodoActions";

const Home = () => {
  const [currentTodo, setCurrentTodo] = useState(INITIAL_TASK_VALUE);
  const [todoList, setTodosList] = useState([]);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCurrentTodo({ ...currentTodo, [e.target.name]: e.target.value });
    setError("");
  };

  const handleTask = () => {
    if (currentTodo.title && currentTodo.description) {
      if (currentTodo.id) {
        const updatedTodoList = getUpdatedTodoList(todoList, currentTodo);
        setTodosList(updatedTodoList);
        toast.success("Task edited successfully");
      } else {
        setTodosList([
          ...todoList,
          {
            ...currentTodo,
            id: Date.now(),
          },
        ]);
        toast.success("Task added successfully");
      }
      setCurrentTodo(INITIAL_TASK_VALUE);
    } else {
      setError("Title and Description are required!");
    }
  };

  const handleDelete = (id) => {
    setTodosList(todoList.filter((todo) => todo.id !== id));
    setCurrentTodo(INITIAL_TASK_VALUE);
    toast.success("Task deleted successfully");
  };

  const handleEdit = (id) => {
    const todo = todoList.find((todo) => todo.id === id);
    setCurrentTodo(todo);
  };

  return (
    <>
      <h1 style={{ textAlign: "center", margin: "20px 0px" }}>To Do List</h1>
      <TodoActions
        currentTodo={currentTodo}
        handleChange={handleChange}
        error={error}
        handleTask={handleTask}
      />
      <div className="card" style={{ width: "29rem", margin: "20px auto" }}>
        <div className="card-header">Tasks</div>
        <ul className="list-group list-group-flush">
          {todoList.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
