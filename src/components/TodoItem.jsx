import { MdDelete } from "react-icons/md";
function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container ">
      <div className="row border border-primary align-items-center mb-2 ps-1">
        <div className="col-lg-5 col-12 p-lg-0 p-2 me-5 mb-lg-4">
          {todoName}
        </div>
        <div className="col-lg-3 col-12 p-lg-0 p-2 mb-2">{todoDate}</div>
        <div className="col-lg-3 text-center my-2 m-lg-0 mb-2">
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => {
              onDeleteClick(todoName);
            }}
          >
            Delete  <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
