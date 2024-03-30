import {Check} from "./Check.jsx";
import {FaRegTrashAlt} from "react-icons/fa";

export const TodoItem = ({todo, changeTodo, removeTodo}) => {
    return (
        <div className="flex w-full items-center justify-between gap-2 bg-slate-800 rounded-xl p-4">
            <button className="flex items-center" onClick={() => changeTodo(todo.id)}>
                <Check isCompleted={todo.isCompleted}/>
                <span
                    className={`text-xl ml-2 text-white ${todo.isCompleted ? "line-through" : ""}`}>{todo.title}
                </span>
            </button>
            <button onClick={() => removeTodo(todo.id)}>
                <FaRegTrashAlt size={22} className="text-gray-500 hover:text-red-400 transition-colors ease-in"/>
            </button>
        </div>
    )
}