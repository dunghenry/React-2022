import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from 'redux/hooks';
import { authLogin } from 'redux/slice/authSlice';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const user = {email, password, remember}
        dispatch(authLogin(user));
        setEmail("");
        setPassword("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email" className="font-semibold">Email : </label>
                <input type="email" id='email' className="w-full p-2  border-2 my-2" value={email} placeholder="Enter email..." onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor="password" className="font-semibold">Password : </label>
                <input type="password" id='password' className="w-full p-2  border-2 my-2" value={password} placeholder="Enter password..." onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="flex items-center justify-between my-2">
                <div className="flex items-center">
                    <input type="checkbox" id='rb-me' className="w-4 h-4" checked={remember} onChange={() => setRemember(!remember)}/>
                    <label htmlFor="rb-me" className="px-1 cursor-pointer text-gray-900">Remember me</label>
                </div>
                <Link to="/forgot_password" className="block ml-2 text-sm text-blue-500 hover:underline">Forgot your password?</Link>
            </div>
            <button type="submit" className="w-full rounded-lg p-3 my-2 font-semibold tracking-wider bg-purple-500 text-white hover:bg-pink-500 hover:text-black uppercase border-2">
                Login
            </button>
        </form>

    )
}
export default LoginForm;
