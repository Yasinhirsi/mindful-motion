"use client"

import { useEffect, useState } from 'react'
import { getSupabaseClient } from '@/lib/supabase/client'

// Force dynamic rendering to prevent build-time errors
export const dynamic = 'force-dynamic'

export default function TestPage() {
    const [status, setStatus] = useState('Testing...')
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function testConnection() {
            try {
                setStatus('Connecting to Supabase...')
                const supabase = getSupabaseClient()

                console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
                console.log('Supabase Key exists:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

                // Test basic connection
                const { data, error } = await supabase.from('users').select('count').limit(1)

                if (error) {
                    if (error.message.includes('relation "users" does not exist')) {
                        setStatus('Database schema not found')
                        setError('The users table does not exist. You need to run the schema.sql file in your Supabase project.')
                    } else {
                        setStatus('Connection failed')
                        setError(error.message)
                    }
                } else {
                    setStatus('✅ Connection successful!')
                    setError(null)
                }
            } catch (err: any) {
                setStatus('❌ Connection error')
                setError(err.message)
            }
        }

        testConnection()
    }, [])

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-2xl font-bold mb-4">Supabase Connection Test</h1>

            <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="font-semibold">Status: {status}</p>
                {error && (
                    <div className="mt-2 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                        <p className="font-semibold">Error:</p>
                        <p>{error}</p>
                    </div>
                )}
            </div>

            <div className="bg-blue-100 p-4 rounded-lg">
                <h2 className="font-semibold mb-2">Next Steps:</h2>
                <ol className="list-decimal list-inside space-y-1">
                    <li>If connection failed, check your .env.local file</li>
                    <li>If schema not found, run schema.sql in Supabase SQL Editor</li>
                    <li>If working, try the signup form on the main page</li>
                </ol>
            </div>

            <div className="mt-4">
                <a
                    href="/"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Go to Main Page
                </a>
            </div>
        </div>
    )
} 