import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
    const res = NextResponse.next()

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    // During build time, environment variables might not be available
    if (!supabaseUrl || !supabaseAnonKey) {
        console.warn("Missing Supabase environment variables during build time");
        return res;
    }

    // Create a Supabase client configured to use cookies
    const supabase = createServerClient(
        supabaseUrl,
        supabaseAnonKey,
        {
            cookies: {
                get(name: string) {
                    return req.cookies.get(name)?.value
                },
                set(name: string, value: string, options: any) {
                    // If the cookie is updated, update the cookies for the request and response
                    req.cookies.set({
                        name,
                        value,
                        ...options,
                    })
                    res.cookies.set({
                        name,
                        value,
                        ...options,
                    })
                },
                remove(name: string, options: any) {
                    // If the cookie is removed, update the cookies for the request and response
                    req.cookies.set({
                        name,
                        value: '',
                        ...options,
                    })
                    res.cookies.set({
                        name,
                        value: '',
                        ...options,
                    })
                },
            },
        }
    )

    const {
        data: { session },
    } = await supabase.auth.getSession()

    // If no session and user is trying to access protected routes, redirect to home
    if (!session) {
        const protectedRoutes = ['/fitness', '/emotion-analysis', '/daily-checkin', '/consultations', '/patients', '/availability']
        const isProtectedRoute = protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route))

        if (isProtectedRoute) {
            return NextResponse.redirect(new URL('/', req.url))
        }
    }

    return res
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
} 