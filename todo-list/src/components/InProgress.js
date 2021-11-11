import React, { useContext } from 'react'
import { TodoContext } from './TodoProvider'

function InProgress() {
    const { inProgress, removeTaskFromProgress, handleToggle, moveToDone } = useContext(TodoContext)

    return (
        <div className="inProgress">
            <h2>In progress ⏳</h2>
            {inProgress.map((todo) => {
                return (
                    <div key={todo.itemId} className="item-todo">
                        <div className={todo.complete ? "item-text strike" : "item-text"}
                            onClick={() => handleToggle(todo.id)}>
                            {todo.itemTask}
                        </div>
                        <div className="emoji">
                            <div className="todo-done" onClick={() => moveToDone(todo.itemId, todo.itemTask)}>
                                ✅
                            </div>
                            <div className="todo-delete" onClick={() => removeTaskFromProgress(todo.itemId)}>
                                ❌
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default InProgress
