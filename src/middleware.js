import { NextResponse } from "next/server";

export const middleware = req => {
    const accessToken = req.cookies.get('accessToken');
    const isProtectedRoute = req.nextUrl.pathname.startsWith('/profile');
    if(isProtectedRoute && !accessToken) {
        return NextResponse.redirect(new URL('/' , req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher : ['/profile/:path*'],
};