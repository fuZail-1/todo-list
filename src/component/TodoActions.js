import React from "react";

const TodoActions = ({ currentTodo, handleChange, error, handleTask }) => {
  return (
    <div className="addBox">
      <div style={{ height: "60px" }}>
        <input
          type="text"
          name="title"
          placeholder="Add Title Here"
          value={currentTodo.title}
          onChange={handleChange}
        />
        {error && !currentTodo.title && (
          <p style={{ color: "red", marginTop: "4px", height: "10px" }}>
            Title is required
          </p>
        )}
      </div>
      <div style={{ height: "60px" }}>
        <input
          type="text"
          name="description"
          placeholder="Add Description Here"
          value={currentTodo.description}
          onChange={handleChange}
        />
        {error && !currentTodo.description && (
          <p style={{ color: "red", marginTop: "4px", height: "10px" }}>
            Description is required
          </p>
        )}
      </div>
      <button onClick={handleTask} className="addButton">
        {currentTodo.id ? "Edit" : "Add"}
      </button>
    </div>
  );
};

export default TodoActions;
