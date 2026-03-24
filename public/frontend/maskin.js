async function registrerMaskin() {
     const regMaskinNavn = document.getElementById("regMaskinNavn").value;
     const regSerienummer = document.getElementById("regSerienummer").value;

     const regMaskinStatus = document.getElementById("regMaskinStatus");

     console.log ("Dette er maskinnavn", regMaskinNavn);
     console.log ("Dette er serienummer", regSerienummer);

 if (!regMaskinNavn || !regSerienummer) {
        regMaskinStatus.textContent = "Fyll ut alle feltene";
        return;
    }

    try {
        const res = await fetch("/api/maskiner", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Maskinnavn: regMaskinNavn,
                Serienummer: regSerienummer
            })
        });

        const data = await res.json();

        if (data.success) {
            regMaskinStatus.textContent = "Maskin registrert";
            document.getElementById("regMaskinNavn").value = "";
            document.getElementById("regSerienummer").value = "";
            hentMaskiner();
        } else {
            regMaskinStatus.textContent = data.message;
        }
    } catch (error) {
        regMaskinStatus.textContent = "Noe gikk galt";
        console.log(error);
    }
}

async function hentMaskiner() {
    try {
        const res = await fetch("/api/maskiner");
        const data = await res.json();

        const maskinListe = document.getElementById("maskiner");
        maskinListe.innerHTML = "";

        data.forEach((maskin) => {
            const li = document.createElement("li");
            li.textContent = `MaskinID: ${maskin.MaskinID} | Maskinnavn: ${maskin.Maskinnavn} | Serienummer: ${maskin.Serienummer}`;
            maskinListe.appendChild(li);
        });
    } catch (error) {
        console.log("Feil ved henting av maskiner:", error);
    }
}

window.onload = hentMaskiner;