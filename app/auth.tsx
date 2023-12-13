// 'use client'
// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { supabase } from '../libs/supabase';

// const Auth: React.FC = () => {
//     const router = useRouter();

//     useEffect(() => {
//         const user = supabase.auth.user();

//         if (user) {
//             // Redirect authenticated users to the home page
//             router.push('/');
//         } else {
//             // Redirect unauthenticated users to the Supabase login page
//             supabase.auth.signOut(); // Ensure the user is logged out before attempting to sign in
//             supabase.auth.signIn(); // Redirects to the Supabase login page
//         }
//     }, [router]);

//     return <div>Loading...</div>;
// };

// export default Auth;
