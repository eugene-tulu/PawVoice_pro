import { betterAuth } from 'better-auth'
import { emailProvider } from 'better-auth/dist/providers/email'
import { toNodeHandler } from 'better-auth/node'
import http from 'node:http'

const auth = betterAuth({
  database: ':memory:', // in-memory for hackathon
  providers: [
    emailProvider({
      sendVerificationRequest({ identifier, url }) {
        console.log(`\n📧 SEND THIS MAGIC LINK TO: ${identifier}`);
        console.log(`🔗 ${url}\n`);
      },
    }),
  ],
})

const server = http.createServer(toNodeHandler(auth))
server.listen(3001, () => console.log('✅ Auth server running on http://localhost:3001'))
