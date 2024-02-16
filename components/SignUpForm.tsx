// components/SignupForm.tsx
'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import appwriteService from '@/lib/appwrite/config';
import useAuth from '@/context/useAuth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SignupForm = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({ email: '', password: '', name: '' });
    const [error, setError] = useState('')
    const { setAuthStatus } = useAuth()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const userData = await appwriteService.createAccount(formData);
            if (userData) {
                setAuthStatus(true)
                router.push("/profile")
            }
        } catch (error: any) {
            setError(error.message)
        }
    };

    return (
        <form className="bg-orange-200 bg-opacity-30 p-8 rounded-lg shadow-md w-96" onSubmit={handleSubmit}>
            {error && <p className="text-red-600 my-8 text-center">{error}</p>}
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                />
            </div>
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
                    className="mt-1 p-2 w-full border rounded-md"
                    required
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
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-opacity-70"
            >
                Sign Up
            </button>
            <p className="mt-4 text-center text-base text-gray-600">
                Already have an account?&nbsp;
                <Link
                    href="/login"
                    className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                    Sign In
                </Link>
            </p>
        </form>
    );
};

export default SignupForm;
