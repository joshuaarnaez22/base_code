import { NextResponse } from 'next/server';
import jwt_decode from 'jwt-decode';

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const token = request.cookies.get('token');
  const { origin } = request.nextUrl;
  const url = request.url;
  if (!token) return NextResponse.redirect(`${origin}`);

  const { role } = jwt_decode(token);

  if (url.startsWith(`${origin}/admin`) && role !== 'admin') {
    return NextResponse.redirect(`${origin}/${role}/dashboard`);
  } else if (url.startsWith(`${origin}/foster`) && role !== 'foster') {
    return NextResponse.redirect(`${origin}/${role}/dashboard`);
  }
}

export const config = {
  matcher: ['/admin/dashboard', '/foster/dashboard'],
};
