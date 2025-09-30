import { convexAdapter } from 'better-auth/adapters/convex'
import { betterAuth } from 'better-auth'
import { emailProvider } from 'better-auth/providers'

export const auth = betterAuth({
  adapter: convexAdapter(),
  providers: [
    emailProvider({
      async sendVerificationRequest({ identifier, url }) {
        console.log(`📧 Send this link to ${identifier}:\n${url}`)
      },
    }),
  ],
})