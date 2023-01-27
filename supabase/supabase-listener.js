'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useSupabase } from './supabase-provider'

// If server and browser state not in sync, refresh routing
// which will process middleware rules for access control
export default function SupabaseListener({ serverAccessToken }) {
    const { supabase } = useSupabase() //will get supabase browser client from the provider
    const router = useRouter()

    useEffect(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, session) => {
            if (session?.access_token !== serverAccessToken) {
                router.refresh()
            }
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [serverAccessToken, router, supabase])

    return null
}