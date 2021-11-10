import React, { createContext, useState, useEffect } from 'react'

export const UsersContext = createContext()

export const UsersProvider = (props) => {
    const [users, setUsers] = useState([])
    const [showData, setShowData] = useState(false)

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setUsers(data);
                setShowData(true)
            })
    }

    // useEffect(() => {
    //     getData()
    // }, [])


    return (
        <UsersContext.Provider value={{ data: users, getData, showData }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersProvider
