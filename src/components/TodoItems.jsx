import TodoItem from "./TodoItem";
function TodoItems({ todoitems,onDeleteClick }) {
  return (
    <>
    {todoitems.map(todoitem => (<TodoItem todoName={todoitem.todoName} todoDate={todoitem.todoDate} onDeleteClick={onDeleteClick} />))}
    </>
  );
}
export default TodoItems;
