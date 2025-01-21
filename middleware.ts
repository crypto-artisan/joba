import { cookies } from 'next/headers'

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

    const cookieStore = await cookies();
    const disconnected = cookieStore.get('wagmi.io.metamask.disconnected');

    if (!disconnected) return;

    return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: ['/share/:path*', '/profile', '/credentials'],
}

