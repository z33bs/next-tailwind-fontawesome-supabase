import { headers, cookies } from 'next/headers'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import {requestAsyncStorage} from "next/dist/client/components/request-async-storage";

export const createClient = () =>
    createServerComponentSupabaseClient({
        headers,
        cookies,
    })