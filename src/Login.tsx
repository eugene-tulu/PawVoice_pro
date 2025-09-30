// src/Login.tsx
import { useState } from 'react'
import { useMutation } from 'convex/react'
import { api } from '../convex/_generated/api'

export default function Login() {
  const signIn = useMutation(api.auth.signInMagic)
  const [email, setEmail] = useState('')

  const send = async () => {
    await signIn({ email, redirectTo: '/' })
    alert('Check your terminal for the magic link!')
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">🐾 PawVoice Pro</h1>
      <input
        type="email"
        className="border px-3 py-2 rounded mr-2"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={send}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Send Magic Link
      </button>
    </div>
  )
}