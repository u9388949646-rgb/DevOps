
import { supabase } from "../config/supabase.js";

export async function registrerBrukere(regBrukernavn, regPassord) 
{
      return await supabase
    .from("Brukere")
    .insert([
        {
            Brukernavn: regBrukernavn,
            Passord: regPassord
        }
    ])
    .select();
}

export async function loggInnBrukere(loggBrukernavn, loggPassord)
 {
    return await supabase
    .from("Brukere")
       .select("BrukerId, Brukernavn, Passord")
    .eq("Brukernavn", loggBrukernavn)
    .single()
}