// pages/login.tsx
'use client'
import React from 'react';
import LoginForm from '@/components/LoginForm';
import { useRouter } from 'next/navigation';
import useAuth from '@/context/useAuth';

const LoginPage: React.FC = () => {
    const router = useRouter();
    const { authStatus } = useAuth();

    if (authStatus) {
        router.replace("/profile");
        return <></>;
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <LoginForm />
        </div>
    );
};

export default LoginPage;
