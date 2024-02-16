// components/LoginForm.tsx
'use client'
import useAuth from '@/context/useAuth';
import appwriteService from '@/lib/appwrite/config';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, ChangeEvent, FormEvent } from 'react';


const LoginForm = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('')
    const { setAuthStatus } = useAuth();
    const router = useRouter()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const session = await appwriteService.login(formData);
            if (session) {
                setAuthStatus(true)
                router.push("/profile")
            }


        } catch (error: any) {
            setError(error.message)
        }
    };

    return (
        <form className="bg-orange-200 bg-opacity-30 p-8 rounded-lg shadow-md w-96 " onSubmit={handleSubmit}>
            {error && <p className="text-red-600 my-8 text-center">{error}</p>}
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full outline-none focus:ring-1 focus:ring-orange-400 rounded-md"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md outline-none focus:ring-1 focus:ring-orange-400"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-orange-400 text-white font-semibold py-2 px-4 rounded-md hover:bg-opacity-70"
            >
                Login
            </button>
            <p className="mt-4 text-center text-base text-gray-600">
                Don&apos;t have any account?&nbsp;
                <Link
                    href="/sign-up"
                    className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                    Sign Up
                </Link>
            </p>
        </form>
    );
};

export default LoginForm;
