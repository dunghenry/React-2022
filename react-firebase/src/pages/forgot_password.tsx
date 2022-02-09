import React, { FormEvent, useState } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/solid'
import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { authForgotPassword } from 'redux/slice/authSlice';
const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const history = useHistory();
    const {loading} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch();
    const handleSubmit = (e: FormEvent) =>{
        e.preventDefault();
        dispatch(authForgotPassword(email));
        setEmail("")
    }
    return (
        <div className="max-w-lg text-gray-600 p-1">
            <h2 className="text-3xl font-semibold text-center">Forgot Password?</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email" className="font-semibold">Email : </label>
                <div className="w-full flex py-3">
                    <input type="email" name="email" id="email" placeholder="email@example.com" value={email} className="w-full p-2 border" onChange={(e) => setEmail(e.target.value)} required />
                    <button type="submit" className="px-4 ml-1 border rounded-lg bg-blue-500 text-white " disabled={loading}>{loading ? "Loading..." : "Send"}</button>
                </div>
            </form>
            <button className='flex items-center px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-700' onClick={() => history.goBack()}>
                <ArrowLeftIcon className="w-5 h-5 mr-1" /> Back
            </button>
        </div>
    )
}

export default ForgotPassword;