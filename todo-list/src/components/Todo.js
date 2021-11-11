import React, { useContext } from 'react'
import { TodoContext } from './TodoProvider'
import { TodoForm } from './TodoForm'

function Todo() {
    const { todos, moveToDone, removeTask, handleToggle, moveToInProgress } = useContext(TodoContext)
    return (
        <div className="todo">
            <h2>Todo</h2>
            <TodoForm />
            {todos.map((todo) => {
                return (
                    <div key={todo.id} className="item-todo">
                        <div className={todo.complete ? "item-text strike" : "item-text"}
                            onClick={() => handleToggle(todo.id)}>
                            {todo.task}
                        </div>
                        <div className="emoji">
                            <div className="todo-in-progress" onClick={() => moveToInProgress(todo.id, todo.complete, todo.task)}>
                                ⏳
                            </div>
                            <div className="todo-done" onClick={() => moveToDone(todo.id, todo.task)}>
                                ✅
                            </div>
                            <div className="todo-delete" onClick={() => removeTask(todo.id)}>
                                ❌
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Todo
