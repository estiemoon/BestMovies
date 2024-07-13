import axios from "axios"
import { useState } from "react";
import { Link } from "react-router-dom";
import { boardContiner, boxContainer, customHomeLink, customHomeLinkContainer, formContainer, loginContainer, loginText, loginTitle, loginTitle2 } from "./login.css";

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
        <div className={boardContiner}>
            <div className={loginTitle}>BestMovie</div>
            <div className={customHomeLinkContainer}>
                <Link to="/" className={customHomeLink}>Home</Link>
            </div>
        </div>
    
        <div className={loginContainer}>
            <div className={loginTitle2}>Login</div>
            <form className={formContainer}>
                <input className={boxContainer} onChange={getEmail} type="email" name="email" placeholder=" ID"></input>
                <input className={boxContainer} onChange = {getPassword} type="password" name="password" placeholder=" PASSWORD"></input>
                <button className={boxContainer} onClick={handleLoginBtn} type="submit">로그인</button>
            </form>
        </div>
    </div>
    );
}

export default LoginBox;