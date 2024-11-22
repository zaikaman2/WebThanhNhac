import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ykwqxhxkxhgfvtjsrwpz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlrd3F4aHhreGhnZnZ0anNyd3B6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0MjU2MDAsImV4cCI6MjAyNjAwMTYwMH0.YQgkYnhXqB8unfE2LenfXK7jm_-VHDhW9TqWZ7f_9ZY'

export const supabase = createClient(supabaseUrl, supabaseKey) 