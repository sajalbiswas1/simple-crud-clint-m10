import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loderData = useLoaderData()
    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };
        console.log(user);
        fetch(`http://localhost:5000/users/${loderData._id}`,{
            method: 'PUT',
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }

    return (
        <div>
            <h3>Update user: {loderData.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="name" name="name" defaultValue={loderData.name} id="" /><br />
                <input type="email" name="email" defaultValue={loderData.email} id="" /><br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;