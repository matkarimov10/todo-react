import {TodoItem} from "./item/TodoItem.jsx";
import {useState} from "react";
import {AddTodo} from "./add-todo/AddTodo.jsx";

const data = []
export const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(todo => todo.id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }
    const removeTodo = id => setTodos([...todos].filter(todo => todo.id !== id))

    return (
        <div className="flex flex-col gap-4 text-white w-4/5 mx-auto">
            <h1 className="text-3xl font-bold text-center mb-4">Todo App</h1>
            <AddTodo setTodos={setTodos}/>
            {todos.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo}/>
            })}

        </div>
    )
}