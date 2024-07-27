export const getUpdatedTodoList = (todoList, currentTodo) => {
  return todoList.map((todoDetails) => {
    if (currentTodo.id === todoDetails.id) {
      return {
        ...currentTodo,
      };
    }
    return {
      ...todoDetails,
    };
  });
};
