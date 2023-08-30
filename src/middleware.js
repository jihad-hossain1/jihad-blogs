import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'


// This function can be marked `async` if using `await` inside
export const middleware = async (request) => {
    const { pathname } = request.nextUrl
    const isPath = (path) => pathname.startsWith(path)
    try {
        let cookie = request.cookies.get('jwt-token')?.value;
        // console.log('cookeies are ', cookie)
        if (!cookie || !cookie.startsWith('Bearer')) {
            throw new Error("iNvalid tOken")
        }
        const secret = new TextEncoder().encode(process.env.jwt_secret)
        // console.log(secret)
        await jwtVerify(cookie.split("Bearer ")[1], secret)
        // await jwtVerify(cookie('Bearer '), secret)
        if (isPath('/login') || isPath('/signup')) {
            return NextResponse.redirect(new URL('/', request.url))
        }
        return NextResponse.next()
    } catch (error) {
        if (isPath('/login') || isPath('/signup')) {
            return NextResponse.next()
        }
        console.log(error.message)
        return NextResponse.redirect(new URL(`/login?redirectUrl=${pathname}`, request.url))
    }

}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/profile/:path*', '/dashboard/:path*', '/login/:path*', '/signup/:path*'],
}