import React from "react";
import { STATUS } from "../config/app-constant";
import { MdEditNote } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

const TodoItem = ({ todo, handleEdit, handleDelete }) => {
  console.log(todo);
  return (
    <React.Fragment key={todo.id}>
      <li
        className="list-group-item"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <strong
          style={{
            textDecoration:
              todo.status === STATUS.COMPLETE ? "line-through" : "none",
          }}
        >
          {todo.title}
        </strong>

        <div style={{}}>
          {todo.status === STATUS.INCOMPLETE && (
            <span
              style={{ padding: "0px 4px", cursor: "pointer" }}
              onClick={() => handleEdit(todo.id)}
            >
              <MdEditNote size={25} />
            </span>
          )}
          <span
            onClick={() => handleDelete(todo.id)}
            style={{ cursor: "pointer" }}
          >
            <AiOutlineDelete size={20} />
          </span>
        </div>
      </li>
      <li className="list-group-item">{todo.description}</li>
    </React.Fragment>
  );
};

export default TodoItem;
