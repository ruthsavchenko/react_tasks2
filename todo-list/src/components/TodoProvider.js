import React, { createContext, useState } from 'react'

export const TodoContext = createContext()

export const TodoProvider = (props) => {
    const [todos, setTodos] = useState([])
    const [inProgress, setInprogress] = useState([])
    const [done, setDone] = useState([])
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(value)
        setValue('')
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }

    const addTask = (value) => {
        if (value) {
            const newItem = {
                id: Math.random().toString(30).substr(2, 9),
                task: value,
                complete: false,
            }
            setTodos([...todos, newItem])
        }
    }

    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    const handleToggle = (id) => {
        setTodos([
            ...todos.map((todo) =>
                todo.id === id ? { ...todo, complete: !todo.complete } : {...todo}
            )
        ])
        console.log(setTodos())
    }

    const moveToInProgress = (itemId, itemComplete, itemTask) => {
        setInprogress([...inProgress, {itemId, itemComplete, itemTask}]);
        removeTask(itemId);
    };

    const removeTaskFromProgress = (id) => {
        setInprogress([...inProgress.filter((todo) => todo.itemId !== id)])
    }

    const moveToDone = (doneId, doneTask) => {
        setDone([...done, {doneId, doneTask}]);
        removeTask(doneId);
        removeTaskFromProgress(doneId)
    };

    const removeTaskFromDone = (id) => {
        setDone([...done.filter((todo) => todo.doneId !== id)])
    }

    return (
        <TodoContext.Provider value={{ todos, removeTaskFromDone, moveToInProgress, moveToDone, removeTaskFromProgress, inProgress, addTask, handleSubmit, handleChange, value, handleKeyPress, removeTask, handleToggle, done }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoProvider
