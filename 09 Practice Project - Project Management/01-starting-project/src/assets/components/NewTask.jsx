import { useState } from "react"

export default function NewTask({onAddTask}) {
    const [enteredTask,setEnteredTask] = useState('');

    function handleChange(event){
        setEnteredTask(event.target.value);
    }

    function handleClick(){
        if(enteredTask.trim() === ''){
            return;
        }

        onAddTask(enteredTask);
        setEnteredTask('');
    }


    return (
        <div className="flex items-center gap-4">
            <input type="text" onChange={handleChange} className="w-64 px-2 py-1 rounded-sm bg-stone-200" value={enteredTask}/>
            <button className="text-stone-700 hover:text-stone-900" onClick={handleClick}>
                Add Task
            </button>
        </div>
    )
}