import React, { FormEvent, useState } from 'react';
import { validateRegister } from 'utils/validate';
import { toast } from 'react-toastify';
import Errors from 'components/global/Errors';
import { useAppDispatch } from 'redux/hooks';
import { authRegister } from 'redux/slice/authSlice';

const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cf_password, setConfirmPassword] = useState("");
    const dispatch = useAppDispatch();
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const user = { name, email, password, cf_password };
        const result = validateRegister(user);
        if (result.errLength)
            return toast.error(() => <Errors errors={result.errMsg} />);
        dispatch(authRegister(user))
        setName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="font-semibold">Username : </label>
                <input type="text" id='name' className="w-full p-2 border-2 my-2" value={name} placeholder="Enter username..." onChange={(e) => setName(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor="email" className="font-semibold">Email : </label>
                <input type="email" id='email' className="w-full p-2  border-2 my-2" value={email} placeholder="Enter email..." onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor="password" className="font-semibold">Password : </label>
                <input type="password" id='password' className="w-full p-2  border-2 my-2" value={password} placeholder="Enter password..." onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor="cf_password" className="font-semibold">Confirm Password : </label>
                <input type="password" id='cf_password' className="w-full p-2  border-2 my-2" value={cf_password} placeholder="Confirm password..." onChange={(e) => setConfirmPassword(e.target.value)} required/>
            </div>
            <button type="submit" className="w-full rounded-lg p-3 my-2 font-semibold tracking-wider bg-purple-500 text-white hover:bg-pink-500 hover:text-black uppercase border-2">
                Register
            </button>
        </form>

    )
};

export default RegisterForm;
