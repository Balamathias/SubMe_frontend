import { supabaseKey, supabaseURL } from '@/lib/supabase'
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    supabaseURL!,
    supabaseKey!
  )
}