import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { boardContiner, boxContainer, customHomeLink, customHomeLinkContainer, formContainer, loginContainer, loginTitle, loginTitle2 } from "./login.css";

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

    {/*http://localhost:3000/users/join */ }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        axios.post('https://c3c9335f-3319-42eb-b423-b4566d6f90b6.mock.pstmn.io/users/join',
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
            <div className={boardContiner}>
                <div className={loginTitle}>BestMovie</div>
                <div className={customHomeLinkContainer}>
                    <Link to="/" className={customHomeLink}>Home</Link>
                </div>
            </div>

            <div className={loginContainer}>
                <div className={loginTitle2}>Register</div>
                <form className={formContainer}>
                    <input className={boxContainer} onChange={getUsername} type="text" placeholder="Username" />
                    <input className={boxContainer} onChange={getEmail} type="email" placeholder="Email" />
                    <input className={boxContainer} onChange={getPassword} type="password" placeholder="Password" />
                    <input className={boxContainer} onClick={handleSubmit} type="submit" value="Register" />
                </form>
            </div>
        </div>
    )
}

export default RegisterBox;