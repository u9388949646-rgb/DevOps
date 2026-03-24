async function registrer() //Asynkron funksjon. Denne skal kjøre separat fra alle funksjoner
{
    const regBrukernavn = document.getElementById("regBrukernavn").value;
    const regPassord = document.getElementById("regPassord").value;

    const regStatusMsg = document.getElementById("regStatus");

    //Husk loggføring på alt dere gjør
    console.log("Dette er brukernavnet som er skrevet inn: ", regBrukernavn);
    console.log("Dette er  passord som er skrevet inn: ", regPassord);

    if (!regBrukernavn || !regPassord) {
        console.log("Mangler brukernavn eller passord");
    }

    try //Try eller Prøv er at den skal prøve å kjøre en kode snutt. Den må ha en catch hvis den ikke virker
    {
        const authReq = await fetch("http://localhost:3000/api/auth/registrer", //Await og fetch. Await betyr at den skal vente på svar, fetch betyr at den skal hente informasjon fra ett annen kode (Backend i vårt tilfelle)
            {
                method: "POST", //Metode er POST. POST betyr at vi sender data fra en kode til en annen.
                headers: //Denne definerer hva slags type innehold som skal sendes
                {
                    "Content-Type": "application/json" //I dette tilfelle er det en JSON fil
                },
                credentials: "include", //At JSON skal inkludere noe
                body: JSON.stringify({ regBrukernavn, regPassord }) //Body eller innhold av JSON. Vi stringifyer eller gjør om til en tekst og legger ved innholdet som skal brukes
            });

        const authRes = await authReq.json(); //Returnerer svaret fra fetch. Vi setter en ny await som venter på respons
        console.log(authRes);

        if (authRes.success === true)
             {
            regStatusMsg.textContent = "Bruker registrert";
            regStatusMsg.style.color = "green";
        }
        else
             {
            regStatusMsg.textContent = "Bruker ikke registrert";
            regStatusMsg.style.color = "red";
        }

    }
    catch (error) //Catch for try. Hvis try returnerer med en feil så skal denne kjøre
    {
        console.log("Try virket ikke");
    }
}


async function authenticate() //Asynkron funksjon. Denne skal kjøre separat fra alle funksjoner
{
    const loggBrukernavn = document.getElementById("brukernavn").value;
    const loggPassord = document.getElementById("passord").value;

    const loggStatusMsg = document.getElementById("status");

    //Husk loggføring på alt dere gjør
    console.log("Dette er brukernavnet som er skrevet inn: ", loggBrukernavn);
    console.log("Dette er  passord som er skrevet inn: ", loggPassord);

    if (!brukernavn || !passord) {
        console.log("Mangler brukernavn eller passord");
    }

    try //Try eller Prøv er at den skal prøve å kjøre en kode snutt. Den må ha en catch hvis den ikke virker
    {
        const loggReq = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST", //Metode er POST. POST betyr at vi sender data fra en kode til en annen.
                headers: //Denne definerer hva slags type innehold som skal sendes
                {
                    "Content-Type": "application/json" //I dette tilfelle er det en JSON fil
                },
                credentials: "include", //At JSON skal inkludere noe
                body: JSON.stringify({ loggBrukernavn, loggPassord }) //Body eller innhold av JSON. Vi stringifyer eller gjør om til en tekst og legger ved innholdet som skal brukes
            });

        const loggRes = await loggReq.json(); //Returnerer svaret fra fetch. Vi setter en ny await som venter på respons
        console.log(loggRes);

        if (loggRes.success === true)
             {
                window.location.href = "start";
            loggStatusMsg.textContent = "Inlogging vellyket";
            loggStatusMsg.style.color = "green";
        }
        else
             {
            loggStatusMsg.textContent = "Feil brukernavn eller passord";
            loggStatusMsg.style.color = "red";
        }

    }
    catch (error) //Catch for try. Hvis try returnerer med en feil så skal denne kjøre
    {
        console.log("Try virket ikke");
    }
}

