import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    const loaderUsers = useLoaderData()
    const [users,setUser]=useState(loaderUsers)
    const handleDelete = (_id) => {
        console.log(_id)
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = users.filter(user => user._id !== _id)
                setUser(remaining)
            })
    }
    return (
        <div>
            <h3>user {users.length}</h3>
            {
                users.map(user => <p
                    key={user._id}>{user.name}:{user.email}
                    <Link to={`/update/${user._id}`}><button>Update</button></Link>
                    <button onClick={() => handleDelete(user._id)}>Delete</button>
                </p>)
            }
        </div>
    );
};

export default Users;