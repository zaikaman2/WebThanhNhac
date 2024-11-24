import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fgmmykvsbzfgpdloadvb.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnbW15a3ZzYnpmZ3BkbG9hZHZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIyNjE5MDQsImV4cCI6MjA0NzgzNzkwNH0.CAfqy9vv5pI0ncep0mjTT4hjJFPGGQFjDfp-mmnesxQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey) 