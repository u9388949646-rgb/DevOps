import { registrerBrukere, loggInnBrukere  } from "../models/authModels.js";


//export av data fra login
export async function registrer(req, res) {
    const { regBrukernavn, regPassord } = req.body;//body fra frontend

    console.log("authController brukernavn: ", regBrukernavn);
    console.log("authController passord: ", regPassord);


    const { data: registrerBruker } = await registrerBrukere(regBrukernavn, regPassord);

    console.log("authController test levering av database", registrerBruker);

    if (registrerBruker) {
        console.log("authController registrer: Bruker registrert");
        return res.json({ success: true });
    }
    else {
        console.log("authController registrer: Bruker ikke registrert");
        return res.json({ success: false });
    }
}

export async function login(req, res) {
    const { loggBrukernavn, loggPassord } = req.body;//body fra frontend

    console.log("authController loggBrukernavn: ", loggBrukernavn);
    console.log("authController loggPassord: ", loggPassord);
    

    const { data: loggBrukere } = await loggInnBrukere(loggBrukernavn, loggPassord);

    console.log("authController loggBrukere info fra database", loggBrukere);

    if (loggBrukere) {
        console.log("authController bruker logget inn");
        return res.json({ success: true });
    }
    else {
        console.log("authController bruker logget ikke inn");
        return res.json({ success: false });
    }
}



