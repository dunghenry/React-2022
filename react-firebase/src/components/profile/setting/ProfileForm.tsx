import React, { FormEvent, useEffect, useState } from 'react';
import { useAppSelector } from 'redux/hooks';
import { ChangeInput } from 'types';
import { useAppDispatch } from 'redux/hooks';
import { profileUpdate } from 'redux/slice/profileSlice';
interface IProps {
    setOnSetting: (onSetting: boolean) => void
}
const ProfileForm: React.FC<IProps> = ({ setOnSetting }) => {
    const initialData = {
        fullName: "",
        emailContact: "",
        phoneNumber: "",
        website: "",
        address: "",
        about: ""
    }
    const { currentUser } = useAppSelector(state => state.auth);
    const { profile } = useAppSelector(state => state.profile);
    const dispatch = useAppDispatch();
    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const handleInput = (e: ChangeInput) => {
        const { name, value } = e.target;
        // console.log(name, value);
        setData({ ...data, [name]: value });
    }
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!currentUser) return;
        setLoading(true);
        await dispatch(profileUpdate({ user: currentUser, data }))
        setLoading(false);
        setOnSetting(false)
    }
    useEffect(() => {
        if (profile) setData(profile);
    }, [profile]);
    return (
        <div>
            <div>
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                            <p className="mt-1 text-sm text-gray-600">
                                This information will be displayed publicly so be careful what you share.
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={handleSubmit}>
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                    {/* Full Name */}
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                            Full Name
                                        </label>
                                        <div className="flex my-1 mt-2 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                name="fullName"
                                                id="fullName"
                                                value={data.fullName}
                                                onChange={handleInput}
                                                className="flex-1 block w-full text-blue-600 border py-1 rounded-sm border-gray-600 focus:ring-indigo-500 rounded-r-md sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    {/* Email Contact */}
                                    <div>
                                        <label htmlFor="emailContact" className="block text-sm font-medium text-gray-700">
                                            Email Contact
                                        </label>
                                        <div className="flex mt-1 rounded-md shadow-sm">
                                            <input
                                                type="email"
                                                name="emailContact"
                                                id="emailContact"
                                                value={data.emailContact}
                                                onChange={handleInput}
                                                className="flex-1 border py-1 rounded-sm border-gray-600 block w-full text-blue-60 focus:ring-indigo-500 rounded-r-md sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    {/* Address */}
                                    <div>
                                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                            Address
                                        </label>
                                        <div className="flex mt-1 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                name="address"
                                                id="address"
                                                value={data.address}
                                                onChange={handleInput}
                                                className="flex-1 block w-full text-blue-600 border rounded-sm py-1 border-gray-600 focus:ring-indigo-500 rounded-r-md sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    {/* Phone number */}
                                    <div>
                                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                                            Phone Number
                                        </label>
                                        <div className="flex mt-1 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                name="phoneNumber"
                                                id="phoneNumber"
                                                value={data.phoneNumber}
                                                onChange={handleInput}
                                                className="flex-1 block w-full text-blue-600 border rounded-sm py-1 border-gray-600 focus:ring-indigo-500 rounded-r-md sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    {/* website */}
                                    <div>
                                        <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                                            Website
                                        </label>
                                        <div className="flex mt-1 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                name="website"
                                                id="website"
                                                value={data.website}
                                                onChange={handleInput}
                                                className="flex-1 block w-full text-blue-600 border rounded-sm py-1 border-gray-600 focus:ring-indigo-500 focus:border-indigo-500 rounded-r-md sm:text-sm"
                                                placeholder="www.example.com"
                                            />
                                        </div>
                                    </div>
                                    {/* About */}
                                    <div>
                                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                            About
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                                id="about"
                                                name="about"
                                                rows={5}
                                                value={data.about}
                                                onChange={handleInput}
                                                className="block w-full mt-1 text-blue-600 border rounded-sm border-gray-600 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                placeholder='Brief description for your profile.'
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* Button */}
                                <div className="px-4 flex justify-between py-3 text-right bg-gray-50 sm:px-6">
                                    <button type="button" className="px-4 py-1 font-semibold tracking-wider bg-red-500 text-white rounded-md hover:bg-red-600" onClick={() => setOnSetting(false)}>
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        disabled={loading}
                                        
                                    >
                                        {loading ? "Loading..." : " Save"}
                                    </button>



                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileForm;