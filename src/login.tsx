import axios from "axios"
import { useState } from "react";
import { Link } from "react-router-dom";
import { boardContiner, boxContainer, customHomeLink, customHomeLinkContainer, formContainer, loginContainer, loginText, loginTitle, loginTitle2 } from "./login.css";

const LoginBox = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const initialAccessToken = localStorage.getItem('accessToken');
    const [accessToken, setAccessToken] = useState(initialAccessToken);
    const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken'));
    const isLoggedIn = accessToken != null; //null이면 토큰 x


    const getEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const getPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const getNewToken = async () => { //새로운 토큰 받는 함수
        try {
            const refreshToken = localStorage.getItem('refreshToken');
            const response = await axios.post('http://localhost:3000/users/refresh', {
                refreshToken: refreshToken
            });

            const newAccessToken = response.data.accessToken;
            localStorage.setItem('accessToken', newAccessToken);
            setAccessToken(newAccessToken);
            return newAccessToken;

        } catch (error) {
            console.log(error);
        }
    }

    const handleLoginBtn = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/users/login',
                {
                    email: email,
                    password: password
                });
            const accessToken = response.data.accessToken;
            const refreshToken = response.data.refreshToken;

            //accessToken, refreshToken localStorage에 저장
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);

            setAccessToken(accessToken);
            setRefreshToken(refreshToken);
            alert('로그인 성공')

        } catch (error) {
            console.log(error);
        };
    }
    return (
        <div>
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
                        <input className={boxContainer} onChange={getPassword} type="password" name="password" placeholder=" PASSWORD"></input>
                        <button className={boxContainer} onClick={handleLoginBtn} type="submit">로그인</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginBox;