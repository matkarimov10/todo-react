import {BsCheck} from "react-icons/bs";

export const Check = ({isCompleted}) => {
    return (
        <div className={`border-2 rounded-md border-pink-400 ${isCompleted ? "bg-pink-400" : ""} w-7 h-7 flex items-center justify-center`}>
            {isCompleted && <BsCheck size={24} className="text-gray-900"/>}
        </div>
    )
}