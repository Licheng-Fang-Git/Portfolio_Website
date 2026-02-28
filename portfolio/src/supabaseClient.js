import { createClient } from '@supabase/supabase-js';

// These variables pull from your .env.local file
const supabaseUrl =
    import.meta.env.VITE_SUPABASE_URL;
const supabaseKey =
    import.meta.env.VITE_SUPABASE_ANON_KEY;

// This creates the actual connection "client"
export const supabase = createClient(supabaseUrl, supabaseKey);