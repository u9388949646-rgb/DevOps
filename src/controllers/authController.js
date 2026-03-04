import { registrerBrukere } from "../models/authModels.js";

//export av data fra login
export async function login(req, res)
 {
const brukernavn = req.body;//body fra frontend

console.log("authController brukernavn: ", brukernavn);
 
const { data: registrerBruker } = await registrerBrukere(brukernavn);

console.log("authController test levering av database", registrerBruker);
}




