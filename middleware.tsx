import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import useAuth from './context/useAuth'
export function middleware(request: NextRequest) {
    // const { setAuthStatus } = useAuth()
    // console.log(setAuthStatus)
    // if (setAuthStatus! && request.nextUrl.pathname.startsWith('/about')) {
    //     return NextResponse.rewrite(new URL('/about-2', request.url))
    // }

    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.rewrite(new URL('/dashboard/user', request.url))
    }
}