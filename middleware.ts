import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

// Fetch country code from API
async function fetchCountryCode(): Promise<string> {
  const response = await fetch('https://ipinfo.io/json?token=996bb0edca1ff4')
  if (!response.ok) {
    throw new Error('Failed to fetch country code')
  }

  const data = await response.json()
  return data.country.toLowerCase()
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Fetch the country code
  let countryCode
  try {
    countryCode = await fetchCountryCode()
  } catch (error) {
    countryCode = 'sg' // Default to Singapore
  }

  // Redirect if the pathname doesn't start with the country code
  if (!pathname.startsWith(`/${countryCode}`)) {
    const newUrl = new URL(`/${countryCode}${pathname}`, request.url)
    return NextResponse.redirect(newUrl)
  }

  return NextResponse.next()
}
