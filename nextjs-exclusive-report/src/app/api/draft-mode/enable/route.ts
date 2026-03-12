import { draftMode } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    (await draftMode()).enable()
    const url = new URL(request.nextUrl)
    const redirectTo = url.searchParams.get('redirectTo') || '/'

    return NextResponse.redirect(new URL(redirectTo, request.url))
}