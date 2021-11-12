import React, {useContext} from 'react'
import { TodoContext } from './TodoProvider'

function Done() {
    const { done, handleToggle, removeTaskFromDone } = useContext(TodoContext);

    return (
        <div className="done">
            <h2>Done ✅</h2>
            {done.map((todo) => {
                return (
                    <div key={todo.doneId} className="item-todo">
                        <div className="item-text"
                            onClick={() => handleToggle(todo.doneId)}>
                            {todo.doneTask}
                        </div>
                        <div className="emoji">
                            <div className="todo-delete" onClick={() => removeTaskFromDone(todo.doneId)}>
                                ❌
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Done