import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  const initialtodoItems = [];

  const [todoItems, setTodoItems] = useState(initialtodoItems);
  const handleNewItem = (itemName, itemDate) => {
    const newTodoItems = [
      ...todoItems,
      { todoName: itemName, todoDate: itemDate },
    ];
    setTodoItems(newTodoItems);
  };
  const handleDeleteItem=(todoItemName)=>{
    const newTodoItems=todoItems.filter((item)=>item.todoName!==todoItemName)
    setTodoItems(newTodoItems)
  }
  return (
    <div className="todo-container p-5 ">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length <= 0 && <WelcomeMessage />}
      <TodoItems todoitems={todoItems} onDeleteClick={handleDeleteItem} />
    </div>
  );
}

export default App;
