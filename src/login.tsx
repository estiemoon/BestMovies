import axios from "axios"
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginBox = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const getEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const getPassword = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleLoginBtn = async (e: React.FormEvent) => {
        e.preventDefault();
        //login 예외처리 해야함
        await axios.post('http://localhost:3000/users/login', 
            {
                email: email,
                password : password
            })
            .then(function (response) {
            alert("Login Successful")
            })
            .catch(function (error) {
            console.log(error);
            });
    }
    return (

        <div>
        <h1>Login</h1>
        <div>
            <Link to="/">Home</Link>
        </div>
        <form>
            <label>Username</label>
            <input onChange={getEmail} type="email" name="email"></input>
            <label>Password</label>
            <input onChange = {getPassword} type="password" name="password"></input>
            <button onClick={handleLoginBtn} type="submit">Login</button>
        </form>
    </div>
    )   
}

export default LoginBox;