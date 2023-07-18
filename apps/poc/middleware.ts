import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Beware loops when redirecting to the same directory
export function middleware(request: NextRequest) {
  return NextResponse.rewrite(
    new URL('/poc/desktop/paco', request.nextUrl.origin)
  );
}

export const config = {
  matcher: ['/poc/:path*'],
};
