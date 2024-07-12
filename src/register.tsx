import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterBox = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const getUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }
    const getEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const getPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        axios.post('http://localhost:3000/users/join',
            {
                username: username,
                email: email,
                password: password
            })
            .then(function (response) {
                alert("Register Successful")
            })
            .catch(function (error) {
                console.log(error);
            }); 
    }


    return (
        <div>
        <h2>Register</h2>
        <div>
            <Link to="/">Home</Link>
        </div>
        <form>
            <input onChange={getUsername} type="text" placeholder="Username" />
            <input onChange={getEmail} type="email" placeholder="Email" />
            <input onChange={getPassword} type="password" placeholder="Password" />
            <input onClick={handleSubmit} type="submit" value="Register" />
        </form>
        </div>
    )
}

export default RegisterBox;