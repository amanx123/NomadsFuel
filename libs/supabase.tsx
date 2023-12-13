// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl: any = process.env.SUPABASE_URL;
const supabaseKey: any = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL or key not provided');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
