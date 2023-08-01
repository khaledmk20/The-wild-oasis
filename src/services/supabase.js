import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kghgatkygnwtlvzxsuyn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnaGdhdGt5Z253dGx2enhzdXluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyNzQ3MTEsImV4cCI6MjAwNTg1MDcxMX0.1VIbKOXUGszDbwmLZzwXsM_DUNL0QvNYoGzS-qd3lxE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
