import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    onNewItem(todoName, todoDate);
    setTodoDate("");
    setTodoName("");
  };
  return (
    <div className="container text-center">
      <div className="row flex-column flex-lg-row">
        <div className="col-lg-5 col-12 p-lg-0 p-2 me-5 mb-lg-4">
          <input
            type="text"
            placeholder="Enter Todo Here"
            className="w-100"
            onChange={handleNameChange}
            value={todoName}
          />
        </div>
        <div className="col-lg-3 col-12 p-lg-0 p-2 mb-2">
          <input
            type="date"
            className="w-100"
            onChange={handleDateChange}
            value={todoDate}
          />
        </div>
        <div className="col-lg-3 text-center my-2 m-lg-0 mb-2">
          <button
            type="button"
            className="btn btn-success px-4"
            onClick={handleAddButtonClicked}
          >
            Add <IoAddCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
