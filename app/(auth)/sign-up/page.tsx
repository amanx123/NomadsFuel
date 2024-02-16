// pages/signup.tsx
'use client'
import React from 'react';
import SignupForm from '@/components/SignUpForm';
import useAuth from '@/context/useAuth';
import { useRouter } from 'next/navigation';
const SignupPage: React.FC = () => {

    const router = useRouter()
    const { authStatus } = useAuth()
    if (authStatus) {
        router.replace('/profile')
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <SignupForm />
        </div>
    );
};

export default SignupPage;
