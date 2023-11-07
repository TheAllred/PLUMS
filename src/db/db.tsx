import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gmmdogzicvjmjhsiqshx.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtbWRvZ3ppY3ZqbWpoc2lxc2h4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5ODE2NTA0MCwiZXhwIjoyMDEzNzQxMDQwfQ.F19V3vU0E6r_bLn0c-X4mfLV2QvKklQsgAvlBMOAeQY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
