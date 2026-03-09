import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const REDIRECTS: Record<string, string> = {
    '/pledge': 'https://disconnectmadison.org/pledge',
    '/quiz':   'https://disconnectmadison.org/quiz',
};

export function middleware(request: NextRequest) {
    const destination = REDIRECTS[request.nextUrl.pathname];
    if (destination) {
        return NextResponse.redirect(destination, { status: 301 });
    }
}

export const config = {
    matcher: ['/pledge', '/quiz'],
};
