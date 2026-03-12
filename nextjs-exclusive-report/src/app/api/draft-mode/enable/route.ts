import { validatePreviewUrl } from '@sanity/preview-url-secret'
import { client } from '@/sanity/client'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

const token = process.env.SANITY_API_READ_TOKEN

// Verify token is available
if (!token) {
    console.error('[draft-mode/enable] ERROR: SANITY_API_READ_TOKEN is not set or not readable! Check .env.local has no spaces around the "=" sign.')
}

const clientWithToken = client.withConfig({
    token: token || ''
})

export async function GET(request: Request) {
    /* console.log('[draft-mode/enable] Received request:', request.url)
    console.log('[draft-mode/enable] Token present:', !!token, '| Token length:', token?.length ?? 0)
   */
    const { isValid, redirectTo = '/' } = await validatePreviewUrl(
        clientWithToken,
        request.url
    )

    console.log('[draft-mode/enable] validatePreviewUrl result → isValid:', isValid, '| redirectTo:', redirectTo)

    if (!isValid) {
        console.error('[draft-mode/enable] FAILED validation — returning 401. This usually means the token is missing or the preview secret is invalid.')
        return new Response('Invalid secret', { status: 401 })
    }

    ; (await draftMode()).enable()
    console.log('[draft-mode/enable] Draft mode ENABLED, redirecting to:', redirectTo)

    redirect(redirectTo)
}