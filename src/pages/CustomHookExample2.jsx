import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { v4 as uuidV4 } from "uuid";

const CustomHookExample2 = () => {

    const [task, setTask] = useLocalStorage('task', '')
    const [tasks, setTasks] = useLocalStorage('tasks', [])

    const handleSubmit = (e) => {
        const newTask = { id: uuidV4(), title: task }
        setTasks([...tasks, newTask])
        setTask('')
    }

    return (
        <>
            <h4 className='mb-3'>Custom Hook: Local Storage</h4>
            <form className='mb-3' onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="task">Task</label>
                    <input
                        type="text"
                        className='form-control'
                        placeholder='Enter task'
                        value={task}
                        onChange={(e) => setTask(e.target.value)} />
                </div>
                <button className='btn btn-primary'>Add Task</button>
            </form>

            <ul className='list-group'>
                {tasks.map(task => (
                    <li className='list-group-item' key={task.id}>{task.title}</li>
                ))}
            </ul>
        </>
    )
}

export default CustomHookExample2
