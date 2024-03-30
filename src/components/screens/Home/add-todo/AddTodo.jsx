import {useState} from "react";

export const AddTodo = ({setTodos}) => {
    const [title, setTitle] = useState("")

    const addTodo = (title) => {
        setTodos(prev => [...prev, {id: Math.random(), title, isCompleted: false}])
        setTitle('')
    }
    return (
        <div
            className="flex w-full items-center justify-between border border-slate-600 gap-2 bg-slate-800 rounded-xl p-2">
            <input
                onChange={e => setTitle(e.target.value)}
                value={title}
                type="text"
                placeholder="Type todo here... and press Enter"
                onKeyPress={e => e.key === "Enter" && addTodo(title)}
                className="w-full p-2 bg-slate-800 rounded-xl text-white outline-none"/>
        </div>
    )
}