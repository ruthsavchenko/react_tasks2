import React, { useContext } from 'react'
import { UsersContext } from './UsersProvider'

export const Users = () => {
    const { data, getData, showData } = useContext(UsersContext)

    return (
        <>
            {!showData ? (
                <button onClick={getData}>Get Data</button>
            ) : (
                <div className="container">
                    {
                        data && data.length > 0 && data.map((user) =>
                            <div key={user.id} className="user-card">
                                <h2>{user.name}</h2>
                                <p>Username: {user.username}</p>
                                <p>Email: {user.email}</p>
                                <div className="user-card__address">
                                    <h4>Address:</h4>
                                    <p>{user.address.street} street, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                                    <div>
                                        <p>Coordinates: {user.address.geo.lat}, {user.address.geo.lng}</p>
                                    </div>
                                </div>
                                <p>Phone: {user.phone}</p>
                                <p>Website: <a href="{user.website}">{user.website}</a></p>
                                <div className="user-card__company">
                                    <h4>Company:</h4>
                                    <p>"{user.company.name}"</p>
                                    <p>Catch phrase: {user.company.catchPhrase}</p>
                                    <p>{user.company.bs}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            )}
        </>
    )
}

export default Users
