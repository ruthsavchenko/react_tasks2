import React, { Component } from 'react'

const UsersContext = React.createContext()

export class UsersProviderClasses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    getData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then(data => {
            this.setState({ users: data });
        });
    }

    render() {
        return (
            <UsersContext.Provider value={this.state}>
                {this.props.children}
            </UsersContext.Provider>
        )
    }
}

export default UsersProviderClasses
