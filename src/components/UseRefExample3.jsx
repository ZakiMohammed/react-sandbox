import { useState, } from 'react'
import Todo from './Todo'

const UseRefExample2 = () => {

    const [showTodo, setShowTodo] = useState(true)

    return (
        <div>
            {showTodo && <Todo />}

            <button className='btn btn-primary' onClick={() => setShowTodo(!showTodo)}>
                Toggle Todo
            </button>
        </div>
    )
}

export default UseRefExample2
